class CharacterSelector {
    constructor(){
        // level must be 200+ to unlock this
        this.characters = [
            {
                name: 'flower',
                // no img, we render this ourselves
            },
            {
                name: 'Tanksmith',
                emoji: '🛡️' // 使用 emoji 代替图片
            }
        ]
        this.enabled = true;
        this.animation = 0;
        this.allImgsLoaded = true; // 不再需要等待图片加载

        this.yMin = -100;
        this.yMax = 55;

        this.flower = new Flower(0);

        this.selectedIndex = localStorage.getItem('selectedCharacter') ?? 0;
        if(this.selectedIndex !== 0) this.send();
        this.renderSelectedIndex = this.selectedIndex;

        this.lastSentSI = -1;
    }
    draw(){
        if(this.allImgsLoaded === false){
            return;
        }

        if(this.enabled === true){
            this.animation = interpolate(this.animation, 1, 0.06 * dt / 16.66);
        } else {
            this.animation = interpolate(this.animation, 0, 0.06 * dt / 16.66);
            if(this.animation < 0.01) return;
        }

        const iconOffset = 64;

        const iconStart = canvas.w / 2 - iconOffset * (this.characters.length-1) / 2;
        const iconEnd = canvas.w / 2 + iconOffset * (this.characters.length-1) / 2;

        const size = 60;
        const selectedSize = 60;

        const y = interpolate(this.yMin, this.yMax, this.animation);
        ctx.translate(0, y);

        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.font = '900 18px Ubuntu';
        ctx.textBaseline = 'top';
        ctx.textAlign = 'center';
        ctx.lineWidth = 3;
        ctx.strokeText("Select Character:", canvas.w / 2, 6 - this.yMax);
        ctx.fillText("Select Character:", canvas.w / 2, 6 - this.yMax);

        this.renderSelectedIndex = interpolate(this.renderSelectedIndex, this.selectedIndex, 0.1);
        const x = interpolate(iconStart, iconEnd, this.renderSelectedIndex / (this.characters.length-1));
        ctx.fillStyle = 'black';
        ctx.globalAlpha = 0.08 + Math.sin(time / 800) * 0.02;
        ctx.beginPath();
        ctx.roundRect(x-selectedSize/2, -selectedSize/2, selectedSize, selectedSize, 8);
        ctx.fill();
        ctx.closePath();
        ctx.globalAlpha = 1;

        for(let i = 0; i < this.characters.length; i++){
            const x = interpolate(iconStart, iconEnd, i / (this.characters.length-1));

            this.characters[i].x = x;
            this.characters[i].y = y;

            const mx = mouse.x * canvas.w / window.innerWidth
            const my = mouse.y * canvas.h / window.innerHeight;

            if(i === 0){
                this.flower.render.x = x;
                this.flower.render.y = y;
                this.flower.render.angle = interpolateDirection(this.flower.render.angle, Math.atan2(my - y, mx - x), 0.12);
                this.flower.drawFlower(x, 0, 24.5);
                continue;
            }

            // 使用 emoji 代替图片
            ctx.font = '900 40px Ubuntu';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = '#ffffff';
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.strokeText(this.characters[i].emoji, x, 0);
            ctx.fillText(this.characters[i].emoji, x, 0);
        }

        ctx.translate(0, -y);
    }
    onmousedown(mouseX, mouseY) {
        for(let i = 0; i < this.characters.length; i++){
            const dist = Math.sqrt((mouseX - this.characters[i].x) ** 2 + (mouseY - this.characters[i].y) ** 2);
            if(dist < (this.characters[i].radius ?? 25)){
                this.selectedIndex = i;
                this.send();
            }
        }
        // set localstorage, check bound
    }
    send(force=false){
        if(force === false && this.lastSentSI === this.selectedIndex) return;
        send({character: this.characters[this.selectedIndex].name});
        localStorage.setItem('selectedCharacter', this.selectedIndex);
        this.lastSentSI = this.selectedIndex;
        isTs = (this.selectedIndex == "1")
    }
}