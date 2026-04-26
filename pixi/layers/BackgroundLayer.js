/**
 * BackgroundLayer.js - 群系背景色渲染
 *
 * 职责：
 * - 填充群系背景色
 * - 处理 augmented biome 暗化效果
 */

class BackgroundLayer {
    constructor(app) {
        this.app = app;
        this.graphics = new PIXI.Graphics();
        this.app.stage.addChildAt(this.graphics, 0);
        this.currentBiome = null;
        this.darkenFactor = 1;
        this.currentZoom = 1;
    }

    setZoom(zoom) {
        this.currentZoom = zoom;
        this.graphics.scale.set(zoom, zoom);
    }

    update(biome, logicalWidth, logicalHeight) {
        if (!Colors || !Colors.biomes || !Colors.biomes[biome]) return;

        this.graphics.clear();

        let bgColor = Colors.biomes[biome].background;

        const augmentedBiomes = ["trench"];
        if (augmentedBiomes.includes(biome) && window.room) {
            const wave = window.room.wave || 0;
            this.darkenFactor = Math.max(0.3, 1 - wave * 0.02);
            bgColor = this.darkenColor(bgColor, this.darkenFactor);
        }

        const color = this.parseColor(bgColor);
        this.graphics.beginFill(color);
        this.graphics.drawRect(0, 0, logicalWidth, logicalHeight);
        this.graphics.endFill();
    }

    /**
     * 暗化颜色
     */
    darkenColor(hex, factor) {
        const num = parseInt(hex.slice(1), 16);
        let r = Math.floor(((num >> 16) & 255) * factor);
        let g = Math.floor(((num >> 8) & 255) * factor);
        let b = Math.floor((num & 255) * factor);
        return (r << 16) | (g << 8) | b;
    }

    /**
     * 解析颜色
     */
    parseColor(color) {
        if (typeof color === 'number') return color;
        if (color.startsWith('#')) {
            return parseInt(color.slice(1), 16);
        }
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

window.BackgroundLayer = BackgroundLayer;
