import { clearScreenDown } from "readline";





let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5];

let a = 0;


for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];

    if (element > a) {
        a = element
    }



}

console.log(a)