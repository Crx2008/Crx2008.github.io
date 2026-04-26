class StreakMenu {
    constructor(){
        const dimensions = {
            x: canvas.w + 20,
            visibleX: canvas.w - 240 - 16,
            y: 20,
            w: 240,
            h: 23 + 30 + 45 + 44 + 16 + 47
        }

        this.referenceW = canvas.w;

        this.originalX = this.x = dimensions.x;
        this.visibleX = dimensions.visibleX;
        this.y = dimensions.y;
        this.w = dimensions.w; 
        this.h = dimensions.h;
        this.dimensions = dimensions;

        this.visibleAnimationTimer = 0;
        this.visible = false;

        this.claimPetalContainer = null;

        this.claimButton = {
            x: this.w / 2 - 58/2,// x is relative to dimensions
            y: this.y + 23 + 30 + 45 + 44 + 16,
            w: 58,
            h: 50 * 11/16
        }
        this.claimButtonHovered = false;

        this.streak = 0;
        this.xpToClaim = 0;

        this.showType = "claim";

        this.timer = 0;
    }
    init(data){
        if (data.streakLost){
            this.showType = "lost";
            this.timer = 10000;
            this.h = this.dimensions.h/2.5;
            this.show();
        }
        else if (data.streakTime){
            this.streak = data.streak;
            this.streakTime = data.streakTime;
            this.showType = "timer";
            this.timer = 10000;
            this.h = this.dimensions.h/2.5;
            this.show();
        }
        else{
            this.streak = data.streak;

            const petals = [];
            for(let i = 0; i < data.pc.petalAmount; i++){
                petals.push(new Petal(data.pc.petal));
            }
            this.h = this.dimensions.h;
            this.pc = new PetalContainer(petals, {...data.pc}, -1, 1, 0);
            this.pc.angleOffset = 0;
            this.pc.toSkipCulling = true;
            this.xpToClaim = Math.floor(data.xp);
            this.showType = "claim";
            this.show();
        }
    }
    show(){
        this.visible = true;
    }
    hide(){
        this.visible = false;
    }
    resize(){
        const dimensions = {
            x: canvas.w + 20,
            visibleX: canvas.w - 240 - 20,
            // y: 20,
            // w: 240,
            // h: 260
        }

        this.referenceW = canvas.w;

        this.originalX = dimensions.x;
        this.visibleX = dimensions.visibleX;
    }
    draw(){
        if(this.visible === true){
            this.visibleAnimationTimer = interpolate(this.visibleAnimationTimer, 1, 0.1);
            this.x = interpolate(this.originalX, this.visibleX, this.visibleAnimationTimer);
        } else {
            this.visibleAnimationTimer = interpolate(this.visibleAnimationTimer, 0, 0.1);
            this.x = interpolate(this.originalX, this.visibleX, this.visibleAnimationTimer);
        }

        if(canvas.w !== this.referenceW) this.resize();

        if(this.visibleAnimationTimer < 0.01) return;

        

        ctx.fillStyle = '#895adb';
        ctx.strokeStyle = '#6f49b1';
        ctx.lineWidth = 6;

        ctx.beginPath();
        ctx.roundRect(this.x, this.y, this.w, this.h, 3);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        const lastLetterSpacing = ctx.letterSpacing;

        if (this.showType == "claim"){
            this.drawLightCones();
        }

        if (this.showType != "lost"){
            ctx.font = '900 22px Ubuntu';
            ctx.letterSpacing = "-.05px";
            ctx.textBaseline = 'middle';
            ctx.textAlign = 'center';
            ctx.fillStyle = 'white';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 3;
            if (this.streak == 0){
                ctx.strokeText(`No streak`, this.x + this.w / 2, this.y + 23);
                ctx.fillText(`No streak`, this.x + this.w / 2, this.y + 23);
            }
            else if (this.streak == 1){
                ctx.strokeText(`Streak: ${this.streak} Day!`, this.x + this.w / 2, this.y + 23);
                ctx.fillText(`Streak: ${this.streak} Day!`, this.x + this.w / 2, this.y + 23);
            }
            else{
                if(this.streak % 10 === 0){
                    ctx.fillStyle = `hsl(${(time/10) % 360}, 60%, 60%)`;
                }
                ctx.strokeText(`Streak: ${this.streak} Days!`, this.x + this.w / 2, this.y + 23);
                ctx.fillText(`Streak: ${this.streak} Days!`, this.x + this.w / 2, this.y + 23);
                ctx.fillStyle = 'white';
            }
        }
        else{
            //Show type lost (STREAK LOST)
            ctx.font = '900 22px Ubuntu';
            ctx.letterSpacing = "-.05px";
            ctx.textBaseline = 'middle';
            ctx.textAlign = 'top';
            ctx.fillStyle = 'white';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 3;

            ctx.strokeText(`Streak Lost!`, this.x + this.w / 2, this.y + this.h / 2);
            ctx.fillText(`Streak Lost!`, this.x + this.w / 2, this.y + this.h / 2);

            this.timer -= dt;
            if (this.timer < 0){
                this.hide();
            }
        }

        if (this.showType == "timer"){
            ctx.font = '900 24px Ubuntu';
            
            let date = new Date(0);
            let dayInMS = 24* 60 * 60 * 1000 //24 * 60 * 60 * 1000;
            if ((dayInMS - (Date.now() - this.streakTime))/1000 > 0){
            date.setSeconds((dayInMS - (Date.now() - this.streakTime))/1000); // specify value for SECONDS here
            let timeString = date.toISOString().substring(11, 19);

            ctx.strokeText(timeString, this.x + this.w / 2, this.y + this.h - 23);
            ctx.fillText(timeString, this.x + this.w / 2, this.y + this.h - 23);
            }
            else{
                ctx.strokeText("Reload to claim!", this.x + this.w / 2, this.y + this.h - 23);
                ctx.fillText("Reload to claim!", this.x + this.w / 2, this.y + this.h - 23);
            }

            this.timer -= dt;
            if (this.timer < 0){
                this.hide();
            }
        }

        if (this.showType == "claim"){
            ctx.font = '900 18px Ubuntu';

            ctx.strokeText(`Reward:`, this.x + this.w / 2, this.y + 23 + 28);
            ctx.fillText(`Reward:`, this.x + this.w / 2, this.y + 23 + 28);

            this.pc.render.x = this.pc.x = this.x + this.w / 2;
            this.pc.render.y = this.pc.y = this.y + 23 + 30 + 20 + 25;

            this.pc.draw();

            ctx.fillStyle = "#00ff00"

            ctx.font = '900 14px Ubuntu';
            // ctx.lineWidth = 1.5;

            ctx.strokeText(`+${formatAmount(this.xpToClaim)} xp`, this.x + this.w / 2, this.y + 23 + 30 + 45 + 44);
            ctx.fillText(`+${formatAmount(this.xpToClaim)} xp`, this.x + this.w / 2, this.y + 23 + 30 + 45 + 44);

            if(mouseInBox({x: mouse.canvasX, y: mouse.canvasY}, {x: this.x + this.claimButton.x, y: this.claimButton.y, w: this.claimButton.w, h: this.claimButton.h})){
                this.claimButtonHovered = true;
                setCursor('pointer')
            } else {
                this.claimButtonHovered = false;
            }

            ctx.fillStyle = '#55bb55';
            ctx.strokeStyle = '#459745';

            if(this.claimButtonHovered === true){
                ctx.fillStyle = blendColor(ctx.fillStyle, '#FFFFFF', 0.1);
                ctx.strokeStyle = blendColor(ctx.strokeStyle, '#FFFFFF', 0.1);
            }
            ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.roundRect(this.x + this.claimButton.x, this.claimButton.y, this.claimButton.w, this.claimButton.h, 2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

            ctx.font = '900 14px Ubuntu';
            ctx.fillStyle = 'white';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 2.15;

            ctx.strokeText('Claim', this.x + this.claimButton.x + this.claimButton.w / 2, this.claimButton.y + this.claimButton.h / 2);
            ctx.fillText('Claim', this.x + this.claimButton.x + this.claimButton.w / 2, this.claimButton.y + this.claimButton.h / 2);

            ctx.fillStyle = '#895adb';
            ctx.strokeStyle = '#6f49b1';
            ctx.lineWidth = 6;

            ctx.beginPath();
            ctx.roundRect(this.x, this.y, this.w, this.h, 3);
            // ctx.fill();
            ctx.stroke();
            ctx.closePath();


        }
        
        ctx.letterSpacing = lastLetterSpacing;

        // petalContainer and green +xp amount

        // oh also it would be cool if we had a little glow effect that rotates and has like cones of light
    }
    mouseDown(){
        if (this.showType == "claim"){
            if(this.claimButtonHovered === false) return;

            send({collectStreak: true});
            this.hide();
            // 奖励由后端响应 collectStreakSuccess 后添加
        }
    }
    drawLightCones(){
        // clipping path
        ctx.save();

        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.clip();
        ctx.closePath();


        const x = this.x + this.w / 2;
        const y = this.y + 23 + 30 + 20 + 25;

        const amount = 4 * 6;
        const size = 300;//82;

        const lightGradient = ctx.createRadialGradient(x, y, 0, x, y, size);

        lightGradient.addColorStop(0, `rgba(255, 255, 255, 0.3)`);
        lightGradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

        ctx.fillStyle = lightGradient;

        const startAngle = (Date.now() / 1000 * .26) % (Math.PI * 2);

        for(let a = startAngle; a < Math.PI * 2 + startAngle - 0.01; a += Math.PI * 2 / amount * 2){
            const nextAngle = a + Math.PI * 2 / amount;
            ctx.beginPath();
            ctx.moveTo(x,y);
            ctx.lineTo(x + Math.cos(a) * size * 2, y + Math.sin(a) * size * 2);
            ctx.lineTo(x + Math.cos(nextAngle) * size * 2, y + Math.sin(nextAngle) * size * 2);
            ctx.lineTo(x,y);
            ctx.fill();
            ctx.closePath();
        }

        ctx.restore();
    }
}

const streakMenu = new StreakMenu();