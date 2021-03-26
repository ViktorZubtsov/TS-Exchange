export interface IUserGoals {
    getAllGoals(): Array<object>,
    getGoalById(id: string): object,
    setGoal(): void,
    printGoal(): void,
    getCompleteGoals(): Array<object>
    getNotCompleteGoals(): Array<object>
}
