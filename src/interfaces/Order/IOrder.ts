export interface IOrder {
    id: number
    typeOrderId: number
    quantity: number
    give: number
    get: number
}
export enum typeOrder {
    buy,
    sell,
    trade
}
