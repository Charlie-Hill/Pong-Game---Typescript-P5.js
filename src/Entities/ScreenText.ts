import p5 from "p5";

export default class ScreenText {
    private value: string;
    private p5: p5;
    private obj: any;

    constructor(p5: p5, value: string) {
        this.p5 = p5;
        this.value = value;

        this.obj = this.p5.text(this.value, 20, 20);
        this.obj.style('color', '#ff0000');
    }

    public updateText(value: string) {
        this.obj.text(value, 20, 20);
    }

}