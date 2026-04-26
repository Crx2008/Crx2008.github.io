class CollectedMenu {
    constructor() {
        this['petalContainers'] = {};
    }
    ['addPetalContainer'](_0x384509) {
        this['petalContainers'][_0x384509['rarity']] === undefined && (this['petalContainers'][_0x384509['rarity']] = []);
        let _0x46ff7f = this['petalContainers'][_0x384509['rarity']]['find'](_0x18f44f => _0x18f44f['type'] === _0x384509['type']);
        _0x46ff7f !== undefined ? (_0x46ff7f['amount'] += _0x384509['amount'], _0x46ff7f['lastAmountChangedTime'] = time) : (_0x384509['w'] = 0x34, _0x384509['h'] = 0x34, _0x384509['collectedAnimation'] = 0x0, this['petalContainers'][_0x384509['rarity']]['unshift'](_0x384509)), this['petalContainers'][_0x384509['rarity']]['sort']();
    }
    ['calculateDimensions']() {
        const _0x4322b3 = 0x4, _0xb09aae = 0xf, _0x302281 = 0x28, _0x30da61 = 0x32;
        let _0x3e237f = 0x0;
        for (let _0x37c9c9 = numberOfRarities - 0x1; _0x37c9c9 >= 0x0; _0x37c9c9--) {
            if (this['petalContainers'][_0x37c9c9] === undefined)
                continue;
            _0x3e237f += this['petalContainers'][_0x37c9c9]['length'];
        }
        this['dimensions'] = {
            'x': canvas['w'] - 0x154,
            'y': 0x14,
            'w': 0x140,
            'h': 0x14 + 0x2 * _0xb09aae + _0x302281 + _0x30da61 + Math['min'](0xd, Math['floor']((_0x3e237f - 0x1) / _0x4322b3)) * (_0x30da61 + 0xc)
        }, this['w'] = this['dimensions']['w'], this['h'] = this['dimensions']['h'];
    }
    ['draw']() {
        this['calculateDimensions'](), ctx['fillStyle'] = 'black', ctx['lineWidth'] = 0x8, ctx['translate'](this['dimensions']['x'], this['dimensions']['y']), ctx['globalAlpha'] = 0.5, ctx['beginPath'](), ctx['roundRect'](0x0, 0x0, this['w'], this['h'], 0x5), ctx['fill'](), ctx['globalAlpha'] = 0x1, ctx['closePath']();
        const _0x106d08 = 0x28, _0x6e9e75 = 0x4, _0x5e5c90 = 0xf, _0x4efaf9 = 0xf, _0x707a98 = 0x32, _0x127928 = 0x14;
        ctx['fillStyle'] = '#f0f0f0', ctx['strokeStyle'] = 'black', ctx['font'] = '900\x2024px\x20\x27Ubuntu\x27', ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['lineWidth'] = 0x3, ctx['strokeText'](window['spectating'] ? 'Petals\x20dropped' : 'Collected\x20this\x20run', this['w'] / 0x2, (_0x5e5c90 + _0x106d08) / 0x2), ctx['fillText'](window['spectating'] ? 'Petals\x20dropped' : 'Collected\x20this\x20run', this['w'] / 0x2, (_0x5e5c90 + _0x106d08) / 0x2);
        let _0x241369 = 0x0;
        for (let _0x1b404b = numberOfRarities - 0x1; _0x1b404b >= 0x0; _0x1b404b--) {
            if (this['petalContainers'][_0x1b404b] === undefined)
                continue;
            if (Math['floor'](_0x241369 / _0x6e9e75) > 0xd)
                continue;
            for (let _0x415923 = 0x0; _0x415923 < this['petalContainers'][_0x1b404b]['length']; _0x415923++) {
                if (Math['floor'](_0x241369 / _0x6e9e75) > 0xd)
                    continue;
                const _0x1fbaa9 = this['petalContainers'][_0x1b404b][_0x415923];
                _0x1fbaa9['x'] = _0x707a98 / 0x2 + _0x5e5c90 + _0x127928 + _0x241369 % _0x6e9e75 / (_0x6e9e75 - 0x1) * (this['w'] - _0x707a98 - _0x5e5c90 - _0x4efaf9 - 0x2 * _0x127928), _0x1fbaa9['y'] = _0x106d08 + _0x5e5c90 + _0x707a98 / 0x2 + Math['floor'](_0x241369 / _0x6e9e75) * (_0x707a98 + 0xc), _0x1fbaa9['render']['x'] = _0x1fbaa9['x'], _0x1fbaa9['render']['y'] = _0x1fbaa9['y'], _0x1fbaa9['draw'](), _0x241369++;
            }
        }
        ctx['translate'](-this['dimensions']['x'], -this['dimensions']['y']);
    }
}
let collectedMenu = new CollectedMenu();