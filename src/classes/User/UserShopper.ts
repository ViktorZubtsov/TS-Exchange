import {IUserShopper} from "../../interfaces/User/IUserShopper"

export class UserShopper implements IUserShopper {
    getAllBalance(): string {
        throw new Error("Method not implemented.");
    }
    getAllCrypto(): object {
        throw new Error("Method not implemented.");
    }
    getByKey(): object {
        throw new Error("Method not implemented.");
    }
    printShortBalanceByKey(): string {
        throw new Error("Method not implemented.");
    }
    printFullBalanceByKey(): string {
        throw new Error("Method not implemented.");
    }
    getMaxBalance(): string {
        throw new Error("Method not implemented.");
    }
    getMinBalance(): string {
        throw new Error("Method not implemented.");
    }

}