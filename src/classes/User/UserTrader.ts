import {IUserTrader} from "../../interfaces/User/IUserTrader";
import {UserGoals} from "./UserGoals";
import {IOrder} from "../../interfaces/Order/IOrder";
import {ordersDb} from "../../db/oredersDb";
import {Order} from "../Order/Order";

export class UserTrader extends UserGoals implements IUserTrader {
    private orders: Array<IOrder> = ordersDb;

    getAllOrders(): Array<IOrder> {
        return this.orders;
    }

    getOrderById(): IOrder {
        return undefined;
    }

    printAllOrders(): string {
        return "";
    }

    printOrderById(): string {
        return "";
    }

    removeOrderByKey(): void {
    }

    setOrder(id: number, typeOrderId: number, quantity: number, give: number, get: number): void {
        const order = new Order(id, typeOrderId, quantity, give, get);
        this.orders.push({...order});
    }

}