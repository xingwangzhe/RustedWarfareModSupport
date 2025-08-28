import * as vscode from 'vscode';

/**
 * 内存变量定义接口
 */
export interface MemoryVariable {
    name: string;
    type: string;
    section: string;
    line: number;
    document: vscode.TextDocument;
}

/**
 * 内存管理器类
 * 负责管理@memory定义的变量
 */
export class MemoryManager {
    private static instance: MemoryManager;
    private memoryVariables: Map<string, MemoryVariable> = new Map();
    private disposables: vscode.Disposable[] = [];

    private constructor() {
        this.initialize();
    }

    public static getInstance(): MemoryManager {
        if (!MemoryManager.instance) {
            MemoryManager.instance = new MemoryManager();
        }
        return MemoryManager.instance;
    }

    private initialize() {
        // 监听文档变化
        this.disposables.push(
            vscode.workspace.onDidChangeTextDocument(event => {
                if (event.document.languageId === 'ini') {
                    this.updateMemoryVariables(event.document);
                }
            })
        );

        // 监听文档打开
        this.disposables.push(
            vscode.workspace.onDidOpenTextDocument(document => {
                if (document.languageId === 'ini') {
                    this.updateMemoryVariables(document);
                }
            })
        );

        // 监听文档关闭
        this.disposables.push(
            vscode.workspace.onDidCloseTextDocument(document => {
                if (document.languageId === 'ini') {
                    this.removeDocumentVariables(document);
                }
            })
        );

        // 初始化已打开的文档
        vscode.workspace.textDocuments.forEach(document => {
            if (document.languageId === 'ini') {
                this.updateMemoryVariables(document);
            }
        });
    }

    /**
     * 更新文档中的内存变量
     */
    private updateMemoryVariables(document: vscode.TextDocument) {
        // 移除该文档之前的所有变量
        this.removeDocumentVariables(document);

        const text = document.getText();
        const lines = text.split('\n');

        let currentSection = '';
        let inCoreSection = false;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();

            // 检查节定义
            if (line.startsWith('[') && line.endsWith(']')) {
                currentSection = line.substring(1, line.length - 1);
                inCoreSection = currentSection === 'core';
                continue;
            }

            // 只在core节中处理@memory
            if (!inCoreSection) {
                continue;
            }

            // 检查@memory定义
            if (line.startsWith('@memory')) {
                const memoryVar = this.parseMemoryDefinition(line, document, i);
                if (memoryVar) {
                    this.memoryVariables.set(memoryVar.name, memoryVar);
                }
            }
        }
    }

    /**
     * 解析@memory定义
     */
    private parseMemoryDefinition(line: string, document: vscode.TextDocument, lineNumber: number): MemoryVariable | null {
        // 匹配 @memory name:type 格式，允许类型包含更多字符（如 unit[]）
        const match = line.match(/^@memory\s+(\w+):\s*([^\s]+)$/);
        if (!match) {
            return null;
        }

        const [, name, type] = match;
        return {
            name,
            type,
            section: 'core',
            line: lineNumber,
            document
        };
    }

    /**
     * 移除文档的所有变量
     */
    private removeDocumentVariables(document: vscode.TextDocument) {
        for (const [name, variable] of this.memoryVariables.entries()) {
            if (variable.document === document) {
                this.memoryVariables.delete(name);
            }
        }
    }

    /**
     * 获取所有内存变量
     */
    public getAllMemoryVariables(): MemoryVariable[] {
        return Array.from(this.memoryVariables.values());
    }

    /**
     * 根据名称获取内存变量
     */
    public getMemoryVariable(name: string): MemoryVariable | undefined {
        return this.memoryVariables.get(name);
    }

    /**
     * 获取内存变量名称列表（用于补全）
     */
    public getMemoryVariableNames(): string[] {
        return Array.from(this.memoryVariables.keys());
    }

    /**
     * 获取支持的内存变量类型
     */
    public getSupportedTypes(): string[] {
        return [
            'int', 'float', 'string', 'bool',
            'number', 'text', 'boolean', 'logic'
        ];
    }

    /**
     * 销毁管理器
     */
    public dispose() {
        this.disposables.forEach(disposable => disposable.dispose());
        this.memoryVariables.clear();
    }
}

// 导出单例实例
export const memoryManager = MemoryManager.getInstance();
