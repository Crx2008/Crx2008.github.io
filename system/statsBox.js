// in addition to Stats, we cache another modified version of stats for the permutation of tanksmith and anything else
let cachedStats = undefined;
let cachedState = ['please regen', false]; // isTs, unused

// 安全地绘制图片，如果图片未加载则跳过
function safeDrawImage(img, x, y, w, h) {
    if (img && img.complete && img.naturalWidth > 0) {
        ctx.drawImage(img, x, y, w, h);
    }
}

let isTs = (window.characterSelector !== undefined && window.characterSelector.selectedIndex == "1");

function generateCachedStats(isTs) {
    cachedState[0] = isTs;
    cachedState[1] = false;

    // actually calculate the stats
    window.calculateStats(false, isTs);

    // clone the stats and store them in our cache
    cachedStats = structuredClone({ petals: Stats.petals, enemies: Stats.enemies });

    // recalculate the old stats
    window.calculateStats(false);
}

class StatsBox {
    constructor(type, stats, mode = 'petals', amount, rarity) {
        this.name = type;
        this.type = type;
        this.description = Descriptions[mode][type] ? Descriptions[mode][type] : "Something interesting...";
        this.mode = mode;
        this.amount = amount;
        this.rarity = rarity;

        this.h = this.w = this.x = this.y = 0;
        this.image = null;

        this.generateData(mode, type, stats)
    }
    generateData(mode, type, stats) {

        if (cachedState[0] !== isTs) {
            generateCachedStats(isTs)
        }

        // 神器特殊处理 - 显示技能树数据而不是基础花瓣属性
        const artifactTypes = ["Abyssal Artifact", "Scorched Artifact", "Verdant Artifact", "Cosmic Artifact", "Chimera"];
        if (artifactTypes.includes(this.type)) {
            this.generateArtifactData();
            return;
        }

        if (mode == "petals") {
            stats = cachedStats.petals[this.type][this.rarity];
            if (this.type == "Fangs") this.name = "Fang";
            if (this.type == "Egg") this.name = "Beetle Egg";
            if (this.type == "Hexagon") this.name = "ӇЄҲƛƓƠƝ";

            if (this.type == "Trinket of the Hivemind") this.description = [
                { text: "You can hear distant humming within the trinket... Converts", color: "#ffffff" },
                { text: Colors.rarities[stats.maximumRarity].name, color: Colors.rarities[stats.maximumRarity].color },
                { text: "Soldier Ant summons and below into Soldier Termites.", color: "#ffffff" }
            ]

            if (this.type == "Trinket of the Sea") this.description = [
                { text: "The sounds of the sea fills your ears... Converts", color: "#ffffff" },
                { text: Colors.rarities[stats.maximumRarity].name, color: Colors.rarities[stats.maximumRarity].color },
                { text: "Sandstorms and below into Whirlpools", color: "#ffffff" }
            ]

            if (this.type == "Trinket of the Wild") this.description = [
                { text: "A faint grassy smell is emitted from this trinket... All", color: "#ffffff" },
                { text: Colors.rarities[stats.maximumRarity].name, color: Colors.rarities[stats.maximumRarity].color },
                { text: "Ruby Summons and below convert into dangerous Mossy Rubies!", color: "#ffffff" }
            ]

            if ((this.type == "Jellyfish Egg") && this.rarity >= 14) this.description = "It's gonna zap everything to death. Pet Jellyfish deal 4% of their max health as zap damage."
            if ((this.type == "Neuroflare Egg") && this.rarity >= 14) this.description = "It's gonna zap everything to death. Pet Jellyfish deal 2% of their max health as zap damage."
            if (this.type == "Third Eye" && this.rarity === 13) this.description = "Something lofdjf will never get."
            if (this.type == "Mandible" && this.rarity >= 13) this.description = "Has a 15% chance of doing 20x damage. Critical chance increases to 30% when 3 or more flowers are dead.";
            if (this.type == "Blood Mandible" && this.rarity >= 13) this.description = "Has a 15% chance of doing 20x damage. Critical chance increases to 30% when 3 or more flowers are dead. Only deals self damage on critical hits.";
            if (this.type == "Basic" && this.rarity >= 7) this.description = `A nice petal, not very strong. Has a 0.1% chance to increase special wave chance by ${this.rarity - 7}% every tick.`
            if (this.type == "Faster" && this.rarity >= 13) this.description += "                                              "
            if (this.type == "Amulet of Grace" && this.rarity == 11) this.description = "Forged by the Ancients to extend their life, it has long since lost the flame that fueled it. Maybe if it was ignited again, it could be used to extend your own life once more..."
            if (this.type == "Amulet of Grace" && this.rarity < 11) this.description = "An odd, warm feeling overtakes you as you peer into the gem. You grow calm, but it was only for a moment. Could a more powerful amulet could harness more of this magic..?"
            if (this.type == "Amulet of Time" && this.rarity == 11) this.description = "In times since past, this was fought over relentlessly as it was believed to slow the enemies advances. Lacking the power it once had, maybe if recharged it could aid against the onslaught..."
            if (this.type == "Amulet of Time" && this.rarity < 11) this.description = "Staring into the darkness within, memories of a time long lost fade in and out. A faint glow eminates from the deep center. Perhaps if this amulet had more power..?"
            if (this.type == "Amulet of Divergence" && this.rarity == 11) this.description = "This was merely the prototype to something of far greater strength... capable of warping reality itself. Perhaps merging them can generate power enough to use it for your own conquest?"
            if (this.type == "Amulet of Divergence" && this.rarity < 11) this.description = "Faint lights appear from within deep inside the stored gem. There appears to be movement inside, but it's too hard to discern what is causing it. What if more power was contained..?"
            if (this.type == "Jelly" && this.rarity >= 13) this.description = "With advanced technological advancements from bioengineered Jellyfish, this Jelly only deals knockback if you are defending."
            if (this.type == "Powder" && this.rarity >= 13) this.description = "Increases movement speed if not attacking, but decreases health. Reduces player radius. Does not stack."
            if (this.type == "Neutron Star" && this.rarity >= 13) this.description = "A decoy that forcefully attracts mobs with the strength of gravity. Free will is just an illusion after all. Aims in your movement direction. Causes mobs to forcefully compress into each other, slowly wearing off over 3 seconds."
            if (this.type == "Honey" && this.rarity >= 8) this.description = "A rocket-powered decoy that attracts mobs away from flowers."

            if (this.type == "Horn") this.description = [
                { text: "If the current wave has ended, this petal calls for the next wave to start if there are under a certain number of mobs remaining. It also instantly vanquishes all remaining mobs under some rarity without drops. Horns up to", color: "#ffffff" },
                { text: Colors.rarities[stats.maximumRarity].name, color: Colors.rarities[stats.maximumRarity].color },
                { text: "mobs.", color: "#ffffff" }
            ]

            if (this.type == "Horn" && this.rarity >= 13) this.description = [
                { text: "Not only horns the wave, but also gives a slight chance for every horned mob to give drops regardless. Horns up to", color: "#ffffff" },
                { text: Colors.rarities[stats.maximumRarity].name, color: Colors.rarities[stats.maximumRarity].color },
                { text: "mobs.", color: "#ffffff" }
            ]
            if (this.type == "Magnet" && this.rarity >= 14) this.description = "Collects drops from further away, blocks electric attacks and gives a slight chance to duplicate drops for yourself upon pickup."
            if (this.type == "Jolt" && this.rarity >= 13) this.description = "A jolt so powerful, it teleports all players and pets across the map, at the cost of a high cooldown time. Great for escaping threats!"
            if (this.type == "Bubble" && this.rarity >= 13) this.description = "Stated to be the oldest bubble ever, this ancient sphere has since propagated into every bubble that has come since it's inception. Harnessing its bubble blowing abilities will allow you to create your own to aid you."
            if (this.type == "Bubble" && this.rarity >= 14) this.description = "An even older bubble. This unc sphere has had nearly 67 millenia of existence. It not only blows a really fat bubble, but it teleports to you every second."
            if (this.type == "Amulet of Divergence" && this.rarity >= 14) this.description = "An ancient relic believed to have the power of creating a false reality. Limited use per player per game. (Attack or defend to absorb differently; only usable after wave spawning ends)"
            if (this.type == "Waterlogged Compass" && this.rarity >= 14) this.description = "Shows the number of the highest rarity spawning, and also shows Wave Data, but only after all mobs have already spawned."

            if (this.type == "Ruby") this.description = [
                { text: "A mythical gem infused with the power of friendship. Works up to", color: "#ffffff" },
                { text: Colors.rarities[stats.maxReviveRarity].name, color: Colors.rarities[stats.maxReviveRarity].color },
                { text: "mobs.", color: "#ffffff" }
            ]
            if (this.type == "Emerald") this.description = [
                { text: "A mythical gem infused with the power of genesis. Works up to", color: "#ffffff" },
                { text: Colors.rarities[stats.maxDuplicationRarity].name, color: Colors.rarities[stats.maxDuplicationRarity].color },
                { text: "mobs.", color: "#ffffff" }
            ]
            if (this.type == "Sapphire") this.description = [
                { text: "A mythical gem infused with the power of transformation. Works up to", color: "#ffffff" },
                { text: Colors.rarities[stats.maxConversionRarity].name, color: Colors.rarities[stats.maxConversionRarity].color },
                { text: "mobs.", color: "#ffffff" }
            ]

            if (this.type == "Emerald" && this.rarity >= 13) this.description = [
                { text: "A mythical gem infused with the power of genesis. Works up to", color: "#ffffff" },
                { text: Colors.rarities[stats.maxDuplicationRarity].name, color: Colors.rarities[stats.maxDuplicationRarity].color },
                { text: "mobs. Converting", color: "#ffffff" },
                { text: Colors.rarities[stats.maxDuplicationRarity].name, color: Colors.rarities[stats.maxDuplicationRarity].color },
                { text: "mobs disables the slot for the rest of the wave.", color: "#ffffff" },
            ]
            if (this.type == "Sapphire" && this.rarity >= 13) this.description = [
                { text: "A mythical gem infused with the power of transformation. Works up to", color: "#ffffff" },
                { text: Colors.rarities[stats.maxConversionRarity].name, color: Colors.rarities[stats.maxConversionRarity].color },
                { text: "mobs. Converting", color: "#ffffff" },
                { text: Colors.rarities[stats.maxConversionRarity].name, color: Colors.rarities[stats.maxConversionRarity].color },
                { text: "mobs disables the slot for the rest of the wave.", color: "#ffffff" },
            ]
            if (this.type == "Ruby" && stats.minimumConvert) this.description = [
                { text: "A mythical gem infused with the power of friendship.", color: "#ffffff" },
                { text: Colors.rarities[stats.minimumConvert - 1].name, color: Colors.rarities[stats.minimumConvert - 1].color },
                { text: "rarity mobs and below get converted to", color: "#ffffff" },
                { text: Colors.rarities[stats.maxReviveRarity].name, color: Colors.rarities[stats.maxReviveRarity].color },
                { text: "summons, but", color: "#ffffff" },
                { text: Colors.rarities[stats.minimumConvert].name, color: Colors.rarities[stats.minimumConvert].color },
                { text: "rarity mobs and above get converted into", color: "#ffffff" },
                { text: Colors.rarities[stats.maxReviveRarity + 1].name, color: Colors.rarities[stats.maxReviveRarity + 1].color },
                { text: "summons.", color: "#ffffff" },
            ]
            if (this.type == "Shiny Bubble" && this.rarity >= 14) this.description = "Propels the flower in the direction you are facing. Teleportation keybind is [F]."
            if (this.type == "Shiny Leaf") this.description = this.description = [
                { text: Descriptions.petals['Shiny Leaf'] + " Requires", color: "#ffffff" },
                { text: "Constant Healing", color: statColors.heal },
                { text: "stronger than " + formatAmountHighPrecision(stats.health / 6) + "/s.", color: "#ffffff" },
            ]


            // Blessed with the might of Thor, this shockingly deadly lightning can clear crowds of enemies like no other. The more it chains, the harder it hits (up to a maximum).

            if (this.type == "Shiny Iris") this.description = this.description = [
                { text: "Blessed with the power of the sun god himself, this glowing iris decimates waves of enemies with potent", color: "#ffffff" },
                { text: "poison", color: statColors.poison },
                { text: "sourced from the skies. The more enemies that are struck, the more the", color: "#ffffff" },
                { text: "poison", color: statColors.poison },
                { text: "hurts for all of them.", color: "#ffffff" },
            ]
            if (this.type == "Shiny Lightning") this.description = this.description = [
                { text: "Blessed with the might of Thor, this shockingly deadly", color: "#ffffff" },
                { text: "lightning", color: statColors.lightning },
                { text: "can clear crowds of enemies like no other. The more it chains, the harder it hits (up to a maximum).", color: "#ffffff" }
            ]
            if (this.type == "Shiny Egg") this.description = this.description = [
                { text: "This egg hatches a very hungy beetle! Each kill you get, it grows in size, to a max. Mobs that are both below rarity", color: "#ffffff" },
                { text: Colors.rarities[stats.maxEat + 1].name, color: Colors.rarities[stats.maxEat + 1].color },
                { text: "and smaller than 1/2 of the beetle get eaten whole.", color: "#ffffff" },
            ]

            if (typeof this.description == "string") {
                let prevT = this.description
                this.description = []
                this.description.push({ text: prevT, color: "#ffffff" });
            }

            this.topstats = []
            this.bottomstats = [];

            for (let key in stats) {
                if (!isTs && [
                    'tanksmithRadius'
                ].includes(key)) continue;

                if (
                    [
                        "reload",
                        'lifespan',
                        'hatchTime',
                        'spawnSystem',
                        'timeToPop',
                        'timeLimit'
                    ].includes(key)
                ) {

                    if (key == "hatchTime" && isTs) continue;

                    if (isTs) if (key == "reload" && stats.tanksmithCooldown) {
                        this.topstats.push({
                            key,
                            value: stats.tanksmithCooldown / 30,
                            color: statColors[key]
                        });
                        if (stats.tanksmithShootCooldown) {
                            this.topstats.push({
                                key: "shootCd",
                                value: stats.tanksmithCooldown / 30,
                                color: statColors[key]
                            });
                        } else {
                            this.topstats.push({
                                key: "shootCd",
                                value: stats[key],
                                color: statColors[key]
                            });
                        }
                        continue;
                    } else if (key == "reload") {
                        this.topstats.push({
                            key,
                            value: stats[key] * 1.5,
                            color: statColors[key]
                        });
                        if (stats.tanksmithShootCooldown) {
                            this.topstats.push({
                                key: "shootCd",
                                value: stats.tanksmithCooldown / 30,
                                color: statColors[key]
                            });
                        } else {
                            this.topstats.push({
                                key: "shootCd",
                                value: stats[key],
                                color: statColors[key]
                            });
                        }
                        continue;
                    }

                    if (!(key == "timeToPop" && stats[key] == 0)) this.topstats.push({
                        key,
                        value: stats[key],
                        color: statColors[key]
                    })

                    if (key == "spawnSystem") {

                        let massDif = 0.8
                        if (this.rarity <= 13) { massDif *= 2.25 } else {
                            if (this.rarity >= 14) massDif *= 0.866
                            if (this.rarity == 15) massDif *= 2.875
                            if (this.rarity >= 16) massDif *= 1.5
                        }
                        // if (stats[key] >= 18) massDif *= 1.5

                        this.bottomstats.push({
                            key: "summon",
                            value: {
                                rarity: stats[key][0], type: "Sandstorm", amount: stats[key][2], substats: {
                                    damage: Stats.rarities[this.rarity].petalDamage * 1.2,
                                    health: Stats.enemies.Sandstorm[stats[key][0]].health,
                                    mass: Stats.enemies.Sandstorm[stats[key][0]].mass * massDif * 8
                                }
                            },
                            color: statColors.cooldown
                        })
                    }
                } else {
                    if (statColors[key]) {
                        if (key == "mana" && this.type == "Amulet of Time") {
                            this.bottomstats.push({
                                key: "timeMana",
                                value: stats[key],
                                color: Colors.mana.time
                            })
                        } else if (key == "mana" && this.type == "Amulet of Divergence") {
                            this.bottomstats.push({
                                key: "divergenceMana",
                                value: stats[key],
                                color: Colors.mana.divergence
                            })
                        } else if (key == "mana" && this.type == "Amulet of Grace") {
                            this.bottomstats.push({
                                key: "graceMana",
                                value: stats[key],
                                color: Colors.mana.grace
                            })
                        } else if ([
                            "poison",
                            "slowdownTime",
                            "flowerBodyPoison",
                            "summonBodyPoison",
                            "overhealConversion",
                            "period",
                            "extraRange",
                            "waveHealthBoost",
                            "shadowTime",
                            "unrevivable",
                            "healthNerf",
                            "radiusChange",
                            "range",
                            "collectDupeChance",
                            "bodyDamage",
                            "flowerArmor",
                            "armorPercent",
                            "maximumMobs",
                            "petLifespan",
                            'healingBoost'
                        ].includes(key)) {
                            this.bottomstats.push({
                                key,
                                value: stats[key],
                                color: statColors[key],
                                unstackable: true
                            })
                        } else if (key == "maxDamage" && ["Shiny Wing", "Shiny Leaf", "Shiny Coral"]) {
                            this.bottomstats.push({
                                key: "maxDamage",
                                value: stats[key] + stats.damage,
                                color: statColors.damage
                            })
                        } else this.bottomstats.push({
                            key,
                            value: stats[key],
                            color: statColors[key]
                        })
                        if (key == "damage") {
                            if (this.type == "Lightning" || this.type == "Blueberries" || this.type == "Shiny Lightning") {
                                this.bottomstats.push({
                                    key: "lightning",
                                    value: stats[key],
                                    color: statColors.lightning
                                })
                            }
                            if (this.type == "Fig") {
                                this.bottomstats.push({
                                    key: "blastDamage",
                                    value: stats[key],
                                    color: statColors.damage
                                })
                            }
                        }
                        if (key == "petLifespan") {

                            if (this.type == "Ruby") {

                                let damage = 0.8*Stats.rarities[this.rarity].petalDamage

                                let health = 4000 * Stats.rarities[this.rarity].petalHealth

                                this.bottomstats.push({
                                    key: "summon",
                                    value: {
                                        rarity: -1, type: "Rubied Enemy", substats: {
                                            damage,
                                            health,
                                            mass: "Varies"
                                        }
                                    },
                                    color: statColors.cooldown
                                })
                            }
                            if (this.type == "Shiny Ruby") {

                                let damage = (1/8) * Stats.rarities[this.rarity].petalDamage

                                let health = 6000 * Stats.rarities[this.rarity].petalHealth

                                this.bottomstats.push({
                                    key: "summon",
                                    value: {
                                        rarity: -1, type: "Rubied Enemy", substats: {
                                            damage,
                                            health,
                                            mass: "Varies."
                                        }
                                    },
                                    color: statColors.cooldown
                                })
                            }
                        }
                    } else if (key == "spawnRarity") {

                        let massDif = 0.8
                        if (this.rarity <= 13 && (this.type == "Jellyfish Egg" || this.type == "Neuroflare Egg")) { massDif *= 2.25 } else {
                            if (this.rarity >= 14) massDif *= 1.375
                            if (this.rarity == 15 && (this.type == "Jellyfish Egg" || this.type == "Neuroflare Egg")) massDif *= 2.875
                            if (this.rarity >= 16) massDif *= 1.9
                        }

                        if (this.type == "Egg") {
                            this.bottomstats.push({
                                key: "summon",
                                value: {
                                    rarity: stats[key], type: "Beetle", substats: {
                                        damage: Stats.rarities[this.rarity].petalDamage * 2,
                                        health: Stats.enemies.Beetle[stats[key]].health * 0.8,
                                        mass: Stats.enemies.Beetle[stats[key]].mass * massDif * 8
                                    }
                                },
                                color: statColors.cooldown
                            })
                            console.log(Stats.rarities[this.rarity].petalDamage)
                        }
                        if (this.type == "Shiny Egg") {
                            this.bottomstats.push({
                                key: "summon",
                                value: {
                                    rarity: stats[key], type: "Shiny Beetle", substats: {
                                        damage: Stats.rarities[this.rarity].petalDamage * 6,
                                        health: Stats.enemies.Beetle[stats[key]].health * 1,
                                        mass: [Stats.enemies['Shiny Beetle'][stats[key]].mass * massDif * 2 * 8, Stats.enemies['Shiny Beetle'][stats[key]].mass * massDif * 2 * 2.5 * 8]
                                    }
                                },
                                color: statColors.cooldown
                            })
                        }
                        if (this.type == "Ant Egg") {

                            let damage = 16 * Stats.rarities[this.rarity].petalDamage  // 削弱到原来的一半
                            console.log(this.rarity)
                            console.log(damage)
                            if (this.rarity >= 10) damage *= 4 / 5
                            if (this.rarity >= 13) damage *= 5 / 6
                            if (this.rarity >= 15) damage *= 5 / 6

                            let health = 2400 * Stats.rarities[this.rarity].petalHealth
                            //if (this.rarity >= 14) health *= 4

                            this.bottomstats.push({
                                key: "summon",
                                value: {
                                    rarity: stats[key], type: "Soldier Ant", substats: {
                                        damage,
                                        health,
                                        mass: Stats.enemies['Soldier Ant'][stats[key]].mass * massDif
                                    }
                                },
                                color: statColors.cooldown
                            })
                        }
                        if (this.type == "Jellyfish Egg") {

                            this.bottomstats.push({
                                key: "summon",
                                value: {
                                    rarity: stats[key], type: "Jellyfish", substats: {
                                        damage: Stats.rarities[this.rarity].petalDamage ,
                                        health: Stats.enemies.Jellyfish[stats[key]].health/2,
                                        mass: Stats.enemies.Jellyfish[stats[key]].mass * massDif * 8,
                                        lightning: Stats.enemies.Jellyfish[stats[key]].health * (this.rarity >= 14 ? 0.05 : 0.12),
                                        bounces: stats[key] > 11 ? (stats[key] > 13 ? 4 : 3) : 2
                                    }
                                },
                                color: statColors.cooldown
                            })
                        }
                        if (this.type == "Neuroflare Egg") {

                            this.bottomstats.push({
                                key: "summon",
                                value: {
                                    rarity: stats[key], type: "Neuroflare", substats: {
                                        damage: Stats.rarities[this.rarity].petalDamage * 1.2,
                                        health: Stats.enemies.Neuroflare[stats[key]].health,
                                        mass: Stats.enemies.Neuroflare[stats[key]].mass * massDif,
                                        lightning: Stats.enemies.Neuroflare[stats[key]].health * (this.rarity >= 14 ? 0.025 : 0.06),
                                        bounces: stats[key] > 11 ? (stats[key] > 13 ? 4 : 3) : 2
                                    }
                                },
                                color: statColors.cooldown
                            })
                        }

                        if (this.type == "Plastic Egg") {

                            this.bottomstats.push({
                                key: "summon",
                                value: {
                                    rarity: stats[key], type: "Plastic", substats: {
                                        damage: Stats.rarities[this.rarity].petalDamage * 0.3,
                                        health: Stats.enemies.Plastic[stats[key]].health,
                                        mass: Stats.enemies.Plastic[stats[key]].mass * massDif
                                    }
                                },
                                color: statColors.cooldown
                            })
                        }
                        if (this.type == "Square") {

                            this.bottomstats.push({
                                key: "summon",
                                value: {
                                    rarity: stats[key], type: "Square", substats: {
                                        damage: Stats.rarities[this.rarity].petalDamage * 0.3,
                                        health: Stats.enemies.Square[stats[key]].health,
                                        mass: Stats.enemies.Square[stats[key]].mass * massDif
                                    }
                                },
                                color: statColors.cooldown
                            })
                        }
                        if (this.type == "Pentagon") {

                            this.bottomstats.push({
                                key: "summon",
                                value: {
                                    rarity: stats[key], type: "Pentagon", substats: {
                                        damage: Stats.rarities[this.rarity].petalDamage * 0.3,
                                        health: Stats.enemies.Pentagon[stats[key]].health,
                                        mass: Stats.enemies.Pentagon[stats[key]].mass * massDif
                                    }
                                },
                                color: statColors.cooldown
                            })
                        }
                        if (this.type == "Hexagon") {

                            this.bottomstats.push({
                                key: "summon",
                                value: {
                                    rarity: stats[key], type: "Hexagon", substats: {
                                        damage: Stats.rarities[this.rarity].petalDamage * 0.3,
                                        health: Stats.enemies.Hexagon[stats[key]].health,
                                        mass: Stats.enemies.Hexagon[stats[key]].mass * massDif
                                    }
                                },
                                color: statColors.cooldown
                            })
                        }
                        if (this.type == "Bubble" && this.rarity >= 13) {

                            let mass = (Stats.enemies.Bubble[stats[key]].mass / 100) * massDif * 80
                            if (this.rarity == 13) mass *= 2;
                            if (this.rarity >= 15) mass *= 2;

                            this.bottomstats.push({
                                key: "summon",
                                value: {
                                    rarity: stats[key], type: "Bubble", substats: {
                                        damage: Stats.rarities[this.rarity].petalDamage * 0.1,
                                        health: Stats.enemies.Bubble[stats[key]].health * 0.005,
                                        mass,
                                        maxEnemyBoost: mass * 1.5
                                    }
                                },
                                color: statColors.cooldown
                            })
                        }
                    } else if (key == "damageHeal") {
                        if (stats[key] > 0) {
                            this.bottomstats.push({
                                key: "lifesteal",
                                value: stats[key],
                                color: statColors.heal
                            })
                        } else if (stats[key] < 0) {
                            this.bottomstats.push({
                                key: "selfDamage",
                                value: -stats[key],
                                color: statColors.damage
                            })
                        }
                    } else if (key == "petalNum") {
                        this.bottomstats.push({
                            key: "mimickedPetals",
                            value: stats[key],
                            color: statColors.extraRange
                        })
                    } else if (key == "shield") {
                        this.bottomstats.push({
                            key,
                            value: formatAmountHighPrecision(stats[key]),
                            color: "#ffffff"
                        })
                    }
                }
            }

            if (!isTs) {
                if ([
                    'Rose',
                    'Dust',
                    'Jolt',
                    'Blood Jolt',
                    'Shell',
                    'Dahlia',
                    'Amulet of Grace',
                    'Shard of Grace',
                ].includes(this.type)) {
                    this.topstats.push({
                        key: 'secondaryReload',
                        value: .32,
                        color: statColors.damage
                    })
                }

                if ([
                    'Missile',
                    'Blade',
                    'Carrot',
                    'Fire Missile',
                    'Homing Missile',
                    "Spore",
                    'Dandelion',
                    'Peas',
                    'Blueberries',
                    'Pomegranate',
                    'Grapes',
                    'Pollen',
                    'Honey',
                    'Neutron Star',
                    'Web',
                    'Lilypad',
                    'Neurotoxin',
                    'Bloodshot Eye'
                ].includes(this.type)) {
                    if ((this.type == "Missile" || this.type == "Fire Missile") && this.rarity == 16) {
                        this.topstats.push({
                            key: 'secondaryReload',
                            value: .05,
                            color: statColors.damage
                        })
                    } else {
                        this.topstats.push({
                            key: 'secondaryReload',
                            value: .5,
                            color: statColors.damage
                        })
                    }
                }


                if ([
                    'Amulet of Divergence',
                    'Shard of Divergence',
                    'Amulet of Time',
                ].includes(this.type)) {
                    this.topstats.push({
                        key: 'secondaryReload',
                        value: 1,
                        color: statColors.damage
                    })
                }

                if ([
                    'Bud',
                    'Bloom',
                    'Thomas'
                ].includes(this.type)) {
                    this.topstats.push({
                        key: 'secondaryReload',
                        value: .2,
                        color: statColors.damage
                    })
                }

                if ([
                    'Ikea',
                ].includes(this.type)) {
                    this.topstats.push({
                        key: 'secondaryReload',
                        value: 2,
                        color: statColors.damage
                    })
                }
            }

            if (this.type == "Trinket of the Wild") {

                let massDif = 0.8

                if (this.rarity >= 14) massDif *= 1.375
                if (this.rarity >= 16) massDif *= 1.5


                let damage = 3.4 * Stats.rarities[this.rarity].petalDamage

                let health = 500 * Stats.rarities[this.rarity].petalHealth

                this.bottomstats.push({
                    key: "summon",
                    value: {
                        rarity: stats.maximumRarity, type: "Mossy Ruby", substats: {
                            damage,
                            health,
                            mass: Stats.enemies.Ruby[stats.maximumRarity].mass * massDif
                        }
                    },
                    color: statColors.cooldown
                })
            }
            if (this.type == "Trinket of the Hivemind") {

                let massDif = 0.8

                if (this.rarity >= 14) massDif *= 1.375
                if (this.rarity >= 16) massDif *= 1.5

                let damage = 37 * Stats.rarities[this.rarity].petalDamage  // 减半（原为 80）
                if (this.rarity >= 10) damage *= 4 / 5
                if (this.rarity >= 13) damage *= 5 / 6
                if (this.rarity >= 15) damage *= 5 / 6

                let health = 3200 * Stats.rarities[this.rarity].petalHealth

                this.bottomstats.push({
                    key: "summon",
                    value: {
                        rarity: stats.maximumRarity, type: "Soldier Termite", substats: {
                            damage,
                            health,
                            mass: Stats.enemies['Soldier Termite'][stats.maximumRarity].mass * massDif
                        }
                    },
                    color: statColors.cooldown
                })
            }
        } else {
            stats = cachedStats.enemies[this.type][this.rarity];

            if (this.type == "Hexagon") this.name = "ӇЄҲƛƓƠƝ";

            if (typeof this.description == "string") {
                let prevT = this.description
                this.description = []
                this.description.push({ text: prevT, color: "#ffffff" });
            }

            this.topstats = [];
            this.bottomstats = [];

            for (let key in stats) {
                if (!isTs && [
                    'tanksmithRadius'
                ].includes(key)) continue;

                if (
                    [
                        "xp"
                    ].includes(key)
                ) {
                    this.topstats.push({
                        key,
                        value: stats[key],
                        color: statColors[key]
                    })
                } else {
                    if (statColors[key]) {
                        this.bottomstats.push({
                            key,
                            value: stats[key],
                            color: statColors[key]
                        })
                        if (key == "damage") if (this.type == "Firefly") {
                            this.bottomstats.push({
                                key: "lightning",
                                value: stats[key] * 0.125,
                                color: statColors.lightning
                            })
                        }
                        if (key == "damage") {
                            if (this.type == "Jellyfish") {
                                this.bottomstats.push({
                                    key: "lightning",
                                    value: stats[key] * 1.5,
                                    color: statColors.lightning
                                })
                            }
                            if (this.type == "Neuroflare") {
                                this.bottomstats.push({
                                    key: "lightning",
                                    value: stats[key] * 0.8,
                                    color: statColors.lightning
                                })
                            }
                            if (this.type == "Electric Eel" || this.type == "Dark Electric Eel" || this.type == "Shiny Electric Eel") {
                                this.bottomstats.push({
                                    key: "lightning",
                                    value: stats[key],
                                    color: statColors.lightning
                                })
                            }
                        }

                        if (key == "health") if (this.type == "Electric Eel" || this.type == "Dark Electric Eel" || this.type == "Shiny Electric Eel") {
                            this.bottomstats.push({
                                key: "lifesteal",
                                value: stats[key] * 0.00125,
                                color: statColors.heal
                            })
                        }
                        if (key == "health") if (this.type == "Leech" || this.type == "BudLeech" || this.type == "Tick") {
                            this.bottomstats.push({
                                key: "lifesteal",
                                value: stats[key] * 0.0025,
                                color: statColors.heal
                            })
                        }
                    } else {
                        if (key == "drops") {
                            this.bottomstats.push({
                                key,
                                value: stats[key],
                                color: "#ffffff"
                            })
                        }

                        if (key == "healing") {
                            this.bottomstats.push({
                                key: "regeneration",
                                value: stats[key] * stats.health * 30,
                                color: statColors.heal
                            })
                        }
                    }
                }
            }
        }
    }

