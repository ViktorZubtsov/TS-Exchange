import {IUserGoals} from "../../interfaces/User/IUserGoals";
import {User} from "./User";
import {Goal} from "../Goal/Goal";
import {IGoal, typeGoal} from "../../interfaces/Goal/IGoal";
import {goalsDb} from "../../db/goalsDb";
import {getById} from "../../helpers/helpers";
import {cryptoDb} from "../../db/cryptoDb";

export class UserGoals extends User implements IUserGoals{
    private goals: Array<IGoal> = goalsDb;

    protected sortGoals(type?: string): Array<IGoal> {
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
        if(type){
            return completeGoals;
        } else {
            return notCompleteGoals;
        }
    }

    public getAllGoals(): Array<IGoal> {
        return this.goals;
    }

    public getCompleteGoals(): Array<IGoal> {
        return this.sortGoals('completeGoals');
    }

    public getGoalById(id: number): IGoal {
        return <IGoal>getById(this.goals, id);
    }

    public getNotCompleteGoals(): Array<IGoal> {
        return this.sortGoals();
    }

    public printGoal(id: number): string {
        const goal = getById(this.goals, id);

        return `Цель - ${goal.id}: ${typeGoal[goal.typeId]},  ${goal.to} монет, ${goal.goalComplete? 'Выполнена' : 'Не выполнена'} `;
    }
    public setGoal(id: number, typeId: number, cryptoId: number, goalComplete: boolean, to: number): void {
        const goal = new Goal(id, typeId, cryptoId, goalComplete, to);
        this.goals.push({...goal});
    }
}
