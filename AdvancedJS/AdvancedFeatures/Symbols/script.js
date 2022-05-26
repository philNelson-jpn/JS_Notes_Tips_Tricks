// Symbols are always unique
// Use case: create a private variable on an object

const sym = Symbol("Name")

const person = {
    age: 25,
    [sym]: "Phil"
}

console.log(person[sym])
// Phil

console.log(person)