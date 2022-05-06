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

function fullName(firstName, middleName, lastName){
    return `${firstName} ${middleName} ${lastName}`
}

const name = ["Phil", "Andrew","Nelson"]

console.log(fullName(...name))





