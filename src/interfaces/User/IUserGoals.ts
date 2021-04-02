import {IGoal} from "../Goal/IGoal";

export interface IUserGoals {
    getAllGoals(): Array<object>,
    getGoalById(id: string): object,
    setGoal(id: number, typeId: number, cryptoId: number, goalComplete: boolean, to: number): void,
    printGoal(): void,
    getCompleteGoals(): Array<object>
    getNotCompleteGoals(): Array<object>
}