    // 神器数据生成 - 从技能树获取加成数据
    generateArtifactData() {
        // 初始化 stats 数组
        this.topstats = [];
        this.bottomstats = [];

        // 从 SKILL_TREES 获取神器的完整信息
        if (typeof SKILL_TREES !== 'undefined' && SKILL_TREES[this.type]) {
            const tree = SKILL_TREES[this.type];

            // 设置 description
            this.description = [{ text: tree.description, color: tree.color || "#ffffff" }];
        }

        // 从 specialGlobalInventory 获取实际技能等级
        const artifact = window.specialGlobalInventory?.artifacts?.[this.type];
        const skillLevels = artifact?.skillLevels || {};

        // 计算特定技能的等级总和（按前缀匹配）
        const getSkillLevel = (prefix) => {
            let total = 0;
            for (const [nodeId, level] of Object.entries(skillLevels)) {
                if (typeof level === 'number' && nodeId.startsWith(prefix)) {
                    total += level;
                }
            }
            return total;
        };

        // 根据神器类型显示不同的加成（只显示最终值，不重复）
        switch (this.type) {
            case "Abyssal Artifact":
                const eggHpLvl = getSkillLevel("egg_hp");
                const eggDmgLvl = getSkillLevel("egg_damage");
                const eggMassLvl = getSkillLevel("egg_mass");
                // 基础值 1.4 + 技能加成
                this.bottomstats.push({ key: "eggHpMultiplier", value: 1.4 + eggHpLvl * 0.05, displayName: `Egg HP: x${(1.4 + eggHpLvl * 0.05).toFixed(2)}`, color: statColors.eggHpMultiplier });
                this.bottomstats.push({ key: "eggDamageMultiplier", value: 1.4 + eggDmgLvl * 0.05, displayName: `Egg Damage: x${(1.4 + eggDmgLvl * 0.05).toFixed(2)}`, color: statColors.eggDamageMultiplier });
                this.bottomstats.push({ key: "eggMassMultiplier", value: 1.4 + eggMassLvl * 0.05, displayName: `Egg Mass: x${(1.4 + eggMassLvl * 0.05).toFixed(2)}`, color: statColors.eggMassMultiplier });
                break;
            case "Scorched Artifact":
                const healLvl = getSkillLevel("heal_mult");
                this.bottomstats.push({ key: "healMultiplier", value: 1.2 + healLvl * 0.1, displayName: `Heal: x${(1.2 + healLvl * 0.1).toFixed(2)}`, color: statColors.healMultiplier });
                this.bottomstats.push({ key: "squadHealShare", value: 0.33, displayName: `Squad Heal: 33%`, color: statColors.squadHealShare });
                break;
            case "Verdant Artifact":
                const dpsLvl = getSkillLevel("dps");
                const cdLvl = getSkillLevel("ult_cd");
                this.bottomstats.push({ key: "dpsMultiplier", value: 1.5 + dpsLvl * 0.05, displayName: `DPS: x${(1.5 + dpsLvl * 0.05).toFixed(2)}`, color: statColors.dpsMultiplier });
                if (cdLvl > 0) {
                    this.bottomstats.push({ key: "cooldownReduction", value: cdLvl * 0.05, displayName: `Petal CD: -${(cdLvl * 5).toFixed(0)}%`, color: statColors.dpsMultiplier });
                }
                break;
            case "Cosmic Artifact":
                const hpLvl = getSkillLevel("hp_mult");
                const rangeLvl = getSkillLevel("range");
                const knockbackLvl = getSkillLevel("knockback");
                const cdLvlCosmic = getSkillLevel("ult_cd");
                this.bottomstats.push({ key: "hpMultiplier", value: 1.2 + hpLvl * 0.1, displayName: `HP: x${(1.2 + hpLvl * 0.1).toFixed(2)}`, color: statColors.hpMultiplier });
                this.bottomstats.push({ key: "ultRange", value: 500 + rangeLvl * 20, displayName: `Ult Range: ${500 + rangeLvl * 20}`, color: statColors.hpMultiplier });
                this.bottomstats.push({ key: "ultBubbleLvl", value: hpLvl + cdLvlCosmic + rangeLvl + knockbackLvl, displayName: `Bubble Lv: ${Math.min(hpLvl + cdLvlCosmic + rangeLvl + knockbackLvl, 34)}`, color: statColors.hpMultiplier });
                this.bottomstats.push({ key: "knockbackMult", value: 1 + knockbackLvl * 0.05, displayName: `Knockback: x${(1 + knockbackLvl * 0.05).toFixed(2)}`, color: statColors.hpMultiplier });
                const cosmicCd = Math.max(60 + cdLvlCosmic * (-1.5), 10);
                this.bottomstats.push({ key: "ultCooldown", value: cosmicCd, displayName: `Ult CD: ${cosmicCd}s`, color: statColors.hpMultiplier });
                break;
            case "Chimera":
                const dmgLvl = getSkillLevel("damage");
                const speedLvl = getSkillLevel("speed");
                const hpLvlChimera = getSkillLevel("hp");
                const cdLvlChimera = getSkillLevel("ult_cd");
                this.bottomstats.push({ key: "mobDamageMultiplier", value: 1.5 + dmgLvl * 0.1, displayName: `Mob Damage: x${(1.5 + dmgLvl * 0.1).toFixed(2)}`, color: statColors.mobDamageMultiplier || "#ff6666" });
                this.bottomstats.push({ key: "mobSpeedMultiplier", value: 1 + speedLvl * 0.05, displayName: `Mob Speed: x${(1 + speedLvl * 0.05).toFixed(2)}`, color: statColors.mobSpeedMultiplier || "#99ccff" });
                this.bottomstats.push({ key: "mobHpMultiplier", value: 1 + hpLvlChimera * 0.1, displayName: `Mob HP: x${(1 + hpLvlChimera * 0.1).toFixed(2)}`, color: statColors.mobHpMultiplier || "#ff9999" });
                const chimeraCd = Math.max(10 - cdLvlChimera * 0.5, 3);
                this.bottomstats.push({ key: "abilityCooldown", value: chimeraCd, displayName: `Ability CD: ${chimeraCd.toFixed(1)}s`, color: statColors.abilityCooldown || "#ffcc66" });
                break;
        }
    }

