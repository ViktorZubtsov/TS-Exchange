import {typeCCY} from "../CCY/ICCY";
export enum typeOrder {
    buy,
    sell,
    trade
}
export interface IOrder {
    id: number
    typeOrderId: typeOrder
    quantity: number
    give: typeCCY
    get: typeCCY
}

