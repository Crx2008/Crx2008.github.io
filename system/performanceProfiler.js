/**
 * Flowr 前端性能调试系统
 *
 * 功能：
 * 1. 高精度性能标记和测量
 * 2. 自动跟踪关键操作耗时
 * 3. 可视化性能面板
 * 4. 火焰图风格的调用分析
 * 5. 父子关系追踪，避免重复计算
 *
 * 使用方法：
 *   - 性能面板：按 P 键切换显示/隐藏
 *   - 标记操作：Perf.mark('operationName')
 *   - 测量耗时：const elapsed = Perf.measure('operationName')
 *   - 自动测量：Perf.auto('functionName', fn)
 */

const Perf = (function() {
    // 性能数据存储
    const marks = new Map();        // 标记名称 -> 开始时间和调用ID
    const measurements = new Map(); // 测量名称 -> 统计数据
    const callStack = [];           // 当前调用栈（包含调用ID和父信息）
    const history = [];             // 历史记录（最近 N 条）
    const MAX_HISTORY = 1000;

    // 调用ID计数器，用于区分同一函数的不同调用
    let callIdCounter = 0;

    // 帧计数器：用于准确计算每帧调用次数
    let totalFrameCount = 0;

    // 配置
    let enabled = true;
    let panelVisible = false;
    let miniStatsVisible = true;    // 右下角小统计
    let autoTraceDepth = 0;
    const MAX_AUTO_TRACE_DEPTH = 50;

    // 统计数据结构
    function createStats() {
        return {
            count: 0,
            totalTime: 0,        // 包含子调用的总时间（自身+子调用）
            selfTime: 0,         // 独占时间（不包含子调用）
            maxTime: 0,
            minTime: Infinity,
            lastTime: 0,
            samples: [],
            maxSamples: 100,     // 保留最近100个样本
            children: new Map(), // 子调用名称 -> 时间总和
            parents: new Set()   // 父调用名称集合
        };
    }

    // 格式化时间
    function formatTime(ms) {
        if (ms < 0.001) return (ms * 1000000).toFixed(2) + 'ns';
        if (ms < 1) return (ms * 1000).toFixed(2) + 'μs';
        if (ms < 1000) return ms.toFixed(2) + 'ms';
        return (ms / 1000).toFixed(2) + 's';
    }

    // 创建性能标记
    function mark(name) {
        if (!enabled) return;
        const startTime = performance.now();
        const callId = ++callIdCounter;

        // 获取父调用信息
        const parent = callStack.length > 0 ? callStack[callStack.length - 1] : null;
        const parentName = parent ? parent.name : null;

        marks.set(name, { startTime, callId, parentName });
        callStack.push({ name, startTime, callId, depth: autoTraceDepth });

        if (autoTraceDepth < MAX_AUTO_TRACE_DEPTH) {
            autoTraceDepth++;
        }
    }

    // 结束标记并返回耗时
    function end(name) {
        if (!enabled) return 0;
        const endTime = performance.now();

        if (autoTraceDepth > 0) {
            autoTraceDepth--;
        }

        // 查找匹配的标记（支持嵌套）
        let foundIndex = -1;
        for (let i = callStack.length - 1; i >= 0; i--) {
            if (callStack[i].name === name) {
                foundIndex = i;
                break;
            }
        }

        if (foundIndex === -1) {
            console.warn(`[Perf] 未找到标记: ${name}`);
            return 0;
        }

        const record = callStack.splice(foundIndex, 1)[0];
        const markData = marks.get(name);
        const elapsed = endTime - record.startTime;

        // 计算独占时间（总时间 - 子调用时间）
        let selfElapsed = elapsed;
        if (markData && markData.childTime) {
            selfElapsed = elapsed - markData.childTime;
        }

        // 更新统计数据
        if (!measurements.has(name)) {
            measurements.set(name, createStats());
        }
        const stats = measurements.get(name);
        stats.count++;
        stats.totalTime += elapsed;
        stats.selfTime += selfElapsed;
        stats.lastTime = elapsed;
        stats.maxTime = Math.max(stats.maxTime, elapsed);
        stats.minTime = Math.min(stats.minTime, elapsed);
        stats.samples.push(elapsed);
        if (stats.samples.length > stats.maxSamples) {
            stats.samples.shift();
        }

        // 如果有父调用，更新父调用的子调用时间
        if (markData && markData.parentName) {
            const parentStats = measurements.get(markData.parentName);
            if (parentStats) {
                // 更新父调用的子调用记录
                if (!parentStats.children.has(name)) {
                    parentStats.children.set(name, 0);
                }
                parentStats.children.set(name, parentStats.children.get(name) + elapsed);

                // 记录父子关系
                stats.parents.add(markData.parentName);
            }

            // 更新父调用当前帧的子调用时间（用于计算独占时间）
            const parentMark = marks.get(markData.parentName);
            if (parentMark) {
                parentMark.childTime = (parentMark.childTime || 0) + elapsed;
            }
        }

        // 添加到历史记录
        history.push({
            name,
            elapsed,
            selfElapsed,
            timestamp: endTime,
            depth: record.depth,
            parentName: markData?.parentName || null,
            callId: record.callId
        });
        if (history.length > MAX_HISTORY) {
            history.shift();
        }

        marks.delete(name);
        return elapsed;
    }

    // 测量一个操作的耗时
    function measure(name, fn) {
        if (!enabled) return fn();
        mark(name);
        try {
            const result = fn();
            // 如果是 Promise，异步结束标记
            if (result && typeof result.then === 'function') {
                return result.then(
                    val => { end(name); return val; },
                    err => { end(name); throw err; }
                );
            }
            end(name);
            return result;
        } catch (e) {
            end(name);
            throw e;
        }
    }

    // 自动包装函数进行性能跟踪
    function auto(name, fn) {
        if (typeof fn !== 'function') {
            throw new Error('Perf.auto 第二个参数必须是函数');
        }
        return function(...args) {
            return measure(name, () => fn.apply(this, args));
        };
    }

    // 包装类方法
    function wrapClass(ClassInstance, methodNames) {
        methodNames.forEach(methodName => {
            const original = ClassInstance[methodName];
            if (typeof original === 'function') {
                const className = ClassInstance.constructor.name || 'Anonymous';
                ClassInstance[methodName] = auto(`${className}.${methodName}`, original.bind(ClassInstance));
            }
        });
    }

    // 获取统计信息
    function getStats(name) {
        return measurements.get(name);
    }

    // 获取所有统计信息（排序）
    function getAllStats() {
        const results = [];
        for (const [name, stats] of measurements) {
            results.push({
                name,
                count: stats.count,
                totalTime: stats.totalTime,
                selfTime: stats.selfTime,
                avgTime: stats.totalTime / stats.count,
                avgSelfTime: stats.selfTime / stats.count,
                maxTime: stats.maxTime,
                minTime: stats.minTime === Infinity ? 0 : stats.minTime,
                lastTime: stats.lastTime,
                parents: Array.from(stats.parents),
                children: Array.from(stats.children.entries()).map(([n, t]) => ({ name: n, time: t }))
            });
        }
        // 按独占时间排序
        results.sort((a, b) => b.selfTime - a.selfTime);
        return results;
    }

    // 构建调用树结构
    function buildCallTree() {
        // 找到所有根节点（没有父节点的调用）
        const stats = getAllStats();
        const roots = stats.filter(s => s.parents.length === 0);
        const nodeMap = new Map();

        // 创建所有节点
        stats.forEach(s => {
            nodeMap.set(s.name, {
                ...s,
                childNodes: []
            });
        });

        // 构建树结构
        stats.forEach(s => {
            const node = nodeMap.get(s.name);
            s.parents.forEach(parentName => {
                const parent = nodeMap.get(parentName);
                if (parent && !parent.childNodes.includes(node)) {
                    parent.childNodes.push(node);
                }
            });
        });

        return roots.map(r => nodeMap.get(r.name)).filter(n => n);
    }

    // 重置统计数据
    function reset(name) {
        if (name) {
            measurements.delete(name);
        } else {
            measurements.clear();
            marks.clear();
            history.length = 0;
            totalFrameCount = 0; // 重置帧计数器
        }
    }

    // 切换面板显示
    function togglePanel() {
        panelVisible = !panelVisible;
        if (panelVisible) {
            showPanel();
        } else {
            hidePanel();
        }
    }

    // 创建性能面板
    let panelElement = null;
    function createPanel() {
        if (panelElement) return;

        panelElement = document.createElement('div');
        panelElement.id = 'perf-panel';
        panelElement.style.cssText = `
            position: fixed;
            top: 10px;
            left: 10px;
            width: 520px;
            max-height: 80vh;
            background: rgba(0, 0, 0, 0.92);
            border: 2px solid #444;
            border-radius: 8px;
            color: #fff;
            font-family: 'Ubuntu', monospace;
            font-size: 12px;
            z-index: 10000;
            overflow: hidden;
            display: none;
        `;

        panelElement.innerHTML = `
            <div style="padding: 10px; background: #333; cursor: move;" id="perf-panel-header">
                <span style="font-weight: bold;">🚀 性能调试面板</span>
                <span style="float: right;">
                    <button id="perf-reset" style="padding: 2px 8px; margin-right: 5px; cursor: pointer; background: #555; border: 1px solid #666; color: #fff; border-radius: 3px;">重置</button>
                    <button id="perf-close" style="padding: 2px 8px; cursor: pointer; background: #555; border: 1px solid #666; color: #fff; border-radius: 3px;">关闭</button>
                </span>
            </div>
            <div style="padding: 10px; border-bottom: 1px solid #444;">
                <span style="color: #888;">FPS: </span><span id="perf-fps" style="color: #0f0;">--</span>
                <span style="margin-left: 20px; color: #888;">帧时间: </span><span id="perf-frametime" style="color: #0f0;">--</span>
            </div>
            <div id="perf-tabs" style="display: flex; border-bottom: 1px solid #444;">
                <button class="perf-tab active" data-tab="tree" style="flex: 1; padding: 8px; background: #444; border: none; color: #fff; cursor: pointer; border-bottom: 2px solid #4af;">调用树</button>
                <button class="perf-tab" data-tab="summary" style="flex: 1; padding: 8px; background: #333; border: none; color: #fff; cursor: pointer;">概览</button>
                <button class="perf-tab" data-tab="flame" style="flex: 1; padding: 8px; background: #333; border: none; color: #fff; cursor: pointer;">火焰图</button>
                <button class="perf-tab" data-tab="details" style="flex: 1; padding: 8px; background: #333; border: none; color: #fff; cursor: pointer;">详情</button>
            </div>
            <div id="perf-content" style="padding: 10px; overflow-y: auto; max-height: calc(80vh - 130px);">
            </div>
        `;

        document.body.appendChild(panelElement);

        // 创建右下角小统计
        createMiniStats();

        // 事件绑定
        document.getElementById('perf-close').onclick = () => togglePanel();
        document.getElementById('perf-reset').onclick = () => { reset(); updatePanel(); };

        // Tab 切换
        panelElement.querySelectorAll('.perf-tab').forEach(tab => {
            tab.onclick = () => {
                panelElement.querySelectorAll('.perf-tab').forEach(t => {
                    t.style.background = '#333';
                    t.style.borderBottom = 'none';
                    t.classList.remove('active');
                });
                tab.style.background = '#444';
                tab.style.borderBottom = '2px solid #4af';
                tab.classList.add('active');
                currentTab = tab.dataset.tab;
                updatePanel();
            };
        });

        // 拖动
        makeDraggable(panelElement, document.getElementById('perf-panel-header'));
    }

    function makeDraggable(element, handle) {
        let isDragging = false;
        let startX, startY, initialX, initialY;

        handle.onmousedown = (e) => {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            initialX = element.offsetLeft;
            initialY = element.offsetTop;
        };

        document.onmousemove = (e) => {
            if (!isDragging) return;
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            element.style.left = (initialX + dx) + 'px';
            element.style.top = (initialY + dy) + 'px';
        };

        document.onmouseup = () => {
            isDragging = false;
        };
    }

    // 右下角小统计
    let miniStatsElement = null;
    function createMiniStats() {
        if (miniStatsElement) return;

        miniStatsElement = document.createElement('div');
        miniStatsElement.id = 'perf-mini-stats';
        miniStatsElement.style.cssText = `
            position: fixed;
            bottom: 10px;
            right: 10px;
            background: rgba(0, 0, 0, 0.8);
            border: 1px solid #444;
            border-radius: 4px;
            padding: 8px 12px;
            color: #fff;
            font-family: 'Ubuntu', monospace;
            font-size: 11px;
            z-index: 9999;
            cursor: pointer;
            user-select: none;
        `;
        miniStatsElement.innerHTML = '<span id="mini-fps">FPS: --</span> | <span id="mini-frametime">Frame: --</span> | <span id="mini-top">Top: --</span>';
        miniStatsElement.onclick = () => togglePanel();
        document.body.appendChild(miniStatsElement);
    }

    function updateMiniStats() {
        if (!miniStatsElement || !miniStatsVisible) return;

        const fpsElem = document.getElementById('mini-fps');
        const frameElem = document.getElementById('mini-frametime');
        const topElem = document.getElementById('mini-top');

        if (fpsElem) {
            fpsElem.textContent = `FPS: ${fps}`;
            fpsElem.style.color = fps >= 50 ? '#0f0' : fps >= 30 ? '#fa0' : '#f44';
        }
        if (frameElem) {
            frameElem.textContent = `Frame: ${formatTime(frameTime)}`;
            frameElem.style.color = frameTime < 16 ? '#0f0' : frameTime < 33 ? '#fa0' : '#f44';
        }

        // 显示最耗时的操作（独占时间）
        if (topElem) {
            const stats = getAllStats();
            if (stats.length > 0) {
                const top = stats[0];
                topElem.textContent = `${top.name}: ${formatTime(top.avgSelfTime)}`;
            } else {
                topElem.textContent = 'Top: --';
            }
        }
    }

    function showPanel() {
        createPanel();
        panelElement.style.display = 'block';
        updatePanel();
    }

    function hidePanel() {
        if (panelElement) {
            panelElement.style.display = 'none';
        }
    }

    let currentTab = 'tree';
    function updatePanel() {
        if (!panelElement || !panelVisible) return;

        const content = document.getElementById('perf-content');

        switch (currentTab) {
            case 'tree':
                renderCallTree(content);
                break;
            case 'summary':
                renderSummary(content);
                break;
            case 'details':
                renderDetails(content);
                break;
            case 'flame':
                renderFlameGraph(content);
                break;
        }
    }

    // 渲染调用树（显示父子关系）
    function renderCallTree(container) {
        const tree = buildCallTree();

        if (tree.length === 0) {
            container.innerHTML = '<div style="color: #888; text-align: center; padding: 20px;">暂无数据</div>';
            return;
        }

        // 计算总独占时间用于百分比
        const totalSelfTime = Array.from(measurements.values()).reduce((sum, s) => sum + s.selfTime, 0);

        let html = '<div style="margin-bottom: 10px; color: #888;">调用树（显示父子关系）</div>';
        html += '<div style="font-size: 11px; color: #666; margin-bottom: 10px;">🔵 = 独占时间 | 🟢 = 包含子调用总时间</div>';

        // 递归渲染树节点
        function renderNode(node, depth = 0, isLast = true, prefix = '') {
            const indent = depth * 16;
            const percent = totalSelfTime > 0 ? (node.selfTime / totalSelfTime * 100) : 0;
            const barColor = percent > 30 ? '#f44' : percent > 15 ? '#fa0' : '#0f0';
            const childPercent = node.totalTime > 0 ? ((node.totalTime - node.selfTime) / node.totalTime * 100) : 0;

            let html = `
                <div style="padding: 4px 0;">
                    <div style="display: flex; align-items: center; margin-left: ${indent}px;">
                        ${prefix}
                        <div style="flex: 1; min-width: 0;">
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <span style="color: #fff; font-weight: ${depth === 0 ? 'bold' : 'normal'};">${node.name}</span>
                                    <span style="color: #666; font-size: 10px;">(${node.count.toLocaleString()}次)</span>
                                </div>
                                <div style="display: flex; align-items: center; gap: 10px;">
                                    <span style="color: #4af;" title="独占时间（不包含子调用）">🔵 ${formatTime(node.selfTime)}</span>
                                    <span style="color: #0a0;" title="总时间（包含子调用）">🟢 ${formatTime(node.totalTime)}</span>
                                    <span style="color: ${barColor}; font-size: 10px;">${percent.toFixed(1)}%</span>
                                </div>
                            </div>
                            <!-- 独占时间条 -->
                            <div style="background: #222; height: 6px; border-radius: 3px; margin-top: 2px; overflow: hidden; display: flex;">
                                <div style="background: #4af; width: ${(node.selfTime / node.totalTime) * 100}%; height: 100%;" title="独占时间"></div>
                                <div style="background: #0a0; flex: 1; height: 100%;" title="子调用时间"></div>
                            </div>
                        </div>
                    </div>
            `;

            // 递归渲染子节点
            if (node.childNodes && node.childNodes.length > 0) {
                const sortedChildren = node.childNodes.slice().sort((a, b) => b.selfTime - a.selfTime);
                sortedChildren.forEach((child, index) => {
                    const isLastChild = index === sortedChildren.length - 1;
                    const childPrefix = prefix + (depth === 0 ? '' : (isLast ? '    ' : '│   '));
                    const connector = isLastChild ? '└── ' : '├── ';
                    html += renderNode(child, depth + 1, isLastChild, childPrefix + connector);
                });
            }

            html += '</div>';
            return html;
        }

        html += '<div style="max-height: calc(80vh - 160px); overflow-y: auto;">';
        tree.forEach(root => {
            html += renderNode(root);
        });
        html += '</div>';

        container.innerHTML = html;
    }

    function renderSummary(container) {
        const stats = getAllStats();
        // 使用独占时间计算占比
        const totalSelfTime = stats.reduce((sum, s) => sum + s.selfTime, 0);

        let html = '<div style="margin-bottom: 10px; color: #888;">独占时间 Top 10（不包含子调用）</div>';

        html += `
            <table style="width: 100%; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid #444; color: #888;">
                    <th style="text-align: left; padding: 5px;">操作</th>
                    <th style="text-align: right; padding: 5px;">独占时间</th>
                    <th style="text-align: right; padding: 5px;">总时间</th>
                    <th style="text-align: right; padding: 5px;">占比</th>
                    <th style="text-align: right; padding: 5px;">平均</th>
                </tr>
        `;

        stats.slice(0, 10).forEach(s => {
            const percent = totalSelfTime > 0 ? (s.selfTime / totalSelfTime * 100) : 0;
            const barColor = percent > 30 ? '#f44' : percent > 15 ? '#fa0' : '#0f0';
            const selfRatio = s.totalTime > 0 ? (s.selfTime / s.totalTime * 100) : 100;

            html += `
                <tr style="border-bottom: 1px solid #333;">
                    <td style="padding: 5px; color: #fff;">
                        ${s.name}
                        ${s.parents.length > 0 ? `<span style="color: #666; font-size: 10px; margin-left: 4px;">← ${s.parents[0]}</span>` : ''}
                    </td>
                    <td style="text-align: right; padding: 5px; color: #4af;">${formatTime(s.selfTime)}</td>
                    <td style="text-align: right; padding: 5px; color: #0a0;">${formatTime(s.totalTime)}</td>
                    <td style="text-align: right; padding: 5px;">
                        <span style="color: ${barColor};">${percent.toFixed(1)}%</span>
                    </td>
                    <td style="text-align: right; padding: 5px; color: #aaa;">${formatTime(s.avgSelfTime)}</td>
                </tr>
                <tr>
                    <td colspan="5" style="padding: 0;">
                        <div style="background: #333; height: 4px; display: flex;">
                            <div style="background: #4af; width: ${selfRatio}%; height: 100%;" title="独占占比 ${selfRatio.toFixed(1)}%"></div>
                            <div style="background: #0a0; flex: 1; height: 100%;" title="子调用占比 ${(100 - selfRatio).toFixed(1)}%"></div>
                        </div>
                    </td>
                </tr>
            `;
        });

        html += '</table>';
        container.innerHTML = html;
    }

    function renderDetails(container) {
        const stats = getAllStats();
        const totalSelfTime = stats.reduce((sum, s) => sum + s.selfTime, 0);

        let html = '<div style="margin-bottom: 10px; color: #888;">详细统计（独占时间排序）</div>';

        html += `
            <table style="width: 100%; border-collapse: collapse; font-size: 11px;">
                <tr style="border-bottom: 1px solid #444; color: #888;">
                    <th style="text-align: left; padding: 4px;">操作</th>
                    <th style="text-align: right; padding: 4px;">次数</th>
                    <th style="text-align: right; padding: 4px;">独占时间</th>
                    <th style="text-align: right; padding: 4px;">总时间</th>
                    <th style="text-align: right; padding: 4px;">占比</th>
                </tr>
        `;

        stats.forEach(s => {
            const percent = totalSelfTime > 0 ? (s.selfTime / totalSelfTime * 100) : 0;
            const barColor = percent > 30 ? '#f44' : percent > 15 ? '#fa0' : '#0f0';
            const selfRatio = s.totalTime > 0 ? (s.selfTime / s.totalTime * 100) : 100;

            html += `
                <tr style="border-bottom: 1px solid #333;">
                    <td style="padding: 4px; color: #fff; max-width: 150px; overflow: hidden; text-overflow: ellipsis;" title="${s.name}${s.parents.length > 0 ? '\n父调用: ' + s.parents.join(', ') : ''}">${s.name}</td>
                    <td style="text-align: right; padding: 4px; color: #0af;">${s.count.toLocaleString()}</td>
                    <td style="text-align: right; padding: 4px; color: #4af;">${formatTime(s.selfTime)}</td>
                    <td style="text-align: right; padding: 4px; color: #0a0;">${formatTime(s.totalTime)}</td>
                    <td style="text-align: right; padding: 4px;">
                        <span style="color: ${barColor};">${percent.toFixed(1)}%</span>
                        <span style="color: #666; font-size: 9px;">(${selfRatio.toFixed(0)}%)</span>
                    </td>
                </tr>
            `;
        });

        html += '</table>';
        html += '<div style="margin-top: 10px; font-size: 10px; color: #666;">括号内数值 = 独占时间占总时间的百分比</div>';
        container.innerHTML = html;
    }

    function renderFlameGraph(container) {
        const recentHistory = history.slice(-200);
        if (recentHistory.length === 0) {
            container.innerHTML = '<div style="color: #888; text-align: center; padding: 20px;">暂无数据</div>';
            return;
        }

        const minTime = Math.min(...recentHistory.map(h => h.timestamp));
        const maxTime = Math.max(...recentHistory.map(h => h.timestamp));
        const maxElapsed = Math.max(...recentHistory.map(h => h.elapsed));
        const timeRange = maxTime - minTime || 1;

        let html = '<div style="margin-bottom: 10px; color: #888;">火焰图 (最近200次调用)</div>';
        html += '<div style="font-size: 10px; color: #666; margin-bottom: 5px;">颜色表示独占时间占比</div>';
        html += '<div style="position: relative; height: 350px; background: #222; border-radius: 4px; overflow: hidden;">';

        recentHistory.forEach(h => {
            const x = ((h.timestamp - minTime) / timeRange) * 100;
            const width = Math.max(0.5, (h.elapsed / maxElapsed) * 15);
            const y = h.depth * 18;
            const height = 16;

            // 独占时间占比决定颜色
            const selfRatio = h.elapsed > 0 ? (h.selfElapsed / h.elapsed) : 1;
            // 绿色=高独占时间，红色=低独占时间（大部分时间在子调用中）
            const hue = selfRatio * 120;
            const color = `hsl(${hue}, 70%, 45%)`;
            const borderColor = selfRatio > 0.8 ? '#4af' : '#0a0';

            html += `
                <div style="
                    position: absolute;
                    left: ${x}%;
                    top: ${y}px;
                    width: ${width}%;
                    height: ${height}px;
                    background: ${color};
                    border: 1px solid ${borderColor};
                    border-radius: 2px;
                    font-size: 8px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    padding: 1px 3px;
                    color: #fff;
                    cursor: pointer;
                " title="${h.name}: 总${formatTime(h.elapsed)} | 独${formatTime(h.selfElapsed)} (${(selfRatio*100).toFixed(0)}%)">${h.name}</div>
            `;
        });

        html += '</div>';

        // 添加图例
        html += `
            <div style="display: flex; align-items: center; justify-content: center; margin-top: 10px; font-size: 10px; color: #888;">
                <span style="margin-right: 8px;">高独占时间</span>
                <div style="width: 80px; height: 8px; background: linear-gradient(to right, #f44, #fa0, #0f0, #0a0, #44f); border-radius: 4px;"></div>
                <span style="margin-left: 8px;">低独占时间（多为子调用）</span>
            </div>
        `;

        container.innerHTML = html;
    }

    // FPS 计算
    let frameCount = 0;
    let lastFpsUpdate = performance.now();
    let fps = 0;
    let frameTime = 0;

    // 新增：直接测量每帧时间
    let lastFrameTimestamp = null;
    let frameTimes = [];
    const MAX_FRAME_SAMPLES = 60;

    function updateFps() {
        const now = performance.now();

        // 记录每帧的实际时间
        if (lastFrameTimestamp !== null) {
            const actualFrameTime = now - lastFrameTimestamp;
            frameTimes.push(actualFrameTime);
            if (frameTimes.length > MAX_FRAME_SAMPLES) {
                frameTimes.shift();
            }
        }
        lastFrameTimestamp = now;

        frameCount++;
        if (now - lastFpsUpdate >= 500) {
            fps = Math.round(frameCount / ((now - lastFpsUpdate) / 1000));

            // 使用实际帧时间的平均值
            if (frameTimes.length > 0) {
                const avgFrameTime = frameTimes.reduce((a, b) => a + b, 0) / frameTimes.length;
                frameTime = avgFrameTime;
            } else {
                frameTime = frameCount > 0 ? (now - lastFpsUpdate) / frameCount : 0;
            }

            frameCount = 0;
            lastFpsUpdate = now;

            if (panelElement && panelVisible) {
                document.getElementById('perf-fps').textContent = fps;
                document.getElementById('perf-fps').style.color = fps >= 50 ? '#0f0' : fps >= 30 ? '#fa0' : '#f44';
                document.getElementById('perf-frametime').textContent = formatTime(frameTime);
            }
            updateMiniStats();
        }
    }

    // 每帧调用
    function onFrame() {
        updateFps();
        if (panelVisible && panelElement) {
            // 每秒更新一次面板
            if (Math.random() < 0.02) {
                updatePanel();
            }
        }
    }

    // 导出控制台命令
    function exposeConsole() {
        window.Perf = {
            mark,
            end,
            measure,
            auto,
            wrapClass,
            getStats,
            getAllStats,
            buildCallTree,
            reset,
            toggle: togglePanel,
            enable: () => { enabled = true; },
            disable: () => { enabled = false; },
            dump: () => {
                console.log('=== 性能统计（独占时间排序）===');
                const stats = getAllStats();
                console.table(stats.map(s => ({
                    name: s.name,
                    count: s.count,
                    selfTime: formatTime(s.selfTime),
                    totalTime: formatTime(s.totalTime),
                    avgSelfTime: formatTime(s.avgSelfTime),
                    parents: s.parents.join(', ') || '(root)'
                })));
            },
            dumpTree: () => {
                console.log('=== 调用树 ===');
                const tree = buildCallTree();
                console.log(tree);
            },
            // 新增：详细分析命令，显示帧时间和统计时间的差距
            analyze: () => {
                const now = performance.now();
                console.log('\n%c======== 性能分析报告 ========', 'color: #ff0; font-weight: bold; font-size: 14px');

                // 获取统计数据
                const stats = getAllStats();
                const totalSelfTime = stats.reduce((sum, s) => sum + s.selfTime, 0);
                const totalWithChildren = stats.reduce((sum, s) => sum + s.totalTime, 0);

                // 显示帧时间信息
                const currentFps = fps;
                const currentFrameTime = frameTime;
                const expectedFrameTime = currentFps > 0 ? 1000 / currentFps : 0;

                console.log('%c📊 帧性能:', 'color: #0af; font-weight: bold');
                console.log(`   实际帧时间: ${formatTime(currentFrameTime)}`);
                console.log(`   FPS: ${currentFps}`);
                console.log(`   预期帧时间: ${formatTime(expectedFrameTime)}`);

                console.log('\n%c📈 统计时间 (累计):', 'color: #0f0; font-weight: bold');
                console.log(`   独占时间总和: ${formatTime(totalSelfTime)}`);
                console.log(`   包含子调用总和: ${formatTime(totalWithChildren)}`);
                console.log(`   活跃标记数: ${stats.length}`);

                // 计算差距 - 需要将帧时间转换为累计时间才能比较
                // 假设统计数据是从上次reset开始的
                const oldestTimestamp = history.length > 0 ? history[0].timestamp : now;
                const collectionTime = now - oldestTimestamp;
                const expectedTotalFrameTime = currentFrameTime * (collectionTime / (currentFrameTime || 16));

                console.log('\n%c⚠️  差距分析:', 'color: #f44; font-weight: bold');
                console.log(`   收集时长: ${formatTime(collectionTime)}`);
                console.log(`   预期累计帧时间: ~${formatTime(expectedTotalFrameTime)}`);
                console.log(`   实际统计时间: ${formatTime(totalSelfTime)}`);
                console.log(`   未标记时间占比: ${((1 - totalSelfTime / expectedTotalFrameTime) * 100).toFixed(1)}%`);

                // 显示最近的一帧详细信息
                console.log('\n%c🕐 最近一帧的详细调用链:', 'color: #fa0; font-weight: bold');
                const recentHistory = history.slice(-30);
                // 找出最近一个RAF_Frame
                const lastRafIndex = recentHistory.findIndex(h => h.name === 'RAF_Frame');
                if (lastRafIndex !== -1) {
                    const frameCalls = recentHistory.slice(lastRafIndex);
                    let totalFrameMarkedTime = 0;
                    frameCalls.forEach(h => {
                        totalFrameMarkedTime += h.selfElapsed;
                        const selfRatio = h.elapsed > 0 ? (h.selfElapsed / h.elapsed * 100) : 100;
                        console.log(`   ${h.name}: ${h.elapsed.toFixed(3)}ms (独占: ${h.selfElapsed.toFixed(3)}ms, ${selfRatio.toFixed(0)}%)`);
                    });
                    console.log(`   %c帧内标记时间总和: ${formatTime(totalFrameMarkedTime)}`, 'color: #0f0');
                    console.log(`   %c帧内未标记时间: ${formatTime(currentFrameTime - totalFrameMarkedTime)}`, 'color: #f44');
                } else {
                    console.log('   未找到RAF_Frame标记');
                    recentHistory.slice(-10).forEach((h, i) => {
                        console.log(`   ${h.name}: ${formatTime(h.elapsed)}`);
                    });
                }

                // 显示Top耗时操作
                console.log('\n%c🔝 Top 15 耗时操作 (累计独占时间):', 'color: #0f0; font-weight: bold');
                stats.slice(0, 15).forEach((s, i) => {
                    const percent = totalSelfTime > 0 ? (s.selfTime / totalSelfTime * 100) : 0;
                    const selfRatio = s.totalTime > 0 ? (s.selfTime / s.totalTime * 100) : 100;
                    // 使用实际帧数计算每帧调用次数
                    const callsPerFrame = totalFrameCount > 0 ? (s.count / totalFrameCount) : 0;
                    console.log(`   ${i + 1}. ${s.name}`);
                    console.log(`      总调用: ${s.count.toLocaleString()} (约${callsPerFrame.toFixed(2)}次/帧, 共${totalFrameCount}帧)`);
                    console.log(`      累计独占: ${formatTime(s.selfTime)} (${percent.toFixed(1)}%)`);
                    console.log(`      单次平均: ${formatTime(s.avgSelfTime)}`);
                    console.log(`      独占占比: ${selfRatio.toFixed(0)}%`);
                });

                console.log('\n%c💡 提示:', 'color: #888');
                console.log('   - 输入 Perf.reset() 重置统计后再测试');
                console.log('   - "累计独占时间" = 该操作所有调用的总耗时');
                console.log('   - "单次平均" = 该操作每次调用平均耗时');
                console.log('%c============================\n', 'color: #ff0; font-weight: bold');
            },
            // 新增：显示最近一帧的详细分解
            analyzeFrame: () => {
                console.log('\n%c======== 单帧详细分析 ========', 'color: #ff0; font-weight: bold; font-size: 14px');

                const recentHistory = history.slice(-50);
                const lastRafIndex = recentHistory.findIndex(h => h.name === 'RAF_Frame');

                if (lastRafIndex !== -1) {
                    const frameCalls = recentHistory.slice(lastRafIndex);
                    const totalMarkedTime = frameCalls.reduce((sum, h) => sum + h.selfElapsed, 0);

                    console.log(`%c帧内标记操作: ${frameCalls.length}个`, 'color: #0af');
                    console.log(`%c标记时间总和: ${formatTime(totalMarkedTime)}`, 'color: #0f0');
                    console.log(`%c当前帧时间: ${formatTime(frameTime)}`, 'color: #fa0');
                    console.log(`%c未标记时间: ${formatTime(frameTime - totalMarkedTime)}`, 'color: #f44');

                    console.log('\n%c帧内调用详情:', 'color: #888');
                    frameCalls.forEach((h, i) => {
                        const percent = totalMarkedTime > 0 ? (h.selfElapsed / totalMarkedTime * 100) : 0;
                        const bar = '█'.repeat(Math.min(50, Math.floor(percent / 2)));
                        console.log(`${(i + 1).toString().padStart(2, ' ')}. ${h.name.padEnd(30)} ${h.elapsed.toFixed(3).padStart(7)}ms (独:${h.selfElapsed.toFixed(3).padStart(7)}ms) ${bar}`);
                    });
                } else {
                    console.log('%c未找到RAF_Frame，显示最近20条记录:', 'color: #f44');
                    recentHistory.slice(-20).forEach((h, i) => {
                        console.log(`   ${i + 1}. ${h.name}: ${formatTime(h.elapsed)}`);
                    });
                }

                console.log('%c============================\n', 'color: #ff0; font-weight: bold');
            }
        };

        console.log('%c[Perf] 性能调试系统已加载', 'color: #0f0; font-weight: bold;');
        console.log('按 %cP%c 键切换性能面板', 'color: #ff0; font-weight: bold;', 'color: inherit');
        console.log('命令:');
        console.log('  %cPerf.analyze()%c   - 详细性能分析报告', 'color: #ff0;', 'color: inherit');
        console.log('  %cPerf.analyzeFrame()%c - 单帧详细分解', 'color: #ff0;', 'color: inherit');
        console.log('  %cPerf.dump()%c       - 查看统计表', 'color: #ff0;', 'color: inherit');
        console.log('  %cPerf.dumpTree()%c   - 查看调用树', 'color: #ff0;', 'color: inherit');
        console.log('  %cPerf.reset()%c      - 重置统计', 'color: #ff0;', 'color: inherit');
    }

    // 键盘快捷键
    function setupKeyboard() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'p' || e.key === 'P') {
                // 确保不是在输入框中
                if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
                    togglePanel();
                }
            }
        });
    }

    // 初始化
    function init() {
        // 防止重复初始化
        if (window.__perfInitialized) {
            console.warn('[Perf] 已经初始化过，跳过重复初始化');
            return;
        }
        window.__perfInitialized = true;

        exposeConsole();
        setupKeyboard();

        // 自动跟踪 requestAnimationFrame - 只包装一次
        if (!window.__rafWrapped) {
            const originalRAF = window.requestAnimationFrame;
            window.requestAnimationFrame = function(callback) {
                return originalRAF.call(window, function(timestamp) {
                    totalFrameCount++; // 每帧递增计数器
                    mark('RAF_Frame');
                    callback(timestamp);
                    end('RAF_Frame');
                    onFrame();
                });
            };
            window.__rafWrapped = true;
            console.log('[Perf] 已包装 requestAnimationFrame');
        }

        console.log('[Perf] 已自动启用 requestAnimationFrame 跟踪');
    }

    // 立即初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // 导出主要接口
    return {
        mark,
        end,
        measure,
        auto,
        wrapClass,
        getStats,
        getAllStats,
        buildCallTree,
        reset,
        toggle: togglePanel,
        dump: () => {
            console.log('=== 性能统计（独占时间排序）===');
            console.table(window.Perf.getAllStats().map(s => ({
                name: s.name,
                count: s.count,
                selfTime: s.selfTime.toFixed(2) + 'ms',
                totalTime: s.totalTime.toFixed(2) + 'ms',
                avgSelfTime: s.avgSelfTime.toFixed(3) + 'ms'
            })));
        },
        analyze: () => window.Perf.analyze(),
        analyzeFrame: () => window.Perf.analyzeFrame()
    };
})();
