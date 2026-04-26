/**
 * CameraController.js - 相机变换同步
 *
 * 职责：
 * - 读取 window.camera 和 renderFov
 * - 同步 worldContainer 的 position 和 scale
 * - 处理 cameraShake
 */

class CameraController {
    constructor(worldContainer) {
        this.worldContainer = worldContainer;
    }

    /**
     * 更新相机变换
     * @param {number} canvasWidth - Canvas 宽度
     * @param {number} canvasHeight - Canvas 高度
     */
    update(canvasWidth, canvasHeight) {
        if (!window.camera || !window.renderFov) return;

        const camera = window.camera;
        const fov = window.renderFov;

        // Canvas 2D 使用: translate(canvas.w/2 - camera.x * fov, canvas.h/2 - camera.y * fov)
        let offsetX = canvasWidth / 2 - camera.x * fov;
        let offsetY = canvasHeight / 2 - camera.y * fov;

        // 应用相机抖动
        if (window.cameraShake) {
            offsetX += window.cameraShake.offsetX || 0;
            offsetY += window.cameraShake.offsetY || 0;
        }

        // 更新 worldContainer
        this.worldContainer.position.set(offsetX, offsetY);
        this.worldContainer.scale.set(fov, fov);
    }
}

window.CameraController = CameraController;
