/**
 * SpritePool - 通用对象池
 * 用于优化 Sprite 创建/销毁,避免频繁 GC
 */
console.log('[SpritePool] 类已加载');

class SpritePool {
  /**
   * @param {Function} createFn - 创建新对象的函数
   * @param {Function} resetFn - 重置对象的函数（释放时调用）
   */
  constructor(createFn, resetFn) {
    this.pool = [];
    this.createFn = createFn;
    this.resetFn = resetFn;
  }

  /**
   * 从池中获取一个对象（如果池为空则创建新的）
   * @returns {*} 对象实例
   */
  get() {
    if (this.pool.length > 0) {
      const obj = this.pool.pop();
      return obj;
    }
    return this.createFn();
  }

  /**
   * 将对象释放回池中
   * @param {*} obj - 要释放的对象
   */
  release(obj) {
    if (this.resetFn) {
      this.resetFn(obj);
    }
    this.pool.push(obj);
  }

  /**
   * 预创建指定数量的对象
   * @param {number} count - 预创建数量
   */
  preallocate(count) {
    for (let i = 0; i < count; i++) {
      this.pool.push(this.createFn());
    }
  }

  /**
   * 清空池
   */
  clear() {
    this.pool.length = 0;
  }

  /**
   * 获取池中可用对象数量
   * @returns {number}
   */
  get size() {
    return this.pool.length;
  }
}

// 暴露到全局作用域
window.SpritePool = SpritePool;
