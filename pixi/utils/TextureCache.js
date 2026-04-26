/**
 * TextureCache.js - 纹理生成与缓存（type+rarity → Texture）
 * 
 * 职责：
 * - 为每个 (type, rarity) 组合生成纹理
 * - 缓存生成的纹理，避免重复创建
 * - 提供纹理清理接口
 */

class TextureCache {
    constructor() {
        // 纹理缓存 Map<key, PIXI.Texture>
        this.cache = new Map();
        
        // 统计信息
        this.stats = {
            hits: 0,
            misses: 0,
            generated: 0
        };
    }

    /**
     * 生成缓存 key
     * @param {string} type - 实体类型（如 'Ladybug', 'Basic'）
     * @param {number} rarity - 稀有度（0-21）
     * @param {object} options - 额外选项（如大小、颜色等）
     * @returns {string}
     */
    generateKey(type, rarity, options = {}) {
        const optionsStr = Object.keys(options).length > 0 
            ? JSON.stringify(options) 
            : '';
        return `${type}_${rarity}${optionsStr}`;
    }

    /**
     * 获取或创建纹理
     * @param {string} type - 实体类型
     * @param {number} rarity - 稀有度
     * @param {function} generatorFn - 纹理生成函数，返回 HTMLCanvasElement
     * @param {object} options - 额外选项
     * @returns {PIXI.Texture}
     */
    getOrCreate(type, rarity, generatorFn, options = {}) {
        const key = this.generateKey(type, rarity, options);
        
        // 检查缓存
        if (this.cache.has(key)) {
            this.stats.hits++;
            return this.cache.get(key);
        }

        // 生成新纹理
        this.stats.misses++;
        this.stats.generated++;

        try {
            // 调用生成函数创建离屏 Canvas
            const canvas = generatorFn(type, rarity, options);
            
            // 转换为 PIXI.Texture
            const texture = PIXI.Texture.from(canvas);
            
            // 缓存
            this.cache.set(key, texture);
            
            console.log(`[TextureCache] Generated texture for "${key}"`);
            return texture;
        } catch (error) {
            console.error(`[TextureCache] Failed to generate texture for "${key}":`, error);
            return null;
        }
    }

    /**
     * 获取缓存的纹理（不创建新的）
     * @param {string} type - 实体类型
     * @param {number} rarity - 稀有度
     * @param {object} options - 额外选项
     * @returns {PIXI.Texture|null}
     */
    get(type, rarity, options = {}) {
        const key = this.generateKey(type, rarity, options);
        return this.cache.get(key) || null;
    }

    /**
     * 检查纹理是否存在
     * @param {string} type - 实体类型
     * @param {number} rarity - 稀有度
     * @param {object} options - 额外选项
     * @returns {boolean}
     */
    has(type, rarity, options = {}) {
        const key = this.generateKey(type, rarity, options);
        return this.cache.has(key);
    }

    /**
     * 删除特定纹理
     * @param {string} type - 实体类型
     * @param {number} rarity - 稀有度
     * @param {object} options - 额外选项
     */
    delete(type, rarity, options = {}) {
        const key = this.generateKey(type, rarity, options);
        if (this.cache.has(key)) {
            const texture = this.cache.get(key);
            texture.destroy(true);
            this.cache.delete(key);
            console.log(`[TextureCache] Deleted texture "${key}"`);
        }
    }

    /**
     * 清空所有缓存
     */
    clear() {
        this.cache.forEach((texture, key) => {
            texture.destroy(true);
        });
        this.cache.clear();
        
        console.log(`[TextureCache] Cleared all textures`);
        console.log(`[TextureCache] Stats: hits=${this.stats.hits}, misses=${this.stats.misses}, generated=${this.stats.generated}`);
    }

    /**
     * 获取缓存统计信息
     * @returns {object}
     */
    getStats() {
        return {
            size: this.cache.size,
            ...this.stats
        };
    }

    /**
     * 重置统计信息
     */
    resetStats() {
        this.stats = {
            hits: 0,
            misses: 0,
            generated: 0
        };
    }
}

// 全局单例
window.textureCache = new TextureCache();

// 开发环境下，暴露到全局方便调试
if (typeof window !== 'undefined') {
    window.debugTextureCache = {
        stats: () => window.textureCache.getStats(),
        clear: () => window.textureCache.clear(),
        has: (type, rarity) => window.textureCache.has(type, rarity),
        size: () => window.textureCache.cache.size
    };
    
    console.log('[TextureCache] Debug helpers available: window.debugTextureCache');
}
