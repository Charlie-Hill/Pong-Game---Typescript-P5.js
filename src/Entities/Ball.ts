import p5 from "p5";
import GameWindow from "../GameWindow";
import { ICircle } from "../Interface/interfaces";

export default class Ball implements ICircle {
    public x: number;
    public y: number;

    public radius = 15;

    public speed = -3.5;
    public velocityX = this.speed;
    public velocityY = this.speed;

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
    }

}