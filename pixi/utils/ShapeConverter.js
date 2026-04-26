/**
 * ShapeConverter.js - Canvas 2D API → PIXI.Graphics 指令转换
 * 
 * 职责：
 * - 代理 Canvas 2D 上下文（ctx）
 * - 拦截绑定绘制指令（arc, lineTo, fill, stroke 等）
 * - 转换为 PIXI.Graphics 绘制指令
 * 
 * 注意：这是一个简化版实现，用于背景、网格等简单图形
 * 复杂图形（如敌人、花瓣）建议使用离屏 Canvas 方案
 */

class ShapeConverter {
    constructor(graphics) {
        this.graphics = graphics;
        
        // 当前绘制状态
        this.currentPath = [];
        this.fillColor = 0x000000;
        this.strokeColor = 0x000000;
        this.lineWidth = 1;
        this.globalAlpha = 1;
        
        // 变换矩阵
        this.transformStack = [];
        this.currentTransform = {
            x: 0,
            y: 0,
            scaleX: 1,
            scaleY: 1,
            rotation: 0
        };
    }

    /**
     * 开始新路径
     */
    beginPath() {
        this.currentPath = [];
    }

    /**
     * 移动到指定点
     * @param {number} x
     * @param {number} y
     */
    moveTo(x, y) {
        this.currentPath.push({ type: 'moveTo', x, y });
    }

    /**
     * 绘制直线到指定点
     * @param {number} x
     * @param {number} y
     */
    lineTo(x, y) {
        this.currentPath.push({ type: 'lineTo', x, y });
    }

    /**
     * 绘制圆弧
     * @param {number} x - 圆心 x
     * @param {number} y - 圆心 y
     * @param {number} radius - 半径
     * @param {number} startAngle - 起始角度（弧度）
     * @param {number} endAngle - 结束角度（弧度）
     * @param {boolean} anticlockwise - 是否逆时针
     */
    arc(x, y, radius, startAngle, endAngle, anticlockwise = false) {
        this.currentPath.push({
            type: 'arc',
            x, y, radius,
            startAngle, endAngle,
            anticlockwise
        });
    }

    /**
     * 绘制矩形
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     */
    rect(x, y, width, height) {
        this.currentPath.push({ type: 'rect', x, y, width, height });
    }

    /**
     * 闭合路径
     */
    closePath() {
        this.currentPath.push({ type: 'closePath' });
    }

    /**
     * 清空 Graphics
     */
    clear() {
        this.graphics.clear();
        this.currentPath = [];
    }

    /**
     * 设置填充颜色
     * @param {string|number} color - 颜色（如 '#ff0000' 或 0xff0000）
     */
    setFillStyle(color) {
        this.fillColor = this.parseColor(color);
    }

    /**
     * 设置描边颜色
     * @param {string|number} color - 颜色
     */
    setStrokeStyle(color) {
        this.strokeColor = this.parseColor(color);
    }

    /**
     * 设置线宽
     * @param {number} width
     */
    setLineWidth(width) {
        this.lineWidth = width;
    }

    /**
     * 设置全局透明度
     * @param {number} alpha - 0-1
     */
    setGlobalAlpha(alpha) {
        this.globalAlpha = alpha;
    }

    /**
     * 填充当前路径
     */
    fill() {
        if (this.currentPath.length === 0) return;

        this.graphics.beginFill(this.fillColor, this.globalAlpha);
        this.drawPath();
        this.graphics.endFill();
    }

    /**
     * 描边当前路径
     */
    stroke() {
        if (this.currentPath.length === 0) return;

        this.graphics.lineStyle(this.lineWidth, this.strokeColor, this.globalAlpha);
        this.drawPath();
    }

