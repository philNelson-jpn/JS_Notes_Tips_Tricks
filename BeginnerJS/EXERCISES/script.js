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

// 6-3-2022
// Change this to use an anonymous function. 
/* 
function printVariable(variable){
    console.log(variable)
}

function printName(name, callback){
    callback(`Hello there, ${name}`)
}

printName("Phil", printVariable)
// Hello there, Phil
printName("Phil", function(variable){
    console.log(variable)
})
// Hello there, Phil
printName("Phil", variable => console.log(variable))
// Hello there, Phil
*/

// 6-4-2022
/*
const a = [1, 2, 3, 4, 5]

const b = a.filter((element) => {
    return element <= 3
})

console.log(b)
*/

// Double an array in a new array w/ map
/*
const a = [1, 2, 3, 4, 5]

const b = a.map(element => element * 2)

console.log(b)
*/

// Create an anonymous arrow function that prints out the argument that we pass to func()
/*
function func(x, callback){
    callback(x)
}

func(10, (value) => {
    console.log(value)
})
*/
// Print out only the prices (only the numbers) with forEach
/*
const items = [
    { price: 10 },
    { price: 20 },
    { price: 16 },
    { price: 100 },
    { price: 130 }
]

const pricesOnly = items.forEach(item => console.log(item.price))
// 10 20 16 100 130
*/

// Get the total of all the prices above with reduce:
/*
const total = items.reduce((previousValue, currentValue) => previousValue + currentValue.price, 0)

console.log(`This is your total: ${total}`)
*/

// 6-6-2022
// Use the reduce method to get the total price of all of the items.
/*
const items = [
    { price: 10 },
    { price: 20 },
    { price: 16 },
    { price: 100 },
    { price: 130 }
]

const total = items.reduce((sum, item) => sum + item.price, 0)
console.log(total)

const found = items.find(item => item.price > 10)
console.log(found)
// { price: 10 }
const filtered = items.filter(item => item.price > 10)
console.log(filtered)
// { price: 10 },
// { price: 20 },
// { price: 16 },
// { price: 100 },
// { price: 130 }
*/

// Closures
/*
function closure(variable){
    return function func(variable2){
        console.log(variable)
        console.log(variable + variable2)
    }
}

const a = closure(7)
a(4)

*/

// Create a function that takes in a name and uses printVariable as a callback to print out "Hello, (name)"
/*
function printVariable(variable){
    console.log(variable)
}

function printName(name, callback){
    callback(`Hello there, ${name}`)
}

printName("Phil", printVariable)
*/

// Convert this while loop into a recursive function.
/*
const person = {
    name: "Phil",
    friend: {
        name: "Simon",
        friend: {
            name: "Caleb",
            friend: {
                name: "Sally"
            }
        }
    }
}



// while (currentPerson != null){
//     console.log(currentPerson.name)
//     currentPerson = currentPerson.friend
// }



function printName(currentPerson){
    if (currentPerson == null) return
    console.log(currentPerson.name)
    printName(currentPerson.friend)
}

printName(person)

*/

// Create a function that takes in a name and uses printVariable as a callback to print out "Hello, (name)"
/*
function printVariable(variable){
    console.log(variable)
}

function greet(name, callback){
    callback(`What's up, ${name}?`)
}

greet("Philly MacDonald", printVariable)
*/
/*
// Use filter to only return the first three values of an array
const a = [1, 2, 3, 4, 5]

// const b = a.filter(element => {
//     return element <= 3
// })

const b = a.filter(element => element <= 3)

console.log(b)
*/
/*
const person = {
    name: "Phil",
    friend: {
        name: "Simon",
        friend: {
            name: "Caleb"
        }
    }
}

// let currentPerson = person
// while(currentPerson !=null){
//     console.log(currentPerson.name)
//     currentPerson = currentPerson.friend
// }

function printFriends(currentPerson){
    if(currentPerson == null) return
    console.log(currentPerson.name)
    printFriends(currentPerson.friend)
}

printFriends(person)
//Phil Simon Caleb
*/
// Change this to use an anonymous function. 

// Hint: define printVariable within printName instead of outside of it.
/*
function printVariable(variable){
    console.log(variable)
}

function printName(name, callback){
    callback(`Hello ${name}`)
}

printName("Phil", printVariable)
// Hello Phil

printName("Phil", function(value){
    console.log(value)
})
// Hello Phil

printName("Philly", value => console.log(value))
// Hello Philly
*/

// Create a function that uses a closure (a function within another function) called closure() that takes in one argument (a variable).

// The function within closure() (func()) will take in a separate argument (another variable) and log both the closure() arg. and the func() arg.

// Hint: We need to assign closure() to a variable to be able to use the function within it when we call it again.
/*
function closure(variable){
    return function func(variable2){
        console.log(variable)
        console.log(variable2)
    }
}

const a = closure(2)
a(3)
// 2
// 3
*/