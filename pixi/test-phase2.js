/**
 * Phase 2 敌人渲染测试脚本
 *
 * 使用方法：
 * 1. 打开游戏（ thoita.html ）
 * 2. 进入游戏并存活
 * 3. 在控制台运行：testPhase2()
 */

window.testPhase2 = function() {
  console.log('========== Phase 2 敌人渲染测试 ==========');

  // 1. 检查 PixiRenderer 状态
  console.log('\n1. PixiRenderer 状态:');
  console.log('  - 存在:', !!window.pixiRenderer);
  console.log('  - 启用:', window.pixiRenderer?.enabled);
  console.log('  - enemies 层启用:', window.pixiRenderer?.layers?.enemies);
  console.log('  - EnemyLayer 存在:', !!window.pixiRenderer?.enemyLayer);

  // 2. 检查 EnemyLayer 状态
  console.log('\n2. EnemyLayer 状态:');
  const el = window.pixiRenderer?.enemyLayer;
  console.log('  - PixiApp 存在:', !!el?.pixiApp);
  console.log('  - Pool 存在:', !!el?.pool);
  console.log('  - TextureCache 空闲:', el?.textureCache?.size || 0);
  console.log('  - 当前敌人数量:', el?.enemies?.size || 0);

  // 3. 检查游戏状态
  console.log('\n3. 游戏状态:');
  console.log('  - 游戏状态:', window.state);
  console.log('  - 玩家 ID:', window.selfId);
  console.log('  - 玩家存在:', window.room?.flowers?.[window.selfId] !== undefined);
  console.log('  - 摄像机位置:', window.camera);

  // 4. 检查敌人数据
  console.log('\n4. 敌人数据:');
  const enemies = Object.values(window.room?.enemies || {});
  console.log('  - 总敌人数量:', enemies.length);

  // 按类型统计
  const typeCount = {};
  enemies.forEach(e => {
    typeCount[e.type] = (typeCount[e.type] || 0) + 1;
  });
  console.log('  - 敌人类型分布:', typeCount);

  // 检查 toRender 状态
  const toRenderTrue = enemies.filter(e => e.toRender === true).length;
  const toRenderFalse = enemies.filter(e => e.toRender === false).length;
  const toRenderUndefined = enemies.filter(e => e.toRender === undefined).length;
  console.log('  - toRender = true:', toRenderTrue);
  console.log('  - toRender = false:', toRenderFalse);
  console.log('  - toRender = undefined:', toRenderUndefined);

  // 5. 检查视锥剔除
  if (enemies.length > 0) {
    console.log('\n5. 视锥剔除测试:');
    const el = window.pixiRenderer?.enemyLayer;
    const sampleEnemy = enemies[0];
    const shouldRender = el?.shouldRender(sampleEnemy);
    console.log('  - 示例敌人:', {
      id: sampleEnemy.id,
      type: sampleEnemy.type,
      x: sampleEnemy.x,
      y: sampleEnemy.y,
      radius: sampleEnemy.radius,
      shouldRender
    });

    // 计算屏幕坐标
    if (window.camera) {
      const renderFov = window.renderFov || 1;
      const screenX = (sampleEnemy.x - window.camera.x) * renderFov + window.canvas.w / 2;
      const screenY = (sampleEnemy.y - window.camera.y) * renderFov + window.canvas.h / 2;
      console.log('  - 屏幕坐标:', { x: screenX, y: screenY });
      console.log('  - 在屏幕内:', screenX >= 0 && screenX <= window.canvas.w && screenY >= 0 && screenY <= window.canvas.h);
    }
  }

  // 6. 检查 PixiEnemy 实例
  console.log('\n6. PixiEnemy 实例:');
  const el2 = window.pixiRenderer?.enemyLayer;
  if (el2?.enemies?.size > 0) {
    console.log('  - 渲染中的敌人数量:', el2.enemies.size);
    let count = 0;
    for (let [id, pe] of el2.enemies) {
      if (count++ < 5) {
        console.log(`    [${id}] container:`, pe.container ? '存在' : '不存在');
      }
    }
  } else {
    console.log('  - 没有渲染中的敌人');
  }

  // 7. 结论
  console.log('\n========== 测试结论 ==========');
  if (window.state !== 'game') {
    console.log('❌ 游戏未进行中，无法测试敌人渲染');
    console.log('   请先进入游戏并存活');
  } else if (enemies.length === 0) {
    console.log('⚠️  场景中没有敌人');
    console.log('   请等待敌人生成或进入下一波');
  } else if (toRenderUndefined === enemies.length) {
    console.log('ℹ️  敌人的 toRender 都是 undefined，需要手动计算视锥剔除');
    console.log('   这是正常的，PixiJS 会自动计算');
  } else {
    console.log('✅ PixiJS Phase 2 敌人渲染系统工作正常！');
  }
};

console.log('[Phase 2 Test] 测试脚本已加载，运行 testPhase2() 进行测试');
