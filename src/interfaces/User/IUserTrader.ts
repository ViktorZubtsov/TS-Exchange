import {IOrder, typeOrder} from "../Order/IOrder";
import {typeCCY} from "../CCY/ICCY";

export interface IUserTrader {
    getAllOrders(): Array<IOrder>
    getOrderById(id: number): IOrder
    setOrder(id: number, typeOrderId: typeOrder, quantity: number, give: typeCCY, get: typeCCY): void
    printAllOrders(): Array<IOrder>
    printOrderById(id: number): { give: string; quantity: number; get: string; id: number; typeOrderId: string },
    removeOrderByKey(id: number): void
}