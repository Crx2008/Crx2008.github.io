class MobSkillUI {
    constructor() {
        this['visible'] = ![], this['skills'] = [], this['player'] = null, this['skillIcons'] = [], this['slotSize'] = 0x32, this['slotSpacing'] = 0xa;
    }
    ['getPosition']() {
        return {
            'baseY': canvas['h'] - 0x46,
            'centerX': canvas['w'] / 0x2
        };
    }
    ['setPlayer'](_0x587f23) {
        this['player'] = _0x587f23, _0x587f23['isMob'] && _0x587f23['skills'] ? (this['skills'] = _0x587f23['skills'], this['visible'] = !![]) : this['visible'] = ![];
    }
    ['render'](_0x56eb1e) {
        console['log']('[mobSkillUI]\x20render\x20called,\x20visible=', this['visible'], 'player=', this['player'], 'skills=', this['skills']);
        if (!this['visible'] || !this['player'])
            return;
        if (!this['skills'] || this['skills']['length'] === 0x0) {
            console['warn']('[mobSkillUI]\x20skills\x20is\x20empty!');
            return;
        }
        const _0x3767f5 = this['getPosition'](), _0x34d688 = this['skills']['length'] * (this['slotSize'] + this['slotSpacing']), _0xe3b33d = _0x3767f5['centerX'] - _0x34d688 / 0x2;
        console['log']('[mobSkillUI]\x20Rendering', this['skills']['length'], 'skills\x20at\x20y=', _0x3767f5['baseY']), this['skills']['forEach']((_0x3b78db, _0x1a4be1) => {
            const _0x373e01 = _0xe3b33d + _0x1a4be1 * (this['slotSize'] + this['slotSpacing']), _0x6b15db = _0x3767f5['baseY'];
            this['renderSkillSlot'](_0x56eb1e, _0x3b78db, _0x373e01, _0x6b15db, _0x1a4be1);
        });
    }
    ['renderSkillSlot'](_0x1cfc76, _0x537540, _0x96ae4a, _0x34e621, _0x5234c7) {
        const _0x147d36 = this['player']['getSkillCooldownPercent'](_0x537540['id']);
        _0x1cfc76['fillStyle'] = 'rgba(0,\x200,\x200,\x200.5)', _0x1cfc76['beginPath'](), _0x1cfc76['roundRect'](_0x96ae4a - this['slotSize'] / 0x2, _0x34e621 - this['slotSize'] / 0x2, this['slotSize'], this['slotSize'], 0x8), _0x1cfc76['fill'](), _0x1cfc76['fillStyle'] = this['getSkillColor'](_0x537540['type']), _0x1cfc76['beginPath'](), _0x1cfc76['arc'](_0x96ae4a, _0x34e621, this['slotSize'] / 0x2 - 0x5, 0x0, Math['PI'] * 0x2), _0x1cfc76['fill']();
        if (_0x147d36 > 0x0) {
            _0x1cfc76['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)', _0x1cfc76['beginPath'](), _0x1cfc76['moveTo'](_0x96ae4a, _0x34e621);
            const _0x3e4b29 = -Math['PI'] / 0x2 + _0x147d36 * Math['PI'] * 0x2;
            _0x1cfc76['arc'](_0x96ae4a, _0x34e621, this['slotSize'] / 0x2 - 0x5, -Math['PI'] / 0x2, _0x3e4b29), _0x1cfc76['closePath'](), _0x1cfc76['fill']();
        }
        _0x1cfc76['fillStyle'] = '#FFFFFF', _0x1cfc76['font'] = 'bold\x2016px\x20Arial', _0x1cfc76['textAlign'] = 'center', _0x1cfc76['textBaseline'] = 'middle', _0x1cfc76['fillText'](_0x5234c7 + 0x1, _0x96ae4a, _0x34e621);
        if (_0x147d36 > 0x0) {
            const _0x4c3de1 = this['player']['skillCooldowns'][_0x537540['id']], _0x23a76c = Math['ceil']((_0x4c3de1 - Date['now']()) / 0x3e8);
            _0x1cfc76['font'] = 'bold\x2014px\x20Arial', _0x1cfc76['fillText'](_0x23a76c, _0x96ae4a, _0x34e621 + this['slotSize'] / 0x2 + 0xf);
        }
    }
    ['getSkillColor'](_0x34b1df) {
        const _0x41fc76 = {
            'shootAggr': '#FF6B6B',
            'spinShoot': '#4ECDC4',
            'spinShootCircle': '#FF9F43',
            'dash': '#95E1D3',
            'smallDash': '#48DBFB',
            'spawnMobs': '#5F27CD',
            'bandage': '#FECA57',
            'berserk': '#EE5A24',
            'growShrink': '#00D2D3'
        };
        return _0x41fc76[_0x34b1df] || '#95E1D3';
    }
}
const mobSkillUI = new MobSkillUI();