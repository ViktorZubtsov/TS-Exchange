import {Goal} from "./src/classes/Goal/Goal";



enum typeGoal {
    saving,
    for,
    multiply
}


const goal1 = new Goal(1, typeGoal.saving,3,false, 222)

console.log(goal1)
