
/**
 * 天气UI系统
 * 注意：天气显示已集成到wave条中，这里只处理视觉效果
 */
class WeatherUI {
  constructor() {
    this.particles = [];
    this.lastParticleTime = 0;
  }

  /**
   * 更新天气显示（已集成到wave条，此方法为兼容性保留）
   */
  update() {
    // 天气显示已移到 renderGame.js 的 wave 条中
  }

  /**
   * 渲染天气视觉效果
   */
  renderEffects(ctx, canvas, time) {
    const weather = window.currentWeather;
    if (!weather || !weather.id) return;

    // 检查是否禁用天气特效
    if (window.showWeatherEffects === false) return;

    const me = room.flowers[window.selfId];
    if (!me) return;

    const centerX = canvas.w / 2;
    const centerY = canvas.h / 2;

    switch (weather.id) {
      case 'snow':
        this.renderSnow(ctx, canvas, time);
        break;
      case 'rain':
        this.renderRain(ctx, canvas, time);
        break;
      case 'fog':
      case 'toxic_fog':
        this.renderFog(ctx, canvas, weather.id === 'toxic_fog');
        break;
      case 'fire':
        this.renderFireEffect(ctx, canvas, time);
        break;
      case 'darkness':
      case 'night':
        this.renderDarkness(ctx, canvas, weather.id === 'darkness' ? 0.9 : 0.5);
        break;
      case 'sandstorm':
        this.renderSandstorm(ctx, canvas, time);
        break;
      case 'thunderstorm':
        this.renderThunderstorm(ctx, canvas, time);
        break;
      case 'frozen':
        this.renderFrozenEffect(ctx, canvas);
        break;
    }

    // 渲染眩晕特效（所有天气都可能触发）
    this.renderStunEffect(ctx, canvas, time);
  }

