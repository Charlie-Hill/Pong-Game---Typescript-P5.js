import p5 from "p5";
import IEntity from "../Interface/IEntity";

export default class Paddle implements IEntity {
    private _x: number;
    private _y: number;
    
    public isAIControlled: boolean;

    constructor(isAIControlled: boolean = false) {
        this._x = isAIControlled ? 740 : 40;
        this._y = 60;
        this.isAIControlled = isAIControlled;
    }

    public get x() {
        return this._x;
    }

    public get y() {
        return this._y;
    }
    
    display(p5: any, customY?: number): void {
        p5.fill(255)
        p5.rect(this._x, customY ? customY-35 : this._y, 25, 100);
    }

}