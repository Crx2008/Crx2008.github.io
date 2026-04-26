const noEnemyBox = [];

class enemyBox {
	constructor(enemy, rarity, type, x, y, w, h, isBoss) {
		this.enemy = new Enemy({...enemy, radius: 182});
		this.enemy.toRenderUi = false;
		this.enemy.isInEnemyBox = true;
		this.enemy.render.radius = 0;
		this.enemy.angle = -Math.PI/4;
		this.x = x;
		this.y = y;
		this.w = 0;
		this.h = 0;
		this.type = type;
		this.rarity = Number(rarity);
		this.targetW = w;
		this.targetH = h;
		this.targetX = x;
		this.targetY = y;
		this.amount = 1;
		this.deleteTimer = 0;
		this.delete = false;
		this.isBoss = isBoss;
		/*
			type, rarity
			new enemy -> loop through all previous. 
				type does not exist: move all other boxes to the left, add new one
				type exists, rarity does not: move the type boxes accordingly. 
				type exists, rarity exists: just add 1
			enemy dead -> loop through all boxes
				type still exists, rarity still exists: just remove 1
				type still exists, rarity doesn't exist: remove the box, move the type boxes accordingly
				type does not exist: move all other boxes accordingly, remove it
		*/
	}
	update() {
		if (this.toDelete) {
			this.deleteTimer -= dt;
			if (this.deleteTimer < 0) {
				this.delete = true;
			}
		} else {
			this.deleteTimer = 200;
		}
		if (dt < 100) {
			this.x += (this.targetX - this.x) * dt / 100;
			this.y += (this.targetY - this.y) * dt / 100;
			this.w += (this.targetW - this.w) * dt / 100;
			this.h += (this.targetH - this.h) * dt / 100;

		} else {
			this.x = this.targetX;
			this.y = this.targetY;
			this.w = this.targetW;
			this.h = this.targetH;
		}
	}
}
function createEnemyBox(i, room) {
	// 跳过召唤物（有 ownerId 的是玩家召唤的）
	if (i.ownerId !== undefined) return;

	let foundType = false;
	let foundRarity = false;
	if (i.isBoss) i.rarity += 125
	for (let enemyBox of room.enemyBoxes) {
		if (enemyBox.delete) continue;
		if (enemyBox.type == i.type) {
			foundType = true;
			if (enemyBox.rarity == i.rarity) {
				foundRarity = true;
				enemyBox.amount++;
				enemyBox.lastAmountChangedTime = time;
				if (enemyBox.toDelete == true) {
					enemyBox.toDelete = false;
					enemyBox.delete = false;
					enemyBox.targetW = enemyBoxSize;
					enemyBox.targetH = enemyBoxSize;
				}
				break;
			}
		}
	}
	if (foundType == false) {
		let differentTypes = [];
		for (let j = 0; j < room.enemyBoxes.length; j++) {
			let enemyBox = room.enemyBoxes[j];
			if (!differentTypes.includes(enemyBox.type)) {
				differentTypes.push(enemyBox.type)
			}
			enemyBox.targetX -= enemyBoxBoundSize / 2;
		}

		room.enemyBoxes.push(new enemyBox(i, Number(i.rarity), i.customType ?? i.type, enemyBoxBaseX + differentTypes.length * enemyBoxBoundSize/2, enemyBoxBaseY, enemyBoxSize, enemyBoxSize, i.isBoss));
	} else if (foundRarity == false) {
		let spawnY = enemyBoxBaseY;
		let spawnX = 0;
		for (let j = 0; j < room.enemyBoxes.length; j++) {
			let enemyBox = room.enemyBoxes[j];
			if (enemyBox.type == i.type) {
				spawnX = enemyBox.targetX;
				if (Number(enemyBox.rarity) < Number(i.rarity)) {
					//New box has higher rarity than some before;
					spawnY += enemyBoxOverlapSize;
				} else {
					//New box has lower rarity than some before
					enemyBox.targetY += enemyBoxOverlapSize;
				}
			}
		}
		room.enemyBoxes.push(new enemyBox(i, Number(i.rarity), i.customType ?? i.type, spawnX, spawnY, enemyBoxSize, enemyBoxSize, i.isBoss));
		room.enemyBoxes.sort(function(a, b) {
			return Number(a.rarity) - Number(b.rarity)
		});
	}

	alignEnemyBoxes();
}

function alignEnemyBoxes(excluded=null){
	let differentTypesOrder = [];
	let differentTypes = {};
	for (let j = 0; j < room.enemyBoxes.length; j++) {
		let enemyBox = room.enemyBoxes[j];
		if(enemyBox === excluded) continue;
		if (differentTypes[enemyBox.type] === undefined) {
			differentTypes[enemyBox.type] = [enemyBox];
			differentTypesOrder.push(enemyBox.type);
		} else {
			differentTypes[enemyBox.type].push(enemyBox);
		}
	}

	// room.enemyBoxes.push(new enemyBox(i, i.rarity, i.customType ?? i.type, enemyBoxBaseX + differentTypes.length * enemyBoxBoundSize/2, enemyBoxBaseY, enemyBoxSize, enemyBoxSize, i.isBoss));

	let currentX = enemyBoxBaseX - enemyBoxBoundSize * (Object.keys(differentTypes).length - 1) / 2;

	for(let i = 0; i < differentTypesOrder.length; i++){
		const key = differentTypesOrder[i];
		for(let i = 0; i < differentTypes[key].length; i++){
			const enemyBox = differentTypes[key][i];
			if(enemyBox === excluded) continue;

			enemyBox.targetX = currentX;
		}
		currentX += enemyBoxBoundSize;
	}
}