    /**
     * 绘制路径到 Graphics
     */
    drawPath() {
        for (let cmd of this.currentPath) {
            switch (cmd.type) {
                case 'moveTo':
                    this.graphics.moveTo(cmd.x, cmd.y);
                    break;

                case 'lineTo':
                    this.graphics.lineTo(cmd.x, cmd.y);
                    break;

                case 'arc':
                    this.graphics.arc(
                        cmd.x, cmd.y,
                        cmd.radius,
                        cmd.startAngle, cmd.endAngle,
                        cmd.anticlockwise
                    );
                    break;

                case 'rect':
                    this.graphics.drawRect(cmd.x, cmd.y, cmd.width, cmd.height);
                    break;

                case 'closePath':
                    this.graphics.closePath();
                    break;
            }
        }
    }

    /**
     * 保存当前状态
     */
    save() {
        this.transformStack.push({ ...this.currentTransform });
    }

    /**
     * 恢复之前的状态
     */
    restore() {
        if (this.transformStack.length > 0) {
            this.currentTransform = this.transformStack.pop();
            this.applyTransform();
        }
    }

    /**
     * 平移
     * @param {number} x
     * @param {number} y
     */
    translate(x, y) {
        this.currentTransform.x += x;
        this.currentTransform.y += y;
        this.applyTransform();
    }

    /**
     * 旋转
     * @param {number} angle - 弧度
     */
    rotate(angle) {
        this.currentTransform.rotation += angle;
        this.applyTransform();
    }

    /**
     * 缩放
     * @param {number} x
     * @param {number} y
     */
    scale(x, y) {
        this.currentTransform.scaleX *= x;
        this.currentTransform.scaleY *= y;
        this.applyTransform();
    }

    /**
     * 应用变换到 Graphics
     */
    applyTransform() {
        const t = this.currentTransform;
        this.graphics.setTransform(
            t.x, t.y,
            t.scaleX, t.scaleY,
            t.rotation
        );
    }

    /**
     * 解析颜色
     * @param {string|number} color
     * @returns {number} - 16进制颜色值
     */
    parseColor(color) {
        if (typeof color === 'number') {
            return color;
        }

        if (typeof color === 'string') {
            // rgb(r, g, b) 或 rgba(r, g, b, a)
            const rgbMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
            if (rgbMatch) {
                const r = parseInt(rgbMatch[1]);
                const g = parseInt(rgbMatch[2]);
                const b = parseInt(rgbMatch[3]);
                return (r << 16) | (g << 8) | b;
            }

            // #RRGGBB
            if (color.startsWith('#')) {
                return parseInt(color.slice(1), 16);
            }

            // RRGGBB
            return parseInt(color, 16);
        }

        return 0x000000;
    }

    /**
     * 创建 Canvas 2D 上下文代理
     * @param {PIXI.Graphics} graphics
     * @returns {Proxy}
     */
    static createProxy(graphics) {
        const converter = new ShapeConverter(graphics);
        
        return new Proxy({}, {
            get(target, prop) {
                // 映射属性
                const propertyMap = {
                    'fillStyle': 'setFillStyle',
                    'strokeStyle': 'setStrokeStyle',
                    'lineWidth': 'setLineWidth',
                    'globalAlpha': 'setGlobalAlpha'
                };
                
                // 如果是属性映射
                if (propertyMap[prop]) {
                    return (value) => converter[propertyMap[prop]](value);
                }
                
                // 如果是方法
                if (typeof converter[prop] === 'function') {
                    return converter[prop].bind(converter);
                }
                
                // 默认返回空函数（避免报错）
                return () => {};
            },
            
            set(target, prop, value) {
                // 处理属性设置
                const propertyMap = {
                    'fillStyle': 'setFillStyle',
                    'strokeStyle': 'setStrokeStyle',
                    'lineWidth': 'setLineWidth',
                    'globalAlpha': 'setGlobalAlpha'
                };

                if (propertyMap[prop]) {
                    converter[propertyMap[prop]](value);
                }

                return true;  // 必须返回 true，否则严格模式下会抛 TypeError
            }
        });
    }
}

// 暴露到全局
window.ShapeConverter = ShapeConverter;

console.log('[ShapeConverter] Loaded');
