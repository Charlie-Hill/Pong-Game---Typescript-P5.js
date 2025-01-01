import p5 from "p5"
import IEntity from "../../Interface/Entities/IEntity"
import { IPlayer } from "../../Interface/interfaces";
import GameWindow from "../../GameWindow";

export default class WinScreen implements IEntity {

    public x: number = 0;
    public y: number = 0;
    public width: number;
    public height: number;
    
    private text: string;

    constructor() {
        this.width = GameWindow.WINDOW_LENGTH;
        this.height = GameWindow.WINDOW_HEIGHT;
        this.text = ''
    }

    clicked (mouseX: number, mouseY: number) {
        if (((mouseX > this.x) && (mouseX < this.x + this.width) && mouseY > this.y) && (mouseY < this.y + this.height))
            return true;
    }

    setWinner (Player: IPlayer) {
        this.text = `${Player.Name} has won!`
    }

    display(p5: any) {
        // // Background overlay
        // p5.background(this.pauseColor);

        // Text
        p5.textAlign(p5.CENTER);
        p5.strokeWeight(2);
        // p5.stroke(50);
        p5.fill(255, 0, 0);
        
        p5.textSize(64);
        p5.text('WINNER', 400, 250);
        p5.textSize(32);
        p5.text(this.text, 400, 300);
    }
    
}