import {ITypeGoal} from "../../interfaces/ITypeGoal";

export class Goal {
    goals: ITypeGoal[]

    constructor(goals: ITypeGoal[]) {
        this.goals = goals
    }
    public getG(): Array<object> {
        return this.goals
    }
}


class TypeGoal implements ITypeGoal{
    id: number
    name: string

    constructor(name: string) {
        this.name = name
        this.id = this.getRandomInt()
    }
    getRandomInt(): number {
        return Math.floor(Math.random() * (1 - 10)) + 1;
    }
}



const a = new TypeGoal('dweqdwdw')
const b = new TypeGoal('dweqdwdwqwqewq333ewqdfeww')

export const sa = new Goal([a,b])
