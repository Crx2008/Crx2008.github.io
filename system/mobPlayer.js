/**
 * MobPlayer - 玩家变身为 Mob 的类
 * 继承自 Flower，复用位置、渲染等基础功能
 */

class MobPlayer extends Flower {
  constructor(id, mobType) {
    super(id);

    this.isMob = true;
    this.mobType = mobType;

    // Mob 特有属性
    this.skills = [];
    this.skillCooldowns = {};
    this.mobState = null;  // Mob 状态（包含 spinCircleState 等）

    // 确保必要的属性存在（继承自 Flower）
    this.petals = [];  // Mob 没有花瓣
    this.petalSlots = 0;

    // 确保 render 对象存在并初始化敌人渲染所需的属性
    if (!this.render) {
      this.render = {};
    }
    // 初始化敌人渲染所需的属性
    this.render.time = 0;
    this.render.lastX = 0;
    this.render.lastY = 0;
  }

  /**
   * 设置技能列表
   */
  setSkills(skills) {
    this.skills = skills;
    // 初始化冷却
    skills.forEach(skill => {
      this.skillCooldowns[skill.id] = 0;
    });
  }

  /**
   * 更新技能冷却
   */
  updateSkillCooldown(skillId, cooldownEnd) {
    this.skillCooldowns[skillId] = cooldownEnd;
  }

  /**
   * 获取技能冷却百分比 (0-1)
   */
  getSkillCooldownPercent(skillId) {
    const cooldownEnd = this.skillCooldowns[skillId];
    if (!cooldownEnd) return 0;
    const now = Date.now();
    if (now >= cooldownEnd) return 0;
    const skill = this.skills.find(s => s.id === skillId);
    if (!skill) return 0;
    const totalCooldown = skill.cooldown * 1000;
    const remaining = cooldownEnd - now;
    return remaining / totalCooldown;
  }

  /**
   * 重写 draw() 方法（Flower 类使用 draw() 而非 render()）
   */
  draw() {
    if (window.Perf) window.Perf.mark('MobPlayer.draw');

    // 正常 Flower 只对非本地玩家调用 updateInterpolate()
    // MobPlayer 遵循相同的规则
    if (this.id !== window.selfId) {
      this.updateInterpolate();
    }

    // 更新宠物和投射物（Mob 没有花瓣，但可能有其他）
    this.updatePetsAndProjectiles();

    // 处理死亡投射物
    for (let i = 0; i < this.deadProjectiles.length; i++) {
      if (!this.deadProjectiles[i]) continue;
      if (toRender({ x: this.deadProjectiles[i].x, y: this.deadProjectiles[i].y, radius: this.deadProjectiles[i].radius }, window.camera) === true) {
        this.deadProjectiles[i].draw();
      }
      this.deadProjectiles[i].updateTimer();
    }

    this.ticksSinceLastDamaged += dt;
    if (this.ticksSinceLastDamaged > 666) {
      this.beforeStreakHp = this.hp;
    }

    // 渲染 HP 条（使用 headX/headY，和正常 Flower 一致）
    renderHpBar({
      x: this.render.headX,
      y: this.render.headY - this.render.radius / 3,
      radius: this.render.radius,
      hp: this.render.hp,
      maxHp: this.maxHp,
      shield: this.render.shield || 0,
      beforeStreakHp: this.render.beforeStreakHp,
      flowerName: this.name,
      flowerUsername: this.username
    }, this);

    // 使用敌人渲染方法绘制 Mob 外观
    if (typeof enemyRenderMap !== 'undefined' && enemyRenderMap[this.mobType]) {
      // 保存当前上下文
      ctx.save();

      // 关键：使用 headX/headY 而不是 x/y
      // 正常 Flower 用 render.headX/headY 绘制，Mob 也应该一样
      // 但需要设置 render.x/render.y 供敌人渲染函数使用
      this.render.x = this.render.headX;
      this.render.y = this.render.headY;

      ctx.translate(this.render.x, this.render.y);

      // 构造敌人数据对象，传递给渲染函数
      const enemyData = {
        type: this.mobType,
        rarity: 0,
        x: this.x,
        y: this.y,
        radius: this.render.radius,
        angle: this.render.angle,
        hp: this.render.hp,
        maxHp: this.maxHp,
        render: this.render,
        ticksSinceLastDamaged: this.ticksSinceLastDamaged,
        lastTicksSinceLastDamaged: this.lastTicksSinceLastDamaged || 0
      };

      // 调用敌人的渲染函数
      enemyRenderMap[this.mobType](enemyData);

      ctx.restore();
    } else {
      // 如果没有对应的渲染函数，回退到默认圆形绘制
      ctx.save();
      ctx.translate(this.render.headX, this.render.headY);
      ctx.beginPath();
      ctx.arc(0, 0, this.render.radius, 0, Math.PI * 2);
      ctx.fillStyle = '#FFD700';
      ctx.fill();
      ctx.strokeStyle = '#FFA500';
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.restore();
    }

    if (window.Perf) window.Perf.end('MobPlayer.draw');
  }

  /**
   * 移除 renderMobAppearance 方法，不再需要自定义绘制
   */
}
