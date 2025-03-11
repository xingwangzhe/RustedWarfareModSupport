import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

interface UnitConfig {
    graphics?: {
        image?: string;
        image_turret?: string;
        imageScale?: string;
        turretImageScale?: string;
        total_frames?: string;
    };
    turret_1?: {
        x: string;
        y: string;
    };
}

export class ImagePreview implements vscode.WebviewViewProvider {
    public static readonly viewType = 'unitPreview';
    private _view?: vscode.WebviewView;

    constructor(private readonly _extensionUri: vscode.Uri) {}

    public resolveWebviewView(
        webviewView: vscode.WebviewView,
        _context: vscode.WebviewViewResolveContext,
        _token: vscode.CancellationToken,
    ) {
        this._view = webviewView;
        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: undefined
        };

        webviewView.webview.html = this._getDefaultHtml();
    }

    private _getDefaultHtml(): string {
        return `
            <!DOCTYPE html>
            <html>
                <head>
                    <style>
                        body { 
                            padding: 10px;
                            color: white;
                            text-align: center;
                            background: #333;
                            margin: 0;
                            height: 100vh;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-family: Arial, sans-serif;
                        }
                    </style>
                </head>
                <body>
                    <p>打开一个单位配置文件(.ini)以预览</p>
                </body>
            </html>
        `;
    }

    public async showPreview(iniPath: string) {
        if (!this._view) { return; }
        
        console.log('正在处理ini文件:', iniPath);

        const iniContent = fs.readFileSync(iniPath, 'utf8');
        const config = this.parseIni(iniContent);
        const baseDir = path.dirname(iniPath);

        // 获取图片路径并打印调试信息
        const mainImagePath = config.graphics?.image ? 
            path.join(baseDir, config.graphics.image) : '';
        const turretImagePath = config.graphics?.image_turret ? 
            path.join(baseDir, config.graphics.image_turret) : '';

        console.log('主体图片路径:', mainImagePath);
        console.log('图片是否存在:', fs.existsSync(mainImagePath));
        const mainImageUri = mainImagePath ? 
            this._view.webview.asWebviewUri(vscode.Uri.file(mainImagePath)) : '';
        const turretImageUri = turretImagePath ? 
            this._view.webview.asWebviewUri(vscode.Uri.file(turretImagePath)) : '';

        console.log('Main image URI:', mainImageUri.toString());
        console.log('Turret image URI:', turretImageUri?.toString());

        const mainScale = this.parseNumberValue(config.graphics?.imageScale, 1);
        const turretScale = this.parseNumberValue(config.graphics?.turretImageScale, 1);
        const turretX = this.parseNumberValue(config.turret_1?.x, 0);
        const turretY = this.parseNumberValue(config.turret_1?.y, 0);
        const totalFrames = this.parseNumberValue(config.graphics?.total_frames, 1);
        this._view.webview.html = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { 
                        margin: 0;
                        background: #444;
                        color: #fff;
                        font-family: Arial, sans-serif;
                        height: 100vh;
                        display: flex;
                        flex-direction: column;
                        overflow: hidden;
                    }
                    .preview-area {
                        display: flex;
                        flex: 1;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        position: relative;
                        background: #333;
                    }
                    .unit-container {
                        position: relative;
                        width: 200px;
                        height: 200px;
                    }
                    .unit-base {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform-origin: center;
                        transform: translate(-50%, -50%) scale(${mainScale});
                    }
                    .unit-turret {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform-origin: center;
                        transform: translate(calc(-50% + ${turretX}px), calc(-50% + ${turretY}px)) scale(${turretScale});
                    }
                    .test-image {
                        position: absolute;
                        top: 10px;
                        right: 10px;
                        width: 64px;
                        height: 64px;
                    }
                    .info-panel {
                        background: #222;
                        padding: 10px;
                        margin-bottom: 10px;
                    }
                    table {
                        border-collapse: collapse;
                        width: 100%;
                    }
                    td {
                        padding: 5px;
                        border-bottom: 1px solid #555;
                    }
                </style>
            </head>
            <body>
                <div class="preview-area">
                    <div class="unit-container">
                        
                        <img 
                            class="unit-base" 
                            src="${mainImageUri}" 
                            onload="console.log('主体图片加载完成')" 
                            onerror="console.error('主体图片加载失败'); this.style.background='red'; this.alt='加载失败'; this.style.width='100px'; this.style.height='100px';"
                            alt="主体图片"
                        />
                        
                        ${turretImageUri ? `
                        <img 
                            class="unit-turret" 
                            src="${turretImageUri}" 
                            onload="console.log('炮塔图片加载完成')" 
                            onerror="console.error('炮塔图片加载失败'); this.style.background='blue'; this.alt='加载失败'; this.style.width='50px'; this.style.height='50px';"
                            alt="炮塔图片"
                        />` : ''}
                    </div>
                </div>

                <script>
                    const totalFrames = ${totalFrames};
                        if (totalFrames > 1) {
                                const frameWidth = this.naturalWidth / totalFrames;
                                this.style.width = frameWidth + 'px';
                                console.log('Frame width:', frameWidth);
                        }
                </script>
            </body>
            </html>
        `;
    }

    private parseIni(content: string): UnitConfig {
        const config: UnitConfig = {};
        let currentSection = '';
        
        const lines = content.split('\n');
        for (const line of lines) {
            let trimmedLine = line.trim();
            
            if (!trimmedLine || trimmedLine.startsWith(';') || trimmedLine.startsWith('#')) {
                continue;
            }
            
            const commentIndex = trimmedLine.indexOf('#');
            if (commentIndex !== -1) {
                trimmedLine = trimmedLine.substring(0, commentIndex).trim();
            }
            
            const sectionMatch = trimmedLine.match(/^\[(.*?)\]$/);
            if (sectionMatch) {
                currentSection = sectionMatch[1].toLowerCase();
                config[currentSection] = {};
                continue;
            }
            
            const keyValueMatch = trimmedLine.match(/^(.*?):\s*(.*)$/);
            if (keyValueMatch && currentSection) {
                const key = keyValueMatch[1].trim();
                const value = keyValueMatch[2].trim();
                config[currentSection] = config[currentSection] || {};
                config[currentSection][key] = value;
            }
        }
        
        return config;
    }

    private parseNumberValue(value: string | undefined, defaultValue: number): number {
        if (!value) { return defaultValue; }
        const num = parseFloat(value);
        return isNaN(num) ? defaultValue : num;
    }
}
