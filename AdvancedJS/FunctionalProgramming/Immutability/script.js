// Objects and arrays are mutable even when we make them a constant variable because we are changing their reference. 

// const person = {
//     name: "Phil",
//     friends: ["Simon", "Caleb"],
//     address: {
//         street: "8020",
//     },
// }

// person.name = "Jim"
// Will modify person

// If we want to prevent an object from being changed (mutated), then we can use Object.freeze({object}). 
/*
const person = Object.freeze({
    name: "Phil",
    friends: ["Simon", "Caleb"],
    address: {
        street: "8020",
    },
})

person.name = "Philly"
console.log(person)
// name is still Phil

// However, this only freezes one level deep, allowing all other key/value pairs to be mutated.

person.friends.push("Bobby")
console.log(person.friends)
*/
// Bobby is added to friends

//  To get around this we can create a 'deepFreeze' function that will loop through our object and apply Object.freeze() to each line.

const person = deepFreeze({
    name: "Phil",
    friends: ["Simon", "Caleb"],
    address: {
        street: "8020",
    },
})

function deepFreeze(object){
    Object.values(object).forEach(value => {
        if (value && typeof value === "object"){
            deepFreeze(value)
        }
    })

    return Object.freeze(object)
}

person.name = "Jim"
// No change
// person.friends.push("Killmonger")
// Error: Cannot add property 2, object is not extensible
console.log(person)

// It is always best practice to clone an object/array to make changes rather than modifying the original.

const newPerson = { ...person, address: { ...person.address, street: "7080" } }
console.log(newPerson)