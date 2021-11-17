import p5 from "p5";

export default class Canvas extends p5 {

    constructor(selector: string = "div#gameWindow") {
        const node = document.querySelector(selector) as HTMLElement;
        super(function() {}, node);
    }

}