  /**
   * 渲染雪天效果
   */
  renderSnow(ctx, canvas, time) {
    // 每帧添加新雪花
    if (time - this.lastParticleTime > 100) {
      for (let i = 0; i < 3; i++) {
        this.particles.push({
          x: Math.random() * canvas.w,
          y: -10,
          vx: (Math.random() - 0.5) * 0.5,
          vy: 1 + Math.random() * 2,
          size: 2 + Math.random() * 3,
          type: 'snow'
        });
      }
      this.lastParticleTime = time;
    }

    // 渲染雪花
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      if (p.type !== 'snow') continue;

      p.x += p.vx;
      p.y += p.vy;

      // 绘制雪花
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();

      // 移除超出屏幕的雪花
      if (p.y > canvas.h + 10) {
        this.particles.splice(i, 1);
      }
    }
  }

  /**
   * 渲染雨天效果
   */
  renderRain(ctx, canvas, time) {
    // 每帧添加新雨滴
    if (time - this.lastParticleTime > 50) {
      for (let i = 0; i < 5; i++) {
        this.particles.push({
          x: Math.random() * canvas.w,
          y: -10,
          vx: -1,
          vy: 8 + Math.random() * 4,
          length: 10 + Math.random() * 10,
          type: 'rain'
        });
      }
      this.lastParticleTime = time;
    }

    // 渲染雨滴
    ctx.strokeStyle = 'rgba(150, 200, 255, 0.6)';
    ctx.lineWidth = 1;
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      if (p.type !== 'rain') continue;

      p.x += p.vx;
      p.y += p.vy;

      // 绘制雨滴
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x + p.vx * 2, p.y + p.length);
      ctx.stroke();

      // 移除超出屏幕的雨滴
      if (p.y > canvas.h + 20) {
        this.particles.splice(i, 1);
      }
    }
  }

  /**
   * 渲染雾天效果
   */
  renderFog(ctx, canvas, isToxic) {
    const color = isToxic ? 'rgba(100, 150, 50, 0.3)' : 'rgba(200, 200, 200, 0.4)';

    // 创建渐变雾气
    const gradient = ctx.createRadialGradient(
      canvas.w / 2, canvas.h / 2, 0,
      canvas.w / 2, canvas.h / 2, canvas.w * 0.7
    );
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
    gradient.addColorStop(0.5, color);
    gradient.addColorStop(1, color);

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.w, canvas.h);

    // 毒雾添加绿色调
    if (isToxic) {
      ctx.fillStyle = 'rgba(100, 200, 50, 0.1)';
      ctx.fillRect(0, 0, canvas.w, canvas.h);
    }
  }

  /**
   * 渲染火焰效果
   */
  renderFireEffect(ctx, canvas, time) {
    // 屏幕边缘红色闪烁
    const intensity = 0.1 + Math.sin(time / 200) * 0.05;
    ctx.strokeStyle = `rgba(255, ${Math.floor(100 + Math.sin(time / 100) * 50)}, 0, ${intensity})`;
    ctx.lineWidth = 20;
    ctx.strokeRect(0, 0, canvas.w, canvas.h);

    // 添加橙色色调
    ctx.fillStyle = `rgba(255, 100, 0, ${intensity * 0.5})`;
    ctx.fillRect(0, 0, canvas.w, canvas.h);
  }

  /**
   * 渲染黑暗效果
   */
  renderDarkness(ctx, canvas, darkness) {
    // 黑暗遮罩，中心较亮
    const gradient = ctx.createRadialGradient(
      canvas.w / 2, canvas.h / 2, 0,
      canvas.w / 2, canvas.h / 2, canvas.w * 0.4
    );
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
    gradient.addColorStop(0.5, `rgba(0, 0, 0, ${darkness * 0.5})`);
    gradient.addColorStop(1, `rgba(0, 0, 0, ${darkness})`);

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.w, canvas.h);
  }

  /**
   * 渲染沙暴效果
   */
  renderSandstorm(ctx, canvas, time) {
    // 沙尘颗粒
    if (time - this.lastParticleTime > 30) {
      for (let i = 0; i < 10; i++) {
        this.particles.push({
          x: canvas.w + 10,
          y: Math.random() * canvas.h,
          vx: -5 - Math.random() * 5,
          vy: (Math.random() - 0.5) * 2,
          size: 1 + Math.random() * 2,
          type: 'sand'
        });
      }
      this.lastParticleTime = time;
    }

    // 渲染沙粒
    ctx.fillStyle = 'rgba(210, 180, 100, 0.6)';
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      if (p.type !== 'sand') continue;

      p.x += p.vx;
      p.y += p.vy;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();

      if (p.x < -10) {
        this.particles.splice(i, 1);
      }
    }

    // 黄色遮罩
    ctx.fillStyle = 'rgba(210, 180, 100, 0.15)';
    ctx.fillRect(0, 0, canvas.w, canvas.h);
  }

  /**
   * 渲染雷暴效果
   */
  renderThunderstorm(ctx, canvas, time) {
    // 随机闪电
    if (Math.random() < 0.005) {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.fillRect(0, 0, canvas.w, canvas.h);

      // 闪电后快速恢复
      setTimeout(() => {
        // 下一帧会正常渲染
      }, 50);
    }

    // 雨效果
    this.renderRain(ctx, canvas, time);

    // 深色遮罩
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.fillRect(0, 0, canvas.w, canvas.h);
  }

  /**
   * 渲染冰冻效果
   */
  renderFrozenEffect(ctx, canvas) {
    // 蓝色冰霜色调
    ctx.fillStyle = 'rgba(150, 200, 255, 0.2)';
    ctx.fillRect(0, 0, canvas.w, canvas.h);

    // 边缘冰霜
    ctx.strokeStyle = 'rgba(200, 230, 255, 0.5)';
    ctx.lineWidth = 10;
    ctx.strokeRect(0, 0, canvas.w, canvas.h);
  }

  /**
   * 渲染雷暴天降雷劫特效
   */
  renderLightningStrike(ctx, canvas, currentTime) {
    // 检查是否禁用天气特效
    if (window.showWeatherEffects === false) return;

    if (!window.thunderstormEffects || window.thunderstormEffects.length === 0) return;
    if (!window.camera) return;

    // 移除过期的特效
    window.thunderstormEffects = window.thunderstormEffects.filter(effect => currentTime < effect.startTime + effect.duration);

    for (const effect of window.thunderstormEffects) {
      const elapsed = currentTime - effect.strikeTime;

      const relX = (effect.x - window.camera.x) * renderFov + canvas.w / 2;
      const relY = (effect.y - window.camera.y) * renderFov + canvas.h / 2;

      // 闪电视觉效果
      if (elapsed < 200) {
        // 初始闪光 (0-200ms)
        const flashIntensity = 1 - elapsed / 200;
        ctx.fillStyle = `rgba(255, 255, 255, ${flashIntensity * 0.8})`;
        ctx.fillRect(0, 0, canvas.w, canvas.h);

        // 绘制主闪电路径
        this.drawLightningBolt(ctx, relX, relY - 800, relX, relY, flashIntensity);
      } else if (elapsed < 500) {
        // 持续电弧 (200-500ms)
        const arcIntensity = (500 - elapsed) / 300;
        this.drawLightningBolt(ctx, relX, relY - 800, relX, relY, arcIntensity);

        // 电击点光晕
        const gradient = ctx.createRadialGradient(relX, relY, 0, relX, relY, 100);
        gradient.addColorStop(0, `rgba(200, 220, 255, ${arcIntensity * 0.8})`);
        gradient.addColorStop(0.5, `rgba(100, 150, 255, ${arcIntensity * 0.3})`);
        gradient.addColorStop(1, 'rgba(100, 150, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(relX - 100, relY - 100, 200, 200);
      } else if (elapsed < effect.duration) {
        // 残余电弧闪烁 (500ms - duration)
        const flickerIntensity = Math.random() * 0.3 * (1 - elapsed / effect.duration);
        if (flickerIntensity > 0.05) {
          this.drawLightningBolt(ctx, relX, relY - 400, relX, relY, flickerIntensity * 0.5);
        }

        // 持续电击点光晕
        const residualIntensity = (effect.duration - elapsed) / (effect.duration - 500) * 0.3;
        const gradient = ctx.createRadialGradient(relX, relY, 0, relX, relY, 60);
        gradient.addColorStop(0, `rgba(150, 180, 255, ${residualIntensity})`);
        gradient.addColorStop(1, 'rgba(150, 180, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(relX - 60, relY - 60, 120, 120);
      }

    }
  }

  /**
   * 绘制闪电路径
   */
  drawLightningBolt(ctx, startX, startY, endX, endY, intensity) {
    ctx.save();
    ctx.strokeStyle = `rgba(200, 220, 255, ${intensity})`;
    ctx.lineWidth = 3;
    ctx.shadowColor = '#00ffff';
    ctx.shadowBlur = 15;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // 生成闪电路径
    const segments = 8;
    const points = [{ x: startX, y: startY }];

    for (let i = 1; i < segments; i++) {
      const t = i / segments;
      const x = startX + (endX - startX) * t + (Math.random() - 0.5) * 40;
      const y = startY + (endY - startY) * t;
      points.push({ x, y });
    }

    points.push({ x: endX, y: endY });

    // 绘制主闪电路径
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.stroke();

    // 绘制分支闪电
    ctx.strokeStyle = `rgba(150, 200, 255, ${intensity * 0.6})`;
    ctx.lineWidth = 1.5;
    for (let i = 2; i < points.length - 2; i++) {
      if (Math.random() > 0.5) continue;

      const branchLength = 30 + Math.random() * 50;
      const angle = Math.atan2(endY - startY, endX - startX) + (Math.random() - 0.5) * Math.PI * 0.8;

      ctx.beginPath();
      ctx.moveTo(points[i].x, points[i].y);
      ctx.lineTo(
        points[i].x + Math.cos(angle) * branchLength,
        points[i].y + Math.sin(angle) * branchLength
      );
      ctx.stroke();
    }

    ctx.restore();
  }

  /**
   * 渲染眩晕特效（黄色电圈）
   */
  renderStunEffect(ctx, canvas, currentTime) {
    if (!window.stunEffects || window.stunEffects.length === 0) return;
    if (!window.camera) return;

    // 移除过期的特效
    window.stunEffects = window.stunEffects.filter(effect => currentTime < effect.startTime + effect.duration);

    for (const effect of window.stunEffects) {
      const elapsed = currentTime - effect.startTime;

      // 计算目标位置相对于屏幕的坐标
      const relX = (effect.x - window.camera.x) * renderFov + canvas.w / 2;
      const relY = (effect.y - window.camera.y) * renderFov + canvas.h / 2;

      // 眩晕电圈强度（前500ms达到最大，然后逐渐衰减）
      let intensity;
      if (elapsed < 500) {
        intensity = elapsed / 500; // 0 到 1
      } else {
        intensity = 1 - (elapsed - 500) / (effect.duration - 500); // 1 到 0
      }
      intensity = Math.max(0, Math.min(1, intensity));

      // 绘制围绕目标的黄色电圈
      this.drawElectricCircle(ctx, relX, relY, 50, intensity, elapsed);
    }
  }

  /**
   * 绘制电圈（围绕中心的圆形电弧）
   */
  drawElectricCircle(ctx, centerX, centerY, radius, intensity, time) {
    ctx.save();

    const numArcs = 6; // 电弧数量
    const arcLength = Math.PI / 3; // 每个电弧的长度

    for (let i = 0; i < numArcs; i++) {
      // 计算每个电弧的角度（随时间旋转）
      const baseAngle = (i / numArcs) * Math.PI * 2 + time * 0.003;
      const flicker = Math.random() * 0.3; // 闪烁效果

      ctx.strokeStyle = `rgba(255, 255, 0, ${intensity * (0.7 + flicker)})`;
      ctx.lineWidth = 3;
      ctx.shadowColor = '#ffff00';
      ctx.shadowBlur = 15;
      ctx.lineCap = 'round';

      // 绘制电弧（带随机抖动）
      ctx.beginPath();
      const segments = 10;
      for (let j = 0; j <= segments; j++) {
        const t = j / segments;
        const angle = baseAngle + t * arcLength;

        // 添加径向抖动
        const jitter = (Math.random() - 0.5) * 10;
        const r = radius + jitter;

        const x = centerX + Math.cos(angle) * r;
        const y = centerY + Math.sin(angle) * r;

        if (j === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    }

    ctx.restore();
  }

  /**
   * 清除所有粒子
   */
  clearParticles() {
    this.particles = [];
  }
}

// 创建全局天气UI实例
const weatherUI = new WeatherUI();

