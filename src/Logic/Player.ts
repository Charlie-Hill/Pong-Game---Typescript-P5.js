import Paddle from '../Entities/Paddle';
import { IScore, IPlayer, IEntity } from '../Interface/interfaces';
import Score from './Score';

export class Player implements IPlayer {

    public Name: string;
    public IsAI: boolean;
    public Score: IScore;
    public Paddle: Paddle;

    constructor(name: string, IsAI?: boolean) {
        
        this.Name = name;
        this.IsAI = IsAI ?? false;
    
        this.Score = new Score();
        this.Paddle = new Paddle(this.IsAI);
    }

    public SetPaddle(paddle: Paddle) {
        this.Paddle = paddle;
    }

}