import { clearScreenDown } from "readline";


let person = {
    name: "Melissa",
    age: 30,
    isActive: true,
    hobbies: ["soccer", "baseball"],
    toString() {
        let objectString = this.name + " " + this.age + " " + this.hobbies;

        console.log(objectString)
    }
}

//person.toString();



let car = {
    brand: "toyota",
    age: 2008,
    doors: 5,
    traction: "4x4"
}

let smartTv = {
    brand: "LG",
    sizeInches: 49,
    color: "black",
    smartT: true

}

let youtubeVideo = {
    format: "1080p",
    lengthMin: "25:00 min",
    forKids: true,


}

console.log(car);
console.log(smartTv);
console.log(youtubeVideo);



