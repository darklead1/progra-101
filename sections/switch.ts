import { clearScreenDown } from "readline";



let weekday: number = 5; // 1 lunes 2 martes 3 miecoles ...


switch (weekday) {
    // esto quiere deci que si weekday === 1 es la condición que se está realizando en cada uno de los casos 
    case 1:
        console.log("Es lunes");
        break;
    // esto quiere deci que si weekday === 2
    case 2:
        console.log("Es Martes");
        break;

    case 3:
        console.log("Es Miércoles");
        break;
    // si no es ninguna de esas condiciones (1, 2, 3)
    default:
        console.log("no es lunes, martes o miércoles");



}