    // 移除节点名称中的罗马数字（如 "Heal Multiplier I" -> "Heal Multiplier"）
    stripRomanNumeral(name) {
        return name.replace(/\s+[IVX]+$/, '');
    }

    // 神器专属 tooltip 绘制方法
    drawArtifactTooltip() {
        const sgi = window.specialGlobalInventory;
        const artifact = sgi?.artifacts?.[this.type];
        const skillLevels = artifact?.skillLevels || {};

        // 获取神器技能树
        const tree = SKILL_TREES?.[this.type];
        if (!tree) return;

        const name = this.type;
        const color = tree.color || "#ffffff";
        const description = tree.description || "";

        // 计算每个技能节点的总等级（按前缀分组）
        const skillGroups = {};
        for (const node of tree.nodes) {
            if (node.isRoot || !node.statKey) continue;
            // 找到该技能的所有等级节点，计算总等级
            const prefix = node.id.replace(/_\d+$/, '');  // 移除末尾的 _数字
            if (!skillGroups[prefix]) {
                skillGroups[prefix] = {
                    statKey: node.statKey,
                    baseValue: node.baseValue,
                    valuePerLevel: node.valuePerLevel,
                    totalLevels: 0,
                    displayName: node.name
                };
            }
        }
        // 计算每个分组的总等级
        for (const [nodeId, level] of Object.entries(skillLevels)) {
            const prefix = nodeId.replace(/_\d+$/, '');
            if (skillGroups[prefix]) {
                skillGroups[prefix].totalLevels += level;
            }
        }

        // 生成显示列表
        let stats = [];
        for (const [prefix, data] of Object.entries(skillGroups)) {
            if (data.totalLevels === 0 && data.baseValue === 0) continue;  // 跳过未学习且无基础值的

            let finalValue = data.baseValue + data.totalLevels * data.valuePerLevel;
            // cooldownReduction 是小数表示（0.05 = 5%），需要转换为百分比整数
            if (data.statKey === 'cooldownReduction') {
                finalValue = finalValue * 100;
            }
            const cleanName = this.stripRomanNumeral(data.displayName);  // 移除罗马数字
            const stat = {
                key: cleanName,
                value: finalValue,
                format: this.getValueFormat(data.statKey)
            };
            stats.push(stat);
        }

        // 特殊处理 squadHealShare（固定值）
        if (tree.passiveEffects?.squadHealShare) {
            stats.push({ key: "Squad Heal", value: tree.passiveEffects.squadHealShare * 100, format: "percent" });
        }

        // 计算尺寸
        ctx.font = `900 ${1.2 * 22.5}px Ubuntu`;
        const nameWidth = ctx.measureText(name).width;
        ctx.font = `900 ${0.75 * 22.5}px Ubuntu`;

        // 描述
        const maxDescWidth = 280;
        const descLines = this.wrapText(description, maxDescWidth, 0.75 * 22.5);
        const descWidth = Math.max(...descLines.map(line => ctx.measureText(line).width));

        // 计算属性文本宽度
        let maxStatWidth = 0;
        for (const stat of stats) {
            const text = this.formatStatValue(stat);
            maxStatWidth = Math.max(maxStatWidth, ctx.measureText(text).width);
        }

        const width = Math.max(nameWidth + 20, Math.max(descWidth + 20, maxStatWidth + 20));
        const height = 75 + descLines.length * 22.5 + stats.length * 22.5 + 10;

        // 绘制位置 - 游戏中显示在上方避免遮挡神器槽，菜单中显示在下方
        // this.y 在 petalContainer.js 中设置：
        // - drawBelow=true（菜单）: y + h/2 + 11.5 (神器下方)
        // - drawBelow=false（游戏）: y - cache.h - h/2 - 11.5 (tooltip顶部位置)
        // 但这里需要重新计算，因为 height 是动态的
        const x = Math.min(canvas.w - 5 - width / 2, Math.max(5, -width / 2 + this.x));

        // 判断是游戏还是菜单状态，决定 tooltip 在神器槽上方还是下方
        // this.y 在游戏中会被设置为 tooltip 顶部位置（负偏移），在菜单中是正偏移
        // 如果 this.y 明显小于 this.x（说明是上方位置），直接使用；否则重新计算
        const drawBelow = (window.state === 'menu');

        // 计算神器槽中心位置（从 this.y 反推）
        // petalContainer.js 中: cache.y = drawBelow ? y + h/2 + 11.5 : y - cache.h - h/2 - 11.5
        // 其中 y 是花瓣槽的 y 坐标（中心），h 是花瓣槽高度（约65）
        // 在游戏状态（drawBelow=false），this.y 应该是 tooltip 顶部位置
        // 在菜单状态（drawBelow=true），this.y 应该是神器槽下方位置

        let y;
        if (drawBelow) {
            // 菜单中：tooltip 在神器槽下方
            y = Math.min(canvas.h - 5 - height, Math.max(5, this.y));
        } else {
            // 游戏中：tooltip 在神器槽上方
            // this.y 已经是 tooltip 顶部位置（因为在 petalContainer.js 中设置了负偏移）
            // 但需要确保不超出屏幕顶部
            y = Math.max(5, this.y);

            // 如果 tooltip 太高会超出底部，改到下方
            if (y + height > canvas.h - 5) {
                // 重新计算为下方位置
                const artifactCenterY = this.y + height + 65/2 + 11.5;  // 反推神器槽中心
                y = artifactCenterY + 65/2 + 11.5;
                y = Math.min(canvas.h - 5 - height, Math.max(5, y));
            }
        }

        // 背景 - 金色发光
        ctx.save();
        ctx.shadowColor = "#FFD700";
        ctx.shadowBlur = 15;
        ctx.strokeStyle = "#FFD700";
        ctx.lineWidth = 2;
        ctx.fillStyle = "rgba(255, 215, 0, 0.3)";
        ctx.beginPath();
        ctx.roundRect(x, y, width, height, 5);
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        // 名称
        ctx.font = `900 ${1.2 * 22.5}px Ubuntu`;
        ctx.lineWidth = 1.2 * 3.25;
        ctx.strokeStyle = "#000000";
        ctx.fillStyle = color;
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.strokeText(name, x + 10, y + 10);
        ctx.fillText(name, x + 10, y + 10);

        // 描述
        ctx.font = `900 ${0.7 * 22.5}px Ubuntu`;
        ctx.lineWidth = 0.7 * 3.25;
        ctx.strokeStyle = "#000000";
        ctx.fillStyle = "#ffffff";
        let descY = y + 50;
        for (const line of descLines) {
            ctx.strokeText(line, x + 10, descY);
            ctx.fillText(line, x + 10, descY);
            descY += 22.5;
        }

        // 属性
        let statY = descY + 5;
        // 为每个属性分配不同颜色
        const statColors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#F38181'];
        for (let i = 0; i < stats.length; i++) {
            const stat = stats[i];
            const statColor = statColors[i % statColors.length];

            // 分离名称和数值
            let valueStr;
            switch (stat.format) {
                case "multiplier":
                    valueStr = "x" + stat.value.toFixed(2);
                    break;
                case "percent":
                    valueStr = stat.value.toFixed(0) + "%";
                    break;
                case "negative_percent":
                    valueStr = "-" + stat.value.toFixed(0) + "%";
                    break;
                case "time":
                    valueStr = stat.value.toFixed(1) + "s";
                    break;
                default:
                    valueStr = stat.value.toFixed(2);
            }
            const label = stat.key + ":";

            // 绘制属性名称（彩色）
            ctx.fillStyle = statColor;
            ctx.strokeStyle = "#000000";
            ctx.strokeText(label, x + 10, statY);
            ctx.fillText(label, x + 10, statY);

            // 绘制数值（白色）
            const labelWidth = ctx.measureText(label).width;
            ctx.fillStyle = "#ffffff";
            ctx.strokeText(" " + valueStr, x + 10 + labelWidth, statY);
            ctx.fillText(" " + valueStr, x + 10 + labelWidth, statY);

            statY += 22.5;
        }
    }

