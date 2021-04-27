export interface IUser {
    getEmail(): string
    getId(): number
    setEmail(newMail: string): void
    setPass(pass: string, oldPass?: string): void
    getPass(): string | Int32Array
}
