import * as vscode from 'vscode';
import { getSectionProperties } from './dataProcessor';
import { getColorizerManager, disposeColorizerManager } from './colorizer';

// 节属性装饰器类
export class SectionPropertyDecorator {
    private disposable: vscode.Disposable;
    
    constructor() {
        // 订阅文本编辑器更改事件
        const disposables: vscode.Disposable[] = [];
        
        // 订阅活动文本编辑器更改事件
        disposables.push(
            vscode.window.onDidChangeActiveTextEditor(editor => {
                if (editor) {
                    this.updateDecorations(editor);
                }
            })
        );
        
        // 订阅文档更改事件
        disposables.push(
            vscode.workspace.onDidChangeTextDocument(event => {
                const editor = vscode.window.activeTextEditor;
                if (editor && event.document === editor.document) {
                    this.updateDecorations(editor);
                }
            })
        );
        
        // 订阅选择更改事件
        disposables.push(
            vscode.window.onDidChangeTextEditorSelection(event => {
                this.updateDecorations(event.textEditor);
            })
        );
        
        this.disposable = vscode.Disposable.from(...disposables);
        
        // 立即更新当前编辑器的装饰
        if (vscode.window.activeTextEditor) {
            this.updateDecorations(vscode.window.activeTextEditor);
        }
    }
    
    public dispose() {
        this.disposable.dispose();
        disposeColorizerManager();
    }
    
    private updateDecorations(editor: vscode.TextEditor) {
        const colorizerManager = getColorizerManager();
        const document = editor.document;
        if (document.languageId !== 'ini') {
            return;
        }
        
        // 存储每种类型的装饰范围
        const decorations = new Map<string, vscode.Range[]>();
        
        // 获取文档中的所有节
        const sections = this.parseSections(document);
        
        // 为每个节获取属性并应用装饰
        for (const section of sections) {
            const properties = getSectionProperties(section.name);
            if (properties.length === 0) continue;
            
            // 创建属性名称到类型的映射
            const propertyTypeMap = new Map<string, string>();
            for (const prop of properties) {
                propertyTypeMap.set(prop.name, prop.type);
            }
            
            // 遍历节内的行
            for (let i = section.startLine + 1; i < section.endLine; i++) {
                if (i >= document.lineCount) break;
                
                const line = document.lineAt(i);
                const text = line.text;
                
                // 检查是否是属性行（包含冒号）
                const colonIndex = text.indexOf(':');
                if (colonIndex > 0) {
                    // 提取属性名称
                    const propertyName = text.substring(0, colonIndex).trim();
                    const propertyType = propertyTypeMap.get(propertyName);
                    
                    if (propertyType) {
                        // 创建装饰范围（装饰属性名称）
                        const nameRange = new vscode.Range(
                            new vscode.Position(i, colonIndex - propertyName.length),
                            new vscode.Position(i, colonIndex)
                        );
                        
                        // 添加到对应的装饰类型中
                        if (!decorations.has(propertyType)) {
                            decorations.set(propertyType, []);
                        }
                        decorations.get(propertyType)?.push(nameRange);
                        
                        // 创建装饰范围（装饰属性值）
                        const valueStart = colonIndex + 1;
                        const lineEnd = line.text.length;
                        if (valueStart < lineEnd) { // 确保有值
                            const valueRange = new vscode.Range(
                                new vscode.Position(i, valueStart),
                                new vscode.Position(i, lineEnd)
                            );
                            
                            // 为属性值使用相同类型的颜色装饰
                            if (!decorations.has(propertyType)) {
                                decorations.set(propertyType, []);
                            }
                            decorations.get(propertyType)?.push(valueRange);
                        }
                    }
                }
            }
        }
        
        // 清除之前的装饰
        for (const [typeName, ] of decorations.entries()) {
            const decorator = colorizerManager.getDecorator(typeName);
            if (decorator) {
                editor.setDecorations(decorator, []);
            }
        }
        
        // 应用装饰
        for (const [typeName, ranges] of decorations.entries()) {
            const decorator = colorizerManager.getDecorator(typeName);
            if (decorator) {
                editor.setDecorations(decorator, ranges);
            }
        }
    }
    
    private parseSections(document: vscode.TextDocument): Array<{name: string, startLine: number, endLine: number}> {
        const sections: Array<{name: string, startLine: number, endLine: number}> = [];
        let currentSection: {name: string, startLine: number} | null = null;
        
        for (let i = 0; i < document.lineCount; i++) {
            const line = document.lineAt(i);
            const text = line.text.trim();
            
            // 检查是否是节开始
            if (text.startsWith('[') && text.endsWith(']')) {
                // 如果已经有节在进行中，结束它
                if (currentSection) {
                    sections.push({
                        name: currentSection.name,
                        startLine: currentSection.startLine,
                        endLine: i
                    });
                }
                
                // 开始新节
                const sectionName = text.substring(1, text.length - 1);
                currentSection = {
                    name: sectionName,
                    startLine: i
                };
            }
        }
        
        // 结束最后一个节
        if (currentSection) {
            sections.push({
                name: currentSection.name,
                startLine: currentSection.startLine,
                endLine: document.lineCount
            });
        }
        
        return sections;
    }
}