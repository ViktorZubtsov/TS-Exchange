export interface IGoal {
    id: number,
    typeId: number,
    cryptoId: number,
    goalComplete: boolean,
    to: number
}
export enum typeGoal {
    saving,
    for,
    multiply
}
