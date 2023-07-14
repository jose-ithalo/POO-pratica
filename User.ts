export type TUser = {
    name: string,
    email: string,
    password: string
}

export abstract class User {

    name: string;
    email: string;
    protected password: string;
    protected status: boolean;

    constructor(user: TUser) {
        this.name = user.name;
        this.email = user.email;
        this.password = user.password
        this.status = false;
    }

    login(pass: string): string {

        if (pass === this.password) {
            this.status = true;
            return 'Logged in user';
        }

        return 'Incorrect password';
    }
}