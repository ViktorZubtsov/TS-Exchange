import {ICCY} from "../CCY/ICCY";

export interface IUserShopper {
    getAllBalance(): string
    getAllCrypto():Array<ICCY>
    getByKey(): object
    printShortBalanceByKey(): string
    printFullBalanceByKey(): string
    getMaxBalance(): string
    getMinBalance(): string
}
