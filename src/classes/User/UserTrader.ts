import {IUserTrader} from "../../interfaces/User/IUserTrader";
import {UserGoals} from "./UserGoals";
import {IOrder} from "../../interfaces/Order/IOrder";
import {ordersDb} from "../../db/oredersDb";
import {Order} from "../Order/Order";
import {getById} from "../../helpers/helpers";

export class UserTrader extends UserGoals implements IUserTrader {
    private orders: Array<IOrder> = ordersDb;

    getAllOrders(): Array<IOrder> {
        return this.orders;
    }

    getOrderById(id: number): IOrder {
        return <IOrder>getById(this.orders, id);
    }

    printAllOrders():Array<IOrder> {
        return this.orders;
    }

    printOrderById(id: number): IOrder {
        return <IOrder>getById(this.orders, id);
    }

    removeOrderByKey(): void {

    }

    setOrder(id: number, typeOrderId: number, quantity: number, give: number, get: number): void {
        const order = new Order(id, typeOrderId, quantity, give, get);
        this.orders.push({...order});
    }

}