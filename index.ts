import {UserExchange} from "./src/classes/UserExchange";
import {typeOrder} from "./src/interfaces/Order/IOrder";

const viktor = new UserExchange('mr.viktor.1996.@yandex.ru');

viktor.setPass('1111');
console.log(viktor.getPass());

