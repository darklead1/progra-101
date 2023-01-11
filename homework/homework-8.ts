import { strict } from "assert";
import { clearScreenDown } from "readline";




let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];



function largestNameOfArray(nameArray: string[]) {
    let palabraMasLarga = "";

    for (let i = 0; i < nameArray.length; i++) {
        const element = nameArray[i];

        if (palabraMasLarga.length < element.length) {

            palabraMasLarga = element

        }

    }

    return palabraMasLarga;
}

let hero = largestNameOfArray(heroes);
console.log(hero); // Profesor Charles Xavier 