    // 根据属性键获取格式类型
    getValueFormat(statKey) {
        if (statKey?.includes("Multiplier") || statKey === "healMultiplier" || statKey === "dpsMultiplier" || statKey === "hpMultiplier") {
            return "multiplier";
        }
        if (statKey === "cooldownReduction") {
            return "negative_percent";
        }
        if (statKey === "cooldown") {
            return "time";
        }
        return "number";
    }

    // 格式化属性值显示
    formatStatValue(stat) {
        let valueStr;
        switch (stat.format) {
            case "multiplier":
                valueStr = "x" + stat.value.toFixed(2);
                break;
            case "percent":
                valueStr = stat.value.toFixed(0) + "%";
                break;
            case "negative_percent":
                valueStr = "-" + stat.value.toFixed(0) + "%";
                break;
            case "time":
                valueStr = stat.value.toFixed(1) + "s";
                break;
            default:
                valueStr = stat.value.toFixed(2);
        }
        return `${stat.key}: ${valueStr}`;
    }

    // 文字换行辅助方法
    wrapText(text, maxWidth, fontSize) {
        ctx.font = `900 ${fontSize}px Ubuntu`;
        const words = text.split(' ');
        const lines = [];
        let currentLine = "";

        for (const word of words) {
            const testLine = currentLine + (currentLine ? " " : "") + word;
            if (ctx.measureText(testLine).width > maxWidth && currentLine) {
                lines.push(currentLine);
                currentLine = word;
            } else {
                currentLine = testLine;
            }
        }
        if (currentLine) {
            lines.push(currentLine);
        }
        return lines.length > 0 ? lines : [text];
    }

