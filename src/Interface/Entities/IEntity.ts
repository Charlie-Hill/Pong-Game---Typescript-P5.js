import p5 from "p5";

export default interface IEntity {
    x: number;
    y: number;
    width: number;
    height: number;
    display(p5: p5, x?: number, y?: number): void;
}