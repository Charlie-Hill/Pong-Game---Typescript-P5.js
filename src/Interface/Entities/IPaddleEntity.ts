import { IController } from "../Logic/IController";
import IEntity from "./IEntity";

export default interface IPaddleEntity extends IEntity
{
    Controller: IController;
}