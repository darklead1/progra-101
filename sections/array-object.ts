import { clearScreenDown } from "readline";


interface Person {
    name: string;
    age: number;
    isActive: boolean;

}

let felipe: Person = {
    name: "Felipe",
    age: 28,
    isActive: false
}

let marthyna: Person = {
    name: "Marthyna",
    age: 14,
    isActive: false
}

let marylen: Person = {
    name: "Marylen",
    age: 47,
    isActive: false
}

let people: Person[] = [felipe, marthyna, marylen];

//console.log(people)

for (let i = 0; i < people.length; i++) {
    const person = people[i];
    console.log(person.name + " " + person.age);
}