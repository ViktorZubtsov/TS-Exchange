import {IOrder} from "../Order/IOrder";

export interface IUserTrader {
    getAllOrders(): Array<IOrder>
    getOrderById(id: number): IOrder
    setOrder(id: number, typeOrderId: number, quantity: number, give: number, get: number): void
    printAllOrders(): Array<IOrder>
    printOrderById(id: number): IOrder,
    removeOrderByKey(id: number): void
}