import {IUser} from "../../interfaces/User/IUser";
import {getRandomInt} from "../../helpers/helpers";
import {Md5} from "ts-md5";

export class User implements IUser{
    private mail: string
    private pass: string | Int32Array
    private readonly id: number

    constructor(mail: string, pass: string) {
        this.mail = mail;
        this.id = getRandomInt(16);
        this.pass = User.generatePass(pass);
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
    private static generatePass(pass): string | Int32Array {
        const md5 = new Md5();
        md5.appendStr(pass)
            .appendByteArray(new Uint8Array(8));
        return md5.end();
    }
    public setPass(oldPass: string, pass: string): void {
        if (this.pass === User.generatePass(oldPass)) {
            this.pass = User.generatePass(pass);
        }
        else {
            throw new Error('Старый пароль не правильный !!!');
        }

    }
    public getPass(): string | Int32Array {
        return this.pass;
    }

}
