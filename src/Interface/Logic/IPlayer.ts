import { IScore } from "../interfaces";
import Paddle from "../Entities/IPaddleEntity";

export interface IPlayer {
    Name: string;
    IsAI: boolean;
    Score: IScore;
    Paddle: Paddle;
}