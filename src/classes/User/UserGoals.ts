import {IUserGoals} from "../../interfaces/User/IUserGoals";
import {User} from "./User";


export class UserGoals extends User implements  IUserGoals{
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

    setGoal(): void {
        console.log('setGoal')
    }

}
