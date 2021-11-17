import p5 from "p5";

export default interface IEntity {
    x: number;
    y: number;
    display(p5: p5): void;
}