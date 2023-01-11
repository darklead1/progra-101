import { strict } from "assert";
import { clearScreenDown } from "readline";



let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];


function heroesThatStartsWith(nameList: string[], letter: string) {

    letter = letter.toUpperCase();
    let newNameList: string[] = []

    for (let i = 0; i < nameList.length; i++) {
        const element = nameList[i];

        if (element.startsWith(letter) == true) {

            newNameList.push(element);

        }
    }



    return newNameList;
}


let herosWithLetterS = heroesThatStartsWith(heroes, 's');
console.log(herosWithLetterS); // She Hulk, Spiderman


