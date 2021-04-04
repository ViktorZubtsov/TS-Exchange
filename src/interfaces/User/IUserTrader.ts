export interface IUserTrader {
    getAllOrders(): Array<object>
    getOrderById(): object
    setOrder(): void
    printAllOrders(): string
    printOrderById(): string, 
    removeOrderByKey(): void
}