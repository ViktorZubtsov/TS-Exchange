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






















//
// class TypeGoal implements ITypeGoal{
//     id: number
//     name: string
//
//     constructor(name: string) {
//         this.name = name
//         this.id = this.getRandomInt()
//     }
//     getRandomInt(): number {
//         return Math.floor(Math.random() * (1 - 10)) + 1;
//     }
// }
//
//
//
// const a = new TypeGoal
// const b = new TypeGoal
//
// export const sa = new Goal([a,b])
