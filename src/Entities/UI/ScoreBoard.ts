import p5 from "p5";
import { IEntity, IPlayer } from "../../Interface/interfaces";
import GameWindow from "../../GameWindow";

export default class ScoreBoard implements IEntity {

    public x: number = 0;
    public y: number = 0;
    public width: number;
    public height: number;

    private players: Array<IPlayer>

    private displayNamesUnderScore: boolean;


    constructor(Players: Array<IPlayer>, displayNamesUnderScore: boolean = false)
    {
        this.width = 100;
        this.height = 100;

        this.players = Players;

        this.displayNamesUnderScore = displayNamesUnderScore
    }

    AddPoint(playerID: number) {
        this.players[playerID].Score.scoreCount++;
    }

    SetScore(playerID: number, score: number) {
        this.players[playerID].Score.scoreCount = score;
    }

    display(p5: p5): void {

        const midpointX = GameWindow.WINDOW_LENGTH / 2;
        const midpointY = GameWindow.WINDOW_HEIGHT / 2;

        p5.textSize(256)
        p5.textAlign(p5.CENTER, p5.CENTER)
        p5.fill(235, 25, 199, 50)
        
        // Player 1
        p5.text(this.players[0].Score.scoreCount, midpointX / 2, midpointY)
        if (this.displayNamesUnderScore) {
            p5.textSize(28)
            p5.text(this.players[0].Name, midpointX / 2, midpointY + 100)
            p5.textSize(256)
        }

        // Player 2
        p5.text(this.players[1].Score.scoreCount, GameWindow.WINDOW_LENGTH - (midpointX / 2), midpointY)
        if (this.displayNamesUnderScore) {
            p5.textSize(28)
            p5.text(this.players[1].Name, GameWindow.WINDOW_LENGTH - (midpointX / 2), midpointY + 100)
        }


    }
}