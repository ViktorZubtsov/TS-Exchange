import {IOrder, typeOrder} from "../interfaces/Order/IOrder";
import {typeCCY} from "../interfaces/CCY/ICCY";

export const ordersDb: Array<IOrder> = [
  { id: 1, typeOrderId: typeOrder.trade, quantity: 1000, give: typeCCY.Umi, get: typeCCY.Bitcoin },
  { id: 2, typeOrderId: typeOrder.sell , quantity: 10015418640, give: typeCCY.Bitcoin, get: typeCCY.Umi },
  { id: 4, typeOrderId: typeOrder.buy , quantity: 10484800, give: typeCCY.Umi, get: typeCCY.Alti },
  { id: 6, typeOrderId: typeOrder.trade, quantity: 15000, give:  typeCCY.Alti, get: typeCCY.Umi },
  { id: 7, typeOrderId: typeOrder.trade, quantity: 2000, give: typeCCY.PRIZM, get: typeCCY.Umi }
];