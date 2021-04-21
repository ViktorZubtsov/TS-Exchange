import {UserTrader} from "./User/UserTrader";

export class UserExchange extends UserTrader {

    public sortByKey(arr: [],key: string): void {
        console.log('sortByKey', arr , key);
    }
}
