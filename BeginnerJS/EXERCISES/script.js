// function printVariable(variable){
//     console.log(variable)
// }

// function func(x) {
//     x("Hello world")
// }

// func(printVariable)

// function sum(a, b, callback){
//     callback(a + b)
// }

// function sumHandler(sum){
//     console.log(sum)
// }

// sum(2, 4, sumHandler)

// Passing functions as arguments.
// function printVariable(variable){
//     console.log(variable)
// }

// function printName(name, callback){
//     callback(`Hello ${name}`)
// }

// printName("Phil", printVariable)
// Hello Phil

// 5-31-2022

/*
// Create a function that takes in a name and uses printVariable as a callback to print out "Hello, (name)"
function printVariable(variable){
    console.log(variable)
}

function greet(name, callback){
    callback(`Hello, ${name}`)
}

greet("Phil", printVariable)
// Hello, Phil
*/

// Change this↑ to use an anonymous function. 
/*
function greet(name, callback){
    callback(`Hello, ${name}`)
}

greet("Phil", function(variable){
    console.log(variable)
})
// Hello, Phil
*/

/*
// Create an anonymous ARROW function as the callback that prints out 10.
function func(x, callback){
    callback(x)
}

func(10, (number) => console.log(number))
// 10
*/

/*
// Create a function that uses a closure (a function within another function) that takes in one argument. The function within the closure function (func()) will take in a separate argument and log both the closure() arg. and the func() arg.

// Hint: We need to assign closure() to a variable to be able to use the function within it when we call it again.

function func(variable){
    return function printer(variable2){
        console.log(variable, variable2)
    }
}

const a = func(1)
a(2)
// 1 2
*/

/*
// Use map to double the numbers of an array in a new array.
const a = [2, 4, 6, 8, 10]

const b = a.map(element => element * 2)

console.log(b)
// [4, 8, 12, 16, 20]
*/

/*
// Use filter to return only the first three numbers of an array on a new array.

const a = [1, 2, 3, 4, 5]

const b = a.filter(element => element <= 3)
console.log(b)
// [1, 2, 3]
*/

/*
// Use reduce to get the total of this array:
const items = [
    { price: 10 },
    { price: 20 },
    { price: 59 },
    { price: 64 },
    { price: 22 },
]

const total = items.reduce((sum, item) => sum + item.price, 0)
console.log(total)
// 175
*/

/*
// Use the forEach method to only print out the price of each item (only the number)

const items = [
    { price: 10 },
    { price: 20 },
    { price: 59 },
    { price: 64 },
    { price: 22 },
]

const prices = items.forEach(item => console.log(item.price))
*/