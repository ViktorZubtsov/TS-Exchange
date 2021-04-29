import {IUserShopper} from "../../interfaces/User/IUserShopper";
import {ICtypro} from "../../interfaces/Crypto/ICtypro";
import {cryptoDb} from "../../db/cryptoDb";
import {UserTrader} from "./UserTrader";
import {getById} from "../../helpers/helpers";
import {ccyDb} from "../../db/ccyDb";

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
    private getCryptoInfo (id: number){
        const crypto = getById(this.crypto,id);
        const ccy = getById(ccyDb, crypto.ccyId);
        return {
            balance: crypto.balance,
            name: ccy.name,
            shortName: ccy.shortName 
        };
    }
    getAllBalance(): number {
        return this.calcCrypto(this.crypto)['balance'];
    }
    getAllCrypto(): Array<ICtypro> {
        return this.crypto;
    }
    //**
    // * @TODO: посмотреть (пример того как я буду получать инфу по связи printShortBalanceByKey, printFullBalanceByKey )
    // *
    printShortBalanceByKey(id: number): string {
        return `${this.getCryptoInfo(id).balance} - ${this.getCryptoInfo(id).shortName}` ;
    }
    printFullBalanceByKey(id: number): string {
        return `${this.getCryptoInfo(id).balance} - ${this.getCryptoInfo(id).shortName}` ;
    }
    getMaxBalance(): number {
        return this.calcCrypto(this.crypto)['maxBalance'];
    }
    getMinBalance(): number {
        return this.calcCrypto(this.crypto)['minBalance'];
    }

}
