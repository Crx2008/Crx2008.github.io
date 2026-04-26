/**
 * EnemyLayer - 敌人渲染层
 * 管理所有敌人 Sprite 生命周期,纹理缓存和生成
 */
console.log('[EnemyLayer] 类已加载');

class EnemyLayer {
  constructor(pixiApp) {
    this.pixiApp = pixiApp;
    this.enabled = true;
    
    // 视口边距（用于敌人可见范围）
    this.margin = 200;

    // 所有敌人映射：enemy.id -> PixiEnemy
    this.enemies = new Map();

    // 对象池
    this.pool = new SpritePool(
      () => new PixiEnemy(),
      (pe) => pe.reset()
    );

    // 纹理缓存：key -> PIXI.Texture
    this.textureCache = new Map();

    // 离屏 Canvas（用于生成纹理）
    this.offscreenCanvas = document.createElement('canvas');
    this.offscreenCanvas.width = 100;
    this.offscreenCanvas.height = 100;
    this.offscreenCtx = this.offscreenCanvas.getContext('2d');
  }

  /**
   * 更新所有敌人
   * @param {Object|Array} enemies - window.room.enemies (可能是对象或数组)
   */
  update(enemies) {
    if (!enemies || !this.pixiApp.enabled) {
      this.hideAll();
      return;
    }

    // 将对象转换为数组（如果需要）
    const enemyArray = Array.isArray(enemies) ? enemies : Object.values(enemies);

    // 当前帧的敌人 ID 集合
    const currentIds = new Set(enemyArray.map(e => e.id));

    // 移除不存在的敌人
    for (let [id, pe] of this.enemies) {
      if (!currentIds.has(id)) {
        this.removeEnemy(id);
      }
    }

    // 更新或创建敌人
    for (let enemy of enemyArray) {
      // 视锥剔除（复用 toRender() 逻辑）
      if (!this.shouldRender(enemy)) {
        continue;
      }

      let pe = this.enemies.get(enemy.id);

      if (!pe) {
        pe = this.createEnemy(enemy);
      }

      pe.render();
    }
  }

  /**
   * 检查敌人是否应该渲染（视锥剔除）
   */
  shouldRender(enemy) {
    // 如果 enemy.toRender 存在，直接使用
    if (enemy.toRender !== undefined) {
      return enemy.toRender;
    }

    // 否则手动计算（复用 render.js 的 toRender() 逻辑）
    if (!window.camera) return true;

    const render = enemy.render;
    if (!render) return false;

    const camera = window.camera;
    const renderFov = window.renderFov || 1;

    // 计算屏幕坐标
    const screenX = (render.x - camera.x) * renderFov + this.pixiApp.app.screen.width / 2;
    const screenY = (render.y - camera.y) * renderFov + this.pixiApp.app.screen.height / 2;

    // 检查是否在屏幕范围内（加上边界余量）
    const margin = render.radius * renderFov + 50;
    const w = this.pixiApp.app.screen.width;
    const h = this.pixiApp.app.screen.height;

    return screenX >= -margin && screenX <= w + margin &&
           screenY >= -margin && screenY <= h + margin;
  }

  /**
   * 创建新敌人
   */
  createEnemy(enemy) {
    const pe = this.pool.get();
    pe.init(enemy, this);
    this.enemies.set(enemy.id, pe);
    this.pixiApp.worldContainer.addChild(pe.container);
    return pe;
  }

  /**
   * 移除敌人
   */
  removeEnemy(id) {
    const pe = this.enemies.get(id);
    if (pe) {
      this.pool.release(pe);
      this.enemies.delete(id);
    }
  }

  /**
   * 隐藏所有敌人
   */
  hideAll() {
    for (let [id, pe] of this.enemies) {
      this.pool.release(pe);
    }
    this.enemies.clear();
  }

  /**
   * 获取或生成敌人纹理
   * @param {string} type - 敌人类型
   * @param {number} rarity - 稀有度
   * @param {Object} enemy - enemy 对象（用于获取 data 等信息）
   * @returns {PIXI.Texture}
   */
  getEnemyTexture(type, rarity, enemy) {
    const key = `${type}_${rarity}`;

    // 检查缓存
    if (this.textureCache.has(key)) {
      return this.textureCache.get(key);
    }

    // 生成纹理
    const texture = this.generateEnemyTexture(type, rarity, enemy);
    if (texture) {
      this.textureCache.set(key, texture);
    }

    return texture;
  }

  /**
   * 生成敌人纹理（使用离屏 Canvas）
   */
  generateEnemyTexture(type, rarity, enemy) {
    // 检查 window.enemyRenderMap 是否存在
    if (!window.enemyRenderMap) {
      console.warn('[EnemyLayer] window.enemyRenderMap not found');
      return null;
    }

    const renderFn = window.enemyRenderMap[type];
    if (!renderFn) {
      console.warn(`[EnemyLayer] enemyRenderMap[${type}] not found`);
      return null;
    }

    // 根据敌人的 radius 确定 Canvas 大小（加上边界余量）
    const radius = enemy.render?.radius || 50;
    const size = Math.ceil(radius * 2 + 20);  // 20 像素边界
    const canvasSize = Math.max(100, Math.min(512, size));  // 限制在 100-512 之间

    // 动态调整离屏 Canvas 大小
    const canvas = this.offscreenCanvas;
    const ctx = this.offscreenCtx;
    if (canvas.width !== canvasSize || canvas.height !== canvasSize) {
      canvas.width = canvasSize;
      canvas.height = canvasSize;
    }

    // 清空 Canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 保存当前 ctx 状态
    ctx.save();

    // 移动到中心点
    ctx.translate(canvas.width / 2, canvas.height / 2);

    // 创建完整的 fakeEnemy 对象（复用 enemy 的所有属性）
    const fakeEnemy = {
      ...enemy,  // 复制 enemy 的所有属性
      type: type,
      rarity: rarity,
      render: {
        x: 0,
        y: 0,
        radius: canvasSize / 2 - 10,  // 留 10 像素边界
        angle: 0,
        hp: 100,
        maxHp: 100,
      },
      dead: false,
      opacityMultiplier: 1,
    };

    // 临时替换全局 ctx（enemyRenderMap 使用全局 ctx）
    const originalCtx = window.ctx;
    window.ctx = ctx;

    try {
      // 调用 enemyRenderMap[type] 绘制
      renderFn(fakeEnemy);
    } catch (e) {
      console.error(`[EnemyLayer] Error rendering enemy ${type}:`, e);
    } finally {
      // 恢复全局 ctx（只有当 originalCtx 存在时才恢复）
      if (originalCtx !== undefined) {
        window.ctx = originalCtx;
      }
    }

    // 恢复 ctx 状态
    ctx.restore();

    // 从 Canvas 创建纹理
    const texture = PIXI.Texture.from(canvas);

    return texture;
  }

  /**
   * 清空纹理缓存
   */
  clearTextureCache() {
    this.textureCache.clear();
  }

  /**
   * 销毁
   */
  destroy() {
    this.hideAll();
    this.clearTextureCache();
    this.pool.clear();
  }
}

// 暴露到全局作用域
window.EnemyLayer = EnemyLayer;
