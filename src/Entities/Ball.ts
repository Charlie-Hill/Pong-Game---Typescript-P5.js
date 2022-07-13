import p5 from "p5";
import { ICircle } from "../Interface/interfaces";

export default class Ball implements ICircle {
    public x: number;
    public y: number;

    public radius = 15;

    public speed = -3.5;
    public velocityX = this.speed;
    public velocityY = this.speed;

    public width = 0;
    public height  = 0;

    constructor() {
        this.x = 270;
        this.y = 300;
    }

    private ballMovement() {
        this.x += this.velocityX;
        this.y += this.velocityY;
    }

    display(p5: any) {
        this.ballMovement();
        p5.fill(232, 59, 46);
        p5.circle(this.x, this.y, this.radius*2);

        
        if (p5.debuggingEnabled) {
            p5.fill(0, 255, 0);
            p5.line(0, this.y, p5.width, this.y);

            p5.fill(150, 150, 150);
            p5.line(this.x, this.y, this.velocityX, this.velocityY)
        }
    }

}