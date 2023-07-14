import { Studant } from "./Studant";
import { Teacher } from "./Teacher";


const mauro = new Teacher({
    name: 'Mauro',
    email: 'mauro@email.com',
    password: 'rt120'
});

const thiago = new Studant({
    name: 'Thiago',
    email: 'thiago@email.com',
    password: '789'
});

console.log(mauro.login('rt120'));

mauro.throwGrades(thiago, 5);
mauro.throwGrades(thiago, 9);
mauro.throwGrades(thiago, 7);
mauro.throwGrades(thiago, 6);

console.log(thiago.grades);

console.log(thiago.getAverage());

