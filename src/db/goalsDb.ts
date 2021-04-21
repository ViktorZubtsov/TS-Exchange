import {typeGoal, IGoal} from "../interfaces/Goal/IGoal";

export const goalsDb: Array<IGoal> = [
    {
        id: 1, typeId: typeGoal.saving, cryptoId: 3, goalComplete: false, to: 34324
    },
    {
        id: 2, typeId: typeGoal.for, cryptoId: 5, goalComplete: true, to: 33
    },
    {
        id: 4, typeId: typeGoal.multiply, cryptoId: 0, goalComplete: true, to: 6234
    },
    {
        id: 5, typeId: typeGoal.multiply, cryptoId: 0, goalComplete: false, to: 6234
    },
    {
        id: 6, typeId: typeGoal.multiply, cryptoId: 0, goalComplete: true, to: 6234
    },
    {
        id: 3, typeId: typeGoal.multiply, cryptoId: 0, goalComplete: false, to: 6234
    },
];
