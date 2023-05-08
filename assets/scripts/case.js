export class Case {

    constructor(x, y, target = null, diffWithSource = 0, previousCase = null) {
        this.x = x;
        this.y = y;
        this.target = target;
        this.diffWithSource = diffWithSource;
        this.previousCase = previousCase;

        if (target !== null) {
            this.diffWithTarget = Math.abs(this.x - target.x) + Math.abs(this.y - target.y);
        }
    }
}