/**
 * GridLayer.js - 动画网格渲染（屏幕坐标系）
 *
 * 完全复刻 Canvas 2D 的网格渲染逻辑（renderGame.js 第 354-387 行）
 */

class GridLayer {
    constructor(app) {
        this.app = app;
        this.graphics = new PIXI.Graphics();
        this.app.stage.addChild(this.graphics);
        this.tileSize = 50;
        this.currentZoom = 1;
    }

    setZoom(zoom) {
        this.currentZoom = zoom;
        this.graphics.scale.set(zoom, zoom);
    }

    update(biome, logicalWidth, logicalHeight, cameraX, cameraY, renderFov) {
        if (window.noGrid === true || !Colors?.biomes?.[biome]) return;

        this.graphics.clear();

        let gridColor = Colors.biomes[biome].grid;

        const augmentedBiomes = ["trench"];
        if (augmentedBiomes.includes(biome) && window.room) {
            const wave = window.room.wave || 0;
            const darkenFactor = Math.max(0.3, 1 - wave * 0.02);
            gridColor = this.darkenColor(gridColor, darkenFactor);
        }

        const color = this.parseColor(gridColor);

        const tileOffset = {
            x: (-cameraX + logicalWidth / 2 / renderFov) % this.tileSize,
            y: (-cameraY + logicalHeight / 2 / renderFov) % this.tileSize
        };

        this.graphics.lineStyle(renderFov, color, 1);

        for (let x = (tileOffset.x - renderFov) * renderFov; x <= logicalWidth + renderFov; x += this.tileSize * renderFov) {
            this.graphics.moveTo(x, 0);
            this.graphics.lineTo(x, logicalHeight);
        }

        for (let y = (tileOffset.y - renderFov) * renderFov; y <= logicalHeight + renderFov; y += this.tileSize * renderFov) {
            this.graphics.moveTo(0, y);
            this.graphics.lineTo(logicalWidth, y);
        }
    }

    darkenColor(hex, factor) {
        const num = parseInt(hex.slice(1), 16);
        let r = Math.floor(((num >> 16) & 255) * factor);
        let g = Math.floor(((num >> 8) & 255) * factor);
        let b = Math.floor((num & 255) * factor);
        return (r << 16) | (g << 8) | b;
    }

    parseColor(color) {
        if (typeof color === 'number') return color;
        if (color.startsWith('#')) return parseInt(color.slice(1), 16);
        const rgbMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (rgbMatch) {
            const r = parseInt(rgbMatch[1]);
            const g = parseInt(rgbMatch[2]);
            const b = parseInt(rgbMatch[3]);
            return (r << 16) | (g << 8) | b;
        }
        return 0xffffff;
    }

    destroy() {
        this.graphics.destroy();
    }
}

window.GridLayer = GridLayer;