    draw() {
        // 所有神器统一使用普通花瓣的 tooltip 样式（通过 bottomstats 显示属性）
        // 不再使用 drawArtifactTooltip()

        if (!this.image) {
            let temp = this.generateDesc(300, 500);
            this.w = temp.width;
            this.h = 117.5 + temp.height;
            for (let stat of this.bottomstats) {
                const shouldAdd = (stat.value !== 0 || (stat.value[0] && stat.value[0] !== 0)) && !(this.mode == 'enemies' && stat.key == "detectionDistance" && isNaN(stat.value));
                if (shouldAdd) this.h += 17.5;
                if (stat.key == "summon") this.h += 17.5 * ((this.type == "Jellyfish Egg" || this.type == "Neuroflare Egg") ? 5 : (this.type == "Bubble" && this.rarity >= 13) ? 4 : 3);

                if (stat.key == "drops") {
                    let maxDisplay = 0;
                    let invalids = 0;
                    for (let type in stat.value) {
                        if (!Array.isArray(stat.value[type])) {
                            invalids++;
                            continue;
                        }
                        let valid = 0;
                        for (let rarity of stat.value[type]) {
                            if (rarity > 0) valid++
                        }
                        maxDisplay = Math.max(maxDisplay, valid)
                        if (valid == 0) invalids++
                    }

                    this.w = Math.max(25 + maxDisplay * 67.5, this.w)
                    this.h += (Object.keys(stat.value).length - invalids) * 85 + 17.5
                }

                if ([
                    'slowdown',
                    'killBossUnder',
                    'attractionRadius'
                ].includes(stat.key) && stat.value[0]) {
                    let minChange = stat.value[0];
                    let changeV = 0;

                    for (let rarity of stat.value) {
                        if (rarity < 1 || rarity == undefined) continue;
                        if (rarity == minChange) continue;
                        changeV++
                        minChange = rarity
                    }

                    this.h += changeV * 17.5
                }
            }
            this.image = this.mode == "petals" ? this.genPcBox() : this.genEcBox();
            this.isTs = isTs
        } else {
            ctx.drawImage(this.image, Math.min(canvas.w - 5 - this.w / 2, Math.max(5, -this.w / 2 + this.x)), Math.min(canvas.h - 5 - this.h, Math.max(5, this.y)))
        }

        if (this.isTs !== isTs) {
            delete this.image
            this.generateData(this.mode, this.type, this.stats)
        }
    }
    genPcBox() {
        const newCanvas = new OffscreenCanvas(this.w, this.h)
        const newCtx = newCanvas.getContext('2d')
        const oldCtx = ctx
        ctx = newCtx

        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'

        ctx.fillStyle = "#000000"
        ctx.globalAlpha *= 0.5

        ctx.beginPath();
        ctx.roundRect(0, 0, this.w, this.h, 5)
        ctx.fill();
        ctx.closePath();

        ctx.globalAlpha /= 0.5

        ctx.strokeStyle = "#000000"
        ctx.fillStyle = "#ffffff"
        ctx.lineWidth = 2

        ctx.font = `900 ${0.9 * 22.5}px Ubuntu`
        ctx.textAlign = 'right'
        ctx.textBaseline = 'top'

        ctx.fillStyle = "white"
        ctx.strokeStyle = "black"
        ctx.lineWidth = 0.9 * 3.25

        ctx.translate(this.w - 35, 10)
        // 使用 Canvas 绘制图标代替 emoji
        ctx.save()
        ctx.beginPath()
        ctx.arc(12.5, 12.5, 10, 0, Math.PI * 2)
        ctx.strokeStyle = '#4CAF50'
        ctx.lineWidth = 2.5
        ctx.stroke()
        // 绘制箭头
        ctx.beginPath()
        ctx.arc(12.5, 12.5, 6, -0.5, 1.5)
        ctx.strokeStyle = '#4CAF50'
        ctx.lineWidth = 2
        ctx.stroke()
        // 箭头头部
        ctx.beginPath()
        ctx.moveTo(17.5, 8)
        ctx.lineTo(20, 11)
        ctx.lineTo(15.5, 12)
        ctx.strokeStyle = '#4CAF50'
        ctx.stroke()
        ctx.restore()

        let text = ``
        let i = 1
        for (let stat of this.topstats) {
            if (stat.key == 'reload') { text += formatAmountHighPrecision(stat.value) + `s` } else
                if (stat.key == 'shootCd') { text += formatAmountHighPrecision(stat.value) + `s` } else
                    if (stat.key == 'lifespan') { text += formatAmountHighPrecision(stat.value) + `s` } else
                        if (stat.key == 'hatchTime') { text += formatAmountHighPrecision(stat.value) + `s` } else
                            if (stat.key == 'timeToPop') { text += formatAmountHighPrecision(stat.value) + `s` } else
                                if (stat.key == 'spawnSystem') { text += formatAmountHighPrecision(stat.value)[1] + `s` } else { text += formatAmountHighPrecision(stat.value) }
            if (this.topstats.length > 1 && i !== this.topstats.length) text += " + "
            i++
        }

        ctx.strokeText(text, -5, 2.5);
        ctx.fillText(text, -5, 2.5);

        ctx.translate(-this.w + 35, 0)

        ctx.font = `900 ${1.2 * 22.5}px Ubuntu`
        ctx.lineWidth = 1.2 * 3.25
        ctx.textAlign = 'left'

        ctx.translate(10, 0);
        ctx.strokeText(this.name, 0, 0);
        ctx.fillText(this.name, 0, 0);

        if (this.amount > 1) {
            let trans = ctx.measureText(this.name).width + 7.5
            ctx.translate(trans, 4)

            ctx.font = `900 ${0.75 * 22.5}px Ubuntu`
            ctx.lineWidth = 0.75 * 3.25

            ctx.strokeText('x' + this.amount.toLocaleString(), 0, 4);
            ctx.fillText('x' + this.amount.toLocaleString(), 0, 4);
            ctx.translate(-trans, -4)
        }

        ctx.font = `900 ${0.75 * 22.5}px Ubuntu`
        ctx.lineWidth = 0.75 * 3.25

        let isUnique = false;
        if (
            (this.type === "Shattered Relic of Wrath" ||
                this.type === "Reinforced Relic of Wrath" ||
                this.type === "Subset Relic of the Guardian" ||
                this.type === "Division Relic of the Guardian" ||
                this.type === "Guard Relic of the Guardian" ||
                this.type === "Knight Relic of the Guardian" ||
                this.type === "Aid Relic of Serenity" ||
                this.type === "Subliminal Relic of Serenity" ||
                this.type === "Barrier Relic of Serenity" ||
                this.type === "Token") && this.rarity == 0
        ) {
            isUnique = true
        }

        ctx.fillStyle = isUnique == true ? "#000000" : Colors.rarities[this.rarity].color

        ctx.translate(0, 30);

        if (this.type == "Hexagon") {

            let text = Colors.rarities[this.rarity].name

            let a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
            let b = 'ƛƁƇƊЄƑƓӇƖʆƘԼMƝƠƤƢƦƧƬƲƔƜҲƳȤ'.split('')

            text = text.toUpperCase()
            let convertexText = ''
            for (let letter of text) {
                convertexText += b[a.indexOf(letter)] ? b[a.indexOf(letter)] : letter
            }
            text = convertexText

            ctx.strokeText(text, 0, 0);
            ctx.fillText(text, 0, 0);

        } else {
            ctx.strokeText(isUnique == true ? "???" : Colors.rarities[this.rarity].name, 0, 0);
            ctx.fillText(isUnique == true ? "???" : Colors.rarities[this.rarity].name, 0, 0);
        }

        ctx.font = `900 ${0.7 * 22.5}px Ubuntu`
        ctx.lineWidth = 0.7 * 3.25

        ctx.translate(0, 45);
        for (let row of this.finalDesc) {
            let translate = 0
            for (let text of row) {
                ctx.fillStyle = text.color

                ctx.strokeText(text.text, 0, 0);
                ctx.fillText(text.text, 0, 0);

                ctx.translate(text.written, 0)
                translate += text.written
            }
            ctx.translate(-translate, 22.5);
        }

        ctx.translate(0, 22.5);
        for (let stat of this.bottomstats) {

            if (stat.value == 0) {
                continue;
            }

            ctx.fillStyle = stat.color

            let displayText = stat.displayName || (this.formatName(stat.key) + ": ");
            let trans = ctx.measureText(displayText).width

            if (this.type == "Hexagon") {

                let text = this.formatName(stat.key) + ": "

                let a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
                let b = 'ƛƁƇƊЄƑƓӇƖʆƘԼMƝƠƤƢƦƧƬƲƔƜҲƳȤ'.split('')

                text = text.toUpperCase()
                let convertexText = ''
                for (let letter of text) {
                    convertexText += b[a.indexOf(letter)] ? b[a.indexOf(letter)] : letter
                }
                text = convertexText

                ctx.strokeText(text, 0, 0);
                ctx.fillText(text, 0, 0);

                trans = ctx.measureText(text).width
            } else {
                // 使用 displayText（包含神器加成的 displayName），而不是 formatName(stat.key)
                ctx.strokeText(displayText, 0, 0);
                ctx.fillText(displayText, 0, 0);
            }

            ctx.translate(trans, 0);

            // 如果有 displayName（神器加成），已经包含了完整文本，跳过 value 绘制
            if (stat.displayName) {
                ctx.translate(-trans, 17.5);
                continue;
            }

            ctx.fillStyle = "#ffffff"

            let text = formatAmountHighPrecision(stat.value)

            if ([
                'poison',
                'flowerBodyPoison',
                'summonBodyPoison'
            ].includes(stat.key)) {
                if (this.type == "Shiny Iris") {
                    text = `${formatAmountHighPrecision(stat.value[0])} (${formatAmountHighPrecision(stat.value[1])}/s, total ${Math.round((stat.value[0] / stat.value[1]) * 100) / 100}s per enemy)`
                } else {
                    text = `${formatAmountHighPrecision(stat.value[0])} (${formatAmountHighPrecision(stat.value[1])}/s, total ${Math.round((stat.value[0] / stat.value[1]) * 100) / 100}s)`
                }
            } else if ([
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
            ].includes(stat.key)) {
                text += 's'
            } else if ([
                'overhealConversion',
                'inflation',
                'damagePercent',
                'collectDupeChance',
                'armorPercent',
                'radiusChange',
                'healthNerf',
                'speedBuff'
            ].includes(stat.key)) {
                text += '%'
            } else if (stat.key === 'waveSpeedBoost') {
                // Card 花瓣加速效果：显示为百分比
                text = '+' + Math.round((stat.value - 1) * 100) + '%'
            } else if (stat.key === 'speedReduction') {
                // Card 花瓣削减率：显示为每wave百分比
                text = Math.round(stat.value * 100) + '%/wave'
            } else if (stat.key === 'ratedWave') {
                // Card 花瓣额定wave：显示为wave数
                text = 'wave ' + stat.value
            } else if ([
                'damageIncrease',
            ].includes(stat.key)) {
                ctx.strokeText(`${stat.value}% (${stat.value * 1.25}% on `, 0, 0);
                ctx.fillText(`${stat.value}% (${stat.value * 1.25}% on `, 0, 0);

                let t = ctx.measureText(`${stat.value}% (${stat.value * 1.25}% on `).width;

                ctx.translate(t, 0);
                ctx.fillStyle = "#ff0000"
                ctx.strokeText("Blood Petals", 0, 0);
                ctx.fillText("Blood Petals", 0, 0);

                let t2 = ctx.measureText("Blood Petals").width;

                ctx.translate(t2, 0);
                ctx.fillStyle = "#ffffff"
                ctx.strokeText(")", 0, 0);
                ctx.fillText(")", 0, 0);

                // 使用 Canvas 绘制 noStack 图标
                const iconX = ctx.measureText(")").width + 7.5
                const iconY = -6
                const iconR = 7
                ctx.save()
                ctx.beginPath()
                ctx.arc(iconX + iconR, iconY + iconR, iconR, 0, Math.PI * 2)
                ctx.strokeStyle = '#ff4444'
                ctx.lineWidth = 2
                ctx.stroke()
                ctx.beginPath()
                ctx.moveTo(iconX + iconR - iconR * 0.7, iconY + iconR - iconR * 0.7)
                ctx.lineTo(iconX + iconR + iconR * 0.7, iconY + iconR + iconR * 0.7)
                ctx.stroke()
                ctx.restore()

                ctx.translate(-(t + t2), 0)
                text = ""
            } else if ([
                'flowerHeal'
            ].includes(stat.key)) {
                ctx.strokeText(`${formatAmountHighPrecision(stat.value)} /s`, 0, 0);
                ctx.fillText(`${formatAmountHighPrecision(stat.value)} /s`, 0, 0);

                let t = ctx.measureText(`${formatAmountHighPrecision(stat.value)} /s`).width;

                ctx.translate(t, 0);
                // 使用 Canvas 绘制 noStack 图标
                const iconX = ctx.measureText(")").width + 7.5
                const iconY = -6
                const iconR = 7
                ctx.save()
                ctx.beginPath()
                ctx.arc(iconX + iconR, iconY + iconR, iconR, 0, Math.PI * 2)
                ctx.strokeStyle = '#ff4444'
                ctx.lineWidth = 2
                ctx.stroke()
                ctx.beginPath()
                ctx.moveTo(iconX + iconR - iconR * 0.7, iconY + iconR - iconR * 0.7)
                ctx.lineTo(iconX + iconR + iconR * 0.7, iconY + iconR + iconR * 0.7)
                ctx.stroke()
                ctx.restore()
                ctx.translate(-t, 0)
                text = ""
            } else if ([
                'reviveHealth',
                'healingBoost',
                'healthBuffBoost',
                'weatherChanceBoost'
            ].includes(stat.key)) {
                text = formatAmountHighPrecision(stat.value * 100) + '%'
            } else if ([
                'passiveDamagePerKill',
                'passiveHealingBuff',
                'petHeal'
            ].includes(stat.key)) {
                text += '/s'
                if (this.type == "Starfish" || this.type == "Brisingida") text += " (under 70% hp)"
            } else if ([
                'lightning'
            ].includes(stat.key)) {
                if (this.type == "Shiny Lightning") text = "+" + text
                text += '/bounce'
            } else if ([
                'summon'
            ].includes(stat.key)) {
                if (stat.value.rarity > -1) {
                    let name = Colors.rarities[stat.value.rarity].name + " "
                    text = stat.value.type
                    if (stat.value.amount) text += " x" + stat.value.amount

                    if (this.type == "Hexagon") {
                        let a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
                        let b = 'ƛƁƇƊЄƑƓӇƖʆƘԼMƝƠƤƢƦƧƬƲƔƜҲƳȤ'.split('')

                        name = name.toUpperCase()
                        let convertexText = ''
                        for (let letter of name) {
                            convertexText += b[a.indexOf(letter)] ? b[a.indexOf(letter)] : letter
                        }
                        name = convertexText

                        text = text.toUpperCase()
                        convertexText = ''
                        for (let letter of text) {
                            convertexText += b[a.indexOf(letter)] ? b[a.indexOf(letter)] : letter
                        }
                        text = convertexText
                    }

                    let t = ctx.measureText(name).width;

                    ctx.fillStyle = Colors.rarities[stat.value.rarity].color
                    ctx.strokeText(name, 0, 0);
                    ctx.fillText(name, 0, 0);

                    ctx.translate(t, 0);
                    ctx.fillStyle = "#ffffff"
                    ctx.strokeText(text, 0, 0);
                    ctx.fillText(text, 0, 0);
                    ctx.translate(-trans - t, 17.5);
                } else {
                    ctx.translate(-trans, 17.5)
                }

                for (let subkey in stat.value.substats) {
                    let subStat = stat.value.substats[subkey]

                    let subText = " - Summon " + this.formatName(subkey) + ": "

                    if (this.type == "Hexagon") {
                        let a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
                        let b = 'ƛƁƇƊЄƑƓӇƖʆƘԼMƝƠƤƢƦƧƬƲƔƜҲƳȤ'.split('')

                        subText = subText.toUpperCase()
                        let convertexText = ''
                        for (let letter of subText) {
                            convertexText += b[a.indexOf(letter)] ? b[a.indexOf(letter)] : letter
                        }
                        subText = convertexText
                    }

                    let x = ctx.measureText(subText).width

                    ctx.fillStyle = statColors[subkey]
                    ctx.strokeText(subText, 0, 0);
                    ctx.fillText(subText, 0, 0);

                    ctx.translate(x, 0);

                    let t = formatAmountHighPrecision(subStat)
                    if (this.type == "Shiny Ruby" && subkey == "damage") t = "+" + t + " (per summon)"
                    if (Array.isArray(t)) t = `${formatAmountHighPrecision(subStat[0])}~${formatAmountHighPrecision(subStat[1])}`

                    ctx.fillStyle = "#ffffff"
                    ctx.strokeText(t, 0, 0);
                    ctx.fillText(t, 0, 0);

                    ctx.translate(-x, 17.5);
                }

                ctx.translate(0, -17.5);
                text = ""
                trans = 0;
            } else if ([
                'slowdown',
                'killBossUnder',
                'attractionRadius'
            ].includes(stat.key) && stat.value[0]) {
                ctx.translate(- trans, 17.5);
                let minChange = stat.value[0], i = -1;
                for (let rarity of stat.value) {
                    i++
                    if (rarity < 1 || rarity == undefined) continue;
                    if (rarity == minChange) continue;

                    minChange = rarity

                    let c = Colors.rarities[i]
                    if (!c) c = Colors.rarities[0]
                    let x = ctx.measureText(`- ${this.formatName(c.name)} ${this.formatName(stat.key)}: `).width

                    ctx.fillStyle = c.color
                    ctx.strokeText(`- ${this.formatName(c.name)} ${this.formatName(stat.key)}: `, 0, 0);
                    ctx.fillText(`- ${this.formatName(c.name)} ${this.formatName(stat.key)}: `, 0, 0);

                    ctx.translate(x, 0);

                    text = formatAmountHighPrecision(stat.value[i])
                    if (stat.key !== "attractionRadius") text += "%"

                    ctx.fillStyle = "#ffffff"
                    ctx.strokeText(text, 0, 0);
                    ctx.fillText(text, 0, 0);

                    ctx.translate(-x, 17.5);
                }

                ctx.translate(0, -17.5);
                text = ""
                trans = 0;
            } else if (this.type == "Plank" && stat.key == "damage") {
                ctx.strokeText(`${formatAmountHighPrecision(stat.value)} (${formatAmountHighPrecision(stat.value * 1000)} against projectiles)`, 0, 0);
                ctx.fillText(`${formatAmountHighPrecision(stat.value)} (${formatAmountHighPrecision(stat.value * 1000)} against projectiles)`, 0, 0);
            } else if ([
                'rotateSpeedBuff'
            ].includes(stat.key)) {
                text += ' radians/s'
            } else if ([
                'maxSkip'
            ].includes(stat.key)) {
                text += ' waves'
            } else if ([
                'healMultiplier',
                'eggHpMultiplier',
                'eggMassMultiplier',
                'eggDamageMultiplier',
                'dpsMultiplier',
                'hpMultiplier'
            ].includes(stat.key)) {
                text = 'x' + text
                ctx.strokeText(text, 0, 0);
                ctx.fillText(text, 0, 0);
            } else {
                ctx.strokeText(formatAmountHighPrecision(stat.value), 0, 0);
                ctx.fillText(formatAmountHighPrecision(stat.value), 0, 0);
            }

            if (text !== "") {
                ctx.strokeText(text, 0, 0);
                ctx.fillText(text, 0, 0);
            }

            if (stat.unstackable && text !== "") {
                // 使用 Canvas 绘制 noStack 图标
                const iconX = ctx.measureText(text).width + 7.5
                const iconY = -6
                const iconR = 7
                ctx.save()
                ctx.beginPath()
                ctx.arc(iconX + iconR, iconY + iconR, iconR, 0, Math.PI * 2)
                ctx.strokeStyle = '#ff4444'
                ctx.lineWidth = 2
                ctx.stroke()
                ctx.beginPath()
                ctx.moveTo(iconX + iconR - iconR * 0.7, iconY + iconR - iconR * 0.7)
                ctx.lineTo(iconX + iconR + iconR * 0.7, iconY + iconR + iconR * 0.7)
                ctx.stroke()
                ctx.restore()
            }

            ctx.translate(-trans, 17.5);
        }

        ctx = oldCtx
        return newCanvas
    }
    genEcBox() {
        const newCanvas = new OffscreenCanvas(this.w, this.h)
        const newCtx = newCanvas.getContext('2d')
        const oldCtx = ctx
        ctx = newCtx

        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'

        ctx.fillStyle = "#000000"
        ctx.globalAlpha *= 0.5

        ctx.beginPath();
        ctx.roundRect(0, 0, this.w, this.h, 5)
        ctx.fill();
        ctx.closePath();

        ctx.globalAlpha /= 0.5

        ctx.strokeStyle = "#000000"
        ctx.fillStyle = "#ffffff"
        ctx.lineWidth = 2

        ctx.font = `900 ${0.9 * 22.5}px Ubuntu`
        ctx.textAlign = 'right'
        ctx.textBaseline = 'top'

        ctx.fillStyle = "white"
        ctx.strokeStyle = "black"
        ctx.lineWidth = 0.9 * 3.25

        ctx.translate(this.w - 35, 10)
        // 使用 Canvas 绘制星星图标
        ctx.save()
        const cx = 12.5, cy = 12.5, outerR = 10, innerR = 4
        ctx.beginPath()
        for (let i = 0; i < 5; i++) {
            const angle = (i * 4 * Math.PI / 5) - Math.PI / 2
            const x = cx + Math.cos(angle) * outerR
            const y = cy + Math.sin(angle) * outerR
            if (i === 0) ctx.moveTo(x, y)
            else ctx.lineTo(x, y)
            const angle2 = ((i * 4 * Math.PI / 5) + (2 * Math.PI / 5)) - Math.PI / 2
            const x2 = cx + Math.cos(angle2) * innerR
            const y2 = cy + Math.sin(angle2) * innerR
            ctx.lineTo(x2, y2)
        }
        ctx.closePath()
        ctx.fillStyle = '#FFD700'
        ctx.fill()
        ctx.strokeStyle = '#B8860B'
        ctx.lineWidth = 1.5
        ctx.stroke()
        ctx.restore()

        let text = ``
        let i = 1
        for (let stat of this.topstats) {
            if (stat.key == 'temp') { text += stat.value[1] + `s` } else { text += formatAmountHighPrecision(stat.value) }
            if (this.topstats.length > 1 && i !== this.topstats.length) text += " + "
            i++
        }

        ctx.strokeText(text, -5, 2.5);
        ctx.fillText(text, -5, 2.5);

        ctx.translate(-this.w + 35, 0)

        ctx.font = `900 ${1.2 * 22.5}px Ubuntu`
        ctx.lineWidth = 1.2 * 3.25
        ctx.textAlign = 'left'

        ctx.translate(10, 0);
        ctx.strokeText(this.name, 0, 0);
        ctx.fillText(this.name, 0, 0);

        ctx.font = `900 ${0.75 * 22.5}px Ubuntu`
        ctx.lineWidth = 0.75 * 3.25

        ctx.fillStyle = Colors.rarities[this.rarity].color

        ctx.translate(0, 30);
        if (this.type == "Hexagon") {

            let text = Colors.rarities[this.rarity].name

            let a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
            let b = 'ƛƁƇƊЄƑƓӇƖʆƘԼMƝƠƤƢƦƧƬƲƔƜҲƳȤ'.split('')

            text = text.toUpperCase()
            let convertexText = ''
            for (let letter of text) {
                convertexText += b[a.indexOf(letter)] ? b[a.indexOf(letter)] : letter
            }
            text = convertexText

            ctx.strokeText(text, 0, 0);
            ctx.fillText(text, 0, 0);

        } else {
            ctx.strokeText(Colors.rarities[this.rarity].name, 0, 0);
            ctx.fillText(Colors.rarities[this.rarity].name, 0, 0);
        }

        ctx.font = `900 ${0.7 * 22.5}px Ubuntu`
        ctx.lineWidth = 0.7 * 3.25

        ctx.translate(0, 45);
        for (let row of this.finalDesc) {
            let translate = 0
            for (let text of row) {
                ctx.fillStyle = text.color
                ctx.strokeText(text.text, 0, 0);
                ctx.fillText(text.text, 0, 0);

                ctx.translate(text.written, 0)
                translate += text.written
            }
            ctx.translate(-translate, 22.5);
        }

        ctx.translate(0, 22.5);
        for (let stat of this.bottomstats) {

            if (stat.key !== "drops") {
                if (stat.value == 0 || (stat.key == "detectionDistance" && isNaN(stat.value))) {
                    continue;
                }

                ctx.fillStyle = stat.color

                // 如果有 displayName，直接显示完整文本（神器使用）
                if (stat.displayName) {
                    ctx.strokeText(stat.displayName, 0, 0);
                    ctx.fillText(stat.displayName, 0, 0);
                    continue;
                }

                let trans = ctx.measureText(this.formatName(stat.key) + ": ").width

                if (this.type == "Hexagon") {

                    let text = this.formatName(stat.key) + ": "

                    let a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
                    let b = 'ƛƁƇƊЄƑƓӇƖʆƘԼMƝƠƤƢƦƧƬƲƔƜҲƳȤ'.split('')

                    text = text.toUpperCase()
                    let convertexText = ''
                    for (let letter of text) {
                        convertexText += b[a.indexOf(letter)] ? b[a.indexOf(letter)] : letter
                    }
                    text = convertexText

                    ctx.strokeText(text, 0, 0);
                    ctx.fillText(text, 0, 0);

                    trans = ctx.measureText(text).width
                } else {
                    ctx.strokeText(this.formatName(stat.key) + ": ", 0, 0);
                    ctx.fillText(this.formatName(stat.key) + ": ", 0, 0);
                }

                ctx.translate(trans, 0);
                ctx.fillStyle = "#ffffff"

                let text = formatAmountHighPrecision(stat.value)

                if ([
                    'lightning'
                ].includes(stat.key)) {
                    text += (this.type == "Electric Eel" || this.type == "Dark Electric Eel" || this.type == "Shiny Electric Eel") ? '/s' : '/bounce'
                } else if ([
                    'healingReduction'
                ].includes(stat.key)) {
                    text = stat.value * 100 + '%/hit'
                } else if ([
                    'regeneration',
                    'lifesteal'
                ].includes(stat.key)) {
                    text += '/s'
                } else if ([
                    'poison',
                    'flowerBodyPoison',
                    'summonBodyPoison'
                ].includes(stat.key)) {
                    text = `${formatAmountHighPrecision(stat.value[0])} (${formatAmountHighPrecision(stat.value[1])}/s, total ${Math.round((stat.value[0] / stat.value[1]) * 100) / 100}s)`
                } else if (stat.key === 'waveSpeedBoost') {
                    // Card 花瓣加速效果：显示为百分比
                    text = '+' + Math.round((stat.value - 1) * 100) + '%'
                } else if (stat.key === 'speedReduction') {
                    // Card 花瓣削减率：显示为每wave百分比
                    text = Math.round(stat.value * 100) + '%/wave'
                } else if (stat.key === 'ratedWave') {
                    // Card 花瓣额定wave：显示为wave数
                    text = 'wave ' + stat.value
                } else if ([
                    'healMultiplier',
                    'eggHpMultiplier',
                    'eggMassMultiplier',
                    'eggDamageMultiplier',
                    'dpsMultiplier',
                    'hpMultiplier'
                ].includes(stat.key)) {
                    text = 'x' + text
                    ctx.strokeText(text, 0, 0);
                    ctx.fillText(text, 0, 0);
                } else {
                    ctx.strokeText(formatAmountHighPrecision(stat.value), 0, 0);
                    ctx.fillText(formatAmountHighPrecision(stat.value), 0, 0);
                }

                if (text !== "") {
                    ctx.strokeText(text, 0, 0);
                    ctx.fillText(text, 0, 0);
                }

                ctx.translate(-trans, 17.5);
            } else {

                for (let row in stat.value) {
                    let drops = stat.value[row]

                    let t = 0;
                    let valid = 0;
                    for (let rarity in drops) {
                        let drop = drops[rarity]
                        if (drop == 0) continue
                        valid++

                        let p = new Petal({ type: row });
                        let pc = new PetalContainer([p], { x: 27.5, y: 42.5, w: 50, h: 50, toOscillate: false }, 0, 1, 0);
                        pc.render.w = 50;
                        pc.spawnAnimation = 1;
                        pc.rarity = rarity;
                        if (Stats.specialRarityDrops[this.rarity]) {
                            for (let special of Stats.specialRarityDrops[this.rarity]) {
                                if (pc.rarity == special.originalRarity && !pc.modified) {
                                    if (special.replaceRarity) pc.rarity = special.replaceRarity;
                                    pc.amount = special.amount;
                                    pc.modified = true;
                                }
                            }
                        }

                        ctx.font = `900 ${0.7 * 22.5}px Ubuntu`
                        ctx.lineWidth = 0.7 * 3.25

                        ctx.fillStyle = "white"
                        ctx.strokeStyle = "black"

                        ctx.textAlign = 'center'
                        ctx.textBaseline = 'middle'

                        if (drop < 0.01) {
                            //drop
                        } else {
                            drop = formatAmountHighPrecision(drop)
                        }

                        ctx.strokeText(drop + "%", 27.5, 85);
                        ctx.fillText(drop + "%", 27.5, 85);

                        pc.draw()
                        ctx.translate(67.5, 0)
                        t += 67.5
                    }

                    if (valid > 0) ctx.translate(-t, 85)
                }
            }
        }

        ctx = oldCtx
        return newCanvas
    }
    generateDesc(min, max) {
        ctx.font = `900 ${0.7 * 22.5}px Ubuntu`

        if (this.mode == 'petal') {
            if (this.amount > 1) {
                max += ctx.measureText(this.amount.toLocaleString()).width + 7.5
            }

            min += ctx.measureText(this.amount.toLocaleString()).width + 7.5
        }

        let texts = [],
            finalDesc = [],
            finalLength = {
                current: 0, max: 0, writing: 0
            },
            row = 0,
            unfinished = { text: "", color: "#ffffff" },
            index = 0;
        for (let text of this.description) {
            let temp = text.text.split(" ")

            for (let subtext of temp) {
                texts.push({ text: subtext, color: text.color })
            }
        }

        for (let text of texts) {
            let length = ctx.measureText(text.text + " ").width;

            if (finalLength.current + length > max - 15) {
                finalDesc[row].push({ text: unfinished.text, color: unfinished.color, written: finalLength.writing })
                row++;
                finalLength.current = 0;
                finalLength.writing = 0;
                unfinished = { text: "", color: text.color }
            }
            if (!finalDesc[row]) {
                finalDesc[row] = []
            }

            if (unfinished.color !== text.color) {
                finalDesc[row].push({ text: unfinished.text, color: unfinished.color, written: finalLength.writing });
                finalLength.writing = 0;
                unfinished = { text: "", color: text.color }
            }

            if (index !== texts.length - 1) {
                unfinished.text += text.text + " "
            } else {
                unfinished.text += text.text
                finalDesc[row].push({ text: unfinished.text, color: unfinished.color, written: finalLength.writing })
            }

            finalLength.current += length
            finalLength.writing += length
            finalLength.max = Math.max(finalLength.max, finalLength.current)
            index++
        }

        this.finalDesc = finalDesc

        // 每行描述22.5，描述后额外有22.5的空白（用于分隔bottomstats）
        return { width: Math.max(min, finalLength.max) + 15, height: finalDesc.length * 22.5 }
    }
    formatName(name) {
        if (name.length > 1) {
            name = name[0].toUpperCase() + name.slice(1);
        }

        for (let i = 0; i < name.length; i++) {
            if (name[i].toUpperCase() === name[i]) {
                if (i == 0) {
                    name = name.slice(0, i) + name[i].toUpperCase() + name.slice(i + 1);
                } else {
                    name = name.slice(0, i) + ' ' + name[i].toUpperCase() + name.slice(i + 1);
                }
                i += 2;
            }
        }

        return name;
    }
}


