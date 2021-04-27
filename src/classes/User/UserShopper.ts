import {IUserShopper} from "../../interfaces/User/IUserShopper";
import {ccyDb} from "../../db/ccyDb";
import {ICCY} from "../../interfaces/CCY/ICCY";
import {UserTrader} from "./UserTrader";

export class UserShopper extends UserTrader implements IUserShopper {
    private crypto: Array<ICCY> = ccyDb;
    getAllBalance(): string {
        throw new Error("Method not implemented.");
    }
    getAllCrypto(): Array<ICCY> {
        return this.crypto;
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
