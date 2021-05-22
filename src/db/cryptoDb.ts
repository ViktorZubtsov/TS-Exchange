import {ICtypro} from "../interfaces/Crypto/ICtypro";
import {typeCCY} from "../interfaces/CCY/ICCY";

export const cryptoDb: Array<ICtypro> = [
  {id: 11, ccyId: typeCCY.PRIZM, balance: 1404.1234567 },
  {id: 12, ccyId: typeCCY.Umi, balance: 56000.1234567 },
  {id: 13, ccyId: typeCCY.Bitcoin, balance: 1532.1234567812 },
  {id: 14, ccyId: typeCCY.Alti, balance: 84584.1234567 }
];