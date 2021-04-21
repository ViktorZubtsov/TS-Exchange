import {UserExchange} from "./src/classes/UserExchange";
import {typeGoal} from "./src/interfaces/Goal/IGoal";

const viktor = new UserExchange('mr.viktor.1996.@yandex.ru');
viktor.setGoal(122, typeGoal.saving, 0,true, 454)
console.log(viktor);
