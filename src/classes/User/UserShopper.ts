import {IUserShopper} from "../../interfaces/User/IUserShopper";
import {ccyDb} from "../../db/ccyDb";
import {ICtypro} from "../../interfaces/Crypto/ICtypro";
import {cryptoDb} from "../../db/cryptoDb";
import {ICCY} from "../../interfaces/CCY/ICCY";
import {UserTrader} from "./UserTrader";

export class UserShopper extends UserTrader implements IUserShopper {
    private crypto: Array<ICtypro> = cryptoDb;

    private calcCrypto(crypto: Array<ICtypro>): {balance: number, maxBalance: number,minBalance: number } {
        const arrBal = [];
        crypto.forEach((item)=>{
            arrBal.push(item.balance);
        });
        let x;
        const balance = arrBal.map(i => x += i, x = 0).reverse()[0];
        const maxBalance = Math.max(...arrBal);
        const minBalance = Math.min(...arrBal);

        return {balance: balance, maxBalance: maxBalance, minBalance: minBalance};
    }

    getAllBalance(): number {
        return this.calcCrypto(this.crypto)['balance'];
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
    getMaxBalance(): number {
        return this.calcCrypto(this.crypto)['maxBalance'];
    }
    getMinBalance(): number {
        return this.calcCrypto(this.crypto)['minBalance'];
    }

}
