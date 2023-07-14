import { Studant } from "./Studant";
import { TUser, User } from "./User";

interface ITeacher {

    throwGrades(studant: Studant, grade: number): void
}

export class Teacher extends User implements ITeacher {

    constructor(user: TUser) {
        super(user);
    }

    throwGrades(studant: Studant, grade: number): void {
        this.verifyLogin();
        studant.grades.push(grade);
    }

    private verifyLogin(): void {
        if (this.status === false) {
            throw new Error('Teacher not logged in');
        }
    }

}