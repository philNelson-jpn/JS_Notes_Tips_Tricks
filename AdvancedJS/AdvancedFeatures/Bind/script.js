// Bind essentially just redfines the `this` keyword

window.name = "Global Name"

const person = {
    name: "Phil",
}

function printName(){
    console.log(this.name)
}

printName()
// Global Name

const newPrintName = printName.bind(person)
newPrintName()
// Phil

