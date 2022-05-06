/*
// Array destructuring

const array = ["A", "B", "C", "D"]

// const first = array[0]
// const second = array[1]

// console.log(first, second)
    //A B

// Tell JS that we want to do destructuring on an array, by using []

const [first, second] = array

console.log(first, second)
    //A B

// Array Destructuring with a Function
function addAndMultiply(a, b){
    return [a + b, a * b]
}

const result = addAndMultiply(2, 3)
console.log(result)
// [5, 6]

const [sum, product] = addAndMultiply(3, 4)
console.log(sum)
console.log(product)
// 7
// 12
*/


// Object Destructuring

const person = {
    name: "Phil",
    age: 33,
    favoriteFood: "pizza",
    address: {
        street: "Joseph",
        city: "Oxford"
    }
}

const { address: streetName } = person
const { street } = streetName

console.log(street)


