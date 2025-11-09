import p5 from "p5"
import IEntity from "../../Interface/Entities/IEntity"
import ButtonComponent from "./ButtonComponent";

export default class StartScreen implements IEntity {

    public x: number = 0;
    public y: number = 0;
    public width: number;
    public height: number;

    public easyButton: ButtonComponent;
    public mediumButton: ButtonComponent;
    public hardButton: ButtonComponent;
    
    private pauseColor: number; 

    constructor(width: number, height: number, pauseColor: number) {
        this.width = width;
        this.height = height;
        this.pauseColor = pauseColor;

        this.easyButton = new ButtonComponent(this.width / 2, this.height / 2.5, 200, 50, "Easy", () => this.setDifficulty("easy"));
        this.mediumButton = new ButtonComponent(this.width / 2, (this.height / 2.5) + 75, 200, 50, "Medium", () => this.setDifficulty("medium"));
        this.hardButton = new ButtonComponent(this.width / 2, (this.height / 2.5) + 150, 200, 50, "Hard", () => this.setDifficulty("hard"));
    }

    clicked (mouseX: number, mouseY: number) {
        this.easyButton.handleClick(mouseX, mouseY);
        this.mediumButton.handleClick(mouseX, mouseY);
        this.hardButton.handleClick(mouseX, mouseY);

        if (((mouseX > this.x) && (mouseX < this.x + this.width) && mouseY > this.y) && (mouseY < this.y + this.height))
            return true;
    }

    setDifficulty (difficulty: string) {
        const event = new CustomEvent('setDifficulty', { detail: { difficulty: difficulty } });
        window.dispatchEvent(event);
    }

    display(p5: any) {
        // Background overlay
        p5.background(this.pauseColor);

        // Text
        p5.textAlign(p5.CENTER);
        p5.strokeWeight(2);
        p5.stroke(255);
        p5.fill(255, 150, 50);
        
        p5.textSize(64);
        p5.text('Select Game Difficulty', 400, 100);
        // p5.textSize(32);
        // p5.text('Click anywhere on the game window to resume', 400, 300);

        this.easyButton.render(p5);
        this.mediumButton.render(p5);
        this.hardButton.render(p5);
    }
    
}