const statColors = {
    damage: '#ff4444',
    health: '#44ff44',
    reload: '#44ddff',
    cooldown: '#67dbad',
    tanksmithRechargeTime: '#44ddff',
    shootCooldown: '#44ddff',
    speed: '#44ddff',
    tanksmithRadius: '#e044ff',
    tanksmithHealth: '#44ff44',
    poison: '#e644ff',
    summonBodyPoison: '#ec73ff',
    flowerBodyPoison: '#b33fc5',
    attractionRadius: '#baa052',
    salt: '#ff4444',//'#a1bec4',
    bodyDamage: '#de3380',
    weatherChanceBoost: '#f5e042',
    maxDamage: '#ff4444',
    slowdown: '#777777',
    slowdownTime: '#b172cf',
    armor: '#838383',
    mass: '#696969',
    duration: '#ff44ee',
    heal: '#ff94c9',
    petHeal: '#c96d9b',
    flowerHeal: "#fc65b0",
    xp: '#f9ff44',
    detectionDistance: '#ffb144',
    extraRange: '#1585b5',
    wingExtraRange: '#1585b5',
    enemyKnockback: '#de823f',
    healAmount: '#44ff44',
    healDelay: '#44ff44',
    range: '#e00030',
    period: '#e3c59d',
    damagePercent: '#e3c59d',
    bounces: '#a7faef',
    healthNerf: '#eb7faf',
    overhealConversion: '#dae09f',
    hatchTime: '#9fd49f',
    extraDamage: '#ffbb00',
    criticalDamage: "#dd0000",
    flowerArmor: '#a3a3a3',
    maxEnemyBoost: '#33dd33',
    petLifespan: "#999999",
    lifespan: "#499999",
    reviveHealth: "#944994",
    maximumWave: "#009930",
    timeToPop: "#ffeeaa",
    shadowTime: "#333333",
    unrevivable: "#555555",
    damageConversion: "#aaaaaa",
    maximumMobs: "#9055cf",
    healingReduction: "#dddddd",
    useLimit: "#4d7896",
    wavesSentBack: "#445396",
    effect: "#b0b0b0",
    passiveDamagePerKill: "#ff3344",
    radiusChange: "#4986e3",
    passiveHealingStack: "#35de3e",
    passiveHealingStackDuration: "#659c68",
    killsRequired: "#ff1234",
    timeLimit: "#3582ab",
    failDamage: "#bf245b",
    blastRadius: "#56269e",
    armorPercent: "#7d9c7b",
    finalHitDamage: "#ff5900",
    hitBlastRadius: "#e4aa40ff",
    hitBlastDamage: "#cf601fff",
    collectDupeChance: "#af56cb",
    teleportCooldown: "#70bcd4",
    inflation: "#d4d4d4",
    shootCooldownBuff: "#ff9944",
    projectileSpeedBuff: "#ff9944",
    speedBuff: "#fafafa",
    knockbackMass: '#d4d4d4',
    bodyKnockback: '#d4d4d4',
    mana: "#ffffff",
    waveSpawningSpeed: "#a4ffa4",
    healingBoost: '#f8464d',
    healthBuff: "#35de3e",
    healthBuffBoost: "#4eb648ff",
    waveHealthBoost: "#35de3e",
    killBossUnder: "#dd4433",
    passiveHealingBuff: "#ff94c9",
    lightning: "#29f2e5",
    teleportCooldown: "#70bcd4",
    damageIncrease: "#8b3ae0",
    rotateSpeedBuff: "#9cee56",
    maxWave: "#df3a83",
    maxSkip: "#d6709d",
    waveSpeedBoost: "#c5628dff",
    ratedWave: "#62c5a8ff",
    speedReduction: "#c56262ff",
    // Artifact stats
    healMultiplier: "#99ff99",
    squadHealShare: "#ffcc66",
    eggHpMultiplier: "#ff9999",
    eggMassMultiplier: "#99ccff",
    eggDamageMultiplier: "#ff6666",
    dpsMultiplier: "#ff6666",
    hpMultiplier: "#ff9999"
}

