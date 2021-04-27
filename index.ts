import {UserExchange} from "./src/classes/UserExchange";
import {typeOrder} from "./src/interfaces/Order/IOrder";

const viktor = new UserExchange('mr.viktor.1996.@yandex.ru');
viktor.setEmail('viktor.@yandex.ru');
console.log(viktor.getEmail());
