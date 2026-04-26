let cachedStats = undefined, cachedState = [
        'please\x20regen',
        ![]
    ];
function safeDrawImage(_0x55dc42, _0x49b318, _0x3df176, _0x1be2db, _0x2e0d67) {
    _0x55dc42 && _0x55dc42['complete'] && _0x55dc42['naturalWidth'] > 0x0 && ctx['drawImage'](_0x55dc42, _0x49b318, _0x3df176, _0x1be2db, _0x2e0d67);
}
let isTs = window['characterSelector'] !== undefined && window['characterSelector']['selectedIndex'] == '1';
function generateCachedStats(_0x33d917) {
    cachedState[0x0] = _0x33d917, cachedState[0x1] = ![], window['calculateStats'](![], _0x33d917), cachedStats = structuredClone({
        'petals': Stats['petals'],
        'enemies': Stats['enemies']
    }), window['calculateStats'](![]);
}
class StatsBox {
    constructor(_0x47394c, _0x48fade, _0x340bfd = 'petals', _0x160e15, _0x382919) {
        this['name'] = _0x47394c, this['type'] = _0x47394c, this['description'] = Descriptions[_0x340bfd][_0x47394c] ? Descriptions[_0x340bfd][_0x47394c] : 'Something\x20interesting...', this['mode'] = _0x340bfd, this['amount'] = _0x160e15, this['rarity'] = _0x382919, this['h'] = this['w'] = this['x'] = this['y'] = 0x0, this['image'] = null, this['generateData'](_0x340bfd, _0x47394c, _0x48fade);
    }
    ['generateData'](_0x25e786, _0x52ee30, _0x41ee98) {
        cachedState[0x0] !== isTs && generateCachedStats(isTs);
        const _0x46dc47 = [
            'Abyssal\x20Artifact',
            'Scorched\x20Artifact',
            'Verdant\x20Artifact',
            'Cosmic\x20Artifact',
            'Chimera'
        ];
        if (_0x46dc47['includes'](this['type'])) {
            this['generateArtifactData']();
            return;
        }
        if (_0x25e786 == 'petals') {
            _0x41ee98 = cachedStats['petals'][this['type']][this['rarity']];
            if (this['type'] == 'Fangs')
                this['name'] = 'Fang';
            if (this['type'] == 'Egg')
                this['name'] = 'Beetle\x20Egg';
            if (this['type'] == 'Hexagon')
                this['name'] = 'ӇЄҲƛƓƠƝ';
            if (this['type'] == 'Trinket\x20of\x20the\x20Hivemind')
                this['description'] = [
                    {
                        'text': 'You\x20can\x20hear\x20distant\x20humming\x20within\x20the\x20trinket...\x20Converts',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x41ee98['maximumRarity']]['name'],
                        'color': Colors['rarities'][_0x41ee98['maximumRarity']]['color']
                    },
                    {
                        'text': 'Soldier\x20Ant\x20summons\x20and\x20below\x20into\x20Soldier\x20Termites.',
                        'color': '#ffffff'
                    }
                ];
            if (this['type'] == 'Trinket\x20of\x20the\x20Sea')
                this['description'] = [
                    {
                        'text': 'The\x20sounds\x20of\x20the\x20sea\x20fills\x20your\x20ears...\x20Converts',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x41ee98['maximumRarity']]['name'],
                        'color': Colors['rarities'][_0x41ee98['maximumRarity']]['color']
                    },
                    {
                        'text': 'Sandstorms\x20and\x20below\x20into\x20Whirlpools',
                        'color': '#ffffff'
                    }
                ];
            if (this['type'] == 'Trinket\x20of\x20the\x20Wild')
                this['description'] = [
                    {
                        'text': 'A\x20faint\x20grassy\x20smell\x20is\x20emitted\x20from\x20this\x20trinket...\x20All',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x41ee98['maximumRarity']]['name'],
                        'color': Colors['rarities'][_0x41ee98['maximumRarity']]['color']
                    },
                    {
                        'text': 'Ruby\x20Summons\x20and\x20below\x20convert\x20into\x20dangerous\x20Mossy\x20Rubies!',
                        'color': '#ffffff'
                    }
                ];
            if (this['type'] == 'Jellyfish\x20Egg' && this['rarity'] >= 0xe)
                this['description'] = 'It\x27s\x20gonna\x20zap\x20everything\x20to\x20death.\x20Pet\x20Jellyfish\x20deal\x204%\x20of\x20their\x20max\x20health\x20as\x20zap\x20damage.';
            if (this['type'] == 'Neuroflare\x20Egg' && this['rarity'] >= 0xe)
                this['description'] = 'It\x27s\x20gonna\x20zap\x20everything\x20to\x20death.\x20Pet\x20Jellyfish\x20deal\x202%\x20of\x20their\x20max\x20health\x20as\x20zap\x20damage.';
            if (this['type'] == 'Third\x20Eye' && this['rarity'] === 0xd)
                this['description'] = 'Something\x20lofdjf\x20will\x20never\x20get.';
            if (this['type'] == 'Mandible' && this['rarity'] >= 0xd)
                this['description'] = 'Has\x20a\x2015%\x20chance\x20of\x20doing\x2020x\x20damage.\x20Critical\x20chance\x20increases\x20to\x2030%\x20when\x203\x20or\x20more\x20flowers\x20are\x20dead.';
            if (this['type'] == 'Blood\x20Mandible' && this['rarity'] >= 0xd)
                this['description'] = 'Has\x20a\x2015%\x20chance\x20of\x20doing\x2020x\x20damage.\x20Critical\x20chance\x20increases\x20to\x2030%\x20when\x203\x20or\x20more\x20flowers\x20are\x20dead.\x20Only\x20deals\x20self\x20damage\x20on\x20critical\x20hits.';
            if (this['type'] == 'Basic' && this['rarity'] >= 0x7)
                this['description'] = 'A\x20nice\x20petal,\x20not\x20very\x20strong.\x20Has\x20a\x200.1%\x20chance\x20to\x20increase\x20special\x20wave\x20chance\x20by\x20' + (this['rarity'] - 0x7) + '%\x20every\x20tick.';
            if (this['type'] == 'Faster' && this['rarity'] >= 0xd)
                this['description'] += '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';
            if (this['type'] == 'Amulet\x20of\x20Grace' && this['rarity'] == 0xb)
                this['description'] = 'Forged\x20by\x20the\x20Ancients\x20to\x20extend\x20their\x20life,\x20it\x20has\x20long\x20since\x20lost\x20the\x20flame\x20that\x20fueled\x20it.\x20Maybe\x20if\x20it\x20was\x20ignited\x20again,\x20it\x20could\x20be\x20used\x20to\x20extend\x20your\x20own\x20life\x20once\x20more...';
            if (this['type'] == 'Amulet\x20of\x20Grace' && this['rarity'] < 0xb)
                this['description'] = 'An\x20odd,\x20warm\x20feeling\x20overtakes\x20you\x20as\x20you\x20peer\x20into\x20the\x20gem.\x20You\x20grow\x20calm,\x20but\x20it\x20was\x20only\x20for\x20a\x20moment.\x20Could\x20a\x20more\x20powerful\x20amulet\x20could\x20harness\x20more\x20of\x20this\x20magic..?';
            if (this['type'] == 'Amulet\x20of\x20Time' && this['rarity'] == 0xb)
                this['description'] = 'In\x20times\x20since\x20past,\x20this\x20was\x20fought\x20over\x20relentlessly\x20as\x20it\x20was\x20believed\x20to\x20slow\x20the\x20enemies\x20advances.\x20Lacking\x20the\x20power\x20it\x20once\x20had,\x20maybe\x20if\x20recharged\x20it\x20could\x20aid\x20against\x20the\x20onslaught...';
            if (this['type'] == 'Amulet\x20of\x20Time' && this['rarity'] < 0xb)
                this['description'] = 'Staring\x20into\x20the\x20darkness\x20within,\x20memories\x20of\x20a\x20time\x20long\x20lost\x20fade\x20in\x20and\x20out.\x20A\x20faint\x20glow\x20eminates\x20from\x20the\x20deep\x20center.\x20Perhaps\x20if\x20this\x20amulet\x20had\x20more\x20power..?';
            if (this['type'] == 'Amulet\x20of\x20Divergence' && this['rarity'] == 0xb)
                this['description'] = 'This\x20was\x20merely\x20the\x20prototype\x20to\x20something\x20of\x20far\x20greater\x20strength...\x20capable\x20of\x20warping\x20reality\x20itself.\x20Perhaps\x20merging\x20them\x20can\x20generate\x20power\x20enough\x20to\x20use\x20it\x20for\x20your\x20own\x20conquest?';
            if (this['type'] == 'Amulet\x20of\x20Divergence' && this['rarity'] < 0xb)
                this['description'] = 'Faint\x20lights\x20appear\x20from\x20within\x20deep\x20inside\x20the\x20stored\x20gem.\x20There\x20appears\x20to\x20be\x20movement\x20inside,\x20but\x20it\x27s\x20too\x20hard\x20to\x20discern\x20what\x20is\x20causing\x20it.\x20What\x20if\x20more\x20power\x20was\x20contained..?';
            if (this['type'] == 'Jelly' && this['rarity'] >= 0xd)
                this['description'] = 'With\x20advanced\x20technological\x20advancements\x20from\x20bioengineered\x20Jellyfish,\x20this\x20Jelly\x20only\x20deals\x20knockback\x20if\x20you\x20are\x20defending.';
            if (this['type'] == 'Powder' && this['rarity'] >= 0xd)
                this['description'] = 'Increases\x20movement\x20speed\x20if\x20not\x20attacking,\x20but\x20decreases\x20health.\x20Reduces\x20player\x20radius.\x20Does\x20not\x20stack.';
            if (this['type'] == 'Neutron\x20Star' && this['rarity'] >= 0xd)
                this['description'] = 'A\x20decoy\x20that\x20forcefully\x20attracts\x20mobs\x20with\x20the\x20strength\x20of\x20gravity.\x20Free\x20will\x20is\x20just\x20an\x20illusion\x20after\x20all.\x20Aims\x20in\x20your\x20movement\x20direction.\x20Causes\x20mobs\x20to\x20forcefully\x20compress\x20into\x20each\x20other,\x20slowly\x20wearing\x20off\x20over\x203\x20seconds.';
            if (this['type'] == 'Honey' && this['rarity'] >= 0x8)
                this['description'] = 'A\x20rocket-powered\x20decoy\x20that\x20attracts\x20mobs\x20away\x20from\x20flowers.';
            if (this['type'] == 'Horn')
                this['description'] = [
                    {
                        'text': 'If\x20the\x20current\x20wave\x20has\x20ended,\x20this\x20petal\x20calls\x20for\x20the\x20next\x20wave\x20to\x20start\x20if\x20there\x20are\x20under\x20a\x20certain\x20number\x20of\x20mobs\x20remaining.\x20It\x20also\x20instantly\x20vanquishes\x20all\x20remaining\x20mobs\x20under\x20some\x20rarity\x20without\x20drops.\x20Horns\x20up\x20to',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x41ee98['maximumRarity']]['name'],
                        'color': Colors['rarities'][_0x41ee98['maximumRarity']]['color']
                    },
                    {
                        'text': 'mobs.',
                        'color': '#ffffff'
                    }
                ];
            if (this['type'] == 'Horn' && this['rarity'] >= 0xd)
                this['description'] = [
                    {
                        'text': 'Not\x20only\x20horns\x20the\x20wave,\x20but\x20also\x20gives\x20a\x20slight\x20chance\x20for\x20every\x20horned\x20mob\x20to\x20give\x20drops\x20regardless.\x20Horns\x20up\x20to',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x41ee98['maximumRarity']]['name'],
                        'color': Colors['rarities'][_0x41ee98['maximumRarity']]['color']
                    },
                    {
                        'text': 'mobs.',
                        'color': '#ffffff'
                    }
                ];
            if (this['type'] == 'Magnet' && this['rarity'] >= 0xe)
                this['description'] = 'Collects\x20drops\x20from\x20further\x20away,\x20blocks\x20electric\x20attacks\x20and\x20gives\x20a\x20slight\x20chance\x20to\x20duplicate\x20drops\x20for\x20yourself\x20upon\x20pickup.';
            if (this['type'] == 'Jolt' && this['rarity'] >= 0xd)
                this['description'] = 'A\x20jolt\x20so\x20powerful,\x20it\x20teleports\x20all\x20players\x20and\x20pets\x20across\x20the\x20map,\x20at\x20the\x20cost\x20of\x20a\x20high\x20cooldown\x20time.\x20Great\x20for\x20escaping\x20threats!';
            if (this['type'] == 'Bubble' && this['rarity'] >= 0xd)
                this['description'] = 'Stated\x20to\x20be\x20the\x20oldest\x20bubble\x20ever,\x20this\x20ancient\x20sphere\x20has\x20since\x20propagated\x20into\x20every\x20bubble\x20that\x20has\x20come\x20since\x20it\x27s\x20inception.\x20Harnessing\x20its\x20bubble\x20blowing\x20abilities\x20will\x20allow\x20you\x20to\x20create\x20your\x20own\x20to\x20aid\x20you.';
            if (this['type'] == 'Bubble' && this['rarity'] >= 0xe)
                this['description'] = 'An\x20even\x20older\x20bubble.\x20This\x20unc\x20sphere\x20has\x20had\x20nearly\x2067\x20millenia\x20of\x20existence.\x20It\x20not\x20only\x20blows\x20a\x20really\x20fat\x20bubble,\x20but\x20it\x20teleports\x20to\x20you\x20every\x20second.';
            if (this['type'] == 'Amulet\x20of\x20Divergence' && this['rarity'] >= 0xe)
                this['description'] = 'An\x20ancient\x20relic\x20believed\x20to\x20have\x20the\x20power\x20of\x20creating\x20a\x20false\x20reality.\x20Limited\x20use\x20per\x20player\x20per\x20game.\x20(Attack\x20or\x20defend\x20to\x20absorb\x20differently;\x20only\x20usable\x20after\x20wave\x20spawning\x20ends)';
            if (this['type'] == 'Waterlogged\x20Compass' && this['rarity'] >= 0xe)
                this['description'] = 'Shows\x20the\x20number\x20of\x20the\x20highest\x20rarity\x20spawning,\x20and\x20also\x20shows\x20Wave\x20Data,\x20but\x20only\x20after\x20all\x20mobs\x20have\x20already\x20spawned.';
            if (this['type'] == 'Ruby')
                this['description'] = [
                    {
                        'text': 'A\x20mythical\x20gem\x20infused\x20with\x20the\x20power\x20of\x20friendship.\x20Works\x20up\x20to',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x41ee98['maxReviveRarity']]['name'],
                        'color': Colors['rarities'][_0x41ee98['maxReviveRarity']]['color']
                    },
                    {
                        'text': 'mobs.',
                        'color': '#ffffff'
                    }
                ];
            if (this['type'] == 'Emerald')
                this['description'] = [
                    {
                        'text': 'A\x20mythical\x20gem\x20infused\x20with\x20the\x20power\x20of\x20genesis.\x20Works\x20up\x20to',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x41ee98['maxDuplicationRarity']]['name'],
                        'color': Colors['rarities'][_0x41ee98['maxDuplicationRarity']]['color']
                    },
                    {
                        'text': 'mobs.',
                        'color': '#ffffff'
                    }
                ];
            if (this['type'] == 'Sapphire')
                this['description'] = [
                    {
                        'text': 'A\x20mythical\x20gem\x20infused\x20with\x20the\x20power\x20of\x20transformation.\x20Works\x20up\x20to',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x41ee98['maxConversionRarity']]['name'],
                        'color': Colors['rarities'][_0x41ee98['maxConversionRarity']]['color']
                    },
                    {
                        'text': 'mobs.',
                        'color': '#ffffff'
                    }
                ];
            if (this['type'] == 'Emerald' && this['rarity'] >= 0xd)
                this['description'] = [
                    {
                        'text': 'A\x20mythical\x20gem\x20infused\x20with\x20the\x20power\x20of\x20genesis.\x20Works\x20up\x20to',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x41ee98['maxDuplicationRarity']]['name'],
                        'color': Colors['rarities'][_0x41ee98['maxDuplicationRarity']]['color']
                    },
                    {
                        'text': 'mobs.\x20Converting',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x41ee98['maxDuplicationRarity']]['name'],
                        'color': Colors['rarities'][_0x41ee98['maxDuplicationRarity']]['color']
                    },
                    {
                        'text': 'mobs\x20disables\x20the\x20slot\x20for\x20the\x20rest\x20of\x20the\x20wave.',
                        'color': '#ffffff'
                    }
                ];
            if (this['type'] == 'Sapphire' && this['rarity'] >= 0xd)
                this['description'] = [
                    {
                        'text': 'A\x20mythical\x20gem\x20infused\x20with\x20the\x20power\x20of\x20transformation.\x20Works\x20up\x20to',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x41ee98['maxConversionRarity']]['name'],
                        'color': Colors['rarities'][_0x41ee98['maxConversionRarity']]['color']
                    },
                    {
                        'text': 'mobs.\x20Converting',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x41ee98['maxConversionRarity']]['name'],
                        'color': Colors['rarities'][_0x41ee98['maxConversionRarity']]['color']
                    },
                    {
                        'text': 'mobs\x20disables\x20the\x20slot\x20for\x20the\x20rest\x20of\x20the\x20wave.',
                        'color': '#ffffff'
                    }
                ];
            if (this['type'] == 'Ruby' && _0x41ee98['minimumConvert'])
                this['description'] = [
                    {
                        'text': 'A\x20mythical\x20gem\x20infused\x20with\x20the\x20power\x20of\x20friendship.',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x41ee98['minimumConvert'] - 0x1]['name'],
                        'color': Colors['rarities'][_0x41ee98['minimumConvert'] - 0x1]['color']
                    },
                    {
                        'text': 'rarity\x20mobs\x20and\x20below\x20get\x20converted\x20to',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x41ee98['maxReviveRarity']]['name'],
                        'color': Colors['rarities'][_0x41ee98['maxReviveRarity']]['color']
                    },
                    {
                        'text': 'summons,\x20but',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x41ee98['minimumConvert']]['name'],
                        'color': Colors['rarities'][_0x41ee98['minimumConvert']]['color']
                    },
                    {
                        'text': 'rarity\x20mobs\x20and\x20above\x20get\x20converted\x20into',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x41ee98['maxReviveRarity'] + 0x1]['name'],
                        'color': Colors['rarities'][_0x41ee98['maxReviveRarity'] + 0x1]['color']
                    },
                    {
                        'text': 'summons.',
                        'color': '#ffffff'
                    }
                ];
            if (this['type'] == 'Shiny\x20Bubble' && this['rarity'] >= 0xe)
                this['description'] = 'Propels\x20the\x20flower\x20in\x20the\x20direction\x20you\x20are\x20facing.\x20Teleportation\x20keybind\x20is\x20[F].';
            if (this['type'] == 'Shiny\x20Leaf')
                this['description'] = this['description'] = [
                    {
                        'text': Descriptions['petals']['Shiny\x20Leaf'] + '\x20Requires',
                        'color': '#ffffff'
                    },
                    {
                        'text': 'Constant\x20Healing',
                        'color': statColors['heal']
                    },
                    {
                        'text': 'stronger\x20than\x20' + formatAmountHighPrecision(_0x41ee98['health'] / 0x6) + '/s.',
                        'color': '#ffffff'
                    }
                ];
            if (this['type'] == 'Shiny\x20Iris')
                this['description'] = this['description'] = [
                    {
                        'text': 'Blessed\x20with\x20the\x20power\x20of\x20the\x20sun\x20god\x20himself,\x20this\x20glowing\x20iris\x20decimates\x20waves\x20of\x20enemies\x20with\x20potent',
                        'color': '#ffffff'
                    },
                    {
                        'text': 'poison',
                        'color': statColors['poison']
                    },
                    {
                        'text': 'sourced\x20from\x20the\x20skies.\x20The\x20more\x20enemies\x20that\x20are\x20struck,\x20the\x20more\x20the',
                        'color': '#ffffff'
                    },
                    {
                        'text': 'poison',
                        'color': statColors['poison']
                    },
                    {
                        'text': 'hurts\x20for\x20all\x20of\x20them.',
                        'color': '#ffffff'
                    }
                ];
            if (this['type'] == 'Shiny\x20Lightning')
                this['description'] = this['description'] = [
                    {
                        'text': 'Blessed\x20with\x20the\x20might\x20of\x20Thor,\x20this\x20shockingly\x20deadly',
                        'color': '#ffffff'
                    },
                    {
                        'text': 'lightning',
                        'color': statColors['lightning']
                    },
                    {
                        'text': 'can\x20clear\x20crowds\x20of\x20enemies\x20like\x20no\x20other.\x20The\x20more\x20it\x20chains,\x20the\x20harder\x20it\x20hits\x20(up\x20to\x20a\x20maximum).',
                        'color': '#ffffff'
                    }
                ];
            if (this['type'] == 'Shiny\x20Egg')
                this['description'] = this['description'] = [
                    {
                        'text': 'This\x20egg\x20hatches\x20a\x20very\x20hungy\x20beetle!\x20Each\x20kill\x20you\x20get,\x20it\x20grows\x20in\x20size,\x20to\x20a\x20max.\x20Mobs\x20that\x20are\x20both\x20below\x20rarity',
                        'color': '#ffffff'
                    },
                    {
                        'text': Colors['rarities'][_0x41ee98['maxEat'] + 0x1]['name'],
                        'color': Colors['rarities'][_0x41ee98['maxEat'] + 0x1]['color']
                    },
                    {
                        'text': 'and\x20smaller\x20than\x201/2\x20of\x20the\x20beetle\x20get\x20eaten\x20whole.',
                        'color': '#ffffff'
                    }
                ];
            if (typeof this['description'] == 'string') {
                let _0x45541d = this['description'];
                this['description'] = [], this['description']['push']({
                    'text': _0x45541d,
                    'color': '#ffffff'
                });
            }
            this['topstats'] = [], this['bottomstats'] = [];
            for (let _0x28413d in _0x41ee98) {
                if (!isTs && ['tanksmithRadius']['includes'](_0x28413d))
                    continue;
                if ([
                        'reload',
                        'lifespan',
                        'hatchTime',
                        'spawnSystem',
                        'timeToPop',
                        'timeLimit'
                    ]['includes'](_0x28413d)) {
                    if (_0x28413d == 'hatchTime' && isTs)
                        continue;
                    if (isTs) {
                        if (_0x28413d == 'reload' && _0x41ee98['tanksmithCooldown']) {
                            this['topstats']['push']({
                                'key': _0x28413d,
                                'value': _0x41ee98['tanksmithCooldown'] / 0x1e,
                                'color': statColors[_0x28413d]
                            });
                            _0x41ee98['tanksmithShootCooldown'] ? this['topstats']['push']({
                                'key': 'shootCd',
                                'value': _0x41ee98['tanksmithCooldown'] / 0x1e,
                                'color': statColors[_0x28413d]
                            }) : this['topstats']['push']({
                                'key': 'shootCd',
                                'value': _0x41ee98[_0x28413d],
                                'color': statColors[_0x28413d]
                            });
                            continue;
                        } else {
                            if (_0x28413d == 'reload') {
                                this['topstats']['push']({
                                    'key': _0x28413d,
                                    'value': _0x41ee98[_0x28413d] * 1.5,
                                    'color': statColors[_0x28413d]
                                });
                                _0x41ee98['tanksmithShootCooldown'] ? this['topstats']['push']({
                                    'key': 'shootCd',
                                    'value': _0x41ee98['tanksmithCooldown'] / 0x1e,
                                    'color': statColors[_0x28413d]
                                }) : this['topstats']['push']({
                                    'key': 'shootCd',
                                    'value': _0x41ee98[_0x28413d],
                                    'color': statColors[_0x28413d]
                                });
                                continue;
                            }
                        }
                    }
                    if (!(_0x28413d == 'timeToPop' && _0x41ee98[_0x28413d] == 0x0))
                        this['topstats']['push']({
                            'key': _0x28413d,
                            'value': _0x41ee98[_0x28413d],
                            'color': statColors[_0x28413d]
                        });
                    if (_0x28413d == 'spawnSystem') {
                        let _0x47bcf1 = 0.8;
                        if (this['rarity'] <= 0xd)
                            _0x47bcf1 *= 2.25;
                        else {
                            if (this['rarity'] >= 0xe)
                                _0x47bcf1 *= 0.866;
                            if (this['rarity'] == 0xf)
                                _0x47bcf1 *= 2.875;
                            if (this['rarity'] >= 0x10)
                                _0x47bcf1 *= 1.5;
                        }
                        this['bottomstats']['push']({
                            'key': 'summon',
                            'value': {
                                'rarity': _0x41ee98[_0x28413d][0x0],
                                'type': 'Sandstorm',
                                'amount': _0x41ee98[_0x28413d][0x2],
                                'substats': {
                                    'damage': Stats['rarities'][this['rarity']]['petalDamage'] * 1.2,
                                    'health': Stats['enemies']['Sandstorm'][_0x41ee98[_0x28413d][0x0]]['health'],
                                    'mass': Stats['enemies']['Sandstorm'][_0x41ee98[_0x28413d][0x0]]['mass'] * _0x47bcf1 * 0x8
                                }
                            },
                            'color': statColors['cooldown']
                        });
                    }
                } else {
                    if (statColors[_0x28413d]) {
                        if (_0x28413d == 'mana' && this['type'] == 'Amulet\x20of\x20Time')
                            this['bottomstats']['push']({
                                'key': 'timeMana',
                                'value': _0x41ee98[_0x28413d],
                                'color': Colors['mana']['time']
                            });
                        else {
                            if (_0x28413d == 'mana' && this['type'] == 'Amulet\x20of\x20Divergence')
                                this['bottomstats']['push']({
                                    'key': 'divergenceMana',
                                    'value': _0x41ee98[_0x28413d],
                                    'color': Colors['mana']['divergence']
                                });
                            else {
                                if (_0x28413d == 'mana' && this['type'] == 'Amulet\x20of\x20Grace')
                                    this['bottomstats']['push']({
                                        'key': 'graceMana',
                                        'value': _0x41ee98[_0x28413d],
                                        'color': Colors['mana']['grace']
                                    });
                                else {
                                    if ([
                                            'poison',
                                            'slowdownTime',
                                            'flowerBodyPoison',
                                            'summonBodyPoison',
                                            'overhealConversion',
                                            'period',
                                            'extraRange',
                                            'waveHealthBoost',
                                            'shadowTime',
                                            'unrevivable',
                                            'healthNerf',
                                            'radiusChange',
                                            'range',
                                            'collectDupeChance',
                                            'bodyDamage',
                                            'flowerArmor',
                                            'armorPercent',
                                            'maximumMobs',
                                            'petLifespan',
                                            'healingBoost'
                                        ]['includes'](_0x28413d))
                                        this['bottomstats']['push']({
                                            'key': _0x28413d,
                                            'value': _0x41ee98[_0x28413d],
                                            'color': statColors[_0x28413d],
                                            'unstackable': !![]
                                        });
                                    else {
                                        if (_0x28413d == 'maxDamage' && [
                                                'Shiny\x20Wing',
                                                'Shiny\x20Leaf',
                                                'Shiny\x20Coral'
                                            ])
                                            this['bottomstats']['push']({
                                                'key': 'maxDamage',
                                                'value': _0x41ee98[_0x28413d] + _0x41ee98['damage'],
                                                'color': statColors['damage']
                                            });
                                        else
                                            this['bottomstats']['push']({
                                                'key': _0x28413d,
                                                'value': _0x41ee98[_0x28413d],
                                                'color': statColors[_0x28413d]
                                            });
                                    }
                                }
                            }
                        }
                        _0x28413d == 'damage' && ((this['type'] == 'Lightning' || this['type'] == 'Blueberries' || this['type'] == 'Shiny\x20Lightning') && this['bottomstats']['push']({
                            'key': 'lightning',
                            'value': _0x41ee98[_0x28413d],
                            'color': statColors['lightning']
                        }), this['type'] == 'Fig' && this['bottomstats']['push']({
                            'key': 'blastDamage',
                            'value': _0x41ee98[_0x28413d],
                            'color': statColors['damage']
                        }));
                        if (_0x28413d == 'petLifespan') {
                            if (this['type'] == 'Ruby') {
                                let _0x5cbc0b = 0.8 * Stats['rarities'][this['rarity']]['petalDamage'], _0x578c1e = 0xfa0 * Stats['rarities'][this['rarity']]['petalHealth'];
                                this['bottomstats']['push']({
                                    'key': 'summon',
                                    'value': {
                                        'rarity': -0x1,
                                        'type': 'Rubied\x20Enemy',
                                        'substats': {
                                            'damage': _0x5cbc0b,
                                            'health': _0x578c1e,
                                            'mass': 'Varies'
                                        }
                                    },
                                    'color': statColors['cooldown']
                                });
                            }
                            if (this['type'] == 'Shiny\x20Ruby') {
                                let _0x5c9f13 = 0x1 / 0x8 * Stats['rarities'][this['rarity']]['petalDamage'], _0x3b85ab = 0x1770 * Stats['rarities'][this['rarity']]['petalHealth'];
                                this['bottomstats']['push']({
                                    'key': 'summon',
                                    'value': {
                                        'rarity': -0x1,
                                        'type': 'Rubied\x20Enemy',
                                        'substats': {
                                            'damage': _0x5c9f13,
                                            'health': _0x3b85ab,
                                            'mass': 'Varies.'
                                        }
                                    },
                                    'color': statColors['cooldown']
                                });
                            }
                        }
                    } else {
                        if (_0x28413d == 'spawnRarity') {
                            let _0x288601 = 0.8;
                            if (this['rarity'] <= 0xd && (this['type'] == 'Jellyfish\x20Egg' || this['type'] == 'Neuroflare\x20Egg'))
                                _0x288601 *= 2.25;
                            else {
                                if (this['rarity'] >= 0xe)
                                    _0x288601 *= 1.375;
                                if (this['rarity'] == 0xf && (this['type'] == 'Jellyfish\x20Egg' || this['type'] == 'Neuroflare\x20Egg'))
                                    _0x288601 *= 2.875;
                                if (this['rarity'] >= 0x10)
                                    _0x288601 *= 1.9;
                            }
                            this['type'] == 'Egg' && (this['bottomstats']['push']({
                                'key': 'summon',
                                'value': {
                                    'rarity': _0x41ee98[_0x28413d],
                                    'type': 'Beetle',
                                    'substats': {
                                        'damage': Stats['rarities'][this['rarity']]['petalDamage'] * 0x2,
                                        'health': Stats['enemies']['Beetle'][_0x41ee98[_0x28413d]]['health'] * 0.15,
                                        'mass': Stats['enemies']['Beetle'][_0x41ee98[_0x28413d]]['mass'] * _0x288601 * 0x8
                                    }
                                },
                                'color': statColors['cooldown']
                            }), console['log'](Stats['rarities'][this['rarity']]['petalDamage']));
                            this['type'] == 'Shiny\x20Egg' && this['bottomstats']['push']({
                                'key': 'summon',
                                'value': {
                                    'rarity': _0x41ee98[_0x28413d],
                                    'type': 'Shiny\x20Beetle',
                                    'substats': {
                                        'damage': Stats['rarities'][this['rarity']]['petalDamage'] * 0x6,
                                        'health': Stats['enemies']['Beetle'][_0x41ee98[_0x28413d]]['health'] * 0.2,
                                        'mass': [
                                            Stats['enemies']['Shiny\x20Beetle'][_0x41ee98[_0x28413d]]['mass'] * _0x288601 * 0x2 * 0x8,
                                            Stats['enemies']['Shiny\x20Beetle'][_0x41ee98[_0x28413d]]['mass'] * _0x288601 * 0x2 * 2.5 * 0x8
                                        ]
                                    }
                                },
                                'color': statColors['cooldown']
                            });
                            if (this['type'] == 'Ant\x20Egg') {
                                let _0x492c19 = 0x10 * Stats['rarities'][this['rarity']]['petalDamage'];
                                console['log'](this['rarity']), console['log'](_0x492c19);
                                if (this['rarity'] >= 0xa)
                                    _0x492c19 *= 0x4 / 0x5;
                                if (this['rarity'] >= 0xd)
                                    _0x492c19 *= 0x5 / 0x6;
                                if (this['rarity'] >= 0xf)
                                    _0x492c19 *= 0x5 / 0x6;
                                let _0x1313e6 = 0x3e8 * Stats['rarities'][this['rarity']]['petalHealth'];
                                this['bottomstats']['push']({
                                    'key': 'summon',
                                    'value': {
                                        'rarity': _0x41ee98[_0x28413d],
                                        'type': 'Soldier\x20Ant',
                                        'substats': {
                                            'damage': _0x492c19,
                                            'health': _0x1313e6,
                                            'mass': Stats['enemies']['Soldier\x20Ant'][_0x41ee98[_0x28413d]]['mass'] * _0x288601
                                        }
                                    },
                                    'color': statColors['cooldown']
                                });
                            }
                            this['type'] == 'Jellyfish\x20Egg' && this['bottomstats']['push']({
                                'key': 'summon',
                                'value': {
                                    'rarity': _0x41ee98[_0x28413d],
                                    'type': 'Jellyfish',
                                    'substats': {
                                        'damage': Stats['rarities'][this['rarity']]['petalDamage'],
                                        'health': Stats['enemies']['Jellyfish'][_0x41ee98[_0x28413d]]['health'] / 0x8,
                                        'mass': Stats['enemies']['Jellyfish'][_0x41ee98[_0x28413d]]['mass'] * _0x288601 * 0x8,
                                        'lightning': Stats['enemies']['Jellyfish'][_0x41ee98[_0x28413d]]['health'] * (this['rarity'] >= 0xe ? 0.05 : 0.12),
                                        'bounces': _0x41ee98[_0x28413d] > 0xb ? _0x41ee98[_0x28413d] > 0xd ? 0x4 : 0x3 : 0x2
                                    }
                                },
                                'color': statColors['cooldown']
                            });
                            this['type'] == 'Neuroflare\x20Egg' && this['bottomstats']['push']({
                                'key': 'summon',
                                'value': {
                                    'rarity': _0x41ee98[_0x28413d],
                                    'type': 'Neuroflare',
                                    'substats': {
                                        'damage': Stats['rarities'][this['rarity']]['petalDamage'] * 1.2,
                                        'health': Stats['enemies']['Neuroflare'][_0x41ee98[_0x28413d]]['health'],
                                        'mass': Stats['enemies']['Neuroflare'][_0x41ee98[_0x28413d]]['mass'] * _0x288601,
                                        'lightning': Stats['enemies']['Neuroflare'][_0x41ee98[_0x28413d]]['health'] * (this['rarity'] >= 0xe ? 0.025 : 0.06),
                                        'bounces': _0x41ee98[_0x28413d] > 0xb ? _0x41ee98[_0x28413d] > 0xd ? 0x4 : 0x3 : 0x2
                                    }
                                },
                                'color': statColors['cooldown']
                            });
                            this['type'] == 'Plastic\x20Egg' && this['bottomstats']['push']({
                                'key': 'summon',
                                'value': {
                                    'rarity': _0x41ee98[_0x28413d],
                                    'type': 'Plastic',
                                    'substats': {
                                        'damage': Stats['rarities'][this['rarity']]['petalDamage'] * 0.3,
                                        'health': Stats['enemies']['Plastic'][_0x41ee98[_0x28413d]]['health'],
                                        'mass': Stats['enemies']['Plastic'][_0x41ee98[_0x28413d]]['mass'] * _0x288601
                                    }
                                },
                                'color': statColors['cooldown']
                            });
                            this['type'] == 'Square' && this['bottomstats']['push']({
                                'key': 'summon',
                                'value': {
                                    'rarity': _0x41ee98[_0x28413d],
                                    'type': 'Square',
                                    'substats': {
                                        'damage': Stats['rarities'][this['rarity']]['petalDamage'] * 0.3,
                                        'health': Stats['enemies']['Square'][_0x41ee98[_0x28413d]]['health'],
                                        'mass': Stats['enemies']['Square'][_0x41ee98[_0x28413d]]['mass'] * _0x288601
                                    }
                                },
                                'color': statColors['cooldown']
                            });
                            this['type'] == 'Pentagon' && this['bottomstats']['push']({
                                'key': 'summon',
                                'value': {
                                    'rarity': _0x41ee98[_0x28413d],
                                    'type': 'Pentagon',
                                    'substats': {
                                        'damage': Stats['rarities'][this['rarity']]['petalDamage'] * 0.3,
                                        'health': Stats['enemies']['Pentagon'][_0x41ee98[_0x28413d]]['health'],
                                        'mass': Stats['enemies']['Pentagon'][_0x41ee98[_0x28413d]]['mass'] * _0x288601
                                    }
                                },
                                'color': statColors['cooldown']
                            });
                            this['type'] == 'Hexagon' && this['bottomstats']['push']({
                                'key': 'summon',
                                'value': {
                                    'rarity': _0x41ee98[_0x28413d],
                                    'type': 'Hexagon',
                                    'substats': {
                                        'damage': Stats['rarities'][this['rarity']]['petalDamage'] * 0.3,
                                        'health': Stats['enemies']['Hexagon'][_0x41ee98[_0x28413d]]['health'],
                                        'mass': Stats['enemies']['Hexagon'][_0x41ee98[_0x28413d]]['mass'] * _0x288601
                                    }
                                },
                                'color': statColors['cooldown']
                            });
                            if (this['type'] == 'Bubble' && this['rarity'] >= 0xd) {
                                let _0x1226b0 = Stats['enemies']['Bubble'][_0x41ee98[_0x28413d]]['mass'] / 0x64 * _0x288601 * 0x50;
                                if (this['rarity'] == 0xd)
                                    _0x1226b0 *= 0x2;
                                if (this['rarity'] >= 0xf)
                                    _0x1226b0 *= 0x2;
                                this['bottomstats']['push']({
                                    'key': 'summon',
                                    'value': {
                                        'rarity': _0x41ee98[_0x28413d],
                                        'type': 'Bubble',
                                        'substats': {
                                            'damage': Stats['rarities'][this['rarity']]['petalDamage'] * 0.1,
                                            'health': Stats['enemies']['Bubble'][_0x41ee98[_0x28413d]]['health'] * 0.005,
                                            'mass': _0x1226b0,
                                            'maxEnemyBoost': _0x1226b0 * 1.5
                                        }
                                    },
                                    'color': statColors['cooldown']
                                });
                            }
                        } else {
                            if (_0x28413d == 'damageHeal') {
                                if (_0x41ee98[_0x28413d] > 0x0)
                                    this['bottomstats']['push']({
                                        'key': 'lifesteal',
                                        'value': _0x41ee98[_0x28413d],
                                        'color': statColors['heal']
                                    });
                                else
                                    _0x41ee98[_0x28413d] < 0x0 && this['bottomstats']['push']({
                                        'key': 'selfDamage',
                                        'value': -_0x41ee98[_0x28413d],
                                        'color': statColors['damage']
                                    });
                            } else {
                                if (_0x28413d == 'petalNum')
                                    this['bottomstats']['push']({
                                        'key': 'mimickedPetals',
                                        'value': _0x41ee98[_0x28413d],
                                        'color': statColors['extraRange']
                                    });
                                else
                                    _0x28413d == 'shield' && this['bottomstats']['push']({
                                        'key': _0x28413d,
                                        'value': formatAmountHighPrecision(_0x41ee98[_0x28413d]),
                                        'color': '#ffffff'
                                    });
                            }
                        }
                    }
                }
            }
            !isTs && ([
                'Rose',
                'Dust',
                'Jolt',
                'Blood\x20Jolt',
                'Shell',
                'Dahlia',
                'Amulet\x20of\x20Grace',
                'Shard\x20of\x20Grace'
            ]['includes'](this['type']) && this['topstats']['push']({
                'key': 'secondaryReload',
                'value': 0.32,
                'color': statColors['damage']
            }), [
                'Missile',
                'Blade',
                'Carrot',
                'Fire\x20Missile',
                'Homing\x20Missile',
                'Spore',
                'Dandelion',
                'Peas',
                'Blueberries',
                'Pomegranate',
                'Grapes',
                'Pollen',
                'Honey',
                'Neutron\x20Star',
                'Web',
                'Lilypad',
                'Neurotoxin',
                'Bloodshot\x20Eye'
            ]['includes'](this['type']) && ((this['type'] == 'Missile' || this['type'] == 'Fire\x20Missile') && this['rarity'] == 0x10 ? this['topstats']['push']({
                'key': 'secondaryReload',
                'value': 0.05,
                'color': statColors['damage']
            }) : this['topstats']['push']({
                'key': 'secondaryReload',
                'value': 0.5,
                'color': statColors['damage']
            })), [
                'Amulet\x20of\x20Divergence',
                'Shard\x20of\x20Divergence',
                'Amulet\x20of\x20Time'
            ]['includes'](this['type']) && this['topstats']['push']({
                'key': 'secondaryReload',
                'value': 0x1,
                'color': statColors['damage']
            }), [
                'Bud',
                'Bloom',
                'Thomas'
            ]['includes'](this['type']) && this['topstats']['push']({
                'key': 'secondaryReload',
                'value': 0.2,
                'color': statColors['damage']
            }), ['Ikea']['includes'](this['type']) && this['topstats']['push']({
                'key': 'secondaryReload',
                'value': 0x2,
                'color': statColors['damage']
            }));
            if (this['type'] == 'Trinket\x20of\x20the\x20Wild') {
                let _0x3ce69e = 0.8;
                if (this['rarity'] >= 0xe)
                    _0x3ce69e *= 1.375;
                if (this['rarity'] >= 0x10)
                    _0x3ce69e *= 1.5;
                let _0x1cf620 = 3.4 * Stats['rarities'][this['rarity']]['petalDamage'], _0x2e9cb5 = 0x1f4 * Stats['rarities'][this['rarity']]['petalHealth'];
                this['bottomstats']['push']({
                    'key': 'summon',
                    'value': {
                        'rarity': _0x41ee98['maximumRarity'],
                        'type': 'Mossy\x20Ruby',
                        'substats': {
                            'damage': _0x1cf620,
                            'health': _0x2e9cb5,
                            'mass': Stats['enemies']['Ruby'][_0x41ee98['maximumRarity']]['mass'] * _0x3ce69e
                        }
                    },
                    'color': statColors['cooldown']
                });
            }
            if (this['type'] == 'Trinket\x20of\x20the\x20Hivemind') {
                let _0x1d4a18 = 0.8;
                if (this['rarity'] >= 0xe)
                    _0x1d4a18 *= 1.375;
                if (this['rarity'] >= 0x10)
                    _0x1d4a18 *= 1.5;
                let _0x700228 = 0x25 * Stats['rarities'][this['rarity']]['petalDamage'];
                if (this['rarity'] >= 0xa)
                    _0x700228 *= 0x4 / 0x5;
                if (this['rarity'] >= 0xd)
                    _0x700228 *= 0x5 / 0x6;
                if (this['rarity'] >= 0xf)
                    _0x700228 *= 0x5 / 0x6;
                let _0x1d3713 = 0xc80 * Stats['rarities'][this['rarity']]['petalHealth'];
                this['bottomstats']['push']({
                    'key': 'summon',
                    'value': {
                        'rarity': _0x41ee98['maximumRarity'],
                        'type': 'Soldier\x20Termite',
                        'substats': {
                            'damage': _0x700228,
                            'health': _0x1d3713,
                            'mass': Stats['enemies']['Soldier\x20Termite'][_0x41ee98['maximumRarity']]['mass'] * _0x1d4a18
                        }
                    },
                    'color': statColors['cooldown']
                });
            }
        } else {
            _0x41ee98 = cachedStats['enemies'][this['type']][this['rarity']];
            if (this['type'] == 'Hexagon')
                this['name'] = 'ӇЄҲƛƓƠƝ';
            if (typeof this['description'] == 'string') {
                let _0x32f661 = this['description'];
                this['description'] = [], this['description']['push']({
                    'text': _0x32f661,
                    'color': '#ffffff'
                });
            }
            this['topstats'] = [], this['bottomstats'] = [];
            for (let _0x25881a in _0x41ee98) {
                if (!isTs && ['tanksmithRadius']['includes'](_0x25881a))
                    continue;
                if (['xp']['includes'](_0x25881a))
                    this['topstats']['push']({
                        'key': _0x25881a,
                        'value': _0x41ee98[_0x25881a],
                        'color': statColors[_0x25881a]
                    });
                else {
                    if (statColors[_0x25881a]) {
                        this['bottomstats']['push']({
                            'key': _0x25881a,
                            'value': _0x41ee98[_0x25881a],
                            'color': statColors[_0x25881a]
                        });
                        if (_0x25881a == 'damage')
                            this['type'] == 'Firefly' && this['bottomstats']['push']({
                                'key': 'lightning',
                                'value': _0x41ee98[_0x25881a] * 0.125,
                                'color': statColors['lightning']
                            });
                        _0x25881a == 'damage' && (this['type'] == 'Jellyfish' && this['bottomstats']['push']({
                            'key': 'lightning',
                            'value': _0x41ee98[_0x25881a] * 1.5,
                            'color': statColors['lightning']
                        }), this['type'] == 'Neuroflare' && this['bottomstats']['push']({
                            'key': 'lightning',
                            'value': _0x41ee98[_0x25881a] * 0.8,
                            'color': statColors['lightning']
                        }), (this['type'] == 'Electric\x20Eel' || this['type'] == 'Dark\x20Electric\x20Eel' || this['type'] == 'Shiny\x20Electric\x20Eel') && this['bottomstats']['push']({
                            'key': 'lightning',
                            'value': _0x41ee98[_0x25881a],
                            'color': statColors['lightning']
                        }));
                        if (_0x25881a == 'health')
                            (this['type'] == 'Electric\x20Eel' || this['type'] == 'Dark\x20Electric\x20Eel' || this['type'] == 'Shiny\x20Electric\x20Eel') && this['bottomstats']['push']({
                                'key': 'lifesteal',
                                'value': _0x41ee98[_0x25881a] * 0.00125,
                                'color': statColors['heal']
                            });
                        if (_0x25881a == 'health')
                            (this['type'] == 'Leech' || this['type'] == 'BudLeech' || this['type'] == 'Tick') && this['bottomstats']['push']({
                                'key': 'lifesteal',
                                'value': _0x41ee98[_0x25881a] * 0.0025,
                                'color': statColors['heal']
                            });
                    } else
                        _0x25881a == 'drops' && this['bottomstats']['push']({
                            'key': _0x25881a,
                            'value': _0x41ee98[_0x25881a],
                            'color': '#ffffff'
                        }), _0x25881a == 'healing' && this['bottomstats']['push']({
                            'key': 'regeneration',
                            'value': _0x41ee98[_0x25881a] * _0x41ee98['health'] * 0x1e,
                            'color': statColors['heal']
                        });
                }
            }
        }
    }
    ['generateArtifactData']() {
        this['topstats'] = [], this['bottomstats'] = [];
        if (typeof SKILL_TREES !== 'undefined' && SKILL_TREES[this['type']]) {
            const _0x135053 = SKILL_TREES[this['type']];
            this['description'] = [{
                    'text': _0x135053['description'],
                    'color': _0x135053['color'] || '#ffffff'
                }];
        }
        const _0x5cc1b3 = window['specialGlobalInventory']?.['artifacts']?.[this['type']], _0xda7ee9 = _0x5cc1b3?.['skillLevels'] || {}, _0x175763 = _0x4e2017 => {
                let _0x201e69 = 0x0;
                for (const [_0x2e962a, _0x2dbb05] of Object['entries'](_0xda7ee9)) {
                    typeof _0x2dbb05 === 'number' && _0x2e962a['startsWith'](_0x4e2017) && (_0x201e69 += _0x2dbb05);
                }
                return _0x201e69;
            };
        switch (this['type']) {
        case 'Abyssal\x20Artifact':
            const _0x789339 = _0x175763('egg_hp'), _0x3112f1 = _0x175763('egg_damage'), _0xe2e3ff = _0x175763('egg_mass');
            this['bottomstats']['push']({
                'key': 'eggHpMultiplier',
                'value': 1.4 + _0x789339 * 0.05,
                'displayName': 'Egg\x20HP:\x20x' + (1.4 + _0x789339 * 0.05)['toFixed'](0x2),
                'color': statColors['eggHpMultiplier']
            }), this['bottomstats']['push']({
                'key': 'eggDamageMultiplier',
                'value': 1.4 + _0x3112f1 * 0.05,
                'displayName': 'Egg\x20Damage:\x20x' + (1.4 + _0x3112f1 * 0.05)['toFixed'](0x2),
                'color': statColors['eggDamageMultiplier']
            }), this['bottomstats']['push']({
                'key': 'eggMassMultiplier',
                'value': 1.4 + _0xe2e3ff * 0.05,
                'displayName': 'Egg\x20Mass:\x20x' + (1.4 + _0xe2e3ff * 0.05)['toFixed'](0x2),
                'color': statColors['eggMassMultiplier']
            });
            break;
        case 'Scorched\x20Artifact':
            const _0x1ea1f2 = _0x175763('heal_mult');
            this['bottomstats']['push']({
                'key': 'healMultiplier',
                'value': 1.2 + _0x1ea1f2 * 0.1,
                'displayName': 'Heal:\x20x' + (1.2 + _0x1ea1f2 * 0.1)['toFixed'](0x2),
                'color': statColors['healMultiplier']
            }), this['bottomstats']['push']({
                'key': 'squadHealShare',
                'value': 0.33,
                'displayName': 'Squad\x20Heal:\x2033%',
                'color': statColors['squadHealShare']
            });
            break;
        case 'Verdant\x20Artifact':
            const _0x2e25fd = _0x175763('dps'), _0x44703b = _0x175763('ult_cd');
            this['bottomstats']['push']({
                'key': 'dpsMultiplier',
                'value': 1.5 + _0x2e25fd * 0.05,
                'displayName': 'DPS:\x20x' + (1.5 + _0x2e25fd * 0.05)['toFixed'](0x2),
                'color': statColors['dpsMultiplier']
            });
            _0x44703b > 0x0 && this['bottomstats']['push']({
                'key': 'cooldownReduction',
                'value': _0x44703b * 0.05,
                'displayName': 'Petal\x20CD:\x20-' + (_0x44703b * 0x5)['toFixed'](0x0) + '%',
                'color': statColors['dpsMultiplier']
            });
            break;
        case 'Cosmic\x20Artifact':
            const _0x30f693 = _0x175763('hp_mult'), _0x535e71 = _0x175763('range'), _0x2e1057 = _0x175763('knockback'), _0x14af48 = _0x175763('ult_cd');
            this['bottomstats']['push']({
                'key': 'hpMultiplier',
                'value': 1.2 + _0x30f693 * 0.1,
                'displayName': 'HP:\x20x' + (1.2 + _0x30f693 * 0.1)['toFixed'](0x2),
                'color': statColors['hpMultiplier']
            }), this['bottomstats']['push']({
                'key': 'ultRange',
                'value': 0x1f4 + _0x535e71 * 0x14,
                'displayName': 'Ult\x20Range:\x20' + (0x1f4 + _0x535e71 * 0x14),
                'color': statColors['hpMultiplier']
            }), this['bottomstats']['push']({
                'key': 'ultBubbleLvl',
                'value': _0x30f693 + _0x14af48 + _0x535e71 + _0x2e1057,
                'displayName': 'Bubble\x20Lv:\x20' + Math['min'](_0x30f693 + _0x14af48 + _0x535e71 + _0x2e1057, 0x22),
                'color': statColors['hpMultiplier']
            }), this['bottomstats']['push']({
                'key': 'knockbackMult',
                'value': 0x1 + _0x2e1057 * 0.05,
                'displayName': 'Knockback:\x20x' + (0x1 + _0x2e1057 * 0.05)['toFixed'](0x2),
                'color': statColors['hpMultiplier']
            });
            const _0xf2034 = Math['max'](0x3c + _0x14af48 * -1.5, 0xa);
            this['bottomstats']['push']({
                'key': 'ultCooldown',
                'value': _0xf2034,
                'displayName': 'Ult\x20CD:\x20' + _0xf2034 + 's',
                'color': statColors['hpMultiplier']
            });
            break;
        case 'Chimera':
            const _0x286203 = _0x175763('damage'), _0x3d41fb = _0x175763('speed'), _0x2b6473 = _0x175763('hp'), _0x3ad719 = _0x175763('ult_cd');
            this['bottomstats']['push']({
                'key': 'mobDamageMultiplier',
                'value': 1.5 + _0x286203 * 0.1,
                'displayName': 'Mob\x20Damage:\x20x' + (1.5 + _0x286203 * 0.1)['toFixed'](0x2),
                'color': statColors['mobDamageMultiplier'] || '#ff6666'
            }), this['bottomstats']['push']({
                'key': 'mobSpeedMultiplier',
                'value': 0x1 + _0x3d41fb * 0.05,
                'displayName': 'Mob\x20Speed:\x20x' + (0x1 + _0x3d41fb * 0.05)['toFixed'](0x2),
                'color': statColors['mobSpeedMultiplier'] || '#99ccff'
            }), this['bottomstats']['push']({
                'key': 'mobHpMultiplier',
                'value': 0x1 + _0x2b6473 * 0.1,
                'displayName': 'Mob\x20HP:\x20x' + (0x1 + _0x2b6473 * 0.1)['toFixed'](0x2),
                'color': statColors['mobHpMultiplier'] || '#ff9999'
            });
            const _0x47e98f = Math['max'](0xa - _0x3ad719 * 0.5, 0x3);
            this['bottomstats']['push']({
                'key': 'abilityCooldown',
                'value': _0x47e98f,
                'displayName': 'Ability\x20CD:\x20' + _0x47e98f['toFixed'](0x1) + 's',
                'color': statColors['abilityCooldown'] || '#ffcc66'
            });
            break;
        }
    }
    ['stripRomanNumeral'](_0xfb2e79) {
        return _0xfb2e79['replace'](/\s+[IVX]+$/, '');
    }
    ['drawArtifactTooltip']() {
        const _0x1129fd = window['specialGlobalInventory'], _0x11eee2 = _0x1129fd?.['artifacts']?.[this['type']], _0x362ccc = _0x11eee2?.['skillLevels'] || {}, _0x2cf490 = SKILL_TREES?.[this['type']];
        if (!_0x2cf490)
            return;
        const _0xd39d57 = this['type'], _0x3f760d = _0x2cf490['color'] || '#ffffff', _0x4baaf3 = _0x2cf490['description'] || '', _0x10ec32 = {};
        for (const _0x4e2b16 of _0x2cf490['nodes']) {
            if (_0x4e2b16['isRoot'] || !_0x4e2b16['statKey'])
                continue;
            const _0x38aca4 = _0x4e2b16['id']['replace'](/_\d+$/, '');
            !_0x10ec32[_0x38aca4] && (_0x10ec32[_0x38aca4] = {
                'statKey': _0x4e2b16['statKey'],
                'baseValue': _0x4e2b16['baseValue'],
                'valuePerLevel': _0x4e2b16['valuePerLevel'],
                'totalLevels': 0x0,
                'displayName': _0x4e2b16['name']
            });
        }
        for (const [_0x581c21, _0x499211] of Object['entries'](_0x362ccc)) {
            const _0x404a39 = _0x581c21['replace'](/_\d+$/, '');
            _0x10ec32[_0x404a39] && (_0x10ec32[_0x404a39]['totalLevels'] += _0x499211);
        }
        let _0x42ae10 = [];
        for (const [_0x1aae72, _0x3e3ba3] of Object['entries'](_0x10ec32)) {
            if (_0x3e3ba3['totalLevels'] === 0x0 && _0x3e3ba3['baseValue'] === 0x0)
                continue;
            let _0x2cedbc = _0x3e3ba3['baseValue'] + _0x3e3ba3['totalLevels'] * _0x3e3ba3['valuePerLevel'];
            _0x3e3ba3['statKey'] === 'cooldownReduction' && (_0x2cedbc = _0x2cedbc * 0x64);
            const _0x412eb5 = this['stripRomanNumeral'](_0x3e3ba3['displayName']), _0x26f049 = {
                    'key': _0x412eb5,
                    'value': _0x2cedbc,
                    'format': this['getValueFormat'](_0x3e3ba3['statKey'])
                };
            _0x42ae10['push'](_0x26f049);
        }
        _0x2cf490['passiveEffects']?.['squadHealShare'] && _0x42ae10['push']({
            'key': 'Squad\x20Heal',
            'value': _0x2cf490['passiveEffects']['squadHealShare'] * 0x64,
            'format': 'percent'
        });
        ctx['font'] = '900\x20' + 1.2 * 22.5 + 'px\x20Ubuntu';
        const _0x3aa9b3 = ctx['measureText'](_0xd39d57)['width'];
        ctx['font'] = '900\x20' + 0.75 * 22.5 + 'px\x20Ubuntu';
        const _0x3c8d5b = 0x118, _0x26a7ce = this['wrapText'](_0x4baaf3, _0x3c8d5b, 0.75 * 22.5), _0x40406f = Math['max'](..._0x26a7ce['map'](_0x59f34d => ctx['measureText'](_0x59f34d)['width']));
        let _0x2294d9 = 0x0;
        for (const _0x1df386 of _0x42ae10) {
            const _0x1d9906 = this['formatStatValue'](_0x1df386);
            _0x2294d9 = Math['max'](_0x2294d9, ctx['measureText'](_0x1d9906)['width']);
        }
        const _0x3b2cdc = Math['max'](_0x3aa9b3 + 0x14, Math['max'](_0x40406f + 0x14, _0x2294d9 + 0x14)), _0x58ffd5 = 0x4b + _0x26a7ce['length'] * 22.5 + _0x42ae10['length'] * 22.5 + 0xa, _0x15acbc = Math['min'](canvas['w'] - 0x5 - _0x3b2cdc / 0x2, Math['max'](0x5, -_0x3b2cdc / 0x2 + this['x'])), _0xebbf1c = window['state'] === 'menu';
        let _0x1bb01c;
        if (_0xebbf1c)
            _0x1bb01c = Math['min'](canvas['h'] - 0x5 - _0x58ffd5, Math['max'](0x5, this['y']));
        else {
            _0x1bb01c = Math['max'](0x5, this['y']);
            if (_0x1bb01c + _0x58ffd5 > canvas['h'] - 0x5) {
                const _0x36f52c = this['y'] + _0x58ffd5 + 0x41 / 0x2 + 11.5;
                _0x1bb01c = _0x36f52c + 0x41 / 0x2 + 11.5, _0x1bb01c = Math['min'](canvas['h'] - 0x5 - _0x58ffd5, Math['max'](0x5, _0x1bb01c));
            }
        }
        ctx['save'](), ctx['shadowColor'] = '#FFD700', ctx['shadowBlur'] = 0xf, ctx['strokeStyle'] = '#FFD700', ctx['lineWidth'] = 0x2, ctx['fillStyle'] = 'rgba(255,\x20215,\x200,\x200.3)', ctx['beginPath'](), ctx['roundRect'](_0x15acbc, _0x1bb01c, _0x3b2cdc, _0x58ffd5, 0x5), ctx['fill'](), ctx['stroke'](), ctx['restore'](), ctx['font'] = '900\x20' + 1.2 * 22.5 + 'px\x20Ubuntu', ctx['lineWidth'] = 1.2 * 3.25, ctx['strokeStyle'] = '#000000', ctx['fillStyle'] = _0x3f760d, ctx['textAlign'] = 'left', ctx['textBaseline'] = 'top', ctx['strokeText'](_0xd39d57, _0x15acbc + 0xa, _0x1bb01c + 0xa), ctx['fillText'](_0xd39d57, _0x15acbc + 0xa, _0x1bb01c + 0xa), ctx['font'] = '900\x20' + 0.7 * 22.5 + 'px\x20Ubuntu', ctx['lineWidth'] = 0.7 * 3.25, ctx['strokeStyle'] = '#000000', ctx['fillStyle'] = '#ffffff';
        let _0x5924b2 = _0x1bb01c + 0x32;
        for (const _0x1143ca of _0x26a7ce) {
            ctx['strokeText'](_0x1143ca, _0x15acbc + 0xa, _0x5924b2), ctx['fillText'](_0x1143ca, _0x15acbc + 0xa, _0x5924b2), _0x5924b2 += 22.5;
        }
        let _0x568ac8 = _0x5924b2 + 0x5;
        const _0x593836 = [
            '#FF6B6B',
            '#4ECDC4',
            '#FFE66D',
            '#95E1D3',
            '#F38181'
        ];
        for (let _0xa9f952 = 0x0; _0xa9f952 < _0x42ae10['length']; _0xa9f952++) {
            const _0x1aece1 = _0x42ae10[_0xa9f952], _0x354a88 = _0x593836[_0xa9f952 % _0x593836['length']];
            let _0x279a24;
            switch (_0x1aece1['format']) {
            case 'multiplier':
                _0x279a24 = 'x' + _0x1aece1['value']['toFixed'](0x2);
                break;
            case 'percent':
                _0x279a24 = _0x1aece1['value']['toFixed'](0x0) + '%';
                break;
            case 'negative_percent':
                _0x279a24 = '-' + _0x1aece1['value']['toFixed'](0x0) + '%';
                break;
            case 'time':
                _0x279a24 = _0x1aece1['value']['toFixed'](0x1) + 's';
                break;
            default:
                _0x279a24 = _0x1aece1['value']['toFixed'](0x2);
            }
            const _0x2db316 = _0x1aece1['key'] + ':';
            ctx['fillStyle'] = _0x354a88, ctx['strokeStyle'] = '#000000', ctx['strokeText'](_0x2db316, _0x15acbc + 0xa, _0x568ac8), ctx['fillText'](_0x2db316, _0x15acbc + 0xa, _0x568ac8);
            const _0x5e56fd = ctx['measureText'](_0x2db316)['width'];
            ctx['fillStyle'] = '#ffffff', ctx['strokeText']('\x20' + _0x279a24, _0x15acbc + 0xa + _0x5e56fd, _0x568ac8), ctx['fillText']('\x20' + _0x279a24, _0x15acbc + 0xa + _0x5e56fd, _0x568ac8), _0x568ac8 += 22.5;
        }
    }
    ['getValueFormat'](_0x1d10dc) {
        if (_0x1d10dc?.['includes']('Multiplier') || _0x1d10dc === 'healMultiplier' || _0x1d10dc === 'dpsMultiplier' || _0x1d10dc === 'hpMultiplier')
            return 'multiplier';
        if (_0x1d10dc === 'cooldownReduction')
            return 'negative_percent';
        if (_0x1d10dc === 'cooldown')
            return 'time';
        return 'number';
    }
    ['formatStatValue'](_0x307d5f) {
        let _0x8d7bbc;
        switch (_0x307d5f['format']) {
        case 'multiplier':
            _0x8d7bbc = 'x' + _0x307d5f['value']['toFixed'](0x2);
            break;
        case 'percent':
            _0x8d7bbc = _0x307d5f['value']['toFixed'](0x0) + '%';
            break;
        case 'negative_percent':
            _0x8d7bbc = '-' + _0x307d5f['value']['toFixed'](0x0) + '%';
            break;
        case 'time':
            _0x8d7bbc = _0x307d5f['value']['toFixed'](0x1) + 's';
            break;
        default:
            _0x8d7bbc = _0x307d5f['value']['toFixed'](0x2);
        }
        return _0x307d5f['key'] + ':\x20' + _0x8d7bbc;
    }
    ['wrapText'](_0x1e4b1b, _0x417db3, _0x13063e) {
        ctx['font'] = '900\x20' + _0x13063e + 'px\x20Ubuntu';
        const _0x5bdb0e = _0x1e4b1b['split']('\x20'), _0x53d966 = [];
        let _0x3adb9f = '';
        for (const _0x161678 of _0x5bdb0e) {
            const _0x2a4726 = _0x3adb9f + (_0x3adb9f ? '\x20' : '') + _0x161678;
            ctx['measureText'](_0x2a4726)['width'] > _0x417db3 && _0x3adb9f ? (_0x53d966['push'](_0x3adb9f), _0x3adb9f = _0x161678) : _0x3adb9f = _0x2a4726;
        }
        return _0x3adb9f && _0x53d966['push'](_0x3adb9f), _0x53d966['length'] > 0x0 ? _0x53d966 : [_0x1e4b1b];
    }
    ['draw']() {
        if (!this['image']) {
            let _0x321b41 = this['generateDesc'](0x12c, 0x1f4);
            this['w'] = _0x321b41['width'], this['h'] = 117.5 + _0x321b41['height'];
            for (let _0x1f6bfb of this['bottomstats']) {
                const _0x53f430 = (_0x1f6bfb['value'] !== 0x0 || _0x1f6bfb['value'][0x0] && _0x1f6bfb['value'][0x0] !== 0x0) && !(this['mode'] == 'enemies' && _0x1f6bfb['key'] == 'detectionDistance' && isNaN(_0x1f6bfb['value']));
                if (_0x53f430)
                    this['h'] += 17.5;
                if (_0x1f6bfb['key'] == 'summon')
                    this['h'] += 17.5 * (this['type'] == 'Jellyfish\x20Egg' || this['type'] == 'Neuroflare\x20Egg' ? 0x5 : this['type'] == 'Bubble' && this['rarity'] >= 0xd ? 0x4 : 0x3);
                if (_0x1f6bfb['key'] == 'drops') {
                    let _0x188850 = 0x0, _0x582cfa = 0x0;
                    for (let _0x1eaa8d in _0x1f6bfb['value']) {
                        if (!Array['isArray'](_0x1f6bfb['value'][_0x1eaa8d])) {
                            _0x582cfa++;
                            continue;
                        }
                        let _0x55c9ec = 0x0;
                        for (let _0x352a4e of _0x1f6bfb['value'][_0x1eaa8d]) {
                            if (_0x352a4e > 0x0)
                                _0x55c9ec++;
                        }
                        _0x188850 = Math['max'](_0x188850, _0x55c9ec);
                        if (_0x55c9ec == 0x0)
                            _0x582cfa++;
                    }
                    this['w'] = Math['max'](0x19 + _0x188850 * 67.5, this['w']), this['h'] += (Object['keys'](_0x1f6bfb['value'])['length'] - _0x582cfa) * 0x55 + 17.5;
                }
                if ([
                        'slowdown',
                        'killBossUnder',
                        'attractionRadius'
                    ]['includes'](_0x1f6bfb['key']) && _0x1f6bfb['value'][0x0]) {
                    let _0x44b97c = _0x1f6bfb['value'][0x0], _0x590256 = 0x0;
                    for (let _0x50d640 of _0x1f6bfb['value']) {
                        if (_0x50d640 < 0x1 || _0x50d640 == undefined)
                            continue;
                        if (_0x50d640 == _0x44b97c)
                            continue;
                        _0x590256++, _0x44b97c = _0x50d640;
                    }
                    this['h'] += _0x590256 * 17.5;
                }
            }
            this['image'] = this['mode'] == 'petals' ? this['genPcBox']() : this['genEcBox'](), this['isTs'] = isTs;
        } else
            ctx['drawImage'](this['image'], Math['min'](canvas['w'] - 0x5 - this['w'] / 0x2, Math['max'](0x5, -this['w'] / 0x2 + this['x'])), Math['min'](canvas['h'] - 0x5 - this['h'], Math['max'](0x5, this['y'])));
        this['isTs'] !== isTs && (delete this['image'], this['generateData'](this['mode'], this['type'], this['stats']));
    }
    ['genPcBox']() {
        const _0x25721a = new OffscreenCanvas(this['w'], this['h']), _0xb4f51e = _0x25721a['getContext']('2d'), _0x22cace = ctx;
        ctx = _0xb4f51e, ctx['lineCap'] = 'round', ctx['lineJoin'] = 'round', ctx['fillStyle'] = '#000000', ctx['globalAlpha'] *= 0.5, ctx['beginPath'](), ctx['roundRect'](0x0, 0x0, this['w'], this['h'], 0x5), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] /= 0.5, ctx['strokeStyle'] = '#000000', ctx['fillStyle'] = '#ffffff', ctx['lineWidth'] = 0x2, ctx['font'] = '900\x20' + 0.9 * 22.5 + 'px\x20Ubuntu', ctx['textAlign'] = 'right', ctx['textBaseline'] = 'top', ctx['fillStyle'] = 'white', ctx['strokeStyle'] = 'black', ctx['lineWidth'] = 0.9 * 3.25, ctx['translate'](this['w'] - 0x23, 0xa), ctx['save'](), ctx['beginPath'](), ctx['arc'](12.5, 12.5, 0xa, 0x0, Math['PI'] * 0x2), ctx['strokeStyle'] = '#4CAF50', ctx['lineWidth'] = 2.5, ctx['stroke'](), ctx['beginPath'](), ctx['arc'](12.5, 12.5, 0x6, -0.5, 1.5), ctx['strokeStyle'] = '#4CAF50', ctx['lineWidth'] = 0x2, ctx['stroke'](), ctx['beginPath'](), ctx['moveTo'](17.5, 0x8), ctx['lineTo'](0x14, 0xb), ctx['lineTo'](15.5, 0xc), ctx['strokeStyle'] = '#4CAF50', ctx['stroke'](), ctx['restore']();
        let _0x1efdc5 = '', _0x31b4f7 = 0x1;
        for (let _0x6bf7ef of this['topstats']) {
            if (_0x6bf7ef['key'] == 'reload')
                _0x1efdc5 += formatAmountHighPrecision(_0x6bf7ef['value']) + 's';
            else {
                if (_0x6bf7ef['key'] == 'shootCd')
                    _0x1efdc5 += formatAmountHighPrecision(_0x6bf7ef['value']) + 's';
                else {
                    if (_0x6bf7ef['key'] == 'lifespan')
                        _0x1efdc5 += formatAmountHighPrecision(_0x6bf7ef['value']) + 's';
                    else {
                        if (_0x6bf7ef['key'] == 'hatchTime')
                            _0x1efdc5 += formatAmountHighPrecision(_0x6bf7ef['value']) + 's';
                        else {
                            if (_0x6bf7ef['key'] == 'timeToPop')
                                _0x1efdc5 += formatAmountHighPrecision(_0x6bf7ef['value']) + 's';
                            else
                                _0x6bf7ef['key'] == 'spawnSystem' ? _0x1efdc5 += formatAmountHighPrecision(_0x6bf7ef['value'])[0x1] + 's' : _0x1efdc5 += formatAmountHighPrecision(_0x6bf7ef['value']);
                        }
                    }
                }
            }
            if (this['topstats']['length'] > 0x1 && _0x31b4f7 !== this['topstats']['length'])
                _0x1efdc5 += '\x20+\x20';
            _0x31b4f7++;
        }
        ctx['strokeText'](_0x1efdc5, -0x5, 2.5), ctx['fillText'](_0x1efdc5, -0x5, 2.5), ctx['translate'](-this['w'] + 0x23, 0x0), ctx['font'] = '900\x20' + 1.2 * 22.5 + 'px\x20Ubuntu', ctx['lineWidth'] = 1.2 * 3.25, ctx['textAlign'] = 'left', ctx['translate'](0xa, 0x0), ctx['strokeText'](this['name'], 0x0, 0x0), ctx['fillText'](this['name'], 0x0, 0x0);
        if (this['amount'] > 0x1) {
            let _0x4c228b = ctx['measureText'](this['name'])['width'] + 7.5;
            ctx['translate'](_0x4c228b, 0x4), ctx['font'] = '900\x20' + 0.75 * 22.5 + 'px\x20Ubuntu', ctx['lineWidth'] = 0.75 * 3.25, ctx['strokeText']('x' + this['amount']['toLocaleString'](), 0x0, 0x4), ctx['fillText']('x' + this['amount']['toLocaleString'](), 0x0, 0x4), ctx['translate'](-_0x4c228b, -0x4);
        }
        ctx['font'] = '900\x20' + 0.75 * 22.5 + 'px\x20Ubuntu', ctx['lineWidth'] = 0.75 * 3.25;
        let _0x1f9ce4 = ![];
        (this['type'] === 'Shattered\x20Relic\x20of\x20Wrath' || this['type'] === 'Reinforced\x20Relic\x20of\x20Wrath' || this['type'] === 'Subset\x20Relic\x20of\x20the\x20Guardian' || this['type'] === 'Division\x20Relic\x20of\x20the\x20Guardian' || this['type'] === 'Guard\x20Relic\x20of\x20the\x20Guardian' || this['type'] === 'Knight\x20Relic\x20of\x20the\x20Guardian' || this['type'] === 'Aid\x20Relic\x20of\x20Serenity' || this['type'] === 'Subliminal\x20Relic\x20of\x20Serenity' || this['type'] === 'Barrier\x20Relic\x20of\x20Serenity' || this['type'] === 'Token') && this['rarity'] == 0x0 && (_0x1f9ce4 = !![]);
        ctx['fillStyle'] = _0x1f9ce4 == !![] ? '#000000' : Colors['rarities'][this['rarity']]['color'], ctx['translate'](0x0, 0x1e);
        if (this['type'] == 'Hexagon') {
            let _0x46c8e0 = Colors['rarities'][this['rarity']]['name'], _0x3f6546 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'['split'](''), _0x5a685f = 'ƛƁƇƊЄƑƓӇƖʆƘԼMƝƠƤƢƦƧƬƲƔƜҲƳȤ'['split']('');
            _0x46c8e0 = _0x46c8e0['toUpperCase']();
            let _0x3d45e7 = '';
            for (let _0x1ef548 of _0x46c8e0) {
                _0x3d45e7 += _0x5a685f[_0x3f6546['indexOf'](_0x1ef548)] ? _0x5a685f[_0x3f6546['indexOf'](_0x1ef548)] : _0x1ef548;
            }
            _0x46c8e0 = _0x3d45e7, ctx['strokeText'](_0x46c8e0, 0x0, 0x0), ctx['fillText'](_0x46c8e0, 0x0, 0x0);
        } else
            ctx['strokeText'](_0x1f9ce4 == !![] ? '???' : Colors['rarities'][this['rarity']]['name'], 0x0, 0x0), ctx['fillText'](_0x1f9ce4 == !![] ? '???' : Colors['rarities'][this['rarity']]['name'], 0x0, 0x0);
        ctx['font'] = '900\x20' + 0.7 * 22.5 + 'px\x20Ubuntu', ctx['lineWidth'] = 0.7 * 3.25, ctx['translate'](0x0, 0x2d);
        for (let _0xb9143e of this['finalDesc']) {
            let _0x2e47a1 = 0x0;
            for (let _0x44f736 of _0xb9143e) {
                ctx['fillStyle'] = _0x44f736['color'], ctx['strokeText'](_0x44f736['text'], 0x0, 0x0), ctx['fillText'](_0x44f736['text'], 0x0, 0x0), ctx['translate'](_0x44f736['written'], 0x0), _0x2e47a1 += _0x44f736['written'];
            }
            ctx['translate'](-_0x2e47a1, 22.5);
        }
        ctx['translate'](0x0, 22.5);
        for (let _0x33d9b1 of this['bottomstats']) {
            if (_0x33d9b1['value'] == 0x0)
                continue;
            ctx['fillStyle'] = _0x33d9b1['color'];
            let _0x37d7b9 = _0x33d9b1['displayName'] || this['formatName'](_0x33d9b1['key']) + ':\x20', _0x478d20 = ctx['measureText'](_0x37d7b9)['width'];
            if (this['type'] == 'Hexagon') {
                let _0x1d12a4 = this['formatName'](_0x33d9b1['key']) + ':\x20', _0x26497a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'['split'](''), _0x486cad = 'ƛƁƇƊЄƑƓӇƖʆƘԼMƝƠƤƢƦƧƬƲƔƜҲƳȤ'['split']('');
                _0x1d12a4 = _0x1d12a4['toUpperCase']();
                let _0x2f8121 = '';
                for (let _0x1c54a4 of _0x1d12a4) {
                    _0x2f8121 += _0x486cad[_0x26497a['indexOf'](_0x1c54a4)] ? _0x486cad[_0x26497a['indexOf'](_0x1c54a4)] : _0x1c54a4;
                }
                _0x1d12a4 = _0x2f8121, ctx['strokeText'](_0x1d12a4, 0x0, 0x0), ctx['fillText'](_0x1d12a4, 0x0, 0x0), _0x478d20 = ctx['measureText'](_0x1d12a4)['width'];
            } else
                ctx['strokeText'](_0x37d7b9, 0x0, 0x0), ctx['fillText'](_0x37d7b9, 0x0, 0x0);
            ctx['translate'](_0x478d20, 0x0);
            if (_0x33d9b1['displayName']) {
                ctx['translate'](-_0x478d20, 17.5);
                continue;
            }
            ctx['fillStyle'] = '#ffffff';
            let _0xb49484 = formatAmountHighPrecision(_0x33d9b1['value']);
            if ([
                    'poison',
                    'flowerBodyPoison',
                    'summonBodyPoison'
                ]['includes'](_0x33d9b1['key']))
                this['type'] == 'Shiny\x20Iris' ? _0xb49484 = formatAmountHighPrecision(_0x33d9b1['value'][0x0]) + '\x20(' + formatAmountHighPrecision(_0x33d9b1['value'][0x1]) + '/s,\x20total\x20' + Math['round'](_0x33d9b1['value'][0x0] / _0x33d9b1['value'][0x1] * 0x64) / 0x64 + 's\x20per\x20enemy)' : _0xb49484 = formatAmountHighPrecision(_0x33d9b1['value'][0x0]) + '\x20(' + formatAmountHighPrecision(_0x33d9b1['value'][0x1]) + '/s,\x20total\x20' + Math['round'](_0x33d9b1['value'][0x0] / _0x33d9b1['value'][0x1] * 0x64) / 0x64 + 's)';
            else {
                if ([
                        'cooldown',
                        'duration',
                        'timeLimit',
                        'passiveHealingStackDuration',
                        'period',
                        'shadowTime',
                        'unrevivable',
                        'timeToPop',
                        'petLifespan',
                        'slowdownTime',
                        'teleportCooldown'
                    ]['includes'](_0x33d9b1['key']))
                    _0xb49484 += 's';
                else {
                    if ([
                            'overhealConversion',
                            'inflation',
                            'damagePercent',
                            'collectDupeChance',
                            'armorPercent',
                            'radiusChange',
                            'healthNerf',
                            'speedBuff'
                        ]['includes'](_0x33d9b1['key']))
                        _0xb49484 += '%';
                    else {
                        if (_0x33d9b1['key'] === 'waveSpeedBoost')
                            _0xb49484 = '+' + Math['round']((_0x33d9b1['value'] - 0x1) * 0x64) + '%';
                        else {
                            if (_0x33d9b1['key'] === 'speedReduction')
                                _0xb49484 = Math['round'](_0x33d9b1['value'] * 0x64) + '%/wave';
                            else {
                                if (_0x33d9b1['key'] === 'ratedWave')
                                    _0xb49484 = 'wave\x20' + _0x33d9b1['value'];
                                else {
                                    if (['damageIncrease']['includes'](_0x33d9b1['key'])) {
                                        ctx['strokeText'](_0x33d9b1['value'] + '%\x20(' + _0x33d9b1['value'] * 1.25 + '%\x20on\x20', 0x0, 0x0), ctx['fillText'](_0x33d9b1['value'] + '%\x20(' + _0x33d9b1['value'] * 1.25 + '%\x20on\x20', 0x0, 0x0);
                                        let _0x29c0a5 = ctx['measureText'](_0x33d9b1['value'] + '%\x20(' + _0x33d9b1['value'] * 1.25 + '%\x20on\x20')['width'];
                                        ctx['translate'](_0x29c0a5, 0x0), ctx['fillStyle'] = '#ff0000', ctx['strokeText']('Blood\x20Petals', 0x0, 0x0), ctx['fillText']('Blood\x20Petals', 0x0, 0x0);
                                        let _0x504c5a = ctx['measureText']('Blood\x20Petals')['width'];
                                        ctx['translate'](_0x504c5a, 0x0), ctx['fillStyle'] = '#ffffff', ctx['strokeText'](')', 0x0, 0x0), ctx['fillText'](')', 0x0, 0x0);
                                        const _0x54dd35 = ctx['measureText'](')')['width'] + 7.5, _0x27afef = -0x6, _0x38af19 = 0x7;
                                        ctx['save'](), ctx['beginPath'](), ctx['arc'](_0x54dd35 + _0x38af19, _0x27afef + _0x38af19, _0x38af19, 0x0, Math['PI'] * 0x2), ctx['strokeStyle'] = '#ff4444', ctx['lineWidth'] = 0x2, ctx['stroke'](), ctx['beginPath'](), ctx['moveTo'](_0x54dd35 + _0x38af19 - _0x38af19 * 0.7, _0x27afef + _0x38af19 - _0x38af19 * 0.7), ctx['lineTo'](_0x54dd35 + _0x38af19 + _0x38af19 * 0.7, _0x27afef + _0x38af19 + _0x38af19 * 0.7), ctx['stroke'](), ctx['restore'](), ctx['translate'](-(_0x29c0a5 + _0x504c5a), 0x0), _0xb49484 = '';
                                    } else {
                                        if (['flowerHeal']['includes'](_0x33d9b1['key'])) {
                                            ctx['strokeText'](formatAmountHighPrecision(_0x33d9b1['value']) + '\x20/s', 0x0, 0x0), ctx['fillText'](formatAmountHighPrecision(_0x33d9b1['value']) + '\x20/s', 0x0, 0x0);
                                            let _0x5b62aa = ctx['measureText'](formatAmountHighPrecision(_0x33d9b1['value']) + '\x20/s')['width'];
                                            ctx['translate'](_0x5b62aa, 0x0);
                                            const _0x30dda2 = ctx['measureText'](')')['width'] + 7.5, _0x53c2b8 = -0x6, _0x54176c = 0x7;
                                            ctx['save'](), ctx['beginPath'](), ctx['arc'](_0x30dda2 + _0x54176c, _0x53c2b8 + _0x54176c, _0x54176c, 0x0, Math['PI'] * 0x2), ctx['strokeStyle'] = '#ff4444', ctx['lineWidth'] = 0x2, ctx['stroke'](), ctx['beginPath'](), ctx['moveTo'](_0x30dda2 + _0x54176c - _0x54176c * 0.7, _0x53c2b8 + _0x54176c - _0x54176c * 0.7), ctx['lineTo'](_0x30dda2 + _0x54176c + _0x54176c * 0.7, _0x53c2b8 + _0x54176c + _0x54176c * 0.7), ctx['stroke'](), ctx['restore'](), ctx['translate'](-_0x5b62aa, 0x0), _0xb49484 = '';
                                        } else {
                                            if ([
                                                    'reviveHealth',
                                                    'healingBoost',
                                                    'healthBuffBoost',
                                                    'weatherChanceBoost'
                                                ]['includes'](_0x33d9b1['key']))
                                                _0xb49484 = formatAmountHighPrecision(_0x33d9b1['value'] * 0x64) + '%';
                                            else {
                                                if ([
                                                        'passiveDamagePerKill',
                                                        'passiveHealingBuff',
                                                        'petHeal'
                                                    ]['includes'](_0x33d9b1['key'])) {
                                                    _0xb49484 += '/s';
                                                    if (this['type'] == 'Starfish' || this['type'] == 'Brisingida')
                                                        _0xb49484 += '\x20(under\x2070%\x20hp)';
                                                } else {
                                                    if (['lightning']['includes'](_0x33d9b1['key'])) {
                                                        if (this['type'] == 'Shiny\x20Lightning')
                                                            _0xb49484 = '+' + _0xb49484;
                                                        _0xb49484 += '/bounce';
                                                    } else {
                                                        if (['summon']['includes'](_0x33d9b1['key'])) {
                                                            if (_0x33d9b1['value']['rarity'] > -0x1) {
                                                                let _0x58a8b0 = Colors['rarities'][_0x33d9b1['value']['rarity']]['name'] + '\x20';
                                                                _0xb49484 = _0x33d9b1['value']['type'];
                                                                if (_0x33d9b1['value']['amount'])
                                                                    _0xb49484 += '\x20x' + _0x33d9b1['value']['amount'];
                                                                if (this['type'] == 'Hexagon') {
                                                                    let _0x199288 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'['split'](''), _0x13bc43 = 'ƛƁƇƊЄƑƓӇƖʆƘԼMƝƠƤƢƦƧƬƲƔƜҲƳȤ'['split']('');
                                                                    _0x58a8b0 = _0x58a8b0['toUpperCase']();
                                                                    let _0x34e022 = '';
                                                                    for (let _0x3989fd of _0x58a8b0) {
                                                                        _0x34e022 += _0x13bc43[_0x199288['indexOf'](_0x3989fd)] ? _0x13bc43[_0x199288['indexOf'](_0x3989fd)] : _0x3989fd;
                                                                    }
                                                                    _0x58a8b0 = _0x34e022, _0xb49484 = _0xb49484['toUpperCase'](), _0x34e022 = '';
                                                                    for (let _0x1a5da6 of _0xb49484) {
                                                                        _0x34e022 += _0x13bc43[_0x199288['indexOf'](_0x1a5da6)] ? _0x13bc43[_0x199288['indexOf'](_0x1a5da6)] : _0x1a5da6;
                                                                    }
                                                                    _0xb49484 = _0x34e022;
                                                                }
                                                                let _0x186952 = ctx['measureText'](_0x58a8b0)['width'];
                                                                ctx['fillStyle'] = Colors['rarities'][_0x33d9b1['value']['rarity']]['color'], ctx['strokeText'](_0x58a8b0, 0x0, 0x0), ctx['fillText'](_0x58a8b0, 0x0, 0x0), ctx['translate'](_0x186952, 0x0), ctx['fillStyle'] = '#ffffff', ctx['strokeText'](_0xb49484, 0x0, 0x0), ctx['fillText'](_0xb49484, 0x0, 0x0), ctx['translate'](-_0x478d20 - _0x186952, 17.5);
                                                            } else
                                                                ctx['translate'](-_0x478d20, 17.5);
                                                            for (let _0x2d9cc1 in _0x33d9b1['value']['substats']) {
                                                                let _0x229681 = _0x33d9b1['value']['substats'][_0x2d9cc1], _0x102b20 = '\x20-\x20Summon\x20' + this['formatName'](_0x2d9cc1) + ':\x20';
                                                                if (this['type'] == 'Hexagon') {
                                                                    let _0x5d6e1c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'['split'](''), _0x13ad92 = 'ƛƁƇƊЄƑƓӇƖʆƘԼMƝƠƤƢƦƧƬƲƔƜҲƳȤ'['split']('');
                                                                    _0x102b20 = _0x102b20['toUpperCase']();
                                                                    let _0x189e0f = '';
                                                                    for (let _0x259f1d of _0x102b20) {
                                                                        _0x189e0f += _0x13ad92[_0x5d6e1c['indexOf'](_0x259f1d)] ? _0x13ad92[_0x5d6e1c['indexOf'](_0x259f1d)] : _0x259f1d;
                                                                    }
                                                                    _0x102b20 = _0x189e0f;
                                                                }
                                                                let _0x40b0a8 = ctx['measureText'](_0x102b20)['width'];
                                                                ctx['fillStyle'] = statColors[_0x2d9cc1], ctx['strokeText'](_0x102b20, 0x0, 0x0), ctx['fillText'](_0x102b20, 0x0, 0x0), ctx['translate'](_0x40b0a8, 0x0);
                                                                let _0x3fa388 = formatAmountHighPrecision(_0x229681);
                                                                if (this['type'] == 'Shiny\x20Ruby' && _0x2d9cc1 == 'damage')
                                                                    _0x3fa388 = '+' + _0x3fa388 + '\x20(per\x20summon)';
                                                                if (Array['isArray'](_0x3fa388))
                                                                    _0x3fa388 = formatAmountHighPrecision(_0x229681[0x0]) + '~' + formatAmountHighPrecision(_0x229681[0x1]);
                                                                ctx['fillStyle'] = '#ffffff', ctx['strokeText'](_0x3fa388, 0x0, 0x0), ctx['fillText'](_0x3fa388, 0x0, 0x0), ctx['translate'](-_0x40b0a8, 17.5);
                                                            }
                                                            ctx['translate'](0x0, -17.5), _0xb49484 = '', _0x478d20 = 0x0;
                                                        } else {
                                                            if ([
                                                                    'slowdown',
                                                                    'killBossUnder',
                                                                    'attractionRadius'
                                                                ]['includes'](_0x33d9b1['key']) && _0x33d9b1['value'][0x0]) {
                                                                ctx['translate'](-_0x478d20, 17.5);
                                                                let _0x254344 = _0x33d9b1['value'][0x0], _0x20e491 = -0x1;
                                                                for (let _0x1c9782 of _0x33d9b1['value']) {
                                                                    _0x20e491++;
                                                                    if (_0x1c9782 < 0x1 || _0x1c9782 == undefined)
                                                                        continue;
                                                                    if (_0x1c9782 == _0x254344)
                                                                        continue;
                                                                    _0x254344 = _0x1c9782;
                                                                    let _0x157424 = Colors['rarities'][_0x20e491];
                                                                    if (!_0x157424)
                                                                        _0x157424 = Colors['rarities'][0x0];
                                                                    let _0x2b2b79 = ctx['measureText']('-\x20' + this['formatName'](_0x157424['name']) + '\x20' + this['formatName'](_0x33d9b1['key']) + ':\x20')['width'];
                                                                    ctx['fillStyle'] = _0x157424['color'], ctx['strokeText']('-\x20' + this['formatName'](_0x157424['name']) + '\x20' + this['formatName'](_0x33d9b1['key']) + ':\x20', 0x0, 0x0), ctx['fillText']('-\x20' + this['formatName'](_0x157424['name']) + '\x20' + this['formatName'](_0x33d9b1['key']) + ':\x20', 0x0, 0x0), ctx['translate'](_0x2b2b79, 0x0), _0xb49484 = formatAmountHighPrecision(_0x33d9b1['value'][_0x20e491]);
                                                                    if (_0x33d9b1['key'] !== 'attractionRadius')
                                                                        _0xb49484 += '%';
                                                                    ctx['fillStyle'] = '#ffffff', ctx['strokeText'](_0xb49484, 0x0, 0x0), ctx['fillText'](_0xb49484, 0x0, 0x0), ctx['translate'](-_0x2b2b79, 17.5);
                                                                }
                                                                ctx['translate'](0x0, -17.5), _0xb49484 = '', _0x478d20 = 0x0;
                                                            } else {
                                                                if (this['type'] == 'Plank' && _0x33d9b1['key'] == 'damage')
                                                                    ctx['strokeText'](formatAmountHighPrecision(_0x33d9b1['value']) + '\x20(' + formatAmountHighPrecision(_0x33d9b1['value'] * 0x3e8) + '\x20against\x20projectiles)', 0x0, 0x0), ctx['fillText'](formatAmountHighPrecision(_0x33d9b1['value']) + '\x20(' + formatAmountHighPrecision(_0x33d9b1['value'] * 0x3e8) + '\x20against\x20projectiles)', 0x0, 0x0);
                                                                else {
                                                                    if (['rotateSpeedBuff']['includes'](_0x33d9b1['key']))
                                                                        _0xb49484 += '\x20radians/s';
                                                                    else {
                                                                        if (['maxSkip']['includes'](_0x33d9b1['key']))
                                                                            _0xb49484 += '\x20waves';
                                                                        else
                                                                            [
                                                                                'healMultiplier',
                                                                                'eggHpMultiplier',
                                                                                'eggMassMultiplier',
                                                                                'eggDamageMultiplier',
                                                                                'dpsMultiplier',
                                                                                'hpMultiplier'
                                                                            ]['includes'](_0x33d9b1['key']) ? (_0xb49484 = 'x' + _0xb49484, ctx['strokeText'](_0xb49484, 0x0, 0x0), ctx['fillText'](_0xb49484, 0x0, 0x0)) : (ctx['strokeText'](formatAmountHighPrecision(_0x33d9b1['value']), 0x0, 0x0), ctx['fillText'](formatAmountHighPrecision(_0x33d9b1['value']), 0x0, 0x0));
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            _0xb49484 !== '' && (ctx['strokeText'](_0xb49484, 0x0, 0x0), ctx['fillText'](_0xb49484, 0x0, 0x0));
            if (_0x33d9b1['unstackable'] && _0xb49484 !== '') {
                const _0x2a55e7 = ctx['measureText'](_0xb49484)['width'] + 7.5, _0x27f46d = -0x6, _0x9d7f7d = 0x7;
                ctx['save'](), ctx['beginPath'](), ctx['arc'](_0x2a55e7 + _0x9d7f7d, _0x27f46d + _0x9d7f7d, _0x9d7f7d, 0x0, Math['PI'] * 0x2), ctx['strokeStyle'] = '#ff4444', ctx['lineWidth'] = 0x2, ctx['stroke'](), ctx['beginPath'](), ctx['moveTo'](_0x2a55e7 + _0x9d7f7d - _0x9d7f7d * 0.7, _0x27f46d + _0x9d7f7d - _0x9d7f7d * 0.7), ctx['lineTo'](_0x2a55e7 + _0x9d7f7d + _0x9d7f7d * 0.7, _0x27f46d + _0x9d7f7d + _0x9d7f7d * 0.7), ctx['stroke'](), ctx['restore']();
            }
            ctx['translate'](-_0x478d20, 17.5);
        }
        return ctx = _0x22cace, _0x25721a;
    }
    ['genEcBox']() {
        const _0x300ad9 = new OffscreenCanvas(this['w'], this['h']), _0x20d303 = _0x300ad9['getContext']('2d'), _0x42c10c = ctx;
        ctx = _0x20d303, ctx['lineCap'] = 'round', ctx['lineJoin'] = 'round', ctx['fillStyle'] = '#000000', ctx['globalAlpha'] *= 0.5, ctx['beginPath'](), ctx['roundRect'](0x0, 0x0, this['w'], this['h'], 0x5), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] /= 0.5, ctx['strokeStyle'] = '#000000', ctx['fillStyle'] = '#ffffff', ctx['lineWidth'] = 0x2, ctx['font'] = '900\x20' + 0.9 * 22.5 + 'px\x20Ubuntu', ctx['textAlign'] = 'right', ctx['textBaseline'] = 'top', ctx['fillStyle'] = 'white', ctx['strokeStyle'] = 'black', ctx['lineWidth'] = 0.9 * 3.25, ctx['translate'](this['w'] - 0x23, 0xa), ctx['save']();
        const _0x39cd48 = 12.5, _0x873595 = 12.5, _0x471aeb = 0xa, _0x18fc4e = 0x4;
        ctx['beginPath']();
        for (let _0x2cc967 = 0x0; _0x2cc967 < 0x5; _0x2cc967++) {
            const _0x5e042d = _0x2cc967 * 0x4 * Math['PI'] / 0x5 - Math['PI'] / 0x2, _0x5ccfe4 = _0x39cd48 + Math['cos'](_0x5e042d) * _0x471aeb, _0x3ca023 = _0x873595 + Math['sin'](_0x5e042d) * _0x471aeb;
            if (_0x2cc967 === 0x0)
                ctx['moveTo'](_0x5ccfe4, _0x3ca023);
            else
                ctx['lineTo'](_0x5ccfe4, _0x3ca023);
            const _0x595286 = _0x2cc967 * 0x4 * Math['PI'] / 0x5 + 0x2 * Math['PI'] / 0x5 - Math['PI'] / 0x2, _0x18606b = _0x39cd48 + Math['cos'](_0x595286) * _0x18fc4e, _0x35bf05 = _0x873595 + Math['sin'](_0x595286) * _0x18fc4e;
            ctx['lineTo'](_0x18606b, _0x35bf05);
        }
        ctx['closePath'](), ctx['fillStyle'] = '#FFD700', ctx['fill'](), ctx['strokeStyle'] = '#B8860B', ctx['lineWidth'] = 1.5, ctx['stroke'](), ctx['restore']();
        let _0x5e08f0 = '', _0x329011 = 0x1;
        for (let _0x47b0f4 of this['topstats']) {
            _0x47b0f4['key'] == 'temp' ? _0x5e08f0 += _0x47b0f4['value'][0x1] + 's' : _0x5e08f0 += formatAmountHighPrecision(_0x47b0f4['value']);
            if (this['topstats']['length'] > 0x1 && _0x329011 !== this['topstats']['length'])
                _0x5e08f0 += '\x20+\x20';
            _0x329011++;
        }
        ctx['strokeText'](_0x5e08f0, -0x5, 2.5), ctx['fillText'](_0x5e08f0, -0x5, 2.5), ctx['translate'](-this['w'] + 0x23, 0x0), ctx['font'] = '900\x20' + 1.2 * 22.5 + 'px\x20Ubuntu', ctx['lineWidth'] = 1.2 * 3.25, ctx['textAlign'] = 'left', ctx['translate'](0xa, 0x0), ctx['strokeText'](this['name'], 0x0, 0x0), ctx['fillText'](this['name'], 0x0, 0x0), ctx['font'] = '900\x20' + 0.75 * 22.5 + 'px\x20Ubuntu', ctx['lineWidth'] = 0.75 * 3.25, ctx['fillStyle'] = Colors['rarities'][this['rarity']]['color'], ctx['translate'](0x0, 0x1e);
        if (this['type'] == 'Hexagon') {
            let _0x28089c = Colors['rarities'][this['rarity']]['name'], _0x2e1b22 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'['split'](''), _0x54414e = 'ƛƁƇƊЄƑƓӇƖʆƘԼMƝƠƤƢƦƧƬƲƔƜҲƳȤ'['split']('');
            _0x28089c = _0x28089c['toUpperCase']();
            let _0x14c9de = '';
            for (let _0x455459 of _0x28089c) {
                _0x14c9de += _0x54414e[_0x2e1b22['indexOf'](_0x455459)] ? _0x54414e[_0x2e1b22['indexOf'](_0x455459)] : _0x455459;
            }
            _0x28089c = _0x14c9de, ctx['strokeText'](_0x28089c, 0x0, 0x0), ctx['fillText'](_0x28089c, 0x0, 0x0);
        } else
            ctx['strokeText'](Colors['rarities'][this['rarity']]['name'], 0x0, 0x0), ctx['fillText'](Colors['rarities'][this['rarity']]['name'], 0x0, 0x0);
        ctx['font'] = '900\x20' + 0.7 * 22.5 + 'px\x20Ubuntu', ctx['lineWidth'] = 0.7 * 3.25, ctx['translate'](0x0, 0x2d);
        for (let _0x364541 of this['finalDesc']) {
            let _0x1f2551 = 0x0;
            for (let _0x9b84c of _0x364541) {
                ctx['fillStyle'] = _0x9b84c['color'], ctx['strokeText'](_0x9b84c['text'], 0x0, 0x0), ctx['fillText'](_0x9b84c['text'], 0x0, 0x0), ctx['translate'](_0x9b84c['written'], 0x0), _0x1f2551 += _0x9b84c['written'];
            }
            ctx['translate'](-_0x1f2551, 22.5);
        }
        ctx['translate'](0x0, 22.5);
        for (let _0xb78246 of this['bottomstats']) {
            if (_0xb78246['key'] !== 'drops') {
                if (_0xb78246['value'] == 0x0 || _0xb78246['key'] == 'detectionDistance' && isNaN(_0xb78246['value']))
                    continue;
                ctx['fillStyle'] = _0xb78246['color'];
                if (_0xb78246['displayName']) {
                    ctx['strokeText'](_0xb78246['displayName'], 0x0, 0x0), ctx['fillText'](_0xb78246['displayName'], 0x0, 0x0);
                    continue;
                }
                let _0x48fdd9 = ctx['measureText'](this['formatName'](_0xb78246['key']) + ':\x20')['width'];
                if (this['type'] == 'Hexagon') {
                    let _0x5b294c = this['formatName'](_0xb78246['key']) + ':\x20', _0x486697 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'['split'](''), _0x39757b = 'ƛƁƇƊЄƑƓӇƖʆƘԼMƝƠƤƢƦƧƬƲƔƜҲƳȤ'['split']('');
                    _0x5b294c = _0x5b294c['toUpperCase']();
                    let _0x45a244 = '';
                    for (let _0x54480b of _0x5b294c) {
                        _0x45a244 += _0x39757b[_0x486697['indexOf'](_0x54480b)] ? _0x39757b[_0x486697['indexOf'](_0x54480b)] : _0x54480b;
                    }
                    _0x5b294c = _0x45a244, ctx['strokeText'](_0x5b294c, 0x0, 0x0), ctx['fillText'](_0x5b294c, 0x0, 0x0), _0x48fdd9 = ctx['measureText'](_0x5b294c)['width'];
                } else
                    ctx['strokeText'](this['formatName'](_0xb78246['key']) + ':\x20', 0x0, 0x0), ctx['fillText'](this['formatName'](_0xb78246['key']) + ':\x20', 0x0, 0x0);
                ctx['translate'](_0x48fdd9, 0x0), ctx['fillStyle'] = '#ffffff';
                let _0x121855 = formatAmountHighPrecision(_0xb78246['value']);
                if (['lightning']['includes'](_0xb78246['key']))
                    _0x121855 += this['type'] == 'Electric\x20Eel' || this['type'] == 'Dark\x20Electric\x20Eel' || this['type'] == 'Shiny\x20Electric\x20Eel' ? '/s' : '/bounce';
                else {
                    if (['healingReduction']['includes'](_0xb78246['key']))
                        _0x121855 = _0xb78246['value'] * 0x64 + '%/hit';
                    else {
                        if ([
                                'regeneration',
                                'lifesteal'
                            ]['includes'](_0xb78246['key']))
                            _0x121855 += '/s';
                        else {
                            if ([
                                    'poison',
                                    'flowerBodyPoison',
                                    'summonBodyPoison'
                                ]['includes'](_0xb78246['key']))
                                _0x121855 = formatAmountHighPrecision(_0xb78246['value'][0x0]) + '\x20(' + formatAmountHighPrecision(_0xb78246['value'][0x1]) + '/s,\x20total\x20' + Math['round'](_0xb78246['value'][0x0] / _0xb78246['value'][0x1] * 0x64) / 0x64 + 's)';
                            else {
                                if (_0xb78246['key'] === 'waveSpeedBoost')
                                    _0x121855 = '+' + Math['round']((_0xb78246['value'] - 0x1) * 0x64) + '%';
                                else {
                                    if (_0xb78246['key'] === 'speedReduction')
                                        _0x121855 = Math['round'](_0xb78246['value'] * 0x64) + '%/wave';
                                    else {
                                        if (_0xb78246['key'] === 'ratedWave')
                                            _0x121855 = 'wave\x20' + _0xb78246['value'];
                                        else
                                            [
                                                'healMultiplier',
                                                'eggHpMultiplier',
                                                'eggMassMultiplier',
                                                'eggDamageMultiplier',
                                                'dpsMultiplier',
                                                'hpMultiplier'
                                            ]['includes'](_0xb78246['key']) ? (_0x121855 = 'x' + _0x121855, ctx['strokeText'](_0x121855, 0x0, 0x0), ctx['fillText'](_0x121855, 0x0, 0x0)) : (ctx['strokeText'](formatAmountHighPrecision(_0xb78246['value']), 0x0, 0x0), ctx['fillText'](formatAmountHighPrecision(_0xb78246['value']), 0x0, 0x0));
                                    }
                                }
                            }
                        }
                    }
                }
                _0x121855 !== '' && (ctx['strokeText'](_0x121855, 0x0, 0x0), ctx['fillText'](_0x121855, 0x0, 0x0)), ctx['translate'](-_0x48fdd9, 17.5);
            } else
                for (let _0x42f8a6 in _0xb78246['value']) {
                    let _0xf81f07 = _0xb78246['value'][_0x42f8a6], _0x40a551 = 0x0, _0x5d3958 = 0x0;
                    for (let _0x3c0056 in _0xf81f07) {
                        let _0x3a38a4 = _0xf81f07[_0x3c0056];
                        if (_0x3a38a4 == 0x0)
                            continue;
                        _0x5d3958++;
                        let _0x452d17 = new Petal({ 'type': _0x42f8a6 }), _0x55c5a9 = new PetalContainer([_0x452d17], {
                                'x': 27.5,
                                'y': 42.5,
                                'w': 0x32,
                                'h': 0x32,
                                'toOscillate': ![]
                            }, 0x0, 0x1, 0x0);
                        _0x55c5a9['render']['w'] = 0x32, _0x55c5a9['spawnAnimation'] = 0x1, _0x55c5a9['rarity'] = _0x3c0056;
                        if (Stats['specialRarityDrops'][this['rarity']])
                            for (let _0x237c7c of Stats['specialRarityDrops'][this['rarity']]) {
                                if (_0x55c5a9['rarity'] == _0x237c7c['originalRarity'] && !_0x55c5a9['modified']) {
                                    if (_0x237c7c['replaceRarity'])
                                        _0x55c5a9['rarity'] = _0x237c7c['replaceRarity'];
                                    _0x55c5a9['amount'] = _0x237c7c['amount'], _0x55c5a9['modified'] = !![];
                                }
                            }
                        ctx['font'] = '900\x20' + 0.7 * 22.5 + 'px\x20Ubuntu', ctx['lineWidth'] = 0.7 * 3.25, ctx['fillStyle'] = 'white', ctx['strokeStyle'] = 'black', ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle';
                        if (_0x3a38a4 < 0.01) {
                        } else
                            _0x3a38a4 = formatAmountHighPrecision(_0x3a38a4);
                        ctx['strokeText'](_0x3a38a4 + '%', 27.5, 0x55), ctx['fillText'](_0x3a38a4 + '%', 27.5, 0x55), _0x55c5a9['draw'](), ctx['translate'](67.5, 0x0), _0x40a551 += 67.5;
                    }
                    if (_0x5d3958 > 0x0)
                        ctx['translate'](-_0x40a551, 0x55);
                }
        }
        return ctx = _0x42c10c, _0x300ad9;
    }
    ['generateDesc'](_0x4cc3d9, _0x525a97) {
        ctx['font'] = '900\x20' + 0.7 * 22.5 + 'px\x20Ubuntu';
        this['mode'] == 'petal' && (this['amount'] > 0x1 && (_0x525a97 += ctx['measureText'](this['amount']['toLocaleString']())['width'] + 7.5), _0x4cc3d9 += ctx['measureText'](this['amount']['toLocaleString']())['width'] + 7.5);
        let _0x3d1179 = [], _0x302bc1 = [], _0x3962d7 = {
                'current': 0x0,
                'max': 0x0,
                'writing': 0x0
            }, _0x2414c0 = 0x0, _0x272a7d = {
                'text': '',
                'color': '#ffffff'
            }, _0xbc2b5 = 0x0;
        for (let _0x313663 of this['description']) {
            let _0x4744a3 = _0x313663['text']['split']('\x20');
            for (let _0x458a2b of _0x4744a3) {
                _0x3d1179['push']({
                    'text': _0x458a2b,
                    'color': _0x313663['color']
                });
            }
        }
        for (let _0x8d33b3 of _0x3d1179) {
            let _0x763a23 = ctx['measureText'](_0x8d33b3['text'] + '\x20')['width'];
            _0x3962d7['current'] + _0x763a23 > _0x525a97 - 0xf && (_0x302bc1[_0x2414c0]['push']({
                'text': _0x272a7d['text'],
                'color': _0x272a7d['color'],
                'written': _0x3962d7['writing']
            }), _0x2414c0++, _0x3962d7['current'] = 0x0, _0x3962d7['writing'] = 0x0, _0x272a7d = {
                'text': '',
                'color': _0x8d33b3['color']
            }), !_0x302bc1[_0x2414c0] && (_0x302bc1[_0x2414c0] = []), _0x272a7d['color'] !== _0x8d33b3['color'] && (_0x302bc1[_0x2414c0]['push']({
                'text': _0x272a7d['text'],
                'color': _0x272a7d['color'],
                'written': _0x3962d7['writing']
            }), _0x3962d7['writing'] = 0x0, _0x272a7d = {
                'text': '',
                'color': _0x8d33b3['color']
            }), _0xbc2b5 !== _0x3d1179['length'] - 0x1 ? _0x272a7d['text'] += _0x8d33b3['text'] + '\x20' : (_0x272a7d['text'] += _0x8d33b3['text'], _0x302bc1[_0x2414c0]['push']({
                'text': _0x272a7d['text'],
                'color': _0x272a7d['color'],
                'written': _0x3962d7['writing']
            })), _0x3962d7['current'] += _0x763a23, _0x3962d7['writing'] += _0x763a23, _0x3962d7['max'] = Math['max'](_0x3962d7['max'], _0x3962d7['current']), _0xbc2b5++;
        }
        return this['finalDesc'] = _0x302bc1, {
            'width': Math['max'](_0x4cc3d9, _0x3962d7['max']) + 0xf,
            'height': _0x302bc1['length'] * 22.5
        };
    }
    ['formatName'](_0x3c5d58) {
        _0x3c5d58['length'] > 0x1 && (_0x3c5d58 = _0x3c5d58[0x0]['toUpperCase']() + _0x3c5d58['slice'](0x1));
        for (let _0x1b7f11 = 0x0; _0x1b7f11 < _0x3c5d58['length']; _0x1b7f11++) {
            _0x3c5d58[_0x1b7f11]['toUpperCase']() === _0x3c5d58[_0x1b7f11] && (_0x1b7f11 == 0x0 ? _0x3c5d58 = _0x3c5d58['slice'](0x0, _0x1b7f11) + _0x3c5d58[_0x1b7f11]['toUpperCase']() + _0x3c5d58['slice'](_0x1b7f11 + 0x1) : _0x3c5d58 = _0x3c5d58['slice'](0x0, _0x1b7f11) + '\x20' + _0x3c5d58[_0x1b7f11]['toUpperCase']() + _0x3c5d58['slice'](_0x1b7f11 + 0x1), _0x1b7f11 += 0x2);
        }
        return _0x3c5d58;
    }
}
const statColors = {
    'damage': '#ff4444',
    'health': '#44ff44',
    'reload': '#44ddff',
    'cooldown': '#67dbad',
    'tanksmithRechargeTime': '#44ddff',
    'shootCooldown': '#44ddff',
    'speed': '#44ddff',
    'tanksmithRadius': '#e044ff',
    'tanksmithHealth': '#44ff44',
    'poison': '#e644ff',
    'summonBodyPoison': '#ec73ff',
    'flowerBodyPoison': '#b33fc5',
    'attractionRadius': '#baa052',
    'salt': '#ff4444',
    'bodyDamage': '#de3380',
    'weatherChanceBoost': '#f5e042',
    'maxDamage': '#ff4444',
    'slowdown': '#777777',
    'slowdownTime': '#b172cf',
    'armor': '#838383',
    'mass': '#696969',
    'duration': '#ff44ee',
    'heal': '#ff94c9',
    'petHeal': '#c96d9b',
    'flowerHeal': '#fc65b0',
    'xp': '#f9ff44',
    'detectionDistance': '#ffb144',
    'extraRange': '#1585b5',
    'wingExtraRange': '#1585b5',
    'enemyKnockback': '#de823f',
    'healAmount': '#44ff44',
    'healDelay': '#44ff44',
    'range': '#e00030',
    'period': '#e3c59d',
    'damagePercent': '#e3c59d',
    'bounces': '#a7faef',
    'healthNerf': '#eb7faf',
    'overhealConversion': '#dae09f',
    'hatchTime': '#9fd49f',
    'extraDamage': '#ffbb00',
    'criticalDamage': '#dd0000',
    'flowerArmor': '#a3a3a3',
    'maxEnemyBoost': '#33dd33',
    'petLifespan': '#999999',
    'lifespan': '#499999',
    'reviveHealth': '#944994',
    'maximumWave': '#009930',
    'timeToPop': '#ffeeaa',
    'shadowTime': '#333333',
    'unrevivable': '#555555',
    'damageConversion': '#aaaaaa',
    'maximumMobs': '#9055cf',
    'healingReduction': '#dddddd',
    'useLimit': '#4d7896',
    'wavesSentBack': '#445396',
    'effect': '#b0b0b0',
    'passiveDamagePerKill': '#ff3344',
    'radiusChange': '#4986e3',
    'passiveHealingStack': '#35de3e',
    'passiveHealingStackDuration': '#659c68',
    'killsRequired': '#ff1234',
    'timeLimit': '#3582ab',
    'failDamage': '#bf245b',
    'blastRadius': '#56269e',
    'armorPercent': '#7d9c7b',
    'finalHitDamage': '#ff5900',
    'hitBlastRadius': '#e4aa40ff',
    'hitBlastDamage': '#cf601fff',
    'collectDupeChance': '#af56cb',
    'teleportCooldown': '#70bcd4',
    'inflation': '#d4d4d4',
    'shootCooldownBuff': '#ff9944',
    'projectileSpeedBuff': '#ff9944',
    'speedBuff': '#fafafa',
    'knockbackMass': '#d4d4d4',
    'bodyKnockback': '#d4d4d4',
    'mana': '#ffffff',
    'waveSpawningSpeed': '#a4ffa4',
    'healingBoost': '#f8464d',
    'healthBuff': '#35de3e',
    'healthBuffBoost': '#4eb648ff',
    'waveHealthBoost': '#35de3e',
    'killBossUnder': '#dd4433',
    'passiveHealingBuff': '#ff94c9',
    'lightning': '#29f2e5',
    'teleportCooldown': '#70bcd4',
    'damageIncrease': '#8b3ae0',
    'rotateSpeedBuff': '#9cee56',
    'maxWave': '#df3a83',
    'maxSkip': '#d6709d',
    'waveSpeedBoost': '#c5628dff',
    'ratedWave': '#62c5a8ff',
    'speedReduction': '#c56262ff',
    'healMultiplier': '#99ff99',
    'squadHealShare': '#ffcc66',
    'eggHpMultiplier': '#ff9999',
    'eggMassMultiplier': '#99ccff',
    'eggDamageMultiplier': '#ff6666',
    'dpsMultiplier': '#ff6666',
    'hpMultiplier': '#ff9999'
};
for (let i in Colors['rarities']) {
    statColors[Colors['rarities'][i]['name']] = Colors['rarities'][i]['color'];
}
const enemyRarityScalars = [
    {
        'name': 'Basic',
        'health': 0x1,
        'damage': 0x1,
        'radius': 0x1,
        'mass': 0x1,
        'petalDamage': 0x1,
        'petalHealth': 0x1,
        'petalHeal': 0x1,
        'petalMass': 0x1,
        'detectionDistance': 0x1,
        'xp': 0x1
    },
    {
        'name': 'Uncommon',
        'health': 0x2,
        'damage': 1.2,
        'radius': 1.1,
        'mass': 1.52,
        'petalDamage': 1.4,
        'petalHealth': 1.2,
        'petalHeal': 1.51,
        'petalMass': 1.52,
        'detectionDistance': 1.1,
        'xp': 0x3
    },
    {
        'name': 'Scarce',
        'health': 0x4,
        'damage': 1.5,
        'radius': 1.3,
        'mass': 2.5,
        'petalDamage': 0x2,
        'petalHealth': 1.5,
        'petalHeal': 2.2,
        'petalMass': 2.5,
        'detectionDistance': 1.2,
        'xp': 0x9
    },
    {
        'name': 'Exceptional',
        'health': 7.5,
        'damage': 1.9,
        'radius': 1.72,
        'mass': 5.6,
        'petalDamage': 2.9,
        'petalHealth': 1.9,
        'petalHeal': 3.2,
        'petalMass': 5.7,
        'detectionDistance': 1.3,
        'xp': 0x1b
    },
    {
        'name': 'Mythical',
        'health': 0x32,
        'damage': 2.7,
        'radius': 0x3,
        'mass': 0x12,
        'petalDamage': 4.8,
        'petalHealth': 2.8,
        'petalHeal': 0x5,
        'petalMass': 0x12,
        'detectionDistance': 1.7,
        'xp': 0x51
    },
    {
        'name': 'Phantasmal',
        'health': 0x6e,
        'damage': 4.2,
        'radius': 0x5,
        'mass': 0x2b,
        'petalDamage': 9.5,
        'petalHealth': 4.2,
        'petalHeal': 0xa,
        'petalMass': 0x2b,
        'detectionDistance': 2.1,
        'xp': 0xf3
    },
    {
        'name': 'Ultimate',
        'health': 0x136,
        'damage': 8.5,
        'radius': 0x7,
        'mass': 0x64,
        'petalDamage': 0x17,
        'petalHealth': 8.5,
        'petalHeal': 21.5,
        'petalMass': 0x64,
        'detectionDistance': 2.5,
        'xp': 0x2d9
    },
    {
        'name': 'Paramount',
        'health': 0x546,
        'damage': 0x11,
        'radius': 9.5,
        'mass': 0xd8,
        'petalDamage': 0x5a,
        'petalHealth': 0x11,
        'petalHeal': 0x28,
        'petalMass': 0xd8,
        'detectionDistance': 2.5,
        'xp': 0x88b
    },
    {
        'name': 'Alpha',
        'health': 0x12c0,
        'damage': 0x23,
        'radius': 0xd,
        'mass': 0x1f4,
        'petalDamage': 0x140,
        'petalHealth': 0x23,
        'petalHeal': 0x4a,
        'petalMass': 0x1f4,
        'detectionDistance': 2.5,
        'xp': 0x19a1
    },
    {
        'name': 'Doomed',
        'health': 0x4650,
        'damage': 0x46,
        'radius': 0x12,
        'mass': 0x4b0,
        'petalDamage': 0x44c,
        'petalHealth': 0x46,
        'petalHeal': 0x8c,
        'petalMass': 0x4b0,
        'detectionDistance': 2.5,
        'xp': 0x9c40
    },
    {
        'name': 'Sacred',
        'health': 0xfde8,
        'damage': 0x8a,
        'radius': 0x18,
        'mass': 0xc80,
        'petalDamage': 0xf0a,
        'petalHealth': 0x8a,
        'petalHeal': 0x10c,
        'petalMass': 0xc80,
        'detectionDistance': 2.5,
        'xp': 0x493e0
    },
    {
        'name': 'Imperial',
        'health': 0x3d090,
        'damage': 0x113,
        'radius': 0x21,
        'mass': 0x251c,
        'petalDamage': 0x34bc,
        'petalHealth': 0x113,
        'petalHeal': 0x1f4,
        'petalMass': 0x251c,
        'detectionDistance': 2.5,
        'xp': 0x2dc6c0
    },
    {
        'name': 'Absolute',
        'health': 0xef420,
        'damage': 0x226,
        'radius': 0x2d,
        'mass': 0x80e8,
        'petalDamage': 0xb98c,
        'petalHealth': 0x226,
        'petalHeal': 0x3b6,
        'petalMass': 0x80e8,
        'detectionDistance': 2.5,
        'xp': 0x1c9c380
    },
    {
        'name': 'Stellar',
        'health': 0x4c4b40,
        'damage': 0x47e,
        'radius': 0x3e,
        'mass': 0x2f760,
        'petalDamage': 0x41eb0,
        'petalHealth': 0x672,
        'petalHeal': 0xb49,
        'petalMass': 0x2f760,
        'detectionDistance': 2.5,
        'xp': 0x1dcd6500
    },
    {
        'name': 'Empyrean',
        'health': 0x958940,
        'damage': 0x672,
        'radius': 0x47,
        'mass': 0x5eec0,
        'petalDamage': 0x2625a0,
        'petalHealth': 0x2648,
        'petalHeal': 0x2580,
        'petalMass': 0x231860,
        'detectionDistance': 2.5,
        'xp': 0x2540be400
    },
    {
        'name': 'Seraphic',
        'health': 0x1312d00,
        'damage': 0x9c4,
        'radius': 0x51,
        'mass': 0xbdd80,
        'petalDamage': 0x19bfcc0,
        'petalHealth': 0xea60,
        'petalHeal': 0xe290,
        'petalMass': 0x1a52480,
        'detectionDistance': 2.5,
        'xp': 0x45d964b800
    },
    {
        'name': 'Ascended',
        'health': 0x3938700,
        'damage': 0x1356,
        'radius': 0x67,
        'mass': 0x231860,
        'petalDamage': 0xc7bf410,
        'petalHealth': 0x329c4,
        'petalHeal': 0x33450,
        'petalMass': 0x16e36000,
        'detectionDistance': 3.25,
        'xp': 0x82f79cd9000
    },
    {
        'name': 'Ethereal',
        'health': 0x7270e00,
        'damage': 0x1d4c,
        'radius': 0x76,
        'mass': 0x4630c0,
        'petalDamage': 0x35a4e900,
        'petalHealth': 0x44aa20,
        'petalHeal': 0x30d40,
        'petalMass': 0x112a88000,
        'detectionDistance': 3.25,
        'xp': 0xf5904616e000
    },
    {
        'name': 'Cosmic',
        'health': 0x15752a00,
        'damage': 0x3a98,
        'radius': 0x87,
        'mass': 0xd29240,
        'petalDamage': 0x1af124af0,
        'petalHealth': 0x19c800,
        'petalHeal': 516560.652,
        'petalMass': 0xcdfe60000,
        'detectionDistance': 3.25,
        'xp': 0x1cc6e836ae4000
    },
    {
        'name': 'Timeless',
        'health': 0x29b92700,
        'damage': 0x4e20,
        'radius': 0x9a,
        'mass': 0x1a52480,
        'petalDamage': 0x3fc11c9f8,
        'petalHealth': 0x11300,
        'petalHeal': 0x1500e,
        'petalMass': 0x493e00,
        'detectionDistance': 3.25,
        'xp': 0x35f4f36686b8000
    },
    {
        'name': 'Godlike',
        'health': 0x53724e00,
        'damage': 0x7530,
        'radius': 0xaf,
        'mass': 0x34a4900,
        'petalDamage': 0x1fefe358,
        'petalHealth': 0x22600,
        'petalHeal': 0x27100,
        'petalMass': 0x927c00,
        'detectionDistance': 3.25,
        'xp': 0x6124fee993bc0000
    },
    {
        'name': 'Abyssal',
        'health': 0x10b076000,
        'damage': 0xea60,
        'radius': 0xc8,
        'mass': 0x9896800,
        'petalDamage': 0x6f75ef80,
        'petalHealth': 0x44c00,
        'petalHeal': 0x4e200,
        'petalMass': 0x124f800,
        'detectionDistance': 3.3,
        'xp': 0xad78ebc5ac6200000
    },
    {
        'name': 'Noble',
        'health': 0x1faa3b500,
        'damage': 0x15f90,
        'radius': 0xe4,
        'mass': 0x1312d000,
        'petalDamage': 0xd693a400,
        'petalHealth': 0x89800,
        'petalHeal': 0x9c400,
        'petalMass': 0x16e36000,
        'detectionDistance': 3.35,
        'xp': 0x14542ba12a337c00000
    },
    {
        'name': 'Entropic',
        'health': 0x401332c00,
        'damage': 0x1fbd0,
        'radius': 0x102,
        'mass': 0x2625a000,
        'petalDamage': 0x1ad274800,
        'petalHealth': 0x113000,
        'petalHeal': 0x138800,
        'petalMass': 0x493e000,
        'detectionDistance': 3.4,
        'xp': 0x261dd1ce2f2088000000
    },
    {
        'name': 'Apocalyptic',
        'health': 0xa7a358200,
        'damage': 0x40b28,
        'radius': 0x127,
        'mass': 0x77359400,
        'petalDamage': 0x35a4e9000,
        'petalHealth': 0x226000,
        'petalHeal': 0x271000,
        'petalMass': 0x927c000,
        'detectionDistance': 3.45,
        'xp': 0x4f68ca6d8cd91c0000000
    },
    {
        'name': 'Hollow',
        'health': 0x199c82cc00,
        'damage': 0x81650,
        'radius': 0x14f,
        'mass': 0x165a0bc00,
        'petalDamage': 0x6b49d2000,
        'petalHealth': 0x44c000,
        'petalHeal': 0x4e2000,
        'petalMass': 0x1b6b0b00,
        'detectionDistance': 3.5,
        'xp': 0x94e47b8d68171800000000
    },
    {
        'name': 'Overshadowed',
        'health': 0x30e4f9b400,
        'damage': 0xf4240,
        'radius': 0x17c,
        'mass': 0x2cb417800,
        'petalDamage': 0x6b49d2000,
        'petalHealth': 0x44c000,
        'petalHeal': 0x4e2000,
        'petalMass': 0x1b6b0b00,
        'detectionDistance': 3.5,
        'xp': 0x1172c67a9232b40000000000
    },
    {
        'name': 'Luminous',
        'health': 0x68c6171400,
        'damage': 0x186a00,
        'radius': 0x1af,
        'mass': 0x59682f000,
        'petalDamage': 0x6b49d2000,
        'petalHealth': 0x44c000,
        'petalHeal': 0x4e2000,
        'petalMass': 0x1b6b0b00,
        'detectionDistance': 3.5,
        'xp': 0x20b73425d21f1200000000000
    },
    {
        'name': 'Banished',
        'health': 0x104c533c000,
        'damage': 0x30d400,
        'radius': 0x1e9,
        'mass': 0x10c388d000,
        'petalDamage': 0x6b49d2000,
        'petalHealth': 0x44c000,
        'petalHeal': 0x4e2000,
        'petalMass': 0x1b6b0b00,
        'detectionDistance': 3.5,
        'xp': 0x3d5781c6e9fa42000000000000
    },
    {
        'name': 'Iridescent',
        'health': 0x2ba7def3000,
        'damage': 0x632ea0,
        'radius': 0x22b,
        'mass': 0x218711a000,
        'petalDamage': 0x6b49d2000,
        'petalHealth': 0x44c000,
        'petalHeal': 0x4e2000,
        'petalMass': 0x1b6b0b00,
        'detectionDistance': 3.5,
        'xp': 0x73041354f6b53c0000000000000
    },
    {
        'name': 'Spectral',
        'health': 0x574fbde6000,
        'damage': 0x927c00,
        'radius': 0x276,
        'mass': 0x430e234000,
        'petalDamage': 0x6b49d2000,
        'petalHealth': 0x44c000,
        'petalHeal': 0x4e2000,
        'petalMass': 0x1b6b0b00,
        'detectionDistance': 3.5,
        'xp': 0xd7c0e29888346000000000000000
    },
    {
        'name': 'Mystical',
        'health': 0xcea31f4b000,
        'damage': 0x121eac0,
        'radius': 0x2cb,
        'mass': 0xc92a69c000,
        'petalDamage': 0x6b49d2000,
        'petalHealth': 0x44c000,
        'petalHeal': 0x4e2000,
        'petalMass': 0x1b6b0b00,
        'detectionDistance': 3.5,
        'xp': 0x19097eaecfe4c30000000000000000
    },
    {
        'name': 'Arcane',
        'health': 0x1eec3dec2000,
        'damage': 0x24b76a0,
        'radius': 0x32b,
        'mass': 0x1a04d1ad800,
        'petalDamage': 0x6b49d2000,
        'petalHealth': 0x44c000,
        'petalHeal': 0x4e2000,
        'petalMass': 0x1b6b0b00,
        'detectionDistance': 3.5,
        'xp': 0x2ef1cd87c5ccee00000000000000000
    },
    {
        'name': 'Occult',
        'health': 0x3dd87bd84000,
        'damage': 0x3750280,
        'radius': 0x399,
        'mass': 0x3409a35b000,
        'petalDamage': 0x6b49d2000,
        'petalHealth': 0x44c000,
        'petalHeal': 0x4e2000,
        'petalMass': 0x1b6b0b00,
        'detectionDistance': 3.5,
        'xp': 0x5805615e92e03c000000000000000000
    },
    {
        'name': 'Origin',
        'health': 0x8de19495c000,
        'damage': 0x7088980,
        'radius': 0x416,
        'mass': 0x9c1cea11000,
        'petalDamage': 0x38d7ea4c68000,
        'petalHealth': 0xe8d4a51000,
        'petalHeal': 0xe8d4a51000,
        'petalMass': 0x38d7ea4c68000,
        'detectionDistance': 3.5,
        'xp': 0xa50a16915364700000000000000000000
    }
];