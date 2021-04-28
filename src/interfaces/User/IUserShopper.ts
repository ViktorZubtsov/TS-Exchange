import {ICtypro} from "../Crypto/ICtypro";

export interface IUserShopper {
    getAllBalance(): string
    getAllCrypto():Array<ICtypro>
    getByKey(): object
    printShortBalanceByKey(): string
    printFullBalanceByKey(): string
    getMaxBalance(): string
    getMinBalance(): string
}
