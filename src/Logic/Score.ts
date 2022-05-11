import {IScore} from '../Interface/interfaces';

export default class Score implements IScore {
    public scoreCount: number = 0;

    public addScore() {
        this.scoreCount++;
    }
}