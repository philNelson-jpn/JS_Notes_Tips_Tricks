// Rest
/*
function sum(...numbers){
    return  numbers.reduce((sum, number) => sum + number, 0)
}

console.log(sum(10, 2, 4))
// 16
*/

// Spread
/*
const thingsToSum = [1, 3, 5]

function sum(...numbers){
    return  numbers.reduce((sum, number) => sum + number, 0)
}

console.log(sum(...thingsToSum))
*/

/*
function fullName(firstName, middleName, lastName){
    return `${firstName} ${middleName} ${lastName}`
}

const name = ["Phil", "Andrew", "Nelson"]

console.log(fullName(...name))
*/


/*

// Clone an array

const array = [1, 3, 5, 7]
const newArray = [...array]
array.push(3)
newArray.push(9)

console.log(array)
console.log(newArray)

// [1, 3, 5, 7, 3]
// [1, 3, 5, 7, 9]

*/

/*
const divs = document.querySelectorAll("div")

;[...divs].map(div => {
    console.log(div)
})

// or

const divs = [...document.querySelectorAll("div")]

divs.map(div => {
    console.log(div)
})

*/

// Combine two objects and add a new key/value

const person = {
    name: "Phil",
    age: 33,
    favoriteFood: "pizza",
    address: {
        street: "Joseph",
        city: "Oxford"
    }
}

const details = {
    favoriteColor: "blue",
    favoriteDessert: "ice cream"
}

const person2 = {...person, ...details, favoriteSport: "skateboarding"}

person2.name = "John"

console.log(person2)
console.log(person)





