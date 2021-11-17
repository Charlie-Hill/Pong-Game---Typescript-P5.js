import p5 from "p5";
import GameWindow from "../GameWindow";
import IEntity from "../Interface/IEntity";

export default class Ball implements IEntity {
    private _x: number;
    private _y: number;

    private radius = 15;

    private speed = -5;
    private velocityX = this.speed;
    private velocityY = this.speed;

    constructor() {
        this._x = 270;
        this._y = 300;
    }

    public get x() {
        return this._x;
    }

    public get y() {
        return this._y;
    }

    private ballMovement() {
        this._x += this.velocityX;
        this._y += this.velocityY;
    }

    detectCollision() {

    }
    
    display(p5: any) {
        this.ballMovement();
        p5.fill(232, 59, 46);
        p5.circle(this.x, this.y, this.radius*2);
    }

}