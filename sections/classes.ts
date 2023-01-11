import { clearScreenDown } from "readline";


class Car {

    static className = "Carro";

    // si no están declaradas las propiedades como public, private o readonly se asigna valor public por defecto
    // public se puede leer, modificar 
    public brand: string;
    doors: number;
    fuelTank: number;
    isRunning: boolean;
    type: string;

    //para las propiedades privadas, solo tengo acceso dentro de los métodos de la clase, no puedo leer ni modificar fuera de la clase
    //si quisiera leer o modificar tendría que crear un metodo que me permitiera hacerlo
    private createdAt: number;


    constructor(brand: string, type: string) {
        this.brand = brand;
        this.doors = 0;
        this.fuelTank = 0;
        this.isRunning = false;
        this.type = type;
        this.createdAt = 123123;

    }


    //este return sirve para que termine de ejecutarse la condicion si es que el carro estaba encendido y no sigue ejecutando el codigo hacia abajo
    turnOn() {
        if (this.isRunning) {
            console.log("El Carro ya estaba encendido..... se dañó el motor");
            return;

        }
        //si el valor de la gasolina fuese 0, el codigo llegaría hasta aquí y por lo tanto el valor de isRunning = seguiría siendo false ya que no pasaría al siguiente codigo   
        if (this.fuelTank <= 0) {
            console.log("El carro no tiene gasolina");
            return;
        }

        this.isRunning = true;
        console.log("El Carro está encendido");





    }

    illTank(gas: number) {

        if (gas <= 0) {
            throw new Error("gas tiene que ser positivo");
            return;
        }

        let newFuelTank = this.fuelTank + gas;

        if (newFuelTank >= 100) {
            console.log("tanque lleno, no se puede llenar más");
            this.fuelTank = 100;
        } else {
            this.fuelTank = this.fuelTank + gas;

        }

    }
}



let myMazda = new Car("mazda", "sedan");

// no me permite mostrar muMazda.createdAt porque es privada
//console.log(myMazda.createdAt)
myMazda.illTank(50);
myMazda.illTank(20);
myMazda.turnOn();
console.log(myMazda);
console.log(Car.className);