const noEnemyBox = [];
class enemyBox {
    constructor(_0x59d709, _0x4ee4b9, _0x23da0a, _0x1932a6, _0x249294, _0x16f8ba, _0x5c0c67, _0x3be0e6) {
        this['enemy'] = new Enemy({
            ..._0x59d709,
            'radius': 0xb6
        }), this['enemy']['toRenderUi'] = ![], this['enemy']['isInEnemyBox'] = !![], this['enemy']['render']['radius'] = 0x0, this['enemy']['angle'] = -Math['PI'] / 0x4, this['x'] = _0x1932a6, this['y'] = _0x249294, this['w'] = 0x0, this['h'] = 0x0, this['type'] = _0x23da0a, this['rarity'] = Number(_0x4ee4b9), this['targetW'] = _0x16f8ba, this['targetH'] = _0x5c0c67, this['targetX'] = _0x1932a6, this['targetY'] = _0x249294, this['amount'] = 0x1, this['deleteTimer'] = 0x0, this['delete'] = ![], this['isBoss'] = _0x3be0e6;
    }
    ['update']() {
        this['toDelete'] ? (this['deleteTimer'] -= dt, this['deleteTimer'] < 0x0 && (this['delete'] = !![])) : this['deleteTimer'] = 0xc8, dt < 0x64 ? (this['x'] += (this['targetX'] - this['x']) * dt / 0x64, this['y'] += (this['targetY'] - this['y']) * dt / 0x64, this['w'] += (this['targetW'] - this['w']) * dt / 0x64, this['h'] += (this['targetH'] - this['h']) * dt / 0x64) : (this['x'] = this['targetX'], this['y'] = this['targetY'], this['w'] = this['targetW'], this['h'] = this['targetH']);
    }
}
function createEnemyBox(_0x142719, _0x3923a8) {
    if (_0x142719['ownerId'] !== undefined)
        return;
    let _0x1c0b3a = ![], _0x134590 = ![];
    if (_0x142719['isBoss'])
        _0x142719['rarity'] += 0x7d;
    for (let _0x5651b9 of _0x3923a8['enemyBoxes']) {
        if (_0x5651b9['delete'])
            continue;
        if (_0x5651b9['type'] == _0x142719['type']) {
            _0x1c0b3a = !![];
            if (_0x5651b9['rarity'] == _0x142719['rarity']) {
                _0x134590 = !![], _0x5651b9['amount']++, _0x5651b9['lastAmountChangedTime'] = time;
                _0x5651b9['toDelete'] == !![] && (_0x5651b9['toDelete'] = ![], _0x5651b9['delete'] = ![], _0x5651b9['targetW'] = enemyBoxSize, _0x5651b9['targetH'] = enemyBoxSize);
                break;
            }
        }
    }
    if (_0x1c0b3a == ![]) {
        let _0x433b67 = [];
        for (let _0x14ddfd = 0x0; _0x14ddfd < _0x3923a8['enemyBoxes']['length']; _0x14ddfd++) {
            let _0x24d20b = _0x3923a8['enemyBoxes'][_0x14ddfd];
            !_0x433b67['includes'](_0x24d20b['type']) && _0x433b67['push'](_0x24d20b['type']), _0x24d20b['targetX'] -= enemyBoxBoundSize / 0x2;
        }
        _0x3923a8['enemyBoxes']['push'](new enemyBox(_0x142719, Number(_0x142719['rarity']), _0x142719['customType'] ?? _0x142719['type'], enemyBoxBaseX + _0x433b67['length'] * enemyBoxBoundSize / 0x2, enemyBoxBaseY, enemyBoxSize, enemyBoxSize, _0x142719['isBoss']));
    } else {
        if (_0x134590 == ![]) {
            let _0x2ec0a0 = enemyBoxBaseY, _0x7873b1 = 0x0;
            for (let _0xa000e6 = 0x0; _0xa000e6 < _0x3923a8['enemyBoxes']['length']; _0xa000e6++) {
                let _0x54d363 = _0x3923a8['enemyBoxes'][_0xa000e6];
                _0x54d363['type'] == _0x142719['type'] && (_0x7873b1 = _0x54d363['targetX'], Number(_0x54d363['rarity']) < Number(_0x142719['rarity']) ? _0x2ec0a0 += enemyBoxOverlapSize : _0x54d363['targetY'] += enemyBoxOverlapSize);
            }
            _0x3923a8['enemyBoxes']['push'](new enemyBox(_0x142719, Number(_0x142719['rarity']), _0x142719['customType'] ?? _0x142719['type'], _0x7873b1, _0x2ec0a0, enemyBoxSize, enemyBoxSize, _0x142719['isBoss'])), _0x3923a8['enemyBoxes']['sort'](function (_0x59ef16, _0x4883c7) {
                return Number(_0x59ef16['rarity']) - Number(_0x4883c7['rarity']);
            });
        }
    }
    alignEnemyBoxes();
}
function alignEnemyBoxes(_0xa6dd17 = null) {
    let _0x2b92cb = [], _0x278f32 = {};
    for (let _0x4f1430 = 0x0; _0x4f1430 < room['enemyBoxes']['length']; _0x4f1430++) {
        let _0x305217 = room['enemyBoxes'][_0x4f1430];
        if (_0x305217 === _0xa6dd17)
            continue;
        _0x278f32[_0x305217['type']] === undefined ? (_0x278f32[_0x305217['type']] = [_0x305217], _0x2b92cb['push'](_0x305217['type'])) : _0x278f32[_0x305217['type']]['push'](_0x305217);
    }
    let _0x54c323 = enemyBoxBaseX - enemyBoxBoundSize * (Object['keys'](_0x278f32)['length'] - 0x1) / 0x2;
    for (let _0x458a52 = 0x0; _0x458a52 < _0x2b92cb['length']; _0x458a52++) {
        const _0x32cab0 = _0x2b92cb[_0x458a52];
        for (let _0xf2bd79 = 0x0; _0xf2bd79 < _0x278f32[_0x32cab0]['length']; _0xf2bd79++) {
            const _0x11d379 = _0x278f32[_0x32cab0][_0xf2bd79];
            if (_0x11d379 === _0xa6dd17)
                continue;
            _0x11d379['targetX'] = _0x54c323;
        }
        _0x54c323 += enemyBoxBoundSize;
    }
}