/**
 * PixiEnemy - 敌人 PixiJS 渲染包装器
 * 读取 enemy.render.* 插值数据，更新 Container transform
 */
console.log("[PixiEnemy] 类已加载");

class PixiEnemy {
  constructor() {
    this.enemy = null;
    this.layer = null;

    // Container 包含：敌人 Sprite + HP 条 Graphics
    this.container = new PIXI.Container();

    // 敌人 Sprite（纹理会在 render 时动态设置）
    this.sprite = new PIXI.Sprite();
    this.sprite.anchor.set(0.5, 0.5);
    this.container.addChild(this.sprite);

    // HP 条 Graphics
    this.hpBar = new PIXI.Graphics();
    this.container.addChild(this.hpBar);

    // 缓存的纹理 key
    this.textureKey = null;
  }

  /**
   * 初始化（从对象池获取时调用）
   * @param {Object} enemy - enemy 对象（来自 game.enemies）
   * @param {EnemyLayer} layer - 父 layer
   */
  init(enemy, layer) {
    this.enemy = enemy;
    this.layer = layer;
    this.container.visible = true;
  }

  /**
   * 重置（释放回对象池时调用）
   */
  reset() {
    this.enemy = null;
    this.layer = null;
    this.container.visible = false;
    this.container.removeFromParent();
    this.textureKey = null;
  }

  /**
   * 渲染（每帧调用）
   */
  render() {
    if (!this.enemy || !this.enemy.render) return;

    // 更新 transform
    this.updateTransform();

    // 更新纹理
    this.updateTexture();

    // 更新 HP 条
    this.updateHpBar();

    // 更新透明度（死亡动画、opacityMultiplier）
    this.updateOpacity();
  }

  /**
   * 更新 Container 的 transform
   */
  updateTransform() {
    const render = this.enemy.render;

    // 位置：render.x/y 是世界坐标，worldContainer 会自动处理相机转换
    this.container.position.set(render.x, render.y);

    // 旋转：render.angle 是弧度
    this.container.rotation = render.angle;

    // 缩放：根据纹理实际大小和敌人 radius 计算
    if (this.sprite.texture && this.sprite.texture.valid) {
      const textureWidth = this.sprite.texture.width;
      const textureHeight = this.sprite.texture.height;
      const textureSize = Math.max(textureWidth, textureHeight);
      
      // 纹理中心有 10 像素边界，所以实际绘制区域是 (textureSize - 20)
      const actualSize = textureSize - 20;
      const scale = (render.radius * 2) / actualSize;
      this.container.scale.set(scale, scale);
    }
  }

  /**
   * 更新纹理
   * 为每个 (type, rarity) 组合生成一次纹理并缓存
   */
  updateTexture() {
    const type = this.enemy.type;
    const rarity = this.enemy.rarity;
    const key = `${type}_${rarity}`;

    // 如果 key 没变，不需要重新生成纹理
    if (this.textureKey === key && this.sprite.texture) {
      return;
    }

    this.textureKey = key;

    // 从纹理缓存获取或生成
    const texture = this.layer.getEnemyTexture(type, rarity, this.enemy);
    if (texture) {
      this.sprite.texture = texture;
    }
  }

  /**
   * 更新 HP 条
   * 红底 + 绿条（HP）+ 蓝盾（Shield）
   */
  updateHpBar() {
    const enemy = this.enemy;

    // 检查是否需要显示 HP 条
    if (!enemy.toRenderUi || enemy.rarity <= 3) {
      this.hpBar.visible = false;
      return;
    }

    // 特殊敌人不显示 HP 条（多段体的非头部）
    if (this.shouldSkipHpBar()) {
      this.hpBar.visible = false;
      return;
    }

    this.hpBar.visible = true;
    this.hpBar.clear();

    const hp = enemy.hp;
    const maxHp = enemy.maxHp;
    const shield = enemy.shield || 0;
    const beforeStreakHp = enemy.beforeStreakHp || hp;

    // HP 条尺寸（相对于敌人半径）
    const radius = enemy.render?.radius || 50;
    const barWidth = radius * 0.8;  // 宽度是半径的 80%
    const barHeight = Math.max(4, radius * 0.1);  // 高度至少 4 像素
    const shieldHeight = Math.max(3, radius * 0.06);
    const yOffset = -radius - 10;  // 在敌人上方，留 10 像素间隙

    // 红底（最大 HP）
    this.hpBar.rect(-barWidth / 2, yOffset, barWidth, barHeight);
    this.hpBar.fill(0xff0000);

    // 绿条（当前 HP）
    const hpRatio = Math.max(0, hp / maxHp);
    const hpWidth = barWidth * hpRatio;
    if (hpWidth > 0) {
      this.hpBar.rect(-barWidth / 2, yOffset, hpWidth, barHeight);
      this.hpBar.fill(0x00ff00);
    }

    // 蓝盾（护盾）
    if (shield > 0) {
      const shieldRatio = Math.min(1, shield / maxHp);
      const shieldWidth = barWidth * shieldRatio;
      this.hpBar.rect(-barWidth / 2, yOffset + barHeight, shieldWidth, shieldHeight);
      this.hpBar.fill(0x0088ff);
    }
  }

  /**
   * 检查是否应该跳过 HP 条（多段体非头部）
   */
  shouldSkipHpBar() {
    const type = this.enemy.type;
    const isHead = this.enemy.isHead;

    // 多段体敌人只有头部显示 HP 条
    const multiSegmentTypes = ['Leech', 'Electric Eel', 'Dark Electric Eel', 'Shiny Electric Eel', 'BudLeech'];
    if (multiSegmentTypes.includes(type) && !isHead) {
      return true;
    }

    return false;
  }

  /**
   * 更新透明度（死亡动画、opacityMultiplier）
   */
  updateOpacity() {
    let alpha = 1;

    // 死亡动画
    if (this.enemy.dead) {
      const deadTimer = this.enemy.deadAnimationTimer || 0;
      // 平滑衰减（复用 enemy.js 的 smoothstep 逻辑）
      alpha = this.smoothstep(Math.max(0, 1 - Math.cbrt(deadTimer * 0.0048)));
    }

    // opacityMultiplier（某些敌人有透明度变化）
    if (this.enemy.opacityMultiplier !== undefined) {
      alpha *= this.enemy.opacityMultiplier;
    }

    this.container.alpha = alpha;
  }

  /**
   * smoothstep 插值函数（复用 enemy.js 的逻辑）
   */
  smoothstep(x) {
    return x * x * (3 - 2 * x);
  }
}

// 暴露到全局作用域
window.PixiEnemy = PixiEnemy;
