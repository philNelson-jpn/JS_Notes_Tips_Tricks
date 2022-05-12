const person = {
    name: "Phil",
    age: 33,
    favoriteFood: "pizza",
    address: {
        street: "Joseph",
        city: "Oxford"
    }
}

const array = [1, 2, 3, 4, 4, 3, 2, 5]
const array2 = ["A", "B", "A", "W", "C", "D", "B"]

function removeDuplicates(array){
    return [...new Set(array)]
}

console.log(removeDuplicates(array))
// (5) [1, 2, 3, 4, 5]
console.log(removeDuplicates(array2))


/*
Map Exercise
const idMap = new Map([
    [1, {test: "test1", description: "desc1"}],
    [2, {test: "test2", description: "desc2"}],
    [3, {test: "test3", description: "desc3"}],
])

function getId(id){
    return idMap.get(id)
}

console.log(getId(2))
// {test: "test2", description: "desc2"}


// function greet(firstName = "human.", salutation = "Hello there,"){
//     console.log(`${salutation} ${firstName}`)
// }

// greet()

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

