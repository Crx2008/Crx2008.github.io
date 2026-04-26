/**
 * MobSkillUI - 技能条 UI 系统
 * 替换花瓣 UI，显示技能图标和冷却
 */

class MobSkillUI {
  constructor() {
    this.visible = false;
    this.skills = [];
    this.player = null;
    this.skillIcons = [];

    // UI 配置（不在构造函数中使用 canvas）
    this.slotSize = 50;
    this.slotSpacing = 10;
  }

  /**
   * 获取位置时动态计算（避免在构造函数中访问 canvas）
   * 使用 canvas.h 和 canvas.w，与 inventory 保持一致
   */
  getPosition() {
    return {
      baseY: canvas.h - 70,
      centerX: canvas.w / 2
    };
  }

  setPlayer(player) {
    this.player = player;
    if (player.isMob && player.skills) {
      this.skills = player.skills;
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  render(ctx) {
    console.log('[mobSkillUI] render called, visible=', this.visible, 'player=', this.player, 'skills=', this.skills);
    if (!this.visible || !this.player) return;
    if (!this.skills || this.skills.length === 0) {
      console.warn('[mobSkillUI] skills is empty!');
      return;
    }

    const pos = this.getPosition();
    const totalWidth = this.skills.length * (this.slotSize + this.slotSpacing);
    const startX = pos.centerX - totalWidth / 2;

    console.log('[mobSkillUI] Rendering', this.skills.length, 'skills at y=', pos.baseY);

    this.skills.forEach((skill, index) => {
      const x = startX + index * (this.slotSize + this.slotSpacing);
      const y = pos.baseY;

      // 绘制技能槽
      this.renderSkillSlot(ctx, skill, x, y, index);
    });
  }

  renderSkillSlot(ctx, skill, x, y, index) {
    const cooldownPercent = this.player.getSkillCooldownPercent(skill.id);

    // 背景
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.beginPath();
    ctx.roundRect(x - this.slotSize / 2, y - this.slotSize / 2,
      this.slotSize, this.slotSize, 8);
    ctx.fill();

    // 技能图标背景
    ctx.fillStyle = this.getSkillColor(skill.type);
    ctx.beginPath();
    ctx.arc(x, y, this.slotSize / 2 - 5, 0, Math.PI * 2);
    ctx.fill();

    // 冷却遮罩
    if (cooldownPercent > 0) {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
      ctx.beginPath();
      ctx.moveTo(x, y);
      const endAngle = -Math.PI / 2 + cooldownPercent * Math.PI * 2;
      ctx.arc(x, y, this.slotSize / 2 - 5, -Math.PI / 2, endAngle);
      ctx.closePath();
      ctx.fill();
    }

    // 技能编号
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(index + 1, x, y);

    // 冷却文字
    if (cooldownPercent > 0) {
      const cooldownEnd = this.player.skillCooldowns[skill.id];
      const remaining = Math.ceil((cooldownEnd - Date.now()) / 1000);
      ctx.font = 'bold 14px Arial';
      ctx.fillText(remaining, x, y + this.slotSize / 2 + 15);
    }

    // 技能名称（鼠标悬停时显示）
    // TODO: 添加鼠标悬停检测
  }

  getSkillColor(skillType) {
    const colors = {
      'shootAggr': '#FF6B6B',         // 红色 - 基础射击
      'spinShoot': '#4ECDC4',         // 青色 - 旋转射击
      'spinShootCircle': '#FF9F43',   // 橙色 - 旋风连射
      'dash': '#95E1D3',              // 绿色 - 冲刺
      'smallDash': '#48DBFB',         // 浅蓝 - 小冲刺
      'spawnMobs': '#5F27CD',         // 紫色 - 召唤
      'bandage': '#FECA57',           // 黄色 - 绷带
      'berserk': '#EE5A24',           // 深红 - 狂暴
      'growShrink': '#00D2D3'         // 青绿 - 变大
    };
    return colors[skillType] || '#95E1D3';
  }
}

// 全局实例
const mobSkillUI = new MobSkillUI();
