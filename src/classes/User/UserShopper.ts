import {IUserShopper} from "../../interfaces/User/IUserShopper";
import {ccyDb} from "../../db/ccyDb";
import {ICtypro} from "../../interfaces/Crypto/ICtypro";
import {cryptoDb} from "../../db/cryptoDb";
import {ICCY} from "../../interfaces/CCY/ICCY";
import {UserTrader} from "./UserTrader";

export class UserShopper extends UserTrader implements IUserShopper {
    private crypto: Array<ICtypro> = cryptoDb;

    private calcCtypto(crypto: Array<ICtypro>): object {
        const balance = [];
        const minBalance = null;
        const maxBalance = null;
        crypto.forEach((item)=>{
            this.balance.append(item.balance);
        });
        return {balance: balance};
    }

    getAllBalance(): string {
        throw new Error("Method not implemented.");
    }
    getAllCrypto(): Array<ICtypro> {
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
