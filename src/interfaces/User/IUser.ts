export interface IUser {
    getEmail(): string
    getId(): number
    setEmail(newMail: string): void
    setPass(pass: string): void
    getPass(): string
}
