import {ctx} from './share.js';

export class Entity{
    direction = 1;
    baseSpeed = 2;
    
    constructor(X, Y) {
        this.X = X;
        this.Y = Y;
        this.speed = this.baseSpeed;
    }
    
    get caseX() {
        return this.calcCase(this.X);
    }
    get caseY() {
        return this.calcCase(this.Y);
    }
    calcCase(coord) {
        return Math.floor(coord / 16);
    }
    drawCase() {
        ctx.fillRect(this.caseX * 16, this.caseY * 16, 16, 16);
    }
}