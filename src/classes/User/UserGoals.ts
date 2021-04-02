import {IUserGoals} from "../../interfaces/User/IUserGoals";
import {User} from "./User";
import {Goal} from "../Goal/Goal";


enum typeGoal {
    saving,
    for,
    multiply
}

export class UserGoals extends User implements  IUserGoals{
    goals: Array<object> = []

    getAllGoals(): Array<object> {
        return [{name: 'getAllGoals'}];
    }

    getCompleteGoals(): Array<object> {
        return [{name: 'getAllGoals'}];
    }

    getGoalById(id: string): object {
        return undefined;
    }

    getNotCompleteGoals(): Array<object> {
        return [{name: 'getAllGoals'}];
    }

    printGoal(): void {
        console.log('printGoal')
    }
    setGoal(id: number, typeId: number, cryptoId: number, goalComplete: boolean, to: number): void  {
        const goal = new Goal(id, typeId, cryptoId, goalComplete, to)
        this.goals.push({
            id: goal.id,
            typeId: goal.typeId,
            cryptoId: goal.cryptoId,
            goalComplete: goal.goalComplete,
            to: goal.to
        })
    };
}
