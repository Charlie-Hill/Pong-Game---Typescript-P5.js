import p5 from "p5"
import IEntity from "../../Interface/Entities/IEntity"

export default class PauseScreen implements IEntity {

    public x: number = 0;
    public y: number = 0;
    public width: number;
    public height: number;
    
    private pauseColor: number; 

    constructor(width: number, height: number, pauseColor: number) {
        this.width = width;
        this.height = height;
        this.pauseColor = pauseColor;
    }

    clicked (mouseX: number, mouseY: number) {
        if (((mouseX > this.x) && (mouseX < this.x + this.width) && mouseY > this.y) && (mouseY < this.y + this.height))
            return true;
    }

    display(p5: any) {
        // Background overlay
        p5.background(this.pauseColor);

        // Text
        p5.textAlign(p5.CENTER);
        p5.strokeWeight(2);
        // p5.stroke(50);
        p5.fill(255, 0, 0);
        
        p5.textSize(64);
        p5.text('The game is paused', 400, 250);
        p5.textSize(32);
        p5.text('Click anywhere on the game window to resume', 400, 300);
    }
    
}