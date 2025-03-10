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

        // 直接嵌入一个测试图像用于验证渲染功能
        const testImageBase64 = 'data:image/png;base64,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';

        // 转换为webview URI
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
                    .debug-info {
                        position: absolute;
                        top: 0;
                        left: 0;
                        background: rgba(0,0,0,0.7);
                        padding: 10px;
                        font-size: 12px;
                        font-family: monospace;
                        max-width: 500px;
                        max-height: 300px;
                        overflow: auto;
                        z-index: 100;
                    }
                    .unit-container {
                        position: relative;
                        width: 200px;
                        height: 200px;
                        border: 2px solid red;
                    }
                    .unit-base {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform-origin: center;
                        transform: translate(-50%, -50%) scale(${mainScale});
                        border: 1px solid yellow;
                    }
                    .unit-turret {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform-origin: center;
                        transform: translate(calc(-50% + ${turretX}px), calc(-50% + ${turretY}px)) scale(${turretScale});
                        border: 1px solid cyan;
                    }
                    .test-image {
                        position: absolute;
                        top: 10px;
                        right: 10px;
                        width: 64px;
                        height: 64px;
                        border: 2px solid green;
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
                    <div class="debug-info">
                        <h3>调试信息</h3>
                        <p>INI文件: ${iniPath}</p>
                        <p>主体图片: ${mainImagePath}</p>
                        <p>炮塔图片: ${turretImagePath}</p>
                        <p>图片存在: ${fs.existsSync(mainImagePath)}</p>
                        <p>URI: ${mainImageUri}</p>
                    </div>
                    
                    <div class="unit-container">
                        <img src="${testImageBase64}" class="test-image" alt="测试图片" />
                        
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
                    
                    <div class="info-panel">
                        <table>
                            <tr><td>主体缩放:</td><td>${mainScale}</td></tr>
                            <tr><td>炮塔缩放:</td><td>${turretScale}</td></tr>
                            <tr><td>炮塔位置:</td><td>x: ${turretX}, y: ${turretY}</td></tr>
                            <tr><td>帧数:</td><td>${totalFrames}</td></tr>
                        </table>
                    </div>
                </div>

                <script>
                    // 测试渲染能力 - 创建一个红色矩形
                    const canvas = document.createElement('canvas');
                    canvas.width = 50;
                    canvas.height = 50;
                    document.body.appendChild(canvas);
                    const ctx = canvas.getContext('2d');
                    ctx.fillStyle = 'red';
                    ctx.fillRect(0, 0, 50, 50);
                    
                    // 输出调试信息
                    console.log('页面加载完成');
                    console.log('基本图片路径:', '${mainImagePath}');
                    console.log('基本图片URI:', '${mainImageUri}');
                    
                    // 尝试加载主体图像
                    const baseImg = document.querySelector('.unit-base');
                    if (baseImg) {
                        baseImg.onerror = function() {
                            console.error('主体图片加载失败:', this.src);
                            this.style.background = 'red';
                            this.style.width = '100px';
                            this.style.height = '100px';
                            this.alt = '加载失败';
                        };
                        baseImg.onload = function() {
                            console.log('主体图片加载成功:', this.src);
                            console.log('尺寸:', this.naturalWidth, 'x', this.naturalHeight);
                            
                            // 处理多帧图像
                            const totalFrames = ${totalFrames};
                            if (totalFrames > 1) {
                                const frameWidth = this.naturalWidth / totalFrames;
                                this.style.width = frameWidth + 'px';
                                console.log('Frame width:', frameWidth);
                            }
                        };
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
