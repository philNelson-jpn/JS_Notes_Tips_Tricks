// class Animal {
//     constructor(name){
//         this.name = name
//     }

//     speak(){
//         console.log(`Hi, my name is ${this.name}`)
//     }
// }

// class Dog extends Animal {
//     constructor(name, owner){
//         super(name)
//         this.owner = owner
//     }

//     speak(){
//         console.log("Woof!")
//     }
// }

// const dog = new Dog("Fluffers", "Phil")
// console.log(dog.speak())
// // Woof!

// class Cat extends Animal {
//     // If we use the same property in our constructor as the class we are extending (Animal) then we do not need to include a constructor at all
//     speak(){
//         console.log("meow")
//     }
// }

// const cat = new Cat("Meowmers")
// console.log(cat.speak())
// // meow

// person with a name
// janitor that inherits person + number of mops prop + function of clean w/ number of mops

class Person {
    constructor(name){
        this.name = name
    }
}

class Janitor extends Person {
    constructor(name, numberOfMops){
        super(name)
        this.numberOfMops = numberOfMops
    }

    clean(){
        console.log(`I cleaned with ${this.numberOfMops} mops`)
    }
}

const janitor = new Janitor("PhilJan", 25)
console.log(janitor.clean())