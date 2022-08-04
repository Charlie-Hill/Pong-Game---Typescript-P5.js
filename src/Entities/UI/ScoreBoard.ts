import { IEntity } from "../../Interface/interfaces";
import Score from "../../Logic/Score";

export default class ScoreBoard implements IEntity {

    public x: number = 0;
    public y: number = 0;
    public width: number;
    public height: number;

    public title: string;
    public score: Score;

    constructor()
    {
        this.width = 100;
        this.height = 100;

        this.title = "Player";
        this.score = new Score();
    }

    SetScore(score: number) {
    }

    display(p5: import("p5"), x: number, y: number): void {
        
    }
}