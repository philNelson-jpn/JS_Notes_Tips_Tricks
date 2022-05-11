const person = {
    name: "Phil",
    age: 33,
    favoriteFood: "pizza",
    address: {
        street: "Joseph",
        city: "Oxford"
    }
}

function greet(firstName = "human.", salutation = "Hello there,"){
    console.log(`${salutation} ${firstName}`)
}

greet()

// const {name: firstName} = person
// console.log(firstName)

// function separateName(fullName){
//     const [firstName, lastName] = fullName.split(' ')
//     return{
//         firstName,
//         lastName
//     }
// }

// const {firstName, lastName} = separateName("Phil Nelson")
// console.log(lastName)

// const divs = [...document.querySelectorAll('div')]

// divs.map((div) => {
//     console.log(div)
// })

/*default param
// function printName(firstName, lastName = "Nelson", { salutation = "Hello there"} = {}){
//     console.log(`${salutation} ${firstName} ${lastName}`)
// }

// printName("Phil", undefined)
*/

//null coalescing review

