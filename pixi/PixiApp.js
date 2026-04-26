/**
 * PixiApp.js - PIXI.Application 封装，双 Canvas 管理
 * 
 * 职责：
 * - 创建 PIXI.Application 实例
 * - 管理场景图层级（worldContainer 和 uiContainer）
 * - 处理 canvas 挂载和 z-index
 * - 提供 resize 和销毁接口
 */

class PixiApp {
    constructor() {
        this.app = null;
        this.worldContainer = null;
        this.uiContainer = null;
        this.initialized = false;
        this.enabled = false;
    }

    /**
     * 初始化 PixiJS Application
     * @param {HTMLCanvasElement} existingCanvas - 现有的 Canvas 2D 元素
     */
    init(existingCanvas) {
        if (this.initialized) {
            console.warn('[PixiApp] Already initialized');
            return;
        }

        // 创建 PIXI Application，使用现有 canvas 的尺寸
        this.app = new PIXI.Application({
            width: existingCanvas.width,
            height: existingCanvas.height,
            backgroundAlpha: 0,
            antialias: true,
            resolution: 1,
            autoDensity: false,
            autoStart: false,
        });

        // 完全禁用 ticker
        this.app.ticker.stop();
        this.app.ticker.autoStart = false;
        this.app.ticker.started = false;

        // 移除所有 ticker 监听器
        this.app.ticker.remove(this.app.render, this.app);

        console.log('[PixiApp] Ticker completely disabled (manual render mode)');

        // 创建场景图层级
        this.worldContainer = new PIXI.Container();
        this.worldContainer.name = 'worldContainer';  // 跟随相机
        
        this.uiContainer = new PIXI.Container();
        this.uiContainer.name = 'uiContainer';  // 固定屏幕

        // 添加到 stage
        this.app.stage.addChild(this.worldContainer);
        this.app.stage.addChild(this.uiContainer);

        // 挂载到 DOM
        this.mountCanvas(existingCanvas);

        this.initialized = true;
        this.enabled = true;
        console.log('[PixiApp] Initialized successfully');
        console.log('[PixiApp] PIXI.VERSION:', PIXI.VERSION);
        console.log('[PixiApp] Canvas size:', existingCanvas.width, 'x', existingCanvas.height);
    }

    /**
     * 挂载 PixiJS canvas 到 DOM
     * @param {HTMLCanvasElement} existingCanvas - 现有的 Canvas 2D 元素
     */
    mountCanvas(existingCanvas) {
        const pixiCanvas = this.app.view;
        
        // 设置 canvas 属性
        pixiCanvas.id = 'pixi-canvas';
        pixiCanvas.style.position = 'absolute';
        pixiCanvas.style.top = '0';
        pixiCanvas.style.left = '0';
        pixiCanvas.style.width = existingCanvas.style.width;
        pixiCanvas.style.height = existingCanvas.style.height;
        pixiCanvas.style.zIndex = '-2';  // 在 Canvas 2D 下方
        pixiCanvas.style.pointerEvents = 'none';  // 不拦截鼠标事件

        // 插入到现有 canvas 之前
        existingCanvas.parentNode.insertBefore(pixiCanvas, existingCanvas);

        console.log('[PixiApp] Canvas mounted');
    }

    /**
     * 同步 canvas 尺寸
     * @param {number} width - 宽度（像素）
     * @param {number} height - 高度（像素）
     */
    resize(width, height) {
        if (!this.initialized) return;

        this.app.renderer.resize(width, height);
        
        const pixiCanvas = this.app.view;
        const existingCanvas = document.getElementById('canvas');
        if (existingCanvas) {
            pixiCanvas.style.width = existingCanvas.style.width;
            pixiCanvas.style.height = existingCanvas.style.height;
        }

        console.log('[PixiApp] Resized to', width, 'x', height);
    }

    /**
     * 获取 PixiJS canvas 元素
     * @returns {HTMLCanvasElement}
     */
    getCanvas() {
        return this.app ? this.app.view : null;
    }

    /**
     * 销毁 PixiJS Application
     */
    destroy() {
        if (this.app) {
            this.app.destroy(true);
            this.app = null;
            this.worldContainer = null;
            this.uiContainer = null;
            this.initialized = false;
            console.log('[PixiApp] Destroyed');
        }
    }
}

// 全局单例
window.pixiApp = new PixiApp();
