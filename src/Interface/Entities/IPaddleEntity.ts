import GameWindow from "../../GameWindow";
import { IController } from "../Logic/IController";
import IEntity from "./IEntity";
import p5 from "p5";

export default interface IPaddleEntity extends IEntity
{
    color: string;
    Controller: IController;
    update (p5: p5, x: number, y: number, BallEntity: IEntity): void;
    resetPaddle (): void;
}