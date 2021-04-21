export interface IOrder {
    id: number
    typeOrderId: number
    quantity: number
    give: number
    get: number
}
//
// a. id
// b. typeOrderId
// c. quantity
// d. give : ccyID
// e. get : ccyID
export enum typeOrder {
    buy,
    sell,
    trade
}
