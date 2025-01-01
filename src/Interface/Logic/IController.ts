import { IEntity } from "../interfaces";
import GameWindow from "../../GameWindow";

export interface IController
{
    updatePosition (Paddle: IEntity, x: number, y: number, Ball: IEntity): void
}