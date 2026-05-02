let ver = document['scripts'][0x0]['src']['split']('v=')[0x1];
if (!ver && location['host'] == 'localhost:8080')
    ver = 'Developer';
let servers = { 'ws://localhost:8080/ws': 'Local' };
HOST = 'wss://thoita-prod-7gydki1s27ab5d0f-1398459068.ap-shanghai.run.wxcloudrun.com/ws', HOST = 'ws://localhost:8080/ws', HOST = 'wss://wss.thoita.com:17033/ws';
let ws;
window['state'] = localStorage['getItem']('hashedPassword') === null ? 'account' : 'menu', window['skipLogin'] = window['state'] === 'account' ? ![] : !![], window['connected'] = ![], window['spectating'] = ![], window['reconnectTries'] = 0x14, window['reconnecting'] = ![], window['reconnectStartTime'] = null, window['lastMessageTimeReceived'] = performance['now'](), window['keepAlive'] = [];
function initWS() {
    ws = new WebSocket(HOST), ws['binaryType'] = 'arraybuffer', ws['onopen'] = handleOpen, ws['onmessage'] = handleMessage, ws['onclose'] = handleClose;
}
function startKeepAlive() {
    window['keepAlive'] = [
        setInterval(() => {
            window['state'] !== 'game' && send({ 'ping': !![] });
        }, 0x4e20),
        setInterval(() => {
            window['state'] == 'game' && !window['reconnecting'] && performance['now']() - window['lastMessageTimeReceived'] > 0x1388 && (ws['onopen'] = null, ws['onmessage'] = null, ws['onclose'] = null, ws['onerror'] = null, ws['close'](0x3e8, 'manual\x20reconnection'), handleClose(), window['lastMessageTimeReceived'] = performance['now']());
        }, 0x3e8)
    ];
}
function stopKeepAlive() {
    window['keepAlive']['forEach'](_0x4a6a07 => clearInterval(_0x4a6a07));
}
function handleOpen() {
    startKeepAlive(), window['lastMessageTimeReceived'] = performance['now'](), ws['onerror'] = () => {
    }, ws['binaryType'] = 'arraybuffer', window['connected'] = !![], window['connectedTime'] = window['time'], document['querySelector']('.grid')['classList']['add']('show');
    if (window['reconnecting'] === !![] && !window['connectBackMainServ']) {
        const _0x11eb40 = {
            'reconnect': !![],
            'id': window['reconnectId']
        };
        window['connectOtherServerId'] !== undefined ? (_0x11eb40['connectOtherServerId'] = window['connectOtherServerId'], delete window['connectOtherServerId'], window['state'] = 'menu') : window['state'] = 'game', setTimeout(() => {
            ws['readyState'] === WebSocket['OPEN'] ? (ws['send'](msgpackr['pack'](_0x11eb40)), wsMsgQueue = [], window['reconnecting'] = ![], window['reconnectTries'] = 0x14, window['reconnectStartTime'] = null, setTimeout(sendQueuedMessages, 0x64)) : (console['error']('❌\x20[重连]\x20WebSocket\x20未准备好'), window['reconnecting'] = ![]);
        }, 0x32);
    } else
        window['connectBackMainServ'] && (window['state'] = 'menu', delete window['connectBackMainServ']), window['skipLogin'] === !![] && window['reconnecting'] !== !![] && send({
            'login': {
                'username': username,
                'hashedPassword': hashedPassword,
                'hashedPassword2': hashedPassword2
            }
        });
}
function handleMessage(_0x8cfd0f) {
    window['lastMessageTimeReceived'] = performance['now']();
    if (_0x8cfd0f['data']['byteLength'] % 0x4 === 0x0) {
        const _0x2e5c95 = new Float32Array(_0x8cfd0f['data']), _0x1918ba = _0x2e5c95[0x0];
        if (typeof processRawMessage[_0x1918ba] === 'function') {
            processRawMessage[_0x1918ba](_0x2e5c95);
            return;
        }
    }
    let _0x43bef1;
    try {
        _0x43bef1 = msgpackr['unpack'](_0x8cfd0f['data']);
    } catch (_0x318d63) {
        console['error']('[handleMessage]\x20msgpack\x20解析失败,\x20window.state=', window['state'], ',\x20字节长度=', _0x8cfd0f['data']['byteLength'], ',\x20错误=', _0x318d63);
        return;
    }
    window['state'] === 'game' || window['state'] === 'dead' ? processGameMessage(_0x43bef1) : processMenuMessage(_0x43bef1);
}
let isHandlingClose = ![];
function handleClose(_0x18882a) {
    if (isHandlingClose)
        return;
    isHandlingClose = !![], stopKeepAlive(), delete window['connectedTime'], window['state'] = 'disconnected';
    if (_0x18882a && _0x18882a['reason'] && _0x18882a['reason'] != '') {
        window['connected'] = ![], isHandlingClose = ![];
        return;
    }
    if (![
            'game',
            'disconnected'
        ]['includes'](window['state']) && window['connectOtherServerId'] === undefined)
        window['connected'] = ![], isHandlingClose = ![];
    else {
        if (window['reconnectTries'] > 0x0) {
            if (checkReconnectTimeout()) {
                isHandlingClose = ![];
                return;
            }
            wsMsgQueue['length'] = 0x0, send = _0x140cfd => {
                wsMsgQueue['push'](_0x140cfd);
            }, window['reconnecting'] = !![], setTimeout(() => {
                isHandlingClose = ![], attemptReconnect();
            }, timeBetweenReconnects(window['reconnectTries']));
        } else
            isHandlingClose = ![];
    }
}
function attemptReconnect() {
    !window['reconnectStartTime'] && (window['reconnectStartTime'] = Date['now']()), initWS(), window['reconnectTries']--;
}
function timeBetweenReconnects(_0xf1d924) {
    return 0x1f4 + 0x3e8 * (0x14 - _0xf1d924);
}
function checkReconnectTimeout() {
    const _0xd67cc = 0x7530;
    if (window['reconnectStartTime'] && Date['now']() - window['reconnectStartTime'] > _0xd67cc)
        return console['error']('❌\x20[重连]\x20重连超时（30秒），会话已过期'), window['reconnectTries'] = 0x0, window['reconnecting'] = ![], window['reconnectStartTime'] = null, typeof alert !== 'undefined' ? alert('连接已断开，请刷新页面重新连接') : console['log']('⚠️\x20连接已断开，请刷新页面重新连接'), !![];
    return ![];
}
initWS(), window['onload'] = () => {
    resize(), document['querySelector']('.loader')['style']['animation'] = 'fadeOut\x20.2s', setTimeout(() => {
        document['querySelector']('.loader')['remove']();
    }, 0xc8 - 0x3e8 / 0x3c * 0x2);
    for (let _0x27e0c8 = 0x0; _0x27e0c8 < onLoadFunctions['length']; _0x27e0c8++) {
        onLoadFunctions[_0x27e0c8]();
    }
    onLoadFunctions['length'] = 0x0, window['loaded'] = !![], send = (_0x3ca63a, _0x57f72c) => {
        if (_0x57f72c || !window['reconnecting']) {
            if (ws['readyState'] === WebSocket['OPEN'])
                try {
                    ws['send'](msgpackr['pack'](_0x3ca63a));
                } catch (_0x568dd5) {
                    console['error']('[send]\x20发送消息失败:', _0x568dd5, ',\x20ws.readyState=', ws['readyState']);
                }
            else
                console['warn']('[send]\x20WebSocket\x20未就绪,\x20ws.readyState=', ws['readyState'], ',\x20消息已丢弃:', Object['keys'](_0x3ca63a)[0x0]);
        } else
            console['log']('[send]\x20正在重连中,\x20消息已丢弃:', Object['keys'](_0x3ca63a)[0x0]);
    };
    for (let _0xe77d3 = 0x0; _0xe77d3 < wsMsgQueue['length']; _0xe77d3++) {
        send(wsMsgQueue[_0xe77d3]);
    }
};
const playButton = document['querySelector']('.play-btn'), playText = document['querySelector']('.play-text');
let lastAttempt = Date['now']();
playButton['onclick'] = _0x9708ba => {
    const _0x51a14c = biomeManager['getCurrentBiome']();
    if (playText['getAttribute']('stroke') === 'Exit\x20')
        closeSquadUI();
    else {
        if (playText['getAttribute']('stroke') === 'Ready')
            changeReady(!window['ready']);
        else {
            if (!window['username'] || window['state'] === 'account') {
                const _0x19ea75 = localStorage['getItem']('username'), _0x3fdc0f = localStorage['getItem']('hashedPassword'), _0x4490b6 = localStorage['getItem']('hashedPassword2');
                _0x19ea75 && _0x3fdc0f && _0x4490b6 ? send({
                    'login': {
                        'username': _0x19ea75,
                        'hashedPassword': _0x3fdc0f,
                        'hashedPassword2': _0x4490b6
                    }
                }) : (alert('请先登录'), location['reload']());
                return;
            }
            if (!window['connected'])
                return;
            delete window['squadUICloseTime'], window['squadUIEnabled'] = !![], playText['setAttribute']('stroke', 'Exit\x20'), playButton['classList']['add']('exit'), squadUI['initRenderTimer'] = 0x0, squadUI['buttonAlpha'] = 0x0, changeReady(![]);
        }
    }
};
let wsMsgQueue = [], send = _0x240e8 => {
        wsMsgQueue['push'](_0x240e8);
    };
