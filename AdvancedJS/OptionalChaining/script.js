const phil = {
    name: "Phil",
    age: 33,
    address: {
        street: "Joseph",
        city: "Oxford",
    },
    hobbies: ["programming", "exercise", "language-learning"],
    // sayHi(){
    //     console.log("Hi")
    // },
}

function callSayHi(person){
    person?.sayHi?.()
}

callSayHi(phil)
// Will log "Hi" but will not throw an error if the function does not exist or we pass a falsey/non-existant argument.

// function printStreet(person){

//     console.log(person?.address?.street)
//     // is the same as:
//     // console.log(person && person.address && person.address.street)
// }

// printStreet(phil)
// // Joseph

function printThirdHobby(person){
    console.log(person?.hobbies?.[2])
}

printThirdHobby(undefined)
// undefined (not a type-error)






