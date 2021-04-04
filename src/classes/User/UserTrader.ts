import {IUserTrader} from "../../interfaces/User/IUserTrader"

export class UserTrader implements IUserTrader {
    getAllOrders(): object[] {
        throw new Error("Method not implemented.");
    }
    getOrderById(): object {
        throw new Error("Method not implemented.");
    }
    setOrder(): void {
        throw new Error("Method not implemented.");
    }
    printAllOrders(): string {
        throw new Error("Method not implemented.");
    }
    printOrderById(): string {
        throw new Error("Method not implemented.");
    }
    removeOrderByKey(): void {
        throw new Error("Method not implemented.");
    }

}