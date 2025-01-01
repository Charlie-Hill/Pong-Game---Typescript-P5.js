import ICircle from "./ICircle";

export default interface IBallEntity extends ICircle
{
    speed: number;
    velocityX: number;
    velocityY: number;
}