class Shop {
    constructor() {
        this['offers'] = [], this['shopItems'] = [], this['tokens'] = 0x0, this['petalContainers'] = [], this['menu'] = {
            'color': '#8e6bb5',
            'border': '#735793',
            'y': {
                'val': -0x1f4,
                'target': -0x1f4
            },
            'active': ![]
        };
    }
    ['initShopItems']() {
        typeof send !== 'undefined' && send({ 'getShopItems': !![] });
    }
    ['updateShopItems'](_0x4d0398) {
        this['shopItems'] = _0x4d0398 || [], this['petalContainers'] = [], this['offers'] = this['shopItems']['map']((_0x478c65, _0x57006d) => {
            let _0x3ff7a8 = [], _0x61d047 = 'Light', _0x27a8dc = 0x0;
            if (_0x478c65['type'] === 'petal' && _0x478c65['data']['petal']) {
                const _0xc7c5a9 = Stats['petals'][_0x478c65['data']['petal']['type']]?.[_0x478c65['data']['petal']['rarity']];
                if (_0xc7c5a9) {
                    for (let _0x354033 = 0x0; _0x354033 < _0xc7c5a9['petalLayout']['length']; _0x354033++) {
                        _0x3ff7a8['push'](new Petal({
                            'x': 0x0,
                            'y': 0x0,
                            'angle': 0x0,
                            'radius': 0xa,
                            'type': _0x478c65['data']['petal']['type'],
                            'rarity': _0x478c65['data']['petal']['rarity'],
                            'damage': 0x0,
                            'offset': 0x0,
                            'distance': 0x0,
                            'dv': 0x0,
                            'id': Math['random'](),
                            'subId': 0x0,
                            'subStackedId': 0x0,
                            'dead': ![],
                            'hp': 0x1,
                            'maxHp': 0x1,
                            'reload': 0x1,
                            'maxReload': 0x1,
                            'angleOffset': 0x0,
                            'petalContainerId': -0x1
                        }));
                    }
                    _0x61d047 = _0x478c65['data']['petal']['type'], _0x27a8dc = _0x478c65['data']['petal']['rarity'];
                }
            }
            const _0x28b431 = 0x4, _0x505b36 = 0x41, _0x283f49 = _0x505b36 + 0x32, _0x163ac5 = 0x46, _0x73d2e8 = 0x0, _0x29a6ba = 0x26, _0x42f765 = _0x163ac5 + _0x73d2e8 + _0x29a6ba, _0x1d8dc7 = (0x258 - 0x28 - _0x28b431 * _0x283f49) / (_0x28b431 - 0x1), _0x48f785 = _0x42f765 + 0xf, _0x13e809 = 0x41, _0x47e60d = _0x28b431 * _0x283f49 + (_0x28b431 - 0x1) * _0x1d8dc7, _0x3bed73 = (0x258 - _0x47e60d) / 0x2, _0x436195 = _0x57006d % _0x28b431, _0x34c7ef = Math['floor'](_0x57006d / _0x28b431), _0x428c36 = _0x3bed73 + _0x436195 * (_0x283f49 + _0x1d8dc7) + _0x283f49 / 0x2, _0x591695 = _0x13e809 + _0x34c7ef * _0x48f785 + _0x163ac5 / 0x2;
            if (_0x478c65['type'] === 'petal' && _0x3ff7a8['length'] > 0x0) {
                const _0x5c1ea4 = new PetalContainer(_0x3ff7a8, {
                    'x': _0x428c36,
                    'y': _0x591695,
                    'w': 0x39,
                    'h': 0x39,
                    'originalX': _0x428c36,
                    'originalY': _0x591695,
                    'toOscillate': ![]
                }, 'shop_' + _0x57006d, 0x1, null);
                this['petalContainers']['push'](_0x5c1ea4);
            } else
                this['petalContainers']['push'](null);
            return {
                'price': _0x478c65['cost'],
                'itemId': _0x478c65['itemId'],
                'itemName': _0x478c65['nameCN'],
                'itemType': _0x478c65['type'],
                'rarity': _0x27a8dc,
                'type': _0x61d047,
                'skillPoint': _0x478c65['data']['skillPoint'] || 0x0
            };
        });
    }
    ['draw']() {
        this['menu']['y']['val'] = interpolate(this['menu']['y']['val'], this['menu']['y']['target'], 0.03 * dt);
        this['menu']['active'] === !![] ? this['menu']['y']['target'] = 0x14 : this['menu']['y']['target'] = -0x1f4;
        if (this['menu']['y']['val'] > -0x1f4) {
            const _0x562782 = 0x82, _0x2bbe2e = this['menu']['y']['val'], _0x19bd2f = 0x258, _0x33d1ca = 0x1f4;
            ctx['fillStyle'] = this['menu']['color'], ctx['strokeStyle'] = this['menu']['border'], ctx['lineWidth'] = 0x8, ctx['beginPath'](), ctx['roundRect'](_0x562782, _0x2bbe2e, _0x19bd2f, _0x33d1ca, 0x3), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
            mouse['canvasX'] > _0x562782 + _0x19bd2f - 0x32 && mouse['canvasY'] > _0x2bbe2e + 17.5 && mouse['canvasX'] < _0x562782 + _0x19bd2f - 0x14 && mouse['canvasY'] < _0x2bbe2e + 17.5 + 0x1e ? (ctx['fillStyle'] = '#c16666', setCursor('pointer'), this['hoveringOverX'] = !![]) : (this['hoveringOverX'] = ![], ctx['fillStyle'] = '#c1565e');
            ctx['strokeStyle'] = '#90464b', ctx['lineWidth'] = 0x5, ctx['beginPath'](), ctx['roundRect'](_0x562782 + _0x19bd2f - 0x32, _0x2bbe2e + 17.5, 0x1e, 0x1e, 0x6), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['lineWidth'] = 4.75, ctx['lineCap'] = 'round', ctx['strokeStyle'] = '#cccccc', ctx['beginPath'](), ctx['moveTo'](_0x562782 + _0x19bd2f - 0x32 + 7.5, _0x2bbe2e + 17.5 + 7.5), ctx['lineTo'](_0x562782 + _0x19bd2f - 0x32 + 22.5, _0x2bbe2e + 17.5 + 22.5), ctx['stroke'](), ctx['beginPath'](), ctx['moveTo'](_0x562782 + _0x19bd2f - 0x32 + 22.5, _0x2bbe2e + 17.5 + 7.5), ctx['lineTo'](_0x562782 + _0x19bd2f - 0x32 + 7.5, _0x2bbe2e + 17.5 + 22.5), ctx['stroke'](), ctx['closePath'](), ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['font'] = '900\x2030px\x20\x27Ubuntu\x27', ctx['lineWidth'] = 0x4, ctx['fillStyle'] = '#ffffff', ctx['strokeStyle'] = '#000000', ctx['strokeText']('Shop', _0x562782 + _0x19bd2f / 0x2, _0x2bbe2e + 32.5), ctx['fillText']('Shop', _0x562782 + _0x19bd2f / 0x2, _0x2bbe2e + 32.5);
            if (this['offers'][0x0])
                this['drawOffers']();
            const _0xa8d367 = 0x78, _0x1035d2 = 0x32, _0x49a6b2 = _0x562782 + _0x19bd2f - 0x14 - _0xa8d367 / 0x2, _0x217220 = _0x2bbe2e + _0x33d1ca - 0x14 - _0x1035d2 / 0x2;
            ctx['fillStyle'] = 'rgba(0,\x200,\x200,\x200.3)', ctx['beginPath'](), ctx['roundRect'](_0x49a6b2 - _0xa8d367 / 0x2, _0x217220 - _0x1035d2 / 0x2, _0xa8d367, _0x1035d2, 0x8), ctx['fill'](), ctx['closePath']();
            const _0x31cf4e = 0x14, _0x11b254 = 0x6;
            ctx['font'] = '900\x2016px\x20\x27Ubuntu\x27';
            const _0x91fc65 = ctx['measureText'](formatAmountHighPrecision(this['tokens']))['width'], _0x5d0f54 = _0x31cf4e + _0x11b254 + _0x91fc65, _0x34af10 = _0x49a6b2 - _0x5d0f54 / 0x2;
            ctx['font'] = '900\x2020px\x20\x27Segoe\x20UI\x20Emoji\x27,\x20\x27Apple\x20Color\x20Emoji\x27,\x20sans-serif', ctx['textAlign'] = 'left', ctx['textBaseline'] = 'middle', ctx['fillStyle'] = '#ffffff', ctx['fillText']('💰', _0x34af10, _0x217220), ctx['font'] = '900\x2016px\x20\x27Ubuntu\x27', ctx['textAlign'] = 'left', ctx['textBaseline'] = 'middle', ctx['lineWidth'] = 0x2, ctx['fillStyle'] = '#ffffff', ctx['strokeStyle'] = '#000000', ctx['strokeText'](formatAmountHighPrecision(this['tokens']), _0x34af10 + _0x31cf4e + _0x11b254, _0x217220), ctx['fillText'](formatAmountHighPrecision(this['tokens']), _0x34af10 + _0x31cf4e + _0x11b254, _0x217220);
        }
        ctx['lineWidth'] = 0x1f4;
    }
    ['drawOffers']() {
        const _0x115057 = 0x82, _0x4cb1b2 = this['menu']['y']['val'], _0x4fd95f = 0x258;
        ctx['save'](), ctx['translate'](_0x115057, _0x4cb1b2);
        const _0x349f81 = 0x4, _0x1a38e9 = 0x41, _0x39b7b6 = 0x46, _0x14512a = 0x0, _0xcf5aad = 0x26, _0x3121ec = _0x39b7b6 + _0x14512a + _0xcf5aad, _0x289bf6 = _0x1a38e9 + 0x32, _0x4f2fc7 = (_0x4fd95f - 0x28 - _0x349f81 * _0x289bf6) / (_0x349f81 - 0x1), _0x16725f = _0x3121ec + 0xf, _0x1635d8 = 0x41, _0x225e3a = _0x349f81 * _0x289bf6 + (_0x349f81 - 0x1) * _0x4f2fc7, _0x1f2221 = (_0x4fd95f - _0x225e3a) / 0x2;
        this['offerAreas'] = [];
        for (let _0x158824 = 0x0; _0x158824 < this['offers']['length']; _0x158824++) {
            const _0x38f758 = _0x158824 % _0x349f81, _0x27c16d = Math['floor'](_0x158824 / _0x349f81), _0x3d8bcd = _0x1f2221 + _0x38f758 * (_0x289bf6 + _0x4f2fc7), _0x2ba562 = _0x1635d8 + _0x27c16d * _0x16725f, _0x125a73 = _0x3d8bcd + (_0x289bf6 - _0x1a38e9) / 0x2, _0x4054f4 = _0x2ba562, _0x5d4d0e = _0x1a38e9 + 0xf, _0x5c3cad = 0x1c, _0x62808b = _0x3d8bcd + (_0x289bf6 - _0x5d4d0e) / 0x2, _0x207f08 = _0x2ba562 + _0x39b7b6 + _0x14512a, _0x4a1932 = _0x207f08 + (_0xcf5aad - _0x5c3cad) / 0x2;
            this['offerAreas']['push']({
                'x': _0x62808b + _0x115057,
                'y': _0x4a1932 + _0x4cb1b2,
                'width': _0x5d4d0e,
                'height': _0x5c3cad,
                'index': _0x158824
            });
            const _0x3a5fcb = mouse['canvasX'] > _0x62808b + _0x115057 && mouse['canvasX'] < _0x62808b + _0x115057 + _0x5d4d0e && mouse['canvasY'] > _0x4a1932 + _0x4cb1b2 && mouse['canvasY'] < _0x4a1932 + _0x4cb1b2 + _0x5c3cad;
            _0x3a5fcb && setCursor('pointer');
            ctx['fillStyle'] = 'rgba(0,\x200,\x200,\x200.3)', ctx['beginPath'](), ctx['roundRect'](_0x3d8bcd, _0x2ba562, _0x289bf6, _0x3121ec, 0x8), ctx['fill'](), ctx['closePath']();
            const _0x5c45a2 = this['offers'][_0x158824];
            if (_0x5c45a2['itemType'] === 'skillPoint') {
                ctx['font'] = '900\x2036px\x20\x27Segoe\x20UI\x20Emoji\x27,\x20\x27Apple\x20Color\x20Emoji\x27,\x20\x27Noto\x20Color\x20Emoji\x27,\x20sans-serif', ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['fillStyle'] = '#FFD700', ctx['strokeStyle'] = '#B8860B', ctx['lineWidth'] = 0x3;
                const _0x7ce363 = _0x3d8bcd + _0x289bf6 / 0x2, _0x34af4b = _0x2ba562 + _0x39b7b6 / 0x2;
                ctx['strokeText']('⭐', _0x7ce363, _0x34af4b), ctx['fillText']('⭐', _0x7ce363, _0x34af4b), ctx['font'] = '700\x2012px\x20\x27Ubuntu\x27', ctx['fillStyle'] = '#ffffff', ctx['fillText']('+' + _0x5c45a2['skillPoint'], _0x7ce363, _0x2ba562 + _0x39b7b6 - 0xa);
            } else {
                const _0x4db559 = this['petalContainers'][_0x158824];
                _0x4db559 && (_0x4db559['x'] = _0x3d8bcd + _0x289bf6 / 0x2, _0x4db559['y'] = _0x2ba562 + _0x39b7b6 / 0x2, _0x4db559['draw']());
            }
            ctx['fillStyle'] = _0x3a5fcb ? '#FFE44D' : '#FFD700', ctx['strokeStyle'] = _0x3a5fcb ? '#D4A017' : '#B8860B', ctx['lineWidth'] = 0x2, ctx['beginPath'](), ctx['roundRect'](_0x62808b, _0x4a1932, _0x5d4d0e, _0x5c3cad, 0x6), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['textBaseline'] = 'middle', ctx['font'] = '900\x2015px\x20\x27Ubuntu\x27';
            const _0x3e25fa = ctx['measureText'](_0x5c45a2['price'])['width'], _0xd64163 = 0x12, _0x317d59 = 0x4, _0x18ea1e = _0xd64163 + _0x317d59 + _0x3e25fa, _0x1caa4c = _0x62808b + (_0x5d4d0e - _0x18ea1e) / 0x2;
            ctx['font'] = '900\x2018px\x20\x27Segoe\x20UI\x20Emoji\x27,\x20\x27Apple\x20Color\x20Emoji\x27,\x20sans-serif', ctx['textAlign'] = 'left', ctx['fillStyle'] = '#4a3c00', ctx['fillText']('💰', _0x1caa4c, _0x4a1932 + _0x5c3cad / 0x2), ctx['font'] = '900\x2015px\x20\x27Ubuntu\x27', ctx['fillText'](_0x5c45a2['price'], _0x1caa4c + _0xd64163 + _0x317d59, _0x4a1932 + _0x5c3cad / 0x2);
        }
        ctx['restore']();
        for (let _0x4b056f = 0x0; _0x4b056f < this['offers']['length']; _0x4b056f++) {
            const _0x26dcf9 = this['petalContainers'][_0x4b056f];
            if (!_0x26dcf9)
                continue;
            const _0x5e7835 = 0x4, _0x2357bc = 0x41, _0xde6347 = _0x2357bc + 0x32, _0x3b99f3 = (0x258 - 0x28 - _0x5e7835 * _0xde6347) / (_0x5e7835 - 0x1), _0x1fea40 = 0x46, _0x472701 = 0x0, _0x5d10d1 = 0x26, _0x39745a = _0x1fea40 + _0x472701 + _0x5d10d1, _0x1028f0 = _0x39745a + 0xf, _0x2b951d = 0x41, _0x4bedf2 = _0x5e7835 * _0xde6347 + (_0x5e7835 - 0x1) * _0x3b99f3, _0x4041d9 = (0x258 - _0x4bedf2) / 0x2, _0x36bcc1 = _0x4b056f % _0x5e7835, _0x3e991a = Math['floor'](_0x4b056f / _0x5e7835), _0x376723 = _0x115057 + _0x4041d9 + _0x36bcc1 * (_0xde6347 + _0x3b99f3), _0x39e3b8 = _0x4cb1b2 + _0x2b951d + _0x3e991a * _0x1028f0, _0x575022 = _0x376723 + (_0xde6347 - _0x2357bc) / 0x2, _0x20fc17 = _0x39e3b8, _0x45f577 = _0x376723 + _0xde6347 / 0x2, _0x1c328c = _0x39e3b8 + _0x1fea40 / 0x2;
            mouse['canvasX'] > _0x575022 && mouse['canvasX'] < _0x575022 + _0x2357bc && mouse['canvasY'] > _0x20fc17 && mouse['canvasY'] < _0x20fc17 + _0x2357bc && (_0x26dcf9['isHovered'] = !![]), _0x26dcf9['drawStatsBox'](![], ![], _0x45f577, _0x1c328c);
        }
    }
    ['handleClick']() {
        if (!this['menu']['active'] || !this['offerAreas'])
            return;
        for (const _0x176156 of this['offerAreas']) {
            if (mouse['canvasX'] > _0x176156['x'] && mouse['canvasX'] < _0x176156['x'] + _0x176156['width'] && mouse['canvasY'] > _0x176156['y'] && mouse['canvasY'] < _0x176156['y'] + _0x176156['height']) {
                const _0x536e1a = this['offers'][_0x176156['index']];
                this['tokens'] >= _0x536e1a['price'] ? typeof send !== 'undefined' && (send({ 'purchaseItem': { 'itemId': _0x536e1a['itemId'] } }), console['log']('购买商品:', _0x536e1a['itemId'], _0x536e1a['price'], _0x536e1a['itemName'])) : alert('积分不足！需要\x20' + _0x536e1a['price'] + '\x20积分');
                return;
            }
        }
    }
    ['toggle']() {
        settingsMenu['active'] === !![] && (settingsMenu['active'] = ![], settingsMenu['targetOffset'] = -settingsMenu['h'] - 0x28), this['menu']['active'] = !this['menu']['active'], this['menu']['active'] && this['initShopItems']();
    }
}
const shop = new Shop();