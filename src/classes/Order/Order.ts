import {IOrder} from "../../interfaces/Order/IOrder";

export class Order implements IOrder {
    id: number;
    typeOrderId: string;
    quantity: string;
    give: number;
    get: number;

}