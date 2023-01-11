import { clearScreenDown } from "readline";





let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5];



for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];


    let a = element % 2

    if (a == 1) {

        console.log(" el número es impar" + " " + element);
    } else {
        console.log("el número es par" + " " + element);
    }




}



