import {UserExchange} from "./src/classes/UserExchange";

const viktor = new UserExchange('mr.viktor.1996.@yandex.ru');

const test = viktor.setGoal(12, 1, 2, false,9000);
console.log(viktor.getNotCompleteGoals());
