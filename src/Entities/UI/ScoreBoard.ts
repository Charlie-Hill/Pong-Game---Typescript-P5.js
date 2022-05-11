import { IEntity } from "../../Interface/interfaces";

export default class ScoreBoard implements IEntity {

    public x: number = 0;
    public y: number = 0;
    public width: number;
    public height: number;

    public title: string;
    public score: number;

    constructor()
    {
        this.width = 100;
        this.height = 100;

        this.title = "Player";
        this.score = 0;
    }

    SetScore(score: number) {
        this.score = score;
    }

    display(p5: import("p5"), x: number, y: number): void {

    }
}