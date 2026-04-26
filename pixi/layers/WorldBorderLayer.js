/**
 * WorldBorderLayer.js - 世界边界圆渲染（屏幕坐标系）
 *
 * 完全复刻 Canvas 2D 的边界圆渲染逻辑（renderGame.js 第 340-349 行）
 */

class WorldBorderLayer {
    constructor(app) {
        this.app = app;
        this.graphics = new PIXI.Graphics();
        this.app.stage.addChild(this.graphics);
        this.currentZoom = 1;
    }

    setZoom(zoom) {
        this.currentZoom = zoom;
        this.graphics.scale.set(zoom, zoom);
    }

    update(roomRadius, renderFov, logicalWidth, logicalHeight, cameraX, cameraY) {
        if (!roomRadius) return;

        this.graphics.clear();

        const lineWidth = logicalWidth * 2 + logicalHeight * 2;
        const centerX = logicalWidth / 2 - cameraX * renderFov;
        const centerY = logicalHeight / 2 - cameraY * renderFov;
        const radius = roomRadius * renderFov + lineWidth / 2;

        this.graphics.lineStyle(lineWidth, 0x000000, 0.08);
        this.graphics.drawCircle(centerX, centerY, radius);
    }

    destroy() {
        this.graphics.destroy();
    }
}

window.WorldBorderLayer = WorldBorderLayer;
