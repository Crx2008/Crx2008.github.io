/**
 * Phase 1 测试脚本
 * 测试背景、网格、世界边界的 PixiJS 渲染
 */

function testPhase1() {
    console.log('=== Phase 1 测试 ===');

    // 1. 检查所有类是否加载
    const checks = [
        { name: 'BackgroundLayer', obj: window.BackgroundLayer },
        { name: 'GridLayer', obj: window.GridLayer },
        { name: 'WorldBorderLayer', obj: window.WorldBorderLayer },
        { name: 'CameraController', obj: window.CameraController },
    ];

    let allLoaded = true;
    checks.forEach(check => {
        if (check.obj) {
            console.log(`✅ ${check.name} 已加载`);
        } else {
            console.error(`❌ ${check.name} 未加载`);
            allLoaded = false;
        }
    });

    if (!allLoaded) {
        console.error('❌ Phase 1 测试失败：部分模块未加载');
        return false;
    }

    // 2. 检查 PixiRenderer 是否有新方法
    if (typeof window.pixiRenderer?.initLayers === 'function') {
        console.log('✅ PixiRenderer.initLayers() 方法存在');
    } else {
        console.error('❌ PixiRenderer.initLayers() 方法不存在');
        return false;
    }

    if (typeof window.pixiRenderer?.updateLayers === 'function') {
        console.log('✅ PixiRenderer.updateLayers() 方法存在');
    } else {
        console.error('❌ PixiRenderer.updateLayers() 方法不存在');
        return false;
    }

    console.log('\n✅ Phase 1 所有检查通过！');
    console.log('\n使用方法：');
    console.log('1. 初始化 PixiJS：');
    console.log('   window.pixiApp.init(document.getElementById("canvas"));');
    console.log('   window.pixiRenderer.initLayers();');
    console.log('');
    console.log('2. 启用渲染器和层：');
    console.log('   window.pixiRenderer.enable();');
    console.log('   window.pixiRenderer.enableLayer("background");');
    console.log('   window.pixiRenderer.enableLayer("grid");');
    console.log('   window.pixiRenderer.enableLayer("worldBorder");');
    console.log('');
    console.log('3. 或使用快捷命令：');
    console.log('   debugPixi.enableAll();');
    console.log('   debugPixi.enableLayer("background");');
    console.log('   debugPixi.enableLayer("grid");');
    console.log('   debugPixi.enableLayer("worldBorder");');

    return true;
}

window.testPhase1 = testPhase1;
