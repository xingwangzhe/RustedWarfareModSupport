import * as vscode from 'vscode';
import { getSectionProperties } from './dataProcessor';
import * as fs from 'fs';
import * as path from 'path';

// 创建装饰器类型映射
interface TypeColorMap {
    [key: string]: string;
}

// 从type.json加载类型颜色映射
function loadTypeColors(): TypeColorMap {
    try {
        const typePath = path.join(__dirname, '..', 'data', 'type.json');
        const typeData = JSON.parse(fs.readFileSync(typePath, 'utf8'));
        const colorMap: TypeColorMap = {};
        
        for (const type of typeData) {
            colorMap[type.name] = type.color;
        }
        
        return colorMap;
    } catch (error) {
        console.error('Error loading type colors:', error);
        // 返回默认颜色映射
        return {
            'string': '#FF6B6B',
            'int': '#4ECDC4',
            'float': '#45B7D1',
            'bool': '#96CEB4',
            'string(s)': '#FFEAA7',
            'int(s)': '#DDA0DD'
        };
    }
}

// 创建装饰器类型
class DecoratorManager {
    private typeColors: TypeColorMap;
    private decorators: Map<string, vscode.TextEditorDecorationType>;
    
    constructor() {
        this.typeColors = loadTypeColors();
        this.decorators = new Map();
        this.initializeDecorators();
    }
    
    private initializeDecorators() {
        // 为每种类型创建装饰器
        for (const [typeName, color] of Object.entries(this.typeColors)) {
            const decorator = vscode.window.createTextEditorDecorationType({
                color: color,
                overviewRulerColor: color,
                overviewRulerLane: vscode.OverviewRulerLane.Right
            });
            this.decorators.set(typeName, decorator);
        }
    }
    
    public getDecorator(typeName: string): vscode.TextEditorDecorationType | undefined {
        return this.decorators.get(typeName);
    }
    
    public dispose() {
        // 清理所有装饰器
        for (const decorator of this.decorators.values()) {
            decorator.dispose();
        }
        this.decorators.clear();
    }
}

// 创建全局装饰器管理器实例
let decoratorManager: DecoratorManager | null = null;

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
        
        // 初始化装饰器管理器
        if (!decoratorManager) {
            decoratorManager = new DecoratorManager();
        }
        
        // 立即更新当前编辑器的装饰
        if (vscode.window.activeTextEditor) {
            this.updateDecorations(vscode.window.activeTextEditor);
        }
    }
    
    public dispose() {
        this.disposable.dispose();
        if (decoratorManager) {
            decoratorManager.dispose();
            decoratorManager = null;
        }
    }
    
    private updateDecorations(editor: vscode.TextEditor) {
        if (!decoratorManager) return;
        
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
                        // 创建装饰范围（仅装饰属性名称）
                        const range = new vscode.Range(
                            new vscode.Position(i, colonIndex - propertyName.length),
                            new vscode.Position(i, colonIndex)
                        );
                        
                        // 添加到对应的装饰类型中
                        if (!decorations.has(propertyType)) {
                            decorations.set(propertyType, []);
                        }
                        decorations.get(propertyType)?.push(range);
                    }
                }
            }
        }
        
        // 应用装饰
        for (const [typeName, ranges] of decorations.entries()) {
            const decorator = decoratorManager.getDecorator(typeName);
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