import {IOrder} from "../../interfaces/Order/IOrder";

export class Order implements IOrder {
    id: number;
    typeOrderId: number;
    quantity: number;
    give: number;
    get: number;

    constructor(id: number, typeOrderId: number, quantity: number, give: number, get: number) {
      this.id = id;
      this.typeOrderId = typeOrderId;
      this.quantity = quantity;
      this.give = give;
      this.get = get;
    }
}