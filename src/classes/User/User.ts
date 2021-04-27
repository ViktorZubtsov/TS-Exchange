import {IUser} from "../../interfaces/User/IUser";
import {getRandomInt} from "../../helpers/helpers";
import {Md5} from "ts-md5";

export class User implements IUser{
    private mail: string
    private pass: any
    private readonly id: number

    constructor(mail: string) {
        this.mail = mail;
        this.id = getRandomInt(16);
    }
    public getId(): number {
        return this.id;
    }
    public getEmail(): string {
        return this.mail;
    }

    public setEmail (newMail: string): void {
        this.mail = newMail;
    }
    private generatePass(pass): void {
        const md5 = new Md5();
        md5.appendStr(pass);
        md5.start();
        this.pass = md5.end();
    }
    public setPass(pass: string): void {
        this.generatePass(pass);
    }
    public getPass(): string {
        return this.pass;
        //    TODO: Сделать разшифровку пароля, и разобраться как он рабботет до конца.
    }

}
