import {map} from './map.js';
import {ctx} from './share.js';
import {Entity} from './entity.js';

let angle1, angle2; // variables pour les angles qui forment la bouche de pacman en fonction de sa direction
let angleState;
let animationState;
let timeStart;


export class PacMan extends Entity{
    
    
    pointsLeft;
    resetScared = false;
    win = false;
    death = false;
    lastInput = 1;
    condition = 0;
    

    constructor(X, Y, score, life, pointsLeft = 244) {
        super(X, Y)
        this.score = score;
        this.life = life;
	    this.pointsLeft = pointsLeft;
        angleState = 0;
        animationState = 0;
	
        this.draw();
    }
    
    isWon(){
        this.pointsLeft-=1;
        if(this.pointsLeft === 0){
            this.win = true;
        }
    }
    isPoint() {
        if(this.resetScared){
            this.condition = 1;
            this.resetScared = false;
        }
        if (map[this.caseY][this.caseX] == 2) {
            map[this.caseY][this.caseX] = 1;
            this.score += 10;
            this.isWon();
        }
		else if (map[this.caseY][this.caseX] == 3) {
            map[this.caseY][this.caseX] = 1;
            this.score += 100;
            if(this.condition == 0){
                this.condition = 1;
            }
            else{
                this.condition = 0;
                this.resetScared = true;
            }
            timeStart = performance.now();
            this.isWon();
        }
    }
    move() {
        this.isPoint();
        this.chooseDirection();
        

        switch (this.direction) {
            case 0:
                if (map[this.caseY - 1][this.caseX] != 0 || !(Math.floor(this.Y)%16 >= 8 && Math.floor(this.Y)%16 < 8 + this.baseSpeed)) {
                    this.Y -= this.speed;
                }
				break;
                case 1:
                    if (map[this.caseY][this.caseX + 1] != 0 || !(Math.floor(this.X)%16 >= 8 && Math.floor(this.X)%16 < 8 + this.baseSpeed)) {
                        this.X += this.speed;
                        if (this.X > 27 * 16 + 8) {
                            this.X = 0;
                        }
                    }
				break;
                    case 2:
                        if (map[this.caseY + 1][this.caseX] != 0 || !(Math.floor(this.Y)%16 >= 8 && Math.floor(this.Y)%16 < 8 + this.baseSpeed)) {
                            this.Y += this.speed;
                        }
				break;
                        case 3:
                            if (map[this.caseY][this.caseX - 1] != 0 || !(Math.floor(this.X)%16 >= 8 && Math.floor(this.X)%16 < 8 + this.baseSpeed)) {
                                this.X -= this.speed;
                                if (this.X < 0) {
                                    this.X = 27 * 16 + 8;
                                }
                            }
				break;
        }

        if (this.condition==1){
            if ((performance.now()-timeStart)>10000){
                this.condition=0;
            }
        }
        
        ctx.fillStyle = "yellow";
        this.draw();
        //this.drawCase();
    }
    draw() {
        
        ctx.beginPath();
        
        switch (this.direction) {
            case 1:
                angle1 = (0.2 - angleState)*Math.PI;
                angle2 = (1.8 + angleState)*Math.PI;
                break;
            case 2:
                angle1 = (0.7 - angleState)*Math.PI;
                angle2 = (0.3 + angleState)*Math.PI;
                break;
            case 3:
                angle1 = (1.2 - angleState)*Math.PI;
                angle2 = (0.8 + angleState)*Math.PI;
                break;
            default:
                angle1 = (1.7 - angleState)*Math.PI;
                angle2 = (1.3 + angleState)*Math.PI;
                break;
        }
        
        if(animationState){
            if(angleState >= 0.18){
                animationState = 0;
            }
            else{
                angleState += 0.01;
            }
        }
        else{
            if(angleState <= 0.02){
                animationState = 1;
            }
            else{
                angleState -= 0.02;
            }
        }
        ctx.arc(this.X, this.Y, 16, angle1, angle2);
        ctx.lineTo(this.X, this.Y);
        ctx.fill();	

    }
    
    chooseDirection(){
        if(this.direction !== this.lastInput){
            switch(this.lastInput){
                case 0:
                    if (map[this.caseY - 1][this.caseX] && (Math.floor(this.X)%16 >= 8 && Math.floor(this.X)%16 < 8 + this.baseSpeed)) {
                        this.direction = 0;
                    }
                    break;
                case 1:
                    if (map[this.caseY][this.caseX + 1] && (Math.floor(this.Y)%16 >= 8 && Math.floor(this.Y)%16 < 8 + this.baseSpeed)) {
                        this.direction = 1;
                    }
                    break;
                case 2:
                    if (map[this.caseY + 1][this.caseX] && (Math.floor(this.X)%16 >= 8 && Math.floor(this.X)%16 < 8 + this.baseSpeed)) {
                        this.direction = 2;
                    }
                    break;
                case 3:
                    if (map[this.caseY][this.caseX - 1] && (Math.floor(this.Y)%16 >= 8 && Math.floor(this.Y)%16 < 8 + this.baseSpeed)) {
                        this.direction = 3;
                    }
                    break;
            }
        }
    }
    
    deathAnimation(){
        this.death = true;
        ctx.fillStyle = "yellow";
        ctx.clearRect(0, 0, 448, 496);
        ctx.beginPath();
        angleState+= 0.02;
        ctx.arc(this.X, this.Y, 16, (1.5+angleState)*Math.PI, (1.5-angleState)*Math.PI);
        ctx.lineTo(this.X, this.Y);
        ctx.fill();

        if(angleState > 1){
            this.death = false;
        }
    }
}
