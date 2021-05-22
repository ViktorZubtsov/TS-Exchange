import {IGoal} from "../Goal/IGoal";

export interface IUserGoals {
    getAllGoals(): Array<IGoal>,

    getGoalById(id: number): IGoal,
    setGoal(id: number, typeId: number, cryptoId: number, goalComplete: boolean, to: number): void,
    printGoal(id: number): string,
    getCompleteGoals(): Array<IGoal>
    getNotCompleteGoals(): Array<IGoal>
}
