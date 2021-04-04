import {IGoal} from "../../interfaces/Goal/IGoal";

export class Goal implements IGoal{
    id: number;
    typeId: number;
    cryptoId: number;
    goalComplete: boolean;
    to: number;

    constructor(id: number, typeId: number, cryptoId: number, goalComplete: boolean,  to: number) {
        this.id = id
        this.typeId = typeId
        this.cryptoId = cryptoId
        this.goalComplete =  goalComplete
        this.to  = to
    }
}