for (let i in (Colors.rarities)) {
    statColors[Colors.rarities[i].name] = Colors.rarities[i].color;
}

const enemyRarityScalars = [{// NOTE: DO NOT CHANGE ANY OF THESE. THEY WERE SUPPOSED TO BE FINAL.
    // IF YOU DO CHANGE THEM PLEASE UPDATE THEM CLIENT SIDE SO THAT STATS ARE ACCURATE
      name: "Basic",
      health: 1,
      damage: 1,
      radius: 1,
      mass: 1,
      petalDamage: 1,
      petalHealth: 1,
      petalHeal: 1,
      petalMass: 1,
      detectionDistance: 1,
      xp: 1
    }, {
      name: "Uncommon",
      health: 2,
      damage: 1.2,
      radius: 1.1,
      mass: 1.52,
      petalDamage: 1.4,
      petalHealth: 1.2,
      petalHeal: 1.51,
      petalMass: 1.52,
      detectionDistance: 1.1,
      xp: 3
    }, {
      name: "Scarce",
      health: 4,
      damage: 1.5,
      radius: 1.3,
      mass: 2.5,
      petalDamage: 2,
      petalHealth: 1.5,
      petalHeal: 2.2,
      petalMass: 2.5,
      detectionDistance: 1.2,
      xp: 9
    }, {
      name: "Exceptional",
      health: 7.5,
      damage: 1.9,
      radius: 1.72,//1.6,
      mass: 5.6,
      petalDamage: 2.9,
      petalHealth: 1.9,
      petalHeal: 3.2,
      petalMass: 5.7,
      detectionDistance: 1.3,
      xp: 27
    }, {
      name: "Mythical",
      health: 50,
      damage: 2.7,
      radius: 3,
      mass: 18,
      petalDamage: 4.8,
      petalHealth: 2.8,
      petalHeal: 5,
      petalMass: 18,
      detectionDistance: 1.7,
      xp: 81
    }, {
      name: "Phantasmal",
      health: 110,
      damage: 4.2,
      radius: 5,
      mass: 43,
      petalDamage: 9.5,//9.1
      petalHealth: 4.2,
      petalHeal: 10,
      petalMass: 43,
      detectionDistance: 2.1,
      xp: 243
    }, {
      name: "Ultimate",
      health: 310,
      damage: 8.5,
      radius: 7,
      mass: 100,
      petalDamage: 23,//18.3
      petalHealth: 8.5,
      petalHeal: 21.5,
      petalMass: 100,
      detectionDistance: 2.5,
      xp: 729
    }, {
      name: "Paramount",
      health: 1350,
      damage: 17,
      radius: 9.5,
      mass: 216,
      petalDamage: 90,
      petalHealth: 17,
      petalHeal: 40,
      petalMass: 216,
      detectionDistance: 2.5,
      xp: 2187
    }, {
      name: "Alpha",
      health: 4800,
      damage: 35,
      radius: 13,
      mass: 500,
      petalDamage: 320,
      petalHealth: 35,
      petalHeal: 74,
      petalMass: 500,
      detectionDistance: 2.5,
      xp: 6561
    }, {
      name: "Doomed",
      health: 18000,
      damage: 70,
      radius: 18,
      mass: 1200,
      petalDamage: 1100,
      petalHealth: 70,
      petalHeal: 140,
      petalMass: 1200,
      detectionDistance: 2.5,
      xp: 40000
    }, {
      name: "Sacred",
      health: 65000,
      damage: 138,
      radius: 24,
      mass: 3200,
      petalDamage: 3850,
      petalHealth: 138,
      petalHeal: 268,
      petalMass: 3200,
      detectionDistance: 2.5,
      xp: 300000
    }, {
      name: "Imperial",
      health: 250000,
      damage: 275,
      radius: 33,
      mass: 9500,
      petalDamage: 13500,
      petalHealth: 275,
      petalHeal: 500,
      petalMass: 9500,
      detectionDistance: 2.5,
      xp: 3e6
    }, {
      name: "Absolute",
      health: 980000,
      damage: 550,
      radius: 45,
      mass: 33000,
      petalDamage: 47500,
      petalHealth: 550,
      petalHeal: 950,
      petalMass: 33000,
      detectionDistance: 2.5,
      xp: 3e7
    }, {
      name: "Stellar",
      health: 5000000,
      damage: 1150,
      radius: 62,
      mass: 194400,
      petalDamage: 270000,
      petalHealth: 1650,
      petalHeal: 2889,
      petalMass: 194400,
      detectionDistance: 2.5,
      xp: 5e8
    }, {
      name: "Empyrean",
      health: 9800000,
      damage: 1650,
      radius: 71,
      mass: 388800,
      petalDamage: 2500000,
      petalHealth: 9800,
      petalHeal: 9600,
      petalMass: 2300000,
      detectionDistance: 2.5,
      xp: 1e10
    }, {
      name: "Seraphic",
      health: 20000000,
      damage: 2500,
      radius: 81,
      mass: 777600,
      petalDamage: 27000000,
      petalHealth: 60000,
      petalHeal: 58000,
      petalMass: 27600000,
      detectionDistance: 2.5,
      xp: 3e11
    }, {
      name: "Ascended",
      health: 60000000,
      damage: 4950,
      radius: 103,
      mass: 2300000,
      petalDamage: 209450000,
      petalHealth: 207300,
      petalHeal: 210000,
      petalMass: 384000000,
      detectionDistance: 3.25,
      xp: 9e12
    }, {
      name: "Ethereal",
      health: 120000000,
      damage: 7500,
      radius: 118,
      mass: 4600000,
      petalDamage: 900000000,
      petalHealth: 4500000,
      petalHeal: 200000,
      petalMass: 4608000000,
      detectionDistance: 3.25,
      xp: 27e13
    }, {
      name: "Cosmic",
      health: 360000000,
      damage: 15000,
      radius: 135,
      mass: 13800000,
      petalDamage: 7232178928,
      petalHealth: 1689600,
      petalHeal: 516560.652,
      petalMass: 55296000000,
      detectionDistance: 3.25,
      xp: 81e14
    },
    		{
			name: "Timeless",
      health: 700000000,
      damage: 20000,
      radius: 154,
      mass: 27600000,
      petalDamage: 17113926136,
      petalHealth: 70400,
      petalHeal: 86030,
      petalMass: 4800000,
      detectionDistance: 3.25,
      xp: 243e15
    },
		{
			name: "Godlike",
      health: 1400000000,
      damage: 30000,
      radius: 175,
      mass: 55200000,
      petalDamage: 535815000,
      petalHealth: 140800,
      petalHeal: 160000,
      petalMass: 9600000,
      detectionDistance: 3.25,
      xp: 7e18
    },
		{
			name: "Abyssal",
      health: 4.48e9,
      damage: 60000,
      radius: 200,
      mass: 1.6e8,
      petalDamage: 1.87e9,
      petalHealth: 281600,
      petalHeal: 320000,
      petalMass: 19200000,
      detectionDistance: 3.3,
      xp: 2e20
    },
		{
			name: "Noble",
      health: 8.5e9,
      damage: 90000 ,
      radius: 228,
      mass: 3.2e8,
      petalDamage: 3.6e9,
      petalHealth: 563200,
      petalHeal: 640000,
      petalMass: 384000000,
      detectionDistance: 3.35,
      xp: 6e21
    },
		{
			name: "Entropic",
      health: 1.72e10,
      damage: 130000,
      radius: 258,
      mass: 6.4e8,
      petalDamage: 7.2e9,
      petalHealth: 1126400,
      petalHeal: 1280000,
      petalMass: 76800000,
      detectionDistance: 3.4,
      xp: 18e22
    },
		{
			name: "Apocalyptic",
      health: 4.5e10,
      damage: 265000,
      radius: 295,
      mass: 2e9,
      petalDamage: 14.4e9,
      petalHealth: 2252800,
      petalHeal: 2560000,
      petalMass: 153600000,
      detectionDistance: 3.45,
      xp: 6e24
    },
		{
			name: "Hollow",
      health: 11e10,
      damage: 530000,
      radius: 335,
      mass: 6e9,
      petalDamage: 28.8e9,
      petalHealth: 4505600,
      petalHeal: 5120000,
      petalMass: 460000000,
      detectionDistance: 3.5,
      xp: 1.8e26
    },
		{
			name: "Overshadowed",
      health: 2.1e11,
      damage: 1000000,
      radius: 380,
      mass: 12e9,
      petalDamage: 28.8e9,
      petalHealth: 4505600,
      petalHeal: 5120000,
      petalMass: 460000000,
      detectionDistance: 3.5,
      xp: 5.4e27
    },
		{
			name: "Luminous",
      health: 4.5e11,
      damage: 1600000,
      radius: 431,
      mass: 24e9,
      petalDamage: 28.8e9,
      petalHealth: 4505600,
      petalHeal: 5120000,
      petalMass: 460000000,
      detectionDistance: 3.5,
      xp: 1.62e29
    },
		{
			name: "Banished",
      health: 1.12e12,
      damage: 3200000,
      radius: 489,
      mass: 72e9,
      petalDamage: 28.8e9,
      petalHealth: 4505600,
      petalHeal: 5120000,
      petalMass: 460000000,
      detectionDistance: 3.5,
      xp: 4.86e30
    },
		{
			name: "Iridescent",
      health: 3.0e12,
      damage: 6500000,
      radius: 555,
      mass: 144e9,
      petalDamage: 28.8e9,
      petalHealth: 4505600,
      petalHeal: 5120000,
      petalMass: 460000000,
      detectionDistance: 3.5,
      xp: 14.58e31
    },
		{
			name: "Spectral",
      health: 6.0e12,
      damage: 9600000,
      radius: 630,
      mass: 288e9,
      petalDamage: 28.8e9,
      petalHealth: 4505600,
      petalHeal: 5120000,
      petalMass: 460000000,
      detectionDistance: 3.5,
      xp: 43.76e32
    },
		{
			name: "Mystical",
      health: 14.2e12,
      damage: 19000000,
      radius: 715,
      mass: 864e9,
      petalDamage: 28.8e9,
      petalHealth: 4505600,
      petalHeal: 5120000,
      petalMass: 460000000,
      detectionDistance: 3.5,
      xp: 130e33
    },
		{
			name: "Arcane",
      health: 34e12,
      damage: 38500000,
      radius: 811,
      mass: 1788e9,
      petalDamage: 28.8e9,
      petalHealth: 4505600,
      petalHeal: 5120000,
      petalMass: 460000000,
      detectionDistance: 3.5,
      xp: 390e34
    },
    {
			name: "Occult",
      health: 68e12,
      damage: 58000000,
      radius: 921,
      mass: 3576e9,
      petalDamage: 28.8e9,
      petalHealth: 4505600,
      petalHeal: 5120000,
      petalMass: 460000000,
      detectionDistance: 3.5,
      xp: 1.17e38
    },
		{
			name: "Origin",
      health: 156e12,
      damage: 118000000,
      radius: 1046,
      mass: 10728e9,
      petalDamage: 1e15,
      petalHealth: 1e12,
      petalHeal: 1e12,
      petalMass: 1e15,
      detectionDistance: 3.5,
      xp: 3.51e39
    },
  ]


