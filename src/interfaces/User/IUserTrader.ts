import {IOrder} from "../Order/IOrder";

export interface IUserTrader {
    getAllOrders(): Array<IOrder>
    getOrderById(): IOrder
    setOrder(id: number, typeOrderId: number, quantity: number, give: number, get: number): void
    printAllOrders(): string
    printOrderById(): string, 
    removeOrderByKey(): void
}