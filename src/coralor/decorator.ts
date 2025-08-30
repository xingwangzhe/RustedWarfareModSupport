import * as vscode from 'vscode';
import { getSectionProperties } from '../dataProcessor';
import { getColorizerManager, disposeColorizerManager } from './colorizer';
import { SectionParser } from './sectionParser';

// 节属性装饰器类
export class SectionPropertyDecorator {
    private disposable: vscode.Disposable;
    private sectionParser: SectionParser;

    constructor() {
        this.sectionParser = new SectionParser();

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

        // 订阅主题更改事件
        disposables.push(
            vscode.window.onDidChangeActiveColorTheme(() => {
                // 主题改变时，更新所有可见编辑器的装饰
                vscode.window.visibleTextEditors.forEach(editor => {
                    if (editor.document.languageId === 'ini') {
                        this.updateDecorations(editor);
                    }
                });
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
        const sections = this.sectionParser.parseSections(document);

            // 为每个节获取属性并应用装饰
            for (const section of sections) {
                const properties = getSectionProperties(section.name);
                if (properties.length === 0) {
                    continue;
                }            // 创建属性名称到类型的映射
            const propertyTypeMap = new Map<string, string>();
            for (const prop of properties) {
                propertyTypeMap.set(prop.name, prop.type);
            }

            // 遍历节内的行
            for (let i = section.startLine + 1; i < section.endLine; i++) {
                if (i >= document.lineCount) {
                    break;
                }

                const line = document.lineAt(i);
                const text = line.text;

                // 检查是否是属性行（包含冒号）
                const colonIndex = text.indexOf(':');
                if (colonIndex > 0) {
                    // 提取属性名称
                    const propertyName = text.substring(0, colonIndex).trim();
                    let lookupName = propertyName;

                    // 检查是否为语言键
                    const languageKeyInfo = this.sectionParser.parseLanguageKey(propertyName);
                    if (languageKeyInfo) {
                        lookupName = languageKeyInfo.baseName;
                    }

                    const propertyType = propertyTypeMap.get(lookupName);

                    if (propertyType) {
                        // 创建装饰范围（装饰属性名称）
                        const nameRange = new vscode.Range(
                            new vscode.Position(i, colonIndex - propertyName.length),
                            new vscode.Position(i, colonIndex)
                        );

                        // 为语言键使用特殊的装饰类型
                        const decorationType = languageKeyInfo ? 'language' : propertyType;

                        // 添加到对应的装饰类型中（名称部分仍按属性类型或 language 处理）
                        if (!decorations.has(decorationType)) {
                            decorations.set(decorationType, []);
                        }
                        decorations.get(decorationType)?.push(nameRange);

                        // 创建装饰范围（装饰属性值）
                        const valueStart = colonIndex + 1;
                        const lineEnd = line.text.length;
                        if (valueStart < lineEnd) { // 确保有值
                            const valueRange = new vscode.Range(
                                new vscode.Position(i, valueStart),
                                new vscode.Position(i, lineEnd)
                            );

                            // 如果是 image 类型，则把值用单独的装饰类型（propertyType + '_value'）来装饰，以展示行尾图标；
                            // 否则和名称使用相同的装饰类型
                            if (propertyType.toLowerCase().includes('image')) {
                                const valueDecorationType = `${propertyType}_value`;
                                if (!decorations.has(valueDecorationType)) {
                                    decorations.set(valueDecorationType, []);
                                }
                                decorations.get(valueDecorationType)?.push(valueRange);
                            } else {
                                if (!decorations.has(decorationType)) {
                                    decorations.set(decorationType, []);
                                }
                                decorations.get(decorationType)?.push(valueRange);
                            }
                        }
                    }
                }
            }
        }

        // 清除之前的装饰
        for (const [typeName] of decorations.entries()) {
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
}