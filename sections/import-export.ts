import { clearScreenDown } from "readline";
import { addTwoNumbers } from "../helpers/math-helpers";
import { substractTwoNumbers } from "../helpers/math-helpers"
import { timesTwoNumbers } from "../helpers/math-helpers"
import { divideTwoNumbers } from "../helpers/math-helpers"
// esta funcion recibe en el argumento un nombre el cual es definido ahí mismo por defectos si es que 
//no se ingresa uno al ejecutar la función


let num1 = 10;
let num2 = 20;


let total1 = addTwoNumbers(num1, num2);
let total2 = substractTwoNumbers(num1, num2);
let total3 = timesTwoNumbers(num1, num2);
let total4 = divideTwoNumbers(num1, num2);



console.log("total :", total1)


console.log("total :", total2)


console.log("total :", total3)


console.log("total :", total4)




//let firstName = "mathias"

//greet(firstName);