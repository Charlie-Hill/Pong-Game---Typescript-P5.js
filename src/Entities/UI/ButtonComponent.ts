import p5 from "p5"

export default class ButtonComponent {
    public x: number = 0;
    public y: number = 0;

    private width: number;
    private height: number;

    private text: string;

    public isHover: boolean;

    private onClick: () => void;

    constructor(x: number, y: number, width: number, height: number, text: string, onClick: (() => any)) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.onClick = onClick

        this.text = text;
        this.isHover = false;
    }

    public handleClick (mouseX: number, mouseY: number) {
        if (this.isMouseOver(mouseX, mouseY)) {
            this.onClick()
        }        
    }

    public isMouseOver(mouseX: number, mouseY: number): boolean {
        const leftX = this.x - (this.width / 2);
        const rightX = this.x + (this.width / 2);
        const topY = this.y - (this.height / 2);
        const bottomY = this.y + (this.height / 2);

        return (
            (mouseX > leftX) && (mouseX < rightX) && (mouseY > topY) && (mouseY < bottomY)
        );
    }

    public render(p5: p5) {

        p5.push();
        p5.textSize(22);
        p5.rectMode(p5.CENTER);
        if (this.isMouseOver(p5.mouseX, p5.mouseY)) {
            p5.fill(255, 250, 0);
        } else {
            p5.fill(200);
        }
        p5.rect(this.x, this.y, this.width, this.height);

        p5.fill(255, 255, 0);
        p5.textAlign("center")
        p5.fill(65, 23, 15);
        p5.text(this.text, this.x, this.y + (this.height / 4));
        p5.pop();

    }


}