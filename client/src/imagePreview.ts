import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

// 修改接口支持多炮塔，使用索引签名
interface UnitConfig {
    graphics?: {
        image?: string;
        image_turret?: string;
        imageScale?:number;
        turretImageScale?: number;
        total_frames?: number;
        // 添加对多炮塔的支持
        image_turret_2?: string;
        turretImageScale_2?: number;
        image_turret_3?: string;
        turretImageScale_3?: number;
        // 可以支持更多炮塔...
    };
    // 使用索引签名支持任意数量的炮塔配置
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

// 修改炮塔信息接口，删除多余的 displayName
interface TurretInfo {
    id: string;           // 炮塔的ID，例如 "1" 或 "战神"
    imageUri: vscode.Uri | string;
    x: number;
    y: number;
    scale: number;
    originalScale: number | undefined;  // 用于信息显示
}

export class ImagePreview implements vscode.WebviewViewProvider {
    public static readonly viewType = 'unitPreview';
    private _view?: vscode.WebviewView;
    private _currentIniPath = '';
    private _currentZoomLevel = 400; // 保存当前缩放级别
    private _fileWatcher: vscode.FileSystemWatcher | undefined;

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

        // 设置消息监听器以更新当前缩放级别
        webviewView.webview.onDidReceiveMessage(message => {
            if (message.command === 'zoomChanged') {
                console.log(`窗口缩放级别更改为: ${message.zoomLevel}%`);
                this._currentZoomLevel = message.zoomLevel;
            }
        });

        // 清理之前的文件监听器
        if (this._fileWatcher) {
            this._fileWatcher.dispose();
        }
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
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            font-family: Arial, sans-serif;
                        }
                        .zoom-controls {
                            position: fixed;
                            bottom: 10px;
                            left: 0;
                            right: 0;
                            display: flex;
                            justify-content: center;
                            gap: 10px;
                            padding: 5px;
                            background-color: rgba(0, 0, 0, 0.5);
                            border-radius: 8px;
                            margin: 0 10px;
                        }
                        button {
                            background-color: #4CAF50;
                            border: none;
                            color: white;
                            padding: 5px 10px;
                            text-align: center;
                            text-decoration: none;
                            display: inline-block;
                            font-size: 12px;
                            margin: 2px;
                            cursor: pointer;
                            border-radius: 4px;
                        }
                        .zoom-value {
                            color: white;
                            margin: 0 10px;
                            align-self: center;
                        }
                    </style>
                </head>
                <body>
                    <p>打开一个单位配置文件(.ini)以预览</p>
                    <div class="zoom-controls">
                        <button id="zoom-out">-</button>
                        <span class="zoom-value" id="zoom-level">400%</span>
                        <button id="zoom-in">+</button>
                        <button id="zoom-reset">重置</button>
                    </div>
                    <script>
                        const vscode = acquireVsCodeApi();
                        let zoomLevel = 400;
                        
                        document.getElementById('zoom-in').addEventListener('click', () => {
                            zoomLevel += 10;
                            updateZoom();
                        });
                        
                        document.getElementById('zoom-out').addEventListener('click', () => {
                            if (zoomLevel > 20) {
                                zoomLevel -= 10;
                                updateZoom();
                            }
                        });
                        
                        document.getElementById('zoom-reset').addEventListener('click', () => {
                            zoomLevel = 400;
                            updateZoom();
                        });
                        
                        function updateZoom() {
                            document.body.style.zoom = zoomLevel + '%';
                            document.getElementById('zoom-level').innerText = zoomLevel + '%';
                            vscode.postMessage({ command: 'zoomChanged', zoomLevel });
                        }
                        
                        // 添加鼠标滚轮缩放
                        document.addEventListener('wheel', (e) => {
                            if (e.ctrlKey) {
                                e.preventDefault();
                                if (e.deltaY < 0) {
                                    zoomLevel = Math.min(zoomLevel + 5, 1000);
                                } else {
                                    zoomLevel = Math.max(zoomLevel - 5, 20);
                                }
                                updateZoom();
                            }
                        }, { passive: false });
                        
