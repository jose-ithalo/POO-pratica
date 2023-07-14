import { TUser, User } from "./User";

export class Studant extends User {

    grades: number[];

    constructor(user: TUser) {
        super(user);
        this.grades = [];
    }

    getAverage(): string {

        let total: number = 0;

        if (this.grades.length < 1) {
            return 'No grade to display'
        }

        for (const grade of this.grades) {
            total += grade;
        }

        return `The average is: ${total / this.grades.length}`
    }
}