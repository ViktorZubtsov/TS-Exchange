import {ICtypro} from "../interfaces/Crypto/ICtypro";
import {typeCCY} from "../interfaces/CCY/ICCY";

export const cryptoDb: Array<ICtypro> = [
    {id: 1, ccyId: typeCCY.PRIZM, balance: 1404 },
    {id: 2, ccyId: typeCCY.Umi, balance: 56000 },
    {id: 3, ccyId: typeCCY.Bitcoin, balance: 1532 },
    {id: 4, ccyId: typeCCY.Alti, balance: 84584 }
];