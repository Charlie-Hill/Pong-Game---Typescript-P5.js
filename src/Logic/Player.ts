import Paddle from '../Entities/Paddle';
import { IScore, IPlayer, IEntity } from '../Interface/interfaces';
import Score from './Score';

export class Player implements IPlayer {

    public Name: string;
    public IsAI: boolean;
    public aiLevel?: string;
    public Score: IScore;
    public Paddle: Paddle;

    constructor(name: string, IsAI?: boolean, difficulty?: string) {
        
        this.Name = name;
        this.IsAI = IsAI ?? false;
        this.aiLevel = difficulty;
    
        this.Score = new Score();
        this.Paddle = new Paddle(this.IsAI, this.aiLevel);
    }

    public SetPaddle(paddle: Paddle) {
        this.Paddle = paddle;
    }

}