                        // 初始自动设置缩放比例
                        window.addEventListener('load', () => {
                            updateZoom();
                        });
                    </script>
                </body>
            </html>
        `;
    }

    public async showPreview(iniPath: string) {
        if (!this._view) { return; }
        
        console.log('正在处理ini文件:', iniPath);
        this._currentIniPath = iniPath;

        // 设置文件监听器
        this.setupFileWatcher(iniPath);

        const iniContent = fs.readFileSync(iniPath, 'utf8');
        const config = this.parseIni(iniContent);
        const baseDir = path.dirname(iniPath);

        // 获取图片路径并打印调试信息
        const mainImagePath = config.graphics?.image ? 
            path.join(baseDir, config.graphics.image) : '';
        
        console.log('主体图片路径:', mainImagePath);
        console.log('图片是否存在:', fs.existsSync(mainImagePath));
        const mainImageUri = mainImagePath ? 
            this._view.webview.asWebviewUri(vscode.Uri.file(mainImagePath)) : '';

        // 解析并记录缩放参数
        const mainScale = config.graphics?.imageScale || 1;
        console.log('主体图片缩放比例:', mainScale, '(来自配置文件:', config.graphics?.imageScale, ')');
        
        // 收集所有炮塔信息
        const turrets: TurretInfo[] = [];
        
        // 查找所有炮塔节
        const turretSections = Object.keys(config).filter(key => key.startsWith('turret_'));
        console.log('检测到的炮塔节:', turretSections);
        
        // 处理所有炮塔
        for (const sectionKey of turretSections) {
            try {
                // 获取炮塔ID，移除"turret_"前缀
                const turretId = sectionKey.substring(7); // 'turret_'.length = 7
                
                console.log(`处理炮塔: ${turretId}`);
                
                // 获取炮塔图像
                let turretImagePath = '';
                let turretScale = 1;
                
                // 先尝试专用图像 (例如 image_turret_战神)
                const specificImageKey = `image_turret_${turretId}`;
                if (config.graphics && config.graphics[specificImageKey]) {
                    turretImagePath = path.join(baseDir, config.graphics[specificImageKey]);
                    const specificScaleKey = `turretImageScale_${turretId}`;
                    const originalScale = config.graphics[specificScaleKey];
                    turretScale = originalScale ? originalScale * 0.31 : 1;
                    console.log(`使用专用图像: ${specificImageKey}, 缩放: ${turretScale}`);
                } 
                // 否则使用默认炮塔图像
                else if (config.graphics?.image_turret) {
                    turretImagePath = path.join(baseDir, config.graphics.image_turret);
                    turretScale = config.graphics.turretImageScale ? config.graphics.turretImageScale * 0.31 : 1;
                    console.log(`使用默认炮塔图像, 缩放: ${turretScale}`);
                }
                
                // 确认图像存在
                if (fs.existsSync(turretImagePath)) {
                    const turretUri = this._view.webview.asWebviewUri(vscode.Uri.file(turretImagePath));
                    
                    // 获取炮塔位置
                    // 注意：在铁锈战争中，y < 0 是视窗向下的，但在HTML中y > 0是向下的
                    // 所以我们需要反转Y值来正确显示
                    const turretX = this.parseNumberValue(config[sectionKey]?.x, 0);
                    const turretY = this.parseNumberValue(config[sectionKey]?.y, 0);
                    
                    // 添加炮塔信息
                    turrets.push({
                        id: turretId,
                        imageUri: turretUri,
                        x: turretX,
                        y: turretY, // 保存原始Y值用于显示信息
                        scale: turretScale,
                        originalScale: config.graphics?.turretImageScale
                    });
                    
                    console.log(`添加炮塔 ${turretId}: x=${turretX}, y=${turretY} (显示位置y=${-turretY}), scale=${turretScale}`);
                } else {
                    console.warn(`炮塔 ${turretId} 的图像不存在: ${turretImagePath}`);
                }
            } catch (error) {
                console.error(`处理炮塔 ${sectionKey} 时发生错误:`, error);
            }
        }
        
        const totalFrames = config.graphics?.total_frames || 1;
        
        // 生成炮塔的HTML
        const turretsHtml = turrets.map((turret) => {
            return `
            <img 
                class="unit-turret turret-${turret.id}" 
                src="${turret.imageUri}" 
                onload="console.log('炮塔 ${turret.id} 图片加载完成')" 
                onerror="console.error('炮塔 ${turret.id} 图片加载失败'); this.style.background='blue'; this.alt='加载失败'; this.style.width='50px'; this.style.height='50px';"
                alt="炮塔 ${turret.id} 图片"
                data-id="${turret.id}"
                data-x="${turret.x}"
                data-y="${turret.y}"
                data-scale="${turret.scale}"
                style="transform: translate(calc(-50% + ${turret.x}px), calc(-50% + ${-turret.y}px)) scale(${turret.scale});"
            />`;
        }).join('\n');
        
        // 准备炮塔的JavaScript数据
        const turretsData = JSON.stringify(turrets.map(turret => {
            return {
                id: turret.id,
                x: turret.x,
                y: turret.y,
                scale: turret.scale,
                originalScale: turret.originalScale
            };
        }));

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
                        overflow: hidden;
                        cursor: move;
                    }
                    .unit-container {
                        position: relative;
                        width: 200px;
                        height: 200px;
                        transform-origin: center;
                        transform: translate(0, 0) scale(1);
                        transition: transform 0.1s ease-out;
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
                    .zoom-controls {
                        background-color: rgba(0, 0, 0, 0.6);
                        padding: 8px;
                        border-radius: 8px;
                        display: flex;
                        justify-content: center;
                        gap: 10px;
                        position: fixed;
                        bottom: 10px;
                        left: 50%;
                        transform: translateX(-50%);
                        z-index: 100;
                    }
                    button {
                        background-color: #4CAF50;
                        border: none;
                        color: white;
                        padding: 5px 10px;
                        text-align: center;
                        text-decoration: none;
                        display: inline-block;
                        font-size: 12px;
                        margin: 2px;
                        cursor: pointer;
                        border-radius: 4px;
                    }
                    .zoom-value {
                        color: white;
                        margin: 0 10px;
                        align-self: center;
                    }
                    .mini-map {
                        position: fixed;
                        top: 10px;
                        right: 10px;
                        width: 100px;
                        height: 60px;
                        background-color: rgba(0, 0, 0, 0.4);
                        border-radius: 5px;
                        border: 1px solid #666;
                        display: none;
                    }
                    .mini-map-viewport {
                        position: absolute;
                        border: 1px solid #4CAF50;
                        background-color: rgba(76, 175, 80, 0.2);
                    }
                </style>
            </head>
            <body>
                <div class="preview-area" id="preview-area">
                    <div class="unit-container" id="unit-container">
                        
                        <img 
                            class="unit-base" 
                            src="${mainImageUri}" 
                            onload="console.log('主体图片加载完成')" 
                            onerror="console.error('主体图片加载失败'); this.style.background='red'; this.alt='加载失败'; this.style.width='100px'; this.style.height='100px';"
                            alt="主体图片"
                        />
                        
                        ${turretsHtml}
                    </div>
                </div>

                <div class="mini-map" id="mini-map">
                    <div class="mini-map-viewport" id="mini-map-viewport"></div>
                </div>

                <div class="zoom-controls">
                    <button id="zoom-out">-</button>
                    <span class="zoom-value" id="zoom-level">100%</span>
                    <button id="zoom-in">+</button>
                    <button id="zoom-reset">重置</button>
                    <button id="zoom-fit">适应</button>
                </div>

                <script>
                    const vscode = acquireVsCodeApi();
                    let zoomLevel = ${this._currentZoomLevel}; // 使用保存的缩放级别
                    const totalFrames = ${totalFrames};
                    const mainImageScale = ${mainScale};
                    const turrets = ${turretsData};
                    
                    // 处理图片帧
                    if (totalFrames > 1) {
                        const baseImg = document.querySelector('.unit-base');
                        if (baseImg) {
                            baseImg.onload = function() {
                                const frameWidth = this.naturalWidth / totalFrames;
                                this.style.width = frameWidth + 'px';
                                console.log('Frame width:', frameWidth);
                                
                                // 确保应用正确的缩放比例
                                this.style.transform = \`translate(-50%, -50%) scale(\${mainImageScale})\`;
                                console.log('应用主体图片缩放:', mainImageScale);
                            }
                        }
                    }
                    
                    // 确保炮塔图片加载完后应用正确的缩放比例
                    document.querySelectorAll('.unit-turret').forEach((turretImg) => {
                        const turretId = turretImg.getAttribute('data-id');
                        const turret = turrets.find(t => t.id === turretId);
                        
                        if (turret) {
                            turretImg.onload = function() {
                                console.log(\`应用炮塔 \${turret.id} 图片缩放: \${turret.scale}\`);
                                // 注意：我们在这里反转Y轴
                                this.style.transform = \`translate(calc(-50% + \${turret.x}px), calc(-50% + \${-turret.y*0.3}px)) scale(\${turret.scale})\`;
                            }
                        }
                    });
                    
                    // 拖拽变量
                    let isDragging = false;
                    let startX = 0;
                    let startY = 0;
                    let offsetX = 0;
                    let offsetY = 0;
                    const unitContainer = document.getElementById('unit-container');
                    const previewArea = document.getElementById('preview-area');
                    
                    // 初始化拖拽
                    function initDragAndDrop() {
                        previewArea.addEventListener('mousedown', startDrag);
                        document.addEventListener('mousemove', drag);
                        document.addEventListener('mouseup', endDrag);
                        
                        // 触摸支持
                        previewArea.addEventListener('touchstart', handleTouchStart);
                        document.addEventListener('touchmove', handleTouchMove);
                        document.addEventListener('touchend', handleTouchEnd);
                    }
                    
                    function startDrag(e) {
                        if (e.target === previewArea || e.target.classList.contains('unit-container') || 
                            e.target.classList.contains('unit-base') || e.target.classList.contains('unit-turret')) {
                            isDragging = true;
                            startX = e.clientX;
                            startY = e.clientY;
                            e.preventDefault();
                            
                            // 获取当前位移
                            const transform = getComputedTransform();
                            offsetX = transform.translateX;
                            offsetY = transform.translateY;
                            
                            // 改变鼠标样式
                            previewArea.style.cursor = 'grabbing';
                        }
                    }
                    
                    function drag(e) {
                        if (!isDragging) return;
                        
                        const dx = e.clientX - startX;
                        const dy = e.clientY - startY;
                        
                        // 更新元素位置
                        const newX = offsetX + dx;
                        const newY = offsetY + dy;
                        updateTransform(newX, newY);
                        
                        e.preventDefault();
                    }
                    
                    function endDrag() {
                        isDragging = false;
                        previewArea.style.cursor = 'move';
                    }
                    
                    // 触摸事件处理
                    function handleTouchStart(e) {
                        if (e.touches.length === 1) {
                            const touch = e.touches[0];
                            startX = touch.clientX;
                            startY = touch.clientY;
                            isDragging = true;
                            
                            // 获取当前位移
                            const transform = getComputedTransform();
                            offsetX = transform.translateX;
                            offsetY = transform.translateY;
                        }
                    }
                    
                    function handleTouchMove(e) {
                        if (!isDragging || e.touches.length !== 1) return;
                        
                        const touch = e.touches[0];
                        const dx = touch.clientX - startX;
                        const dy = touch.clientY - startY;
                        
                        // 更新元素位置
                        const newX = offsetX + dx;
                        const newY = offsetY + dy;
                        updateTransform(newX, newY);
                        
                        e.preventDefault();
                    }
                    
                    function handleTouchEnd() {
                        isDragging = false;
                    }
                    
                    // 获取当前的变换值
                    function getComputedTransform() {
                        const style = window.getComputedStyle(unitContainer);
                        const matrix = new DOMMatrix(style.transform);
                        return {
                            translateX: matrix.m41,
                            translateY: matrix.m42,
                            scale: zoomLevel / 100
                        };
                    }
                    
                    // 更新变换 - 修复的版本
                    function updateTransform(x, y, scale = zoomLevel / 100) {
                        // 更新容器的位置和缩放
                        unitContainer.style.transform = \`translate(\${x}px, \${y}px) scale(\${scale})\`;
                        
                        // 不要在这里重新设置子元素的变换，让CSS处理它们
                        // 子元素的缩放比例通过CSS已经设置好，不应该被JS覆盖
                    }
                    
                    // 显示比例信息
                    function showScaleInfo() {
                        const scaleInfo = document.createElement('div');
                        scaleInfo.id = 'scale-info';
                        scaleInfo.style.position = 'fixed';
                        scaleInfo.style.top = '10px';
                        scaleInfo.style.left = '10px';
                        scaleInfo.style.backgroundColor = 'rgba(0,0,0,0.7)';
                        scaleInfo.style.color = 'white';
                        scaleInfo.style.padding = '5px';
                        scaleInfo.style.borderRadius = '4px';
                        scaleInfo.style.fontSize = '12px';
                        scaleInfo.style.zIndex = '1000';
                        updateScaleInfo();
                        document.body.appendChild(scaleInfo);
                    }
                    
                    function updateScaleInfo() {
                        const scaleInfo = document.getElementById('scale-info');
                        if (scaleInfo) {
                            let html = \`
                                <div>窗口缩放: \${zoomLevel}%</div>
                                <div>主体缩放: \${mainImageScale}</div>
                            \`;
                            
                            // 添加所有炮塔的信息
                            turrets.forEach(turret => {
                                html += \`<div>炮塔 \${turret.id} 缩放: \${turret.originalScale} (应用:\${turret.scale.toFixed(2)})</div>\`;
                                html += \`<div>炮塔 \${turret.id} 位置: X=\${turret.x}, Y=\${turret.y}</div>\`;
                            });
                            
                            scaleInfo.innerHTML = html;
                        }
                    }
                    
                    // 鼠标滚轮缩放
                    previewArea.addEventListener('wheel', (e) => {
                        e.preventDefault();
                        
                        const direction = e.deltaY < 0 ? 1 : -1;
                        const factor = 10;
                        
                        // 计算新的缩放级别
                        const newZoomLevel = Math.max(20, Math.min(1000, zoomLevel + direction * factor));
                        
                        if (newZoomLevel !== zoomLevel) {
                            // 获取当前鼠标相对于unitContainer的位置
                            const rect = unitContainer.getBoundingClientRect();
                            const mouseX = e.clientX - rect.left;
                            const mouseY = e.clientY - rect.top;
                            
                            // 获取当前变换
                            const transform = getComputedTransform();
                            const oldScale = transform.scale;
                            const newScale = newZoomLevel / 100;
                            
                            // 计算缩放后的新位置，使鼠标位置保持在同一点上
                            const scaleFactor = newScale / oldScale;
                            const currentX = transform.translateX;
                            const currentY = transform.translateY;
                            
                            // 鼠标点在容器上的位置（缩放前）
                            const pointX = mouseX - currentX;
                            const pointY = mouseY - currentY;
                            
                            // 计算缩放后的偏移量
                            const newX = currentX - (scaleFactor - 1) * pointX;
                            const newY = currentY - (scaleFactor - 1) * pointY;
                            
                            // 更新缩放值和位置
                            zoomLevel = newZoomLevel;
                            updateZoom();
                            updateTransform(newX, newY, newScale);
                            updateScaleInfo();
                        }
                    });
                    
                    document.getElementById('zoom-in').addEventListener('click', () => {
                        zoomLevel = Math.min(zoomLevel + 10, 300);
                        updateZoom();
                        
                        // 保持中心不变的缩放
                        const transform = getComputedTransform();
                        updateTransform(transform.translateX, transform.translateY, zoomLevel / 100);
                        updateScaleInfo();
                    });
                    
                    document.getElementById('zoom-out').addEventListener('click', () => {
                        if (zoomLevel > 20) {
                            zoomLevel = Math.max(zoomLevel - 10, 20);
                            updateZoom();
                            
                            // 保持中心不变的缩放
                            const transform = getComputedTransform();
                            updateTransform(transform.translateX, transform.translateY, zoomLevel / 100);
                            updateScaleInfo();
                        }
                    });
                    
                    document.getElementById('zoom-reset').addEventListener('click', () => {
                        zoomLevel = 400;
                        updateZoom();
                        
                        // 重置位置和缩放
                        updateTransform(0, 0, 1);
                        updateScaleInfo();
                    });
                    
                    document.getElementById('zoom-fit').addEventListener('click', () => {
                        fitToWindow();
                    });
                    
                    function updateZoom() {
                        document.getElementById('zoom-level').innerText = zoomLevel + '%';
                        vscode.postMessage({ command: 'zoomChanged', zoomLevel });
                    }
                    
                    function fitToWindow() {
                        const container = document.querySelector('.preview-area');
                        const unitElement = document.querySelector('.unit-container');
                        if (container && unitElement) {
                            const containerWidth = container.clientWidth;
                            const containerHeight = container.clientHeight;
                            const unitWidth = 200; // 默认单位容器宽度
                            const unitHeight = 200; // 默认单位容器高度
                            
                            const widthRatio = (containerWidth / unitWidth) * 80;
                            const heightRatio = (containerHeight / unitHeight) * 80;
                            
                            // 选择较小的比例以确保完全适应
                            zoomLevel = Math.min(widthRatio, heightRatio);
                            updateZoom();
                            
                            // 重置位置，居中显示
                            updateTransform(0, 0, zoomLevel / 100);
                        }
                    }
                    
                    // 键盘快捷键
                    document.addEventListener('keydown', (e) => {
                        // Ctrl + 0: 重置到原始大小
                        if (e.ctrlKey && e.key === '0') {
                            e.preventDefault();
                            document.getElementById('zoom-reset').click();
                        }
                        // Ctrl + '+': 放大
                        else if (e.ctrlKey && (e.key === '+' || e.key === '=')) {
                            e.preventDefault();
                            document.getElementById('zoom-in').click();
                        }
                        // Ctrl + '-': 缩小
                        else if (e.ctrlKey && e.key === '-') {
                            e.preventDefault();
                            document.getElementById('zoom-out').click();
                        }
                    });
                    
                    // 双击恢复居中
                    previewArea.addEventListener('dblclick', () => {
                        updateTransform(0, 0, zoomLevel / 100);
                    });
                    
                    // 初始化
                    initDragAndDrop();
                    showScaleInfo(); // 添加比例信息显示
                    
                    // 初始打开时设置保存的缩放比例
                    window.addEventListener('load', () => {
                        setTimeout(() => {
                            // 使用保存的缩放级别
                            updateZoom();
                            updateTransform(0, 0, zoomLevel / 100);
                            updateScaleInfo();
                        }, 100);
                    });
                    
                    // 监听窗口大小变化，自动调整
                    window.addEventListener('resize', () => {
                        // 可选：自动调整大小以适应窗口
                        // fitToWindow();
                    });
                </script>
            </body>
            </html>
        `;

        // 设置消息监听器以处理来自 Webview 的消息
        this._view.webview.onDidReceiveMessage(message => {
            if (message.command === 'zoomChanged') {
                console.log(`窗口缩放级别更改为: ${message.zoomLevel}%`);
            }
        });
    }

    // 设置文件监听器以监听INI文件变化
    private setupFileWatcher(iniPath: string) {
        // 清理之前的监听器
        if (this._fileWatcher) {
            this._fileWatcher.dispose();
        }
        
        // 创建新的文件监听器
        const filePattern = new vscode.RelativePattern(path.dirname(iniPath), path.basename(iniPath));
        this._fileWatcher = vscode.workspace.createFileSystemWatcher(filePattern);
        
        // 监听文件变动，刷新预览但保持缩放比例
        this._fileWatcher.onDidChange(async () => {
            console.log(`文件变动: ${iniPath}`);
            await this.showPreview(iniPath);
        });
        
        // 如果文件被删除，显示默认视图
        this._fileWatcher.onDidDelete(() => {
            console.log(`文件被删除: ${iniPath}`);
            if (this._view) {
                this._view.webview.html = this._getDefaultHtml();
            }
            this._currentIniPath = '';
        });
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
