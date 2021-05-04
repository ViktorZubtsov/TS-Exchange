import {IUserTrader} from "../../interfaces/User/IUserTrader";
import {UserGoals} from "./UserGoals";
import {IOrder, typeOrder} from "../../interfaces/Order/IOrder";
import {ordersDb} from "../../db/oredersDb";
import {Order} from "../Order/Order";
import {getById, removeById} from "../../helpers/helpers";
import {typeCCY} from "../../interfaces/CCY/ICCY";

export class UserTrader extends UserGoals implements IUserTrader {
    private orders: Array<IOrder> = ordersDb;

    protected static getOrderInfo(order: IOrder): { give: string; quantity: number; get: string; id: number; typeOrderId: string } {
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

    public printAllOrders(): string {
        // TODO:  что это значит
        const testArr = [1,2,4,6,7];
        const test = this.orders.map(item => UserTrader.getOrderInfo(item));
        const test2 = test.map(item => `Ордер- ${item.id}: ${item.typeOrderId} - ${item.quantity} монет. Отдаю - ${item.give}, получаю - ${item.get}`)
        console.log(test2);
        return test2.join(', \t\n');
    }

    public printOrderById(id: number): string {
        const order = getById(this.orders, id);
        const orderInfo = UserTrader.getOrderInfo(order);
        return `${orderInfo.typeOrderId} - ${orderInfo.quantity} монет. Отдаю - ${orderInfo.give}, получаю - ${orderInfo.get}`;
    }

    public removeOrderByKey(id: number): void {
        this.orders = removeById(this.orders, id);
    }

    public setOrder(id: number, typeOrderId: typeOrder, quantity: number, give: typeCCY, get: typeCCY): void {
        const order = new Order(id, typeOrderId, quantity, give, get);
        this.orders.push({...order});
    }

}