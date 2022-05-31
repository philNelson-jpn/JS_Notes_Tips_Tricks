// Array Methods

// forEach
/*
const a = [1, 2, 3, 4, 5]

a.forEach((number, index) => {
    console.log(number, index)
})

*/
// With objects
const items = [
    { price: 10 },
    { price: 20 },
    { price: 14 },
    { price: 1 },
    { price: 6 }
]

const eachPrice = items.forEach(element => {
    console.log(element.price)
})
//10
//20
//14
//1
//6



// Map
/*
const a = [1, 2, 3, 4, 5]

const b = a.map(number => number * 2)
// mapping *returns* a new array

console.log(b)
// [2, 4, 6, 8, 10]
*/

// Filter
/*
const a = [1, 2, 3, 4, 5]

const b = a.filter(number => number <= 3)
// filter *returns* all of the values that meet the criteria (that are true)

console.log(b)
// [1, 2, 3]
*/

// Find
/*
const a = [1, 2, 3, 4, 5]

const b = a.find(number => number > 3)
// find returns only the first value that it FINDS matches the criteria we assign it

console.log(b)
// [4]
*/

// Some
/*
const a = [1, 2, 3, 4, 5]

const isTrue = a.some(number => number > 3)
// some returns true or false (are there numbers greater than 3?)

console.log(isTrue)
// true

const isFalse = a.some(number => number > 9)

console.log(isFalse)
// false
*/

// Every
/*
const a = [1, 2, 3, 4, 5]

const b = a.every(number => number > 3)
// every returns true or false only if ALL array elements meet the criteria

console.log(b)
// false
*/

// Reduce
/*
const a = [1, 2, 3, 4, 5]

// const b = a.reduce((sum, number) => sum + number, 0)
const b = a.reduce((sum, number) => {
return sum + number
}, 0)

console.log(b)
// 15



const items = [
    { price: 10 },
    { price: 20 },
    { price: 14 },
    { price: 1 },
    { price: 6 }
]

const total = items.reduce((sum, item) => sum + item.price, 0)
console.log(total)
// 51
*/


// Includes

const a = [1, 2, 3, 4, 5]

const b = a.includes(3)
// returns true if an array has an element and false if it does not

console.log(b)
// true






