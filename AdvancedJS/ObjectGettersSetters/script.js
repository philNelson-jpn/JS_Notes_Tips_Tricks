// Let's say that we want to combine two or more key/value pairs from an object

/*
const person = {
    firstName: "Phil",
    lastName: "Nelson",
    fullName(){
        return this.firstName + ' ' + this.lastName
    },
}

console.log(person.fullName())
*/
// Phil Nelson
// We need to call the function, wouldn't it be nicer if we could have fullName act as a key rather than a function that returns a value?

/*

// GETTER
const person = {
    firstName: "Phil",
    lastName: "Nelson",
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
}

console.log(person.fullName)
// Phil Nelson

// Use a getter to calculate someone's birth year
const personAge = {
    age: 25,
    get yearBorn(){
        const date = new Date()
        return date.getFullYear() - this.age
    },
}

console.log(personAge.yearBorn)
// if 2022 then 1997
*/

// SETTER
// Always takes a value as an argument
/*
const person = {
    firstName: "Phil",
    lastName: "Nelson",
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){
        ;[this.firstName, this.lastName] = value.split(' ')
    },
}

// This allows us to set a new value for fullName that will overwrite our getter if we explicitly assign it a new value
person.fullName = "Ricky Bobby"

console.log(person.fullName)
// Ricky Bobby
*/

const person = {
    ageThisYear: 34,
    get birthYear(){
        const date = new Date()
        return date.getFullYear() - this.ageThisYear
    }
}

console.log(person.birthYear)


