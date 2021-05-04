import {IUserTrader} from "../../interfaces/User/IUserTrader";
import {UserGoals} from "./UserGoals";
import {IOrder, typeOrder} from "../../interfaces/Order/IOrder";
import {ordersDb} from "../../db/oredersDb";
import {Order} from "../Order/Order";
import {getById, removeById} from "../../helpers/helpers";
import {typeCCY} from "../../interfaces/CCY/ICCY";

export class UserTrader extends UserGoals implements IUserTrader {
    private orders: Array<IOrder> = ordersDb;

    private static getOrderInfo(order: IOrder): { give: string; quantity: number; get: string; id: number; typeOrderId: string } {
        return {
            id: order.id,
            typeOrderId: typeOrder[order.typeOrderId],
            quantity: order.quantity,
            give: typeCCY[order.give],
            get: typeCCY[order.get],
        };
    }
    public getAllOrders(): Array<IOrder> {
        return this.orders;
    }

    public getOrderById(id: number): IOrder {
        return <IOrder>getById(this.orders, id);
    }

    public printAllOrders():Array<IOrder> {
        // TODO:  что это значит
        return this.orders;
    }

    public printOrderById(id: number): { give: string; quantity: number; get: string; id: number; typeOrderId: string } {
        const order = getById(this.orders, id);

        return UserTrader.getOrderInfo(order);
    }

    public removeOrderByKey(id: number): void {
        this.orders = removeById(this.orders, id);
    }

    public setOrder(id: number, typeOrderId: typeOrder, quantity: number, give: number, get: number): void {
        const order = new Order(id, typeOrderId, quantity, give, get);
        this.orders.push({...order});
    }

}