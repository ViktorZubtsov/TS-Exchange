import {IUserGoals} from "../../interfaces/User/IUserGoals";
import {User} from "./User";
import {Goal} from "../Goal/Goal";
import {IGoal} from "../../interfaces/Goal/IGoal";
import {goalsDb} from "../../db/goalsDb";

export class UserGoals extends User implements IUserGoals{
    private goals: Array<IGoal> = goalsDb;

    protected sortGoals(type?: string) {
        const completeGoals = [];
        const notCompleteGoals = [];

        this.goals.find((item) => {
                if (item.goalComplete) {
                    completeGoals.push(item);
                } else {
                    notCompleteGoals.push(item);
                }
            }
        );
        if(type === 'completeGoals'){
            return completeGoals
        } else {
            return notCompleteGoals
        }
    }

    public getAllGoals(): Array<IGoal> {
        return this.goals;
    }

    public getCompleteGoals(): Array<IGoal> {
        return this.sortGoals('completeGoals');
    }

    public getGoalById(id: number): IGoal {
        return this.goals.find(item => item.id === id);
    }

    public getNotCompleteGoals(): Array<IGoal> {
        return this.sortGoals();
    }

    public printGoal(): void {
        console.log('printGoal');
    }
    public setGoal(id: number, typeId: number, cryptoId: number, goalComplete: boolean, to: number): void {
        const goal = new Goal(id, typeId, cryptoId, goalComplete, to);
        this.goals.push({
            id: goal.id,
            typeId: goal.typeId,
            cryptoId: goal.cryptoId,
            goalComplete: goal.goalComplete,
            to: goal.to
        });
    }
}
