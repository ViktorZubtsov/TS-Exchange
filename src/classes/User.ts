import {IUser} from "../interfaces/IUser";


export class User implements  IUser{
   protected mail: string
   protected role: string


    constructor(mail,role) {
        this.mail = mail
        this.role = role
    }

    public getEmail(): string {
        return this.mail
    }
    public setEmail (newMail: string): void {
        this.mail = newMail
    }


    // setEmail(): void
    // getPass(): string
    // setPass(): void
}
