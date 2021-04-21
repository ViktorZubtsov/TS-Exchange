import {UserExchange} from "./src/classes/UserExchange";
import {typeGoal} from "./src/interfaces/Goal/IGoal";

const viktor = new UserExchange('mr.viktor.1996.@yandex.ru');
console.log(viktor.printGoal(4));
