const numberOfRarities = 0x23;
class GlobalInventory {
    constructor() {
        this['icon'] = null, this['hoveringOverButton'] = ![], this['hoveringOverX'] = ![], this['menuActive'] = ![], this['petalContainers'] = {}, this['w'] = 0x1bd, this['h'] = 0x299, this['scroll'] = 0x5, this['render'] = { 'scroll': this['scroll'] }, this['menuHeights'] = {
            'beginning': 0x0,
            'end': this['h']
        }, this['scrollbar'] = {
            'top': 0x0,
            'bottom': 0x0,
            'renderTop': 0x0,
            'renderBottom': 0x0,
            'length': 0x96
        };
        const _0x4dad60 = {
            'top': canvas['h'] - this['h'] - 0x14 + this['scrollbar']['length'] * 0.5 + 0x3c,
            'bottom': canvas['h'] - 0x14 - this['scrollbar']['length'] * 0.5 + 0x1e
        };
        this['scrollbar']['top'] = this['scrollbar']['bottom'] = _0x4dad60['top'] + this['scrollbar']['length'], this['scrollbar']['renderBottom'] = this['scrollbar']['bottom'], this['scrollbar']['renderTop'] = this['scrollbar']['top'], this['draggingScrollBar'] = ![], this['totalPetalHeight'] = 0x0, this['hoveringOverScrollbar'] = ![], this['scrollBarActive'] = ![], this['currentSearchTerm'] = undefined, this['textBoxActive'] = ![];
    }
    ['resizeScroll']() {
        if (this['resizeFlag'] !== undefined)
            return;
        const _0x219b4f = {
            'top': canvas['h'] - this['h'] - 0x14 + this['scrollbar']['length'] * 0.5 + 0x3c,
            'bottom': canvas['h'] - 0x14 - this['scrollbar']['length'] * 0.5 + 0x1e
        };
        this['scrollbar']['top'] = this['scrollbar']['bottom'] = _0x219b4f['top'] + this['scrollbar']['length'], this['resizeFlag'] = !![];
    }
    ['drawIcon'](_0x3f79bf = 0x1) {
        _0x3f79bf !== 0x1 && (ctx['globalAlpha'] = _0x3f79bf);
        ctx['fillStyle'] = '#5a9fdb', ctx['strokeStyle'] = '#4981b1';
        mouse['canvasX'] + 0x6 > 0x14 && mouse['canvasY'] + 0x6 > canvas['h'] - 0x14 - 0x50 - 0x64 - 0x64 && mouse['canvasX'] - 0x6 < 0x14 + 0x50 && mouse['canvasY'] - 0x6 < canvas['h'] - 0x14 - 0x50 + 0x50 - 0x64 - 0x64 ? (ctx['fillStyle'] = '#6aa8df', setCursor('pointer'), this['hoveringOverButton'] = !![]) : this['hoveringOverButton'] = ![];
        ctx['lineWidth'] = 0x6, ctx['beginPath'](), ctx['roundRect'](0x14, canvas['h'] - 0x14 - 0x50 - 0x64 - 0x64, 0x50, 0x50, 0x3), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['font'] = '900\x2030px\x20\x22Segoe\x20UI\x20Emoji\x22,\x20\x22Apple\x20Color\x20Emoji\x22,\x20\x22Noto\x20Color\x20Emoji\x22,\x20sans-serif', ctx['fillStyle'] = '#ffffff', ctx['strokeStyle'] = '#000000', ctx['lineWidth'] = 0x2, ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['strokeText']('🎒', 0x3c, canvas['h'] - 0x14 - 0x28 - 0x64 - 0x64), ctx['fillText']('🎒', 0x3c, canvas['h'] - 0x14 - 0x28 - 0x64 - 0x64), ctx['fillStyle'] = '#f0f0f0', ctx['strokeStyle'] = 'black', ctx['lineWidth'] = 2.25, ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['font'] = '900\x2014px\x20Ubuntu';
        const _0x35e5ad = ctx['letterSpacing'];
        ctx['letterSpacing'] = '0px', ctx['strokeText']('[X]', 0x14 + 0x50 - 0xf - 2.5, canvas['h'] - 0x14 - 0x50 + 0xf - 0x64 - 0x64), ctx['fillText']('[X]', 0x14 + 0x50 - 0xf - 2.5, canvas['h'] - 0x14 - 0x50 + 0xf - 0x64 - 0x64), ctx['letterSpacing'] = _0x35e5ad, ctx['globalAlpha'] = 0x1;
    }
    ['draw']() {
        let _0x1e2463 = this['fadingOut'] === !![] ? 0x1 - (time - this['originalFadeOutTime']) / 0x64 : 0x1;
        this['menuActive'] === !![] || time - this['lastCloseTime'] < 0x8c ? this['drawInventory'](_0x1e2463) : this['hoveringOverX'] = ![];
    }
    ['fadeOut']() {
        this['fadingOut'] = !![], this['originalFadeOutTime'] = time, setTimeout(() => {
            delete this['fadingOut'], this['menuActive'] === !![] && this['toggleMenu']();
        }, 0x64);
    }
    ['initInventory'](_0x743f51) {
        this['petalContainers'] = {}, craftingMenu['petalContainers'] = {}, craftingMenu['fillerPetalSlots'] = {}, craftingMenu['recalculateTypeIndexes']();
        for (let _0x51be2b = 0x0; _0x51be2b < _0x743f51['length']; _0x51be2b++) {
            const _0xc83c92 = parsePetalData(_0x743f51[_0x51be2b]), {
                    x: _0x1c94e5,
                    y: _0xaf0694,
                    w: _0x4a2546,
                    h: _0x41f729,
                    originalX: _0x26a4f2,
                    originalY: _0x5bf589,
                    radius: _0xcc36ce
                } = _0xc83c92;
            _0xc83c92['petal']['type'] === 'Token' && _0xc83c92['petal']['rarity'] === 0x0 && (shop['tokens'] += _0xc83c92['petalAmount']), this['addPetalContainer'](new PetalContainer([new Petal(_0xc83c92['petal'])], {
                'x': _0x1c94e5,
                'y': _0xaf0694,
                'w': _0x4a2546,
                'h': _0x41f729,
                'originalX': _0x26a4f2,
                'originalY': _0x5bf589,
                'radius': _0xcc36ce,
                'toOscillate': ![],
                'petalStats': _0xc83c92['petalStats'],
                'customBiome': _0xc83c92['customBiome']
            }, _0xc83c92['id'], _0xc83c92['petalAmount'], _0xc83c92['attempt']), ![], ![]);
        }
        for (let _0x2434f0 in this['petalContainers']) {
            if (_0x2434f0['endsWith']('_map'))
                continue;
            _0x2434f0 > maxRarityObtained && (maxRarityObtained = parseInt(_0x2434f0)), Array['isArray'](this['petalContainers'][_0x2434f0]) && this['petalContainers'][_0x2434f0]['sort']((_0x15d1dc, _0x187a55) => {
                let _0x308c1f = _0x15d1dc['type'], _0x339b22 = _0x187a55['type'];
                if (petalOverrides[_0x15d1dc['type']]?.[0x0]?.['customName'])
                    _0x308c1f = petalOverrides[_0x15d1dc['type']][0x0]['customName'];
                if (petalOverrides[_0x187a55['type']]?.[0x0]?.['customName'])
                    _0x339b22 = petalOverrides[_0x187a55['type']][0x0]['customName'];
                return _0x308c1f['localeCompare'](_0x339b22);
            });
        }
    }
    ['addPetalContainer'](_0xd6e18, _0x1cd90c = ![], _0x182c88 = !![]) {
        if (!showCommunityBiomes && !petalRenderMap[_0xd6e18['type']])
            return;
        const _0x434288 = new Set([
            'Abyssal\x20Artifact',
            'Scorched\x20Artifact',
            'Verdant\x20Artifact',
            'Cosmic\x20Artifact',
            'Chimera'
        ]);
        if (_0x434288['has'](_0xd6e18['type'])) {
            specialGlobalInventory['addPetalContainer'](_0xd6e18, _0x1cd90c, _0x182c88);
            return;
        }
        let _0x2f27ed = _0xd6e18['rarity'];
        (_0xd6e18['type'] === 'Shattered\x20Relic\x20of\x20Wrath' || _0xd6e18['type'] === 'Reinforced\x20Relic\x20of\x20Wrath' || _0xd6e18['type'] === 'Subset\x20Relic\x20of\x20the\x20Guardian' || _0xd6e18['type'] === 'Division\x20Relic\x20of\x20the\x20Guardian' || _0xd6e18['type'] === 'Guard\x20Relic\x20of\x20the\x20Guardian' || _0xd6e18['type'] === 'Knight\x20Relic\x20of\x20the\x20Guardian' || _0xd6e18['type'] === 'Aid\x20Relic\x20of\x20Serenity' || _0xd6e18['type'] === 'Subliminal\x20Relic\x20of\x20Serenity' || _0xd6e18['type'] === 'Barrier\x20Relic\x20of\x20Serenity' || _0xd6e18['type'] === 'Token') && _0xd6e18['rarity'] == 0x0 && (_0x2f27ed = 'Unique');
        craftingMenu['addPetalContainer'](new PetalContainer(_0xd6e18['petals'], { ..._0xd6e18 }, _0xd6e18['id'], _0xd6e18['amount'], _0xd6e18['attempt']));
        this['petalContainers'][_0x2f27ed] === undefined && (this['petalContainers'][_0x2f27ed] = [], this['petalContainers'][_0x2f27ed + '_map'] = new Map());
        const _0x92668b = this['petalContainers'][_0x2f27ed + '_map'];
        let _0xd73fee = _0x92668b['get'](_0xd6e18['type']);
        if (_0xd73fee !== undefined) {
            _0xd73fee['amount'] += _0xd6e18['amount'], _0xd73fee['lastAmountChangedTime'] = time;
            return;
        }
        _0xd6e18['w'] = 0x3e, _0xd6e18['h'] = 0x3e, this['petalContainers'][_0x2f27ed]['unshift'](_0xd6e18), _0x92668b['set'](_0xd6e18['type'], _0xd6e18);
        if (_0x182c88)
            this['petalContainers'][_0x2f27ed]['sort']((_0x43652d, _0x3f945d) => {
                let _0x51a44b = _0x43652d['type'], _0x4b6652 = _0x3f945d['type'];
                if (petalOverrides[_0x43652d['type']]?.[0x0]?.['customName'])
                    _0x51a44b = petalOverrides[_0x43652d['type']][0x0]['customName'];
                if (petalOverrides[_0x3f945d['type']]?.[0x0]?.['customName'])
                    _0x4b6652 = petalOverrides[_0x3f945d['type']][0x0]['customName'];
                return _0x51a44b['localeCompare'](_0x4b6652);
            });
    }
    ['removeByRarityAndType'](_0x116da8, _0x395957) {
        const _0xc34ed0 = this['petalContainers'][_0x116da8], _0x111ccc = this['petalContainers'][_0x116da8 + '_map'];
        if (!_0xc34ed0 || !_0x111ccc)
            return ![];
        const _0x59f0ab = _0x111ccc['get'](_0x395957);
        if (_0x59f0ab !== undefined) {
            const _0x10061a = _0xc34ed0['indexOf'](_0x59f0ab);
            if (_0x10061a !== -0x1)
                return this['removePetalContainer'](_0x116da8, _0x10061a), !![];
        }
        return ![];
    }
    ['ReturnRarityAndType'](_0xc9a409, _0x50fcec) {
        const _0x54dc64 = this['petalContainers'][_0xc9a409 + '_map'];
        if (!_0x54dc64)
            return ![];
        return _0x54dc64['get'](_0x50fcec) || ![];
    }
    ['removeByRarityAndTypeAndReturn'](_0x144287, _0xbfe837) {
        const _0xeb5c83 = this['petalContainers'][_0x144287], _0xc37667 = this['petalContainers'][_0x144287 + '_map'];
        if (!_0xeb5c83 || !_0xc37667)
            return ![];
        const _0x5008d1 = _0xc37667['get'](_0xbfe837);
        if (_0x5008d1 !== undefined) {
            const _0x414072 = _0xeb5c83['indexOf'](_0x5008d1);
            if (_0x414072 !== -0x1)
                return this['removePetalContainer'](_0x144287, _0x414072);
        }
        return ![];
    }
    ['removePetalContainer'](_0x1e181e, _0xa8d4aa) {
        const _0x3af14e = this['petalContainers'][_0x1e181e][_0xa8d4aa];
        !isSpecialPetal(_0x3af14e) && craftingMenu['removePetalContainer'](_0x3af14e['type'], _0x3af14e['rarity']);
        const _0xa94538 = this['petalContainers'][_0x1e181e + '_map'];
        return _0x3af14e['amount'] >= 0x2 ? (_0x3af14e['amount']--, _0x3af14e['lastAmountChangedTime'] = time) : (this['petalContainers'][_0x1e181e]['splice'](_0xa8d4aa, 0x1), _0xa94538 && _0xa94538['delete'](_0x3af14e['type'])), _0x3af14e;
    }
    ['removePetalContainerAmount'](_0xe18482, _0x30e5bb, _0xc413f2) {
        const _0x3336b0 = this['petalContainers'][_0xe18482][_0x30e5bb];
        if (_0x3336b0['amount'] >= _0xc413f2 + 0x1)
            _0x3336b0['amount'] -= _0xc413f2, _0x3336b0['lastAmountChangedTime'] = time;
        else {
            this['petalContainers'][_0xe18482]['splice'](_0x30e5bb, 0x1);
            const _0x3de55a = this['petalContainers'][_0xe18482 + '_map'];
            _0x3de55a && _0x3de55a['delete'](_0x3336b0['type']);
        }
        craftingMenu['removePetalContainerAmount'](_0x3336b0['type'], _0x3336b0['rarity'], _0xc413f2);
    }
    ['mouseDown']({
        mouseX: _0x1223bd,
        mouseY: _0x3f72e9
    }, _0x52c5bb) {
        this['removeDraggingAnim'] && (clearTimeout(this['removeDraggingAnim']), draggingPetalContainer = null, delete this['removeDraggingAnim']);
        for (let _0x343e80 in this['petalContainers']) {
            if (this['petalContainers'][_0x343e80] === undefined || !Array['isArray'](this['petalContainers'][_0x343e80]))
                continue;
            for (let _0x27b1de = 0x0; _0x27b1de < this['petalContainers'][_0x343e80]['length']; _0x27b1de++) {
                const _0x20252f = this['petalContainers'][_0x343e80][_0x27b1de];
                if (this['filteredOutBySearch'](_0x20252f))
                    continue;
                if (_0x20252f['greyed'] === !![])
                    continue;
                if (_0x1223bd > 0x82 + _0x20252f['x'] - _0x20252f['w'] / 0x2 && _0x1223bd < 0x82 + _0x20252f['x'] + _0x20252f['w'] / 0x2 && _0x3f72e9 > canvas['h'] - this['h'] - 0x14 + _0x20252f['y'] - _0x20252f['h'] / 0x2 && _0x3f72e9 < canvas['h'] - this['h'] - 0x14 + _0x20252f['y'] + _0x20252f['h'] / 0x2) {
                    const _0x5f4439 = this['removePetalContainer'](_0x343e80, _0x27b1de);
                    draggingPetalContainer = new PetalContainer(_0x5f4439['petals'], {
                        ..._0x5f4439,
                        'isDragging': !![]
                    }, Math['random'](), 0x1), draggingPetalContainer['x'] += 0x82, draggingPetalContainer['render']['x'] += 0x82, draggingPetalContainer['y'] += canvas['h'] - this['h'] - 0x14, draggingPetalContainer['render']['y'] += canvas['h'] - this['h'] - 0x14, draggingPetalContainer['amount'] = 0x1, draggingPetalContainer['mouseOffset'] = {
                        'x': draggingPetalContainer['x'] - _0x1223bd,
                        'y': draggingPetalContainer['y'] - _0x3f72e9
                    }, draggingPetalContainer['w'] = 0x55, draggingPetalContainer['h'] = 0x55;
                }
            }
        }
        _0x1223bd < this['w'] - 0x10 + 0xc + 0x82 && _0x1223bd > this['w'] - 0x10 - 0xc + 0x82 && _0x3f72e9 > this['scrollbar']['bottom'] && _0x3f72e9 < this['scrollbar']['top'] && (this['draggingScrollBar'] = !![]), mouse['canvasX'] = _0x1223bd, mouse['canvasY'] = _0x3f72e9, this['mouseInTextBox']() ? (this['textBoxActive'] = !![], setTimeout(() => petalSearch['focus'](), 0xa)) : this['textBoxActive'] = ![];
    }
    ['handleIOSMouseDown'](_0x1a6cc5, _0x511e52) {
        mouse['canvasX'] = _0x1a6cc5, mouse['canvasY'] = _0x511e52, this['mouseInTextBox']() ? (this['textBoxActive'] = !![], petalSearch['focus']()) : this['textBoxActive'] = ![];
    }
    ['mouseUp']({
        mouseX: _0xbe9dbd,
        mouseY: _0x5a9bd2
    }, _0x5bb6dc, _0x36bfd2 = ![]) {
        this['draggingScrollBar'] = ![];
        this['removeDraggingAnim'] && (clearTimeout(this['removeDraggingAnim']), draggingPetalContainer = null, delete this['removeDraggingAnim']);
        if (draggingPetalContainer !== null) {
            if (_0x36bfd2 === ![] && time - mouse['lastDownData']['time'] < 0x12c && Math['sqrt']((mouse['lastDownData']['x'] - mouse['x']) ** 0x2 + (mouse['lastDownData']['y'] - mouse['y']) ** 0x2) < 0x14) {
                if (draggingPetalContainer['lastPetalSlot'] !== undefined && draggingPetalContainer['lastPetalSlot']['index'] !== -0x1) {
                    if (draggingPetalContainer['lastPetalSlot']['top'] === !![]) {
                        if (_0x5bb6dc['bottomPetalContainers'][draggingPetalContainer['lastPetalSlot']['index']] === undefined) {
                            this['mouseUp'](...arguments, !![]);
                            return;
                        }
                    } else {
                        if (_0x5bb6dc['topPetalContainers'][draggingPetalContainer['lastPetalSlot']['index']] === undefined) {
                            this['mouseUp'](...arguments, !![]);
                            return;
                        }
                    }
                    _0x5bb6dc['addPetalContainer'](draggingPetalContainer, draggingPetalContainer['lastPetalSlot']['top'], draggingPetalContainer['lastPetalSlot']['index']), _0x5bb6dc['swapPetals'](draggingPetalContainer['lastPetalSlot']['index'], ![]), draggingPetalContainer = null;
                    return;
                } else {
                    if (_0x5bb6dc['addInFirstAvailableSlot'](draggingPetalContainer) === !![]) {
                        draggingPetalContainer = null;
                        return;
                    }
                }
            }
            if (_0x5bb6dc['addClosest'](draggingPetalContainer, this) === !![])
                draggingPetalContainer = null;
            else {
                const _0x58d2b1 = window['structuredClone'](draggingPetalContainer['render']), _0x12c7b5 = {
                        'x': draggingPetalContainer['mouseOffset']['x'],
                        'y': draggingPetalContainer['mouseOffset']['y']
                    };
                this['addPetalContainer'](draggingPetalContainer), draggingPetalContainer = new PetalContainer(draggingPetalContainer['petals'], {
                    ...draggingPetalContainer,
                    'isDragging': !![]
                }, Math['random'](), draggingPetalContainer['amount']);
                for (let _0x59dddb in _0x58d2b1) {
                    draggingPetalContainer[_0x59dddb] = _0x58d2b1[_0x59dddb];
                }
                draggingPetalContainer['mouseOffset'] = _0x12c7b5, draggingPetalContainer['x'] = _0x58d2b1['x'], draggingPetalContainer['y'] = _0x58d2b1['y'], draggingPetalContainer['spawnAnimation'] = 0x1, draggingPetalContainer['collectTime'] = time, this['removeDraggingAnim'] = setTimeout(() => {
                    draggingPetalContainer = null, delete this['removeDraggingAnim'];
                }, 0x96);
            }
        }
    }
    ['drawInventory'](_0x2bf852 = 0x1) {
        this['render']['scroll'] = interpolate(this['render']['scroll'], this['scroll'], 0.007 * dt);
        _0x2bf852 !== 0x1 && (ctx['globalAlpha'] = _0x2bf852);
        let _0x6a459 = 0x0;
        time - this['lastCloseTime'] < 0xa0 && (_0x6a459 += this['h'] * easeOutCubic((time - this['lastCloseTime']) / 0xa0));
        time - this['lastOpenTime'] < 0xa0 && (_0x6a459 += this['h'] + 0x28 - (this['h'] + 0x28) * easeOutCubic((time - this['lastOpenTime']) / 0xa0));
        _0x6a459 !== 0x0 && ctx['translate'](0x0, _0x6a459);
        (this['hoveringOverScrollbar'] === !![] || this['draggingScrollBar'] === !![]) && setCursor('pointer');
        ctx['translate'](0x82, canvas['h'] - this['h'] - 0x14), ctx['fillStyle'] = '#5a9fdb', ctx['strokeStyle'] = '#4981b1', ctx['lineWidth'] = 0x8, ctx['save'](), ctx['beginPath'](), ctx['roundRect'](0x0, 0x0, this['w'], this['h'], 0x3), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['save'](), ctx['font'] = '600\x2025px\x20\x27Ubuntu\x27', ctx['lineWidth'] = 0x4, ctx['lineWidth'], ctx['fillStyle'] = '#ffffff', ctx['strokeStyle'] = '#000000', ctx['strokeText']('Inventory', this['w'] / 0x2, 0x19), ctx['fillText']('Inventory', this['w'] / 0x2, 0x19), this['drawTextInput'](), ctx['restore']();
        const _0x5dad17 = 0x5, _0x43361a = 0x23, _0x2a647e = 0x64, _0x3db31f = 0x32, _0x696479 = 0x41;
        ctx['beginPath'](), ctx['roundRect'](0x0, _0x2a647e, this['w'], this['h'] - _0x2a647e, 0x3), ctx['clip'](), ctx['closePath']();
        let _0x2256b3 = null, _0x1a9f12 = null, _0x87a6f4 = 0x0;
        const _0xa2e706 = typeof specialGlobalInventory !== 'undefined' ? specialGlobalInventory['equippedArtifact'] : undefined, _0x249d94 = _0xa2e706 === 'Chimera' || Array['isArray'](_0xa2e706) && _0xa2e706['includes']('Chimera'), _0x383744 = [
                'HornetSting',
                'HornetVolley',
                'HornetSwarm',
                'HornetFrenzy',
                'BeetleClaw',
                'BeetleCharge',
                'BeetleSwarm',
                'BeetleShell',
                'LadybugHeal',
                'LadybugDodge',
                'LadybugSwarm',
                'LadybugGrow'
            ];
        for (let _0x56c6b6 of Object['values'](this['petalContainers'])['reverse']()) {
            if (!Array['isArray'](_0x56c6b6))
                continue;
            for (let _0x2a75cf of _0x56c6b6) {
                if (this['filteredOutBySearch'](_0x2a75cf))
                    continue;
                if (_0x2a75cf['amount'] <= 0x0)
                    continue;
                if (_0x249d94 && !_0x383744['includes'](_0x2a75cf['type']))
                    continue;
                if (!_0x249d94 && _0x383744['includes'](_0x2a75cf['type']))
                    continue;
                _0x2a75cf['x'] = _0x696479 / 0x2 + _0x43361a + _0x87a6f4 % _0x5dad17 / (_0x5dad17 - 0x1) * (this['w'] - _0x696479 - _0x43361a - _0x3db31f), _0x2a75cf['y'] = _0x2a647e + _0x696479 / 0x2 + Math['floor'](_0x87a6f4 / _0x5dad17) * (_0x696479 + 0xc) + this['render']['scroll'], _0x2a75cf['renderIndex'] = _0x87a6f4, _0x2256b3 === null && (_0x2256b3 = _0x2a75cf), _0x1a9f12 = _0x2a75cf, _0x2a75cf['relativeY'] = Math['floor'](_0x87a6f4 / _0x5dad17) * (_0x696479 + 0xc) + _0x696479 / 0x2 + this['render']['scroll'], _0x2a75cf['relativeY'] - _0x2a75cf['y'] + _0x2a75cf['render']['y'] < this['h'] - _0x2a647e + _0x696479 && _0x2a75cf['relativeY'] - _0x2a75cf['y'] + _0x2a75cf['render']['y'] > _0x2a647e - _0x696479 * 0x2 ? (_0x2a75cf['lastOutTime'] !== undefined && (delete _0x2a75cf['lastOutTime'], _0x2a75cf['lastInTime'] = time), _0x2a75cf['draw']()) : _0x2a75cf['updateInterpolate'](), _0x87a6f4++;
            }
        }
        ctx['restore'](), ctx['fillStyle'] = '#5a9fdb', ctx['strokeStyle'] = '#4981b1', ctx['lineWidth'] = 0x8, ctx['save'](), ctx['beginPath'](), ctx['roundRect'](0x0, 0x0, this['w'], this['h'], 0x3), ctx['stroke'](), ctx['closePath']();
        if (_0x2256b3 !== null && Object['keys'](this['petalContainers'])['filter'](_0x108a0c => !_0x108a0c['endsWith']('_map'))['length'] > 0x0) {
            this['menuHeights'] = {
                'beginning': _0x2256b3['relativeY'],
                'end': _0x1a9f12['relativeY']
            };
            if (this['menuHeights']['end'] - this['menuHeights']['beginning'] < this['h'] - (_0x696479 + 0xc))
                this['scrollBarActive'] = ![], this['scroll'] = 0x5;
            else {
                this['menuHeights']['end'] - this['menuHeights']['beginning'] < this['h'] ? this['scrollBarActive'] = ![] : this['scrollBarActive'] = !![];
                if (this['menuHeights']['end'] + this['scroll'] - this['render']['scroll'] < this['h'] - _0x696479 - _0x2a647e)
                    this['scroll'] = this['menuHeights']['beginning'] - this['menuHeights']['end'] + this['h'] - _0x696479 - _0x2a647e - 0x5;
                else
                    this['menuHeights']['beginning'] + this['scroll'] - this['render']['scroll'] > _0x2a647e && (this['scroll'] = 0x5);
                const _0x1c95d7 = {
                    'top': canvas['h'] - this['h'] - 0x14 + this['scrollbar']['length'] * 0.5 + 0x3c,
                    'bottom': canvas['h'] - 0x14 - this['scrollbar']['length'] * 0.5 + 0x1e
                };
                this['totalPetalHeight'] = this['menuHeights']['beginning'] - this['menuHeights']['end'];
                const _0x97c972 = this['scroll'] / this['totalPetalHeight'] / (0x1 + this['h'] / this['totalPetalHeight']);
                this['scrollbar']['bottom'] = interpolate(_0x1c95d7['top'], _0x1c95d7['bottom'], _0x97c972) - this['scrollbar']['length'] / 0x2, this['scrollbar']['top'] = this['scrollbar']['bottom'] + this['scrollbar']['length'] / 0x2;
            }
        }
        this['scrollbar']['renderTop'] = interpolate(this['scrollbar']['renderTop'], this['scrollbar']['top'], this['draggingScrollBar'] ? 0.28 : 0.08), this['scrollbar']['renderBottom'] = interpolate(this['scrollbar']['renderBottom'], this['scrollbar']['bottom'], this['draggingScrollBar'] ? 0.28 : 0.08);
        this['scrollBarActive'] !== ![] && Object['keys'](this['petalContainers'])['filter'](_0x433312 => !_0x433312['endsWith']('_map'))['length'] > 0x0 && (ctx['translate'](0x0, -(canvas['h'] - this['h'] - 0x14)), ctx['strokeStyle'] = '#4981b1', ctx['lineWidth'] = 0x8, ctx['lineCap'] = 'round', ctx['beginPath'](), ctx['moveTo'](this['w'] - 0x10, this['scrollbar']['renderTop']), ctx['lineTo'](this['w'] - 0x10, this['scrollbar']['renderBottom']), ctx['stroke'](), ctx['closePath'](), ctx['translate'](0x0, canvas['h'] - this['h'] - 0x14));
        this['menuActive'] === !![] && _0x6a459 === 0x0 ? mouse['canvasX'] > 0x82 + this['w'] - 7.5 - 0x1e - 0x3 && mouse['canvasY'] > canvas['h'] - this['h'] - 0x14 + 7.5 + 0x3 && mouse['canvasX'] < 0x82 + this['w'] - 7.5 - 0x3 && mouse['canvasY'] < canvas['h'] - this['h'] - 0x14 + 7.5 + 0x1e + 0x3 ? (ctx['fillStyle'] = '#c16666', setCursor('pointer'), this['hoveringOverX'] = !![]) : (this['hoveringOverX'] = ![], ctx['fillStyle'] = '#c1565e') : (ctx['fillStyle'] = '#c1565e', this['hoveringOverX'] = ![]);
        ctx['translate'](-0x3, 0x3), ctx['strokeStyle'] = '#90464b', ctx['lineWidth'] = 0x5, ctx['beginPath'](), ctx['roundRect'](this['w'] - 7.5 - 0x1e, 7.5, 0x1e, 0x1e, 0x6), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['lineWidth'] = 4.75, ctx['lineCap'] = 'round', ctx['strokeStyle'] = '#cccccc', ctx['beginPath'](), ctx['moveTo'](this['w'] - 0x1e, 0x1e), ctx['lineTo'](this['w'] - 7.5 * 0x2, 7.5 + 7.5), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](this['w'] - 7.5 * 0x2, 0x1e), ctx['lineTo'](this['w'] - 0x1e, 7.5 + 7.5), ctx['stroke'](), ctx['closePath'](), ctx['translate'](0x3, -0x3), ctx['translate'](-0x82, -(canvas['h'] - this['h'] - 0x14));
        _0x6a459 !== 0x0 && ctx['translate'](0x0, -_0x6a459);
        ctx['globalAlpha'] = 0x1;
        const _0x2b1128 = {
            'x': mouse['canvasX'] - 0x82,
            'y': mouse['canvasY'] - (canvas['h'] - this['h'] - 0x14)
        };
        if (_0x2b1128['x'] > 0x0 && _0x2b1128['x'] < this['w'] && _0x2b1128['y'] > 0x0 && _0x2b1128['y'] < this['h'])
            for (let _0x1d3804 of Object['values'](this['petalContainers'])['reverse']()) {
                if (!Array['isArray'](_0x1d3804))
                    continue;
                for (let _0x571028 of _0x1d3804) {
                    if (this['filteredOutBySearch'](_0x571028))
                        continue;
                    _0x2b1128['x'] > _0x571028['x'] - _0x571028['w'] / 0x2 && _0x2b1128['x'] < _0x571028['x'] + _0x571028['w'] / 0x2 && _0x2b1128['y'] > _0x571028['y'] - _0x571028['h'] / 0x2 && _0x2b1128['y'] < _0x571028['y'] + _0x571028['h'] / 0x2 && (_0x571028['isHovered'] = !![]), _0x571028['drawStatsBox'](![], ![], _0x571028['render']['x'] + 0x82, _0x571028['render']['y'] + (canvas['h'] - this['h'] - 0x14));
                }
            }
    }
    ['drawTextInput']() {
        ctx['save'](), ctx['fillStyle'] = '#ffffff', ctx['strokeStyle'] = '#000000', ctx['lineWidth'] = 0x4, ctx['beginPath'](), ctx['roundRect'](0x23, 0x2d, this['w'] - 0x55, 0x23, 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
        this['mouseInTextBox']() && setCursor('text');
        ctx['textAlign'] = 'left', ctx['font'] = '600\x2022px\x20\x27Ubuntu\x27';
        let _0x1e2186 = this['currentSearchTerm'] !== undefined && this['currentSearchTerm']['length'] > 0x0;
        ctx['fillStyle'] = _0x1e2186 ? '#000000' : '#cccccc', ctx['fillText'](_0x1e2186 ? this['currentSearchTerm'] : 'Search...', 0x23 + 0x8, 0x2d + 0x13);
        if (this['textBoxActive']) {
            let _0x202825 = _0x1e2186 ? this['currentSearchTerm'] : '', _0x40746b = petalSearch['selectionStart'] ?? _0x202825['length'];
            if (Math['floor'](Date['now']() / 0x1f4) % 0x2 == 0x0) {
                const _0x4da8aa = ctx['measureText'](_0x202825['slice'](0x0, _0x40746b))['width'], _0x2b2a54 = 0x23 + 0x8 + _0x4da8aa + 0x2;
                ctx['beginPath'](), ctx['moveTo'](_0x2b2a54, 0x32), ctx['lineTo'](_0x2b2a54, 0x4b), ctx['lineWidth'] = 0x2, ctx['strokeStyle'] = '#000000', ctx['stroke']();
            }
        }
        ctx['restore']();
    }
    ['mouseInTextBox']() {
        const _0x43d24d = {
            'x': mouse['canvasX'] - 0x82,
            'y': mouse['canvasY'] - (canvas['h'] - this['h'] - 0x14)
        };
        return _0x43d24d['x'] > 0x23 && _0x43d24d['x'] < this['w'] - 0x55 && _0x43d24d['y'] > 0x2d && _0x43d24d['y'] < 0x50;
    }
    ['filteredOutBySearch'](_0x355632) {
        return this['currentSearchTerm'] && this['currentSearchTerm']['length'] > 0x0 && !_0x355632['type']['toLowerCase']()['includes'](this['currentSearchTerm']['toLowerCase']());
    }
    ['updateScroll']({
        x: _0x2cfbc6,
        y: _0x352abc
    }, {
        mouseX: _0x16cc62,
        mouseY: _0x4a2965
    }) {
        if (this['menuActive'] !== !![])
            return;
        if (_0x16cc62 < 0x82 || _0x4a2965 < canvas['h'] - this['h'] - 0x14 || _0x16cc62 > 0x82 + this['w'] || _0x4a2965 > canvas['h'] - 0x14)
            return;
        this['scroll'] -= _0x352abc;
    }
    ['mouseMove']({
        mouseX: _0x48338a,
        mouseY: _0x53b95b
    }) {
        _0x48338a < this['w'] - 0x10 + 0xc + 0x82 && _0x48338a > this['w'] - 0x10 - 0xc + 0x82 && _0x53b95b > this['scrollbar']['bottom'] && _0x53b95b < this['scrollbar']['top'] ? this['hoveringOverScrollbar'] = !![] : this['hoveringOverScrollbar'] = ![];
        if (this['draggingScrollBar'] !== !![] || Object['keys'](this['petalContainers'])['filter'](_0x5f1595 => !_0x5f1595['endsWith']('_map'))['length'] === 0x0)
            return;
        const _0x274afe = {
                'top': canvas['h'] - this['h'] - 0x14 + this['scrollbar']['length'] * 0.5 + 0x3c,
                'bottom': canvas['h'] - 0x14 - this['scrollbar']['length'] * 0.5 + 0x1e
            }, _0x53866a = {
                'top': _0x274afe['top'] - this['scrollbar']['length'] * 0.25,
                'bottom': _0x274afe['bottom'] + this['scrollbar']['length'] * 0.33
            };
        let _0xe2d4ba = (_0x53b95b - _0x53866a['top']) / (_0x53866a['bottom'] - _0x53866a['top']);
        if (_0xe2d4ba < 0x0)
            _0xe2d4ba = 0x0;
        else
            _0xe2d4ba > 0x1 && (_0xe2d4ba = 0x1);
        this['scrollBarActive'] !== ![] ? this['scroll'] = _0xe2d4ba * this['totalPetalHeight'] : this['scroll'] = 0x5;
    }
    ['toggleMenu']() {
        if (mobGallery['menuActive'] === !![])
            mobGallery['toggleMenu']();
        this['isSpecial'] && globalInventory['menuActive'] === !![] && (globalInventory['menuActive'] = ![], globalInventory['lastCloseTime'] = time), !this['isSpecial'] && specialGlobalInventory['menuActive'] === !![] && (specialGlobalInventory['menuActive'] = ![], specialGlobalInventory['lastCloseTime'] = time), this['menuActive'] === !![] ? this['lastCloseTime'] = time : (this['lastOpenTime'] = time, craftingMenu['menuActive'] === !![] && craftingMenu['toggleMenu']()), this['menuActive'] = !this['menuActive'], petalSearch['value'] = '', this['currentSearchTerm'] = '';
    }
}
function simulatedraggingPetalContainer(_0x13d7be, _0x3a963e) {
    const _0x136e4b = draggingPetalContainer;
    _0x136e4b['x'] = _0x13d7be + _0x136e4b['mouseOffset']['x'], _0x136e4b['y'] = _0x3a963e + _0x136e4b['mouseOffset']['y'];
    _0x136e4b['base'] === undefined && (_0x136e4b['render']['x'] = interpolate(_0x136e4b['render']['x'], _0x136e4b['x'], 0.2), _0x136e4b['render']['y'] = interpolate(_0x136e4b['render']['y'], _0x136e4b['y'], 0.2));
    const _0x19239e = menuInventory['getClosest'](_0x136e4b);
    if (_0x19239e === ![]) {
        _0x136e4b['base'] && (_0x136e4b['w'] = _0x136e4b['base']['w'], _0x136e4b['h'] = _0x136e4b['base']['h'], delete _0x136e4b['base'], delete _0x136e4b['firstPetalSettleTimer']);
        return;
    }
    _0x136e4b['base'] === undefined && (_0x136e4b['base'] = {
        'w': _0x136e4b['w'],
        'h': _0x136e4b['h']
    });
    if (_0x136e4b['firstPetalSettleTimer'] !== undefined && time - _0x136e4b['firstPetalSettleTimer'] > 0xc8)
        _0x136e4b['x'] = _0x19239e['x'], _0x136e4b['y'] = _0x19239e['y'] + menuInventory['translateY'], _0x136e4b['w'] = _0x19239e['size'], _0x136e4b['h'] = _0x19239e['size'];
    else
        _0x136e4b['firstPetalSettleTimer'] === undefined && (_0x136e4b['firstPetalSettleTimer'] = time);
}