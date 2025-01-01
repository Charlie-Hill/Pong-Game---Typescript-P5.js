import p5 from "p5";
import { IEntity, IPlayer } from "../../Interface/interfaces";
import GameWindow from "../../GameWindow";

export default class ScoreBoard implements IEntity {

    public x: number = 0;
    public y: number = 0;
    public width: number;
    public height: number;

    private players: Array<IPlayer>


    constructor(Players: Array<IPlayer>)
    {
        this.width = 100;
        this.height = 100;

        this.players = Players;
    }

    AddPoint(playerID: number) {
        this.players[playerID].Score.scoreCount++;
    }

    SetScore(score: number, player: number) {
    }

    display(p5: p5): void {

        const midpointX = GameWindow.WINDOW_LENGTH / 2;
        const midpointY = GameWindow.WINDOW_HEIGHT / 2;

        p5.textSize(256)
        p5.textAlign(p5.CENTER, p5.CENTER)
        p5.fill(235, 25, 199, 50)
        
        // Player 1
        p5.text(this.players[0].Score.scoreCount, midpointX / 2, midpointY)

        // Player 2
        p5.text(this.players[1].Score.scoreCount, GameWindow.WINDOW_LENGTH - (midpointX / 2), midpointY)


    }
}