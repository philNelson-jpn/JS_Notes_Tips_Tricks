
/*
function printName(name){
    name = name || "Phil"
    console.log(name)
}

printName()
// Phil
printName("Jimbo")
// Jimbo
*/

const person = {
    name: "Phil",
    address: {
        street: "main st."
    }
}
// Short Circuit Evaluation with &&
console.log(person && person.address && person.address.street)
// Optional Chaining
console.log(person?.address?.street)

