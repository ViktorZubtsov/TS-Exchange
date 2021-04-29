import {ICtypro} from "../Crypto/ICtypro";

export interface IUserShopper {
    getAllBalance(): number
    getAllCrypto():Array<ICtypro>
    printShortBalanceByKey(id: number): string
    printFullBalanceByKey(id: number): string
    getMaxBalance(): number
    getMinBalance(): number
}
