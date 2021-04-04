export interface IUserShopper {
    getAllBalance(): string
    getAllCrypto(): object
    getByKey(): object
    printShortBalanceByKey(): string
    printFullBalanceByKey(): string
    getMaxBalance(): string
    getMinBalance(): string
}
