import {ICtypro} from "../Crypto/ICtypro";

export interface IUserShopper {
    getAllBalance(): number
    getAllCrypto():Array<ICtypro>
    getByKey(): object
    printShortBalanceByKey(): string
    printFullBalanceByKey(): string
    getMaxBalance(): number
    getMinBalance(): number
}
