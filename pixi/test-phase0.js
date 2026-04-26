/**
 * Phase 0 测试脚本
 * 在浏览器控制台运行以验证基础架构
 */

window.testPhase0 = function() {
    console.log('=== Phase 0 基础架构测试 ===');

    // 1. 检查 PixiJS 加载
    if (typeof PIXI === 'undefined') {
        console.error('❌ PixiJS 未加载');
        return false;
    }
    console.log('✅ PixiJS 已加载，版本:', PIXI.VERSION);

    // 2. 检查 PixiApp 初始化
    if (!window.pixiApp) {
        console.error('❌ pixiApp 未创建');
        return false;
    }
    console.log('✅ pixiApp 已创建');

    if (!window.pixiApp.initialized) {
        console.warn('⚠️  pixiApp 未初始化（需要等待 resize）');
    } else {
        console.log('✅ pixiApp 已初始化');
        console.log('   - Canvas 尺寸:', window.pixiApp.app.renderer.width, 'x', window.pixiApp.app.renderer.height);
    }

    // 3. 检查 PixiRenderer
    if (!window.pixiRenderer) {
        console.error('❌ pixiRenderer 未创建');
        return false;
    }
    console.log('✅ pixiRenderer 已创建');
    console.log('   - 状态:', window.pixiRenderer.getStatus());

    // 4. 检查 TextureCache
    if (!window.textureCache) {
        console.error('❌ textureCache 未创建');
        return false;
    }
    console.log('✅ textureCache 已创建');

    // 5. 检查 ShapeConverter
    if (typeof ShapeConverter === 'undefined') {
        console.error('❌ ShapeConverter 未加载');
        return false;
    }
    console.log('✅ ShapeConverter 已加载');

    // 6. 检查双 Canvas
    const canvas2d = document.getElementById('canvas');
    const pixiCanvas = document.getElementById('pixi-canvas');

    if (!canvas2d) {
        console.error('❌ Canvas 2D 未找到');
        return false;
    }
    console.log('✅ Canvas 2D 存在');

    if (!pixiCanvas && window.pixiApp.initialized) {
        console.error('❌ PixiJS Canvas 未找到');
        return false;
    }
    if (pixiCanvas) {
        console.log('✅ PixiJS Canvas 存在');
        console.log('   - z-index:', pixiCanvas.style.zIndex);
    }

    console.log('\n=== Phase 0 测试完成 ===');
    console.log('所有基础组件已就绪！');
    console.log('\n可用的调试命令:');
    console.log('- debugPixi.status() - 查看渲染器状态');
    console.log('- debugPixi.enable() - 启用 PixiJS');
    console.log('- debugPixi.enableLayer("background") - 启用某层');
    console.log('- debugTextureCache.stats() - 查看纹理缓存统计');

    return true;
};

console.log('[Phase 0 Test] 测试脚本已加载，运行 testPhase0() 进行测试');
