import { clearScreenDown } from "readline";





function max(a: number, b: number, c: number) {

    //ternario
    if (a > b) {

        return (a > c) ? a : c;

    }

    if (b > c) {
        return b;
    } else {
        return (a > c) ? a : c;

    }

}


let maxValue = max(5, 2, 6);
console.log(maxValue); // 6 
