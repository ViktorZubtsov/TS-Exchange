import {ICtypro} from "../../interfaces/Crypto/ICtypro";
import {pruningNumbers} from "../../helpers/helpers";
export class Crypto implements ICtypro {
    balance: number;
    ccyId: number;
    id: number;

    constructor(id: number, ccyId: number, balance: number, numberSign: number) {
      this.id = id;
      this.ccyId = ccyId;
      this.balance = Crypto.trimsBalance(balance, numberSign);
    }
    private static trimsBalance(balance, to): number {
      return pruningNumbers(balance, to);
    }
}