function sendQueuedMessages() {
    let _0x4a9ef3 = setInterval(() => {
        if (wsMsgQueue['length'] == 0x0) {
            clearInterval(_0x4a9ef3), send = _0x1d27f9 => {
                ws['send'](msgpackr['pack'](_0x1d27f9));
            };
            return;
        }
        ws['send'](msgpackr['pack'](wsMsgQueue['shift']()));
    }, 0x64);
}
if (location['href']['endsWith']('/3d')) {
    window['is3D'] = !![];
    const t = document['createElement']('script');
    t['type'] = 'module', t['src'] = 'systems/3d.js', document['body']['append'](t);
}
window['simulateDisconnect'] = function () {
    if (!ws || ws['readyState'] !== WebSocket['OPEN']) {
        console['warn']('⚠️\x20WebSocket\x20未连接，无法模拟断网');
        return;
    }
    console['log']('🔌\x20[模拟断网]\x20主动断开\x20WebSocket\x20连接...'), console['log']('📊\x20当前状态:\x20state=' + window['state'] + ',\x20reconnectTries=' + window['reconnectTries']), ws['close'](0x3e8), console['log']('✅\x20[模拟断网]\x20已触发，重连逻辑将自动运行'), console['log']('💡\x20提示:\x20在控制台输入\x20simulateDisconnect()\x20可再次模拟断网');
}, window['cancelReconnect'] = function () {
    console['log']('🛑\x20[取消重连]\x20停止所有重连尝试'), window['reconnectTries'] = 0x0;
}, window['getReconnectStatus'] = function () {
    return {
        'state': window['state'],
        'reconnecting': window['reconnecting'],
        'reconnectTries': window['reconnectTries'],
        'reconnectId': window['reconnectId'],
        'connected': window['connected'],
        'wsReadyState': ws?.['readyState'],
        'wsReadyStateText': ws?.['readyState'] === WebSocket['CONNECTING'] ? 'CONNECTING' : ws?.['readyState'] === WebSocket['OPEN'] ? 'OPEN' : ws?.['readyState'] === WebSocket['CLOSING'] ? 'CLOSING' : ws?.['readyState'] === WebSocket['CLOSED'] ? 'CLOSED' : 'UNKNOWN'
    };
}, console['log']('🔧\x20开发调试接口已加载:'), console['log']('\x20\x20-\x20simulateDisconnect()\x20:\x20模拟断网测试重连'), console['log']('\x20\x20-\x20cancelReconnect()\x20\x20\x20\x20\x20:\x20取消所有重连尝试'), console['log']('\x20\x20-\x20getReconnectStatus()\x20\x20:\x20查看重连状态'), console['log']('\x20\x20-\x20sendLeaveGame()\x20\x20\x20\x20\x20\x20\x20:\x20手动发送\x20leaveGame\x20消息（调试用）'), window['sendLeaveGame'] = function () {
    console['log']('🔧\x20[调试]\x20手动发送\x20leaveGame\x20消息'), console['log']('📊\x20当前状态:', window['getReconnectStatus']()), send({
        'leaveGame': !![],
        'real': !![]
    }), console['log']('✅\x20[调试]\x20leaveGame\x20消息已发送');
};
