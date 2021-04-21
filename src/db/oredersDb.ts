import {IOrder, typeOrder} from "../interfaces/Order/IOrder";

export const ordersDb: Array<IOrder> = [
    { id: 1, typeOrderId: typeOrder.trade, quantity: 1000, give: 7, get: 1 },
    { id: 2, typeOrderId: typeOrder.sell , quantity: 10015418640, give: 2, get: 5 },
    { id: 4, typeOrderId: typeOrder.buy , quantity: 10484800, give: 3, get: 9 },
    { id: 6, typeOrderId: typeOrder.trade, quantity: 15000, give:  4, get: 5 },
    { id: 7, typeOrderId: typeOrder.trade, quantity: 2000, give: 5, get: 2 }
];