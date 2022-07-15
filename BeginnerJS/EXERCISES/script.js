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

// 6-14-2022
// Create an anonymous ARROW function as the callback that prints out 10.
/*
function func(x, callback){
    callback(x)
}

func(10, variable => console.log(variable))
*/
// Create a function that creates an array of random numbers between 1 and 99
/*
let numbers = [1, 2, 3]
let random = n => Math.floor(Math.random() * n)
let randomNumbers = numbers.map(() => random(100))
console.log(randomNumbers)
*/
// double an array with map
/*
const array = [1, 2, 3, 4, 5]
const newArray = array.map(number => number * 2)
console.log(newArray)
*/
/*
const items = [
    { price: 10 },
    { price: 20 },
    { price: 14 },
    { price: 1 },
    { price: 6 }
]

items.forEach(item => console.log(item.price))
const total = items.reduce((sum, item) => sum + item.price, 0)
console.log(total)
*/
// 6-16-2022
// find vs. filter
/*
const a = [1, 2, 3, 4, 5]
const b = a.find(number => number > 3)
console.log(b)
// 4
const c = a.filter(number => number > 3)
console.log(c)
// [4, 5]
const prices = [
    { price: 10 },
    { price: 20 },
    { price: 30 },
    { price: 16 },
    { price: 23 },
]
const d = prices.filter(item => item.price > 20)
console.log(d)
// { price: 30 }
// { price: 23 }
*/
// Change playerNumber to 16 and then use bracket notation to get the player associated with the playerNumber
/*
const testObject = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
}

const playerNumber = 16
const player = testObject[playerNumber]
console.log(player)
// Montana
*/
// How do you remove a property/value from an object?
/*
const testObject = {
    12: "Namath",
    16: "Montana",
    19: "Unitas",
    "bark": "bow-wow"
}
delete testObject[12]
delete testObject.bark
console.log(testObject)
// {16: 'Montana', 19: 'Unitas'}
*/
// Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.
/*
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }
 */ 

/*
function phoneticLookup(val) {
    let result = ""
  
    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }

    result = lookup[val]
    return result
  }
  
console.log(phoneticLookup("foxtrot"))
*/
/*
// What method can we use to determine if an object contains a property?
const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
}
console.log(lookup.hasOwnProperty("alpha"))
// true

function checkObject(obj, checkProp){
    return obj.hasOwnProperty(checkProp)
}
console.log(checkObject(lookup, "bravo"))
// true

// return the value of the property if it exists or print "Not Found" if it does not:
function returnProp(obj, prop){
    if(obj.hasOwnProperty(prop)){
        return obj[prop]
    }
        return "Not Found"
}
console.log(returnProp(lookup, "echo"))
// Easy
console.log(returnProp(lookup, "beebee"))
// Not Found
*/
// Update Album/Music collection
/*
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  }

  function updateRecords(records, id, prop, value) {
// If "prop" isn't "tracks" and "value" isn't an empty string, update or set that album's "prop" to "value".
    if(prop !== "tracks" && value !== ""){
        records[id][prop] = value
        // If "prop" is "tracks" but the album doesn't have a "tracks" property, create an empty array and add "value" to it.
    }else if(prop === "tracks" && records[id].hasOwnProperty("tracks") === false){
        records[id][prop] = [value]
        // If "prop" is "tracks" and "value" isn't an empty string, add "value" to the end of the album's existing "tracks" array.
    } else if(prop === "tracks" && value !== ""){
        records[id][prop].push(value)
        // If value is an empty string, delete the given prop property from the album.
    } else if(value === ""){
        delete records[id][prop]
    }
    return records
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');
  console.log(recordCollection[5439])

  /*
    if(value !== "" && prop !== "tracks"){
      records[id][prop] = value
    } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false){
      records[id][prop] = [value]
    } else if (prop === "tracks" && value !== ""){
      records[id][prop].push(value)
    } else if (value === ""){
      delete records[id][prop]
    }
  */
/*
const myArray = [];
let i = 5

while(i >= 0){
    myArray.push(i)
    i--
}

console.log(myArray)
// [5, 4, 3, 2, 1, 0]
*/
// 6-17-2022
// Update Album/Music collection
/*
  function updateRecords(records, id, prop, value){
        if(prop !== "tracks" && value === ""){
            records[id][prop] = value
        }else if(prop === "tracks" && records[id].hasOwnProperty("tracks") === false){
            records[id][prop] = value
        }else if(prop === "tracks" && value !== ""){
            records[id][prop].push(value)
        }else if(value === ""){
            delete records[id][prop]
        }
    return records
  }
*/
// Use a WHILE loop to print out the result.
/*
const myArray = []

let i = 5
while(i >= 0){
    myArray.push(i)
    i--
}

console.log(myArray)
// [5, 4, 3, 2, 1, 0]
*/
// Write a for loop that iterates through the array and returns the total of the sum of the items in the array
/*
const myArr = [2, 3, 4, 5, 6]

let total = 0
for(let i = 0; i < myArr.length; i++){
    total += myArr[i]
}
console.log(total)
*/

// 6-18-2022
/*
function multiplyAll(arr){
    let product = 1
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            product *= arr[i][j]
        }
    }
    return product
}

console.log(multiplyAll([[1,2], [3,4], [5,6,7]]))
*/
// first three values of an array with filter:
/*
const a = [1, 2, 3, 4, 5]
const b = a.filter(value => value <= 3)
console.log(b)
*/

// Do...while vs. while
/* 
const array = []
let i = 0

// while(i <= 5){
//     array.push(i)
//     i++
// }

do{
    array.push(i)
    i++
} while(i <= 5)

console.log(array)
*/
/*
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ]

  function lookUpProfile(name, prop) {
    // loop through the array
    for(let i = 0; i < contacts.length; i++){
        if(name === contacts[i].firstName){
            if(contacts[i].hasOwnProperty(prop)){
                return contacts[i][prop]
            }else{
                return "No such property"
            }
        }
    }
    return "Profile does not exist"
        // use a nested if statement to check if name matches a contact and then if the property exists

                // else return "No such property"

    // If the loop fails (is false), return "Profile does not exist"

  }
  
  console.log(lookUpProfile("Akira", "likes"))
//   ['Pizza', 'Coding', 'Brownie Points']

*/
// Random number between 0 and 10
/*
const num = Math.floor(Math.random() * 11)
console.log(num)
*/

// 6-20-2022
// Use a nested for loop to iterate through an array and multiply all of the values:
/*
function multiplyAll(arr){
    let product = 1
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            product *= arr[i][j]
        }
    }
    return product
}

console.log(multiplyAll([[1,2], [3,4], [5,6,7]]))
// 5040
*/

// Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.
/*
const myArray = [["John", 23], ["dog", 3]];

const removedFromMyArray = myArray.shift()
console.log(removedFromMyArray)
// ["John", 23]
*/
/*
const person = {
    name: "Phil"
}

console.log(person.hasOwnProperty("name"))

function checkObj(obj, prop){
    if(obj.hasOwnProperty(prop)){
        console.log(`The property name is "${obj[prop]}"`)
    }else{
        console.log(`This object does not contain the "${prop}" property.`)
    }
}

checkObj(person, "name")
// The property name is "Phil"
checkObj(person, "age")
// This object does not contain the "age" property.
*/
/*
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ]

  function lookUpProfile(name, prop) {
    // loop through the array (contacts)
        for(let i = 0; i < contacts.length; i++){
            if(contacts[i].firstName === name){
                if(contacts[i].hasOwnProperty(prop)){
                    return contacts[i][prop]
                }else{
                    return "No such property"
                }
            }
        }
        // use a nested if statement to check if name matches a contact and then if the property exists

                // else return "No such property"

    // If the loop fails (is false), return "Profile does not exist"
        return "Profile does not exist"
  }

  console.log(lookUpProfile("Akira", "likes"))
//   ['Pizza', 'Coding', 'Brownie Points']
*/

// Create a function that takes in a name and uses printVariable as a callback to print out "Hello, (name)"
/*
function printVariable(variable){
    console.log(variable)
}

function printSum(a, b){
    console.log(a + b)
}

function sayHi(name, callback, callback2){
    callback(`Hello, ${name}`)
    callback2(2, 4)
}

sayHi("Phil", printVariable, printSum)
// Hello, Phil
// 6
*/
// Add ["Paul", 35] to the beginning of the myArray variable using unshift().
/*
const myArray = []
myArray.unshift(["Paul", 35])
console.log(myArray[0])
// ['Paul', 35]
*/
// Change playerNumber to 16 and then use bracket notation to get the player associated with the playerNumber
/*
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
}

const playerNumber = 16
const player = testObj[playerNumber]
console.log(player)
*/
// Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.
/*
function phoneticLookup(val) {
    let result = "";
  
    const lookup = {"alpha":"Adams",
    "bravo":"Boston",
    "charlie":"Chicago",
    "delta":"Denver",
    "echo":"Easy",
    "foxtrot":"Frank"
    }

    result = lookup[val]
  
    return result;
  }
  
  console.log(phoneticLookup("charlie"))
//   "Chicago"
*/
// Use the reduce method to get the total price of all of the items.
/*
const items = [
    { price: 10 },
    { price: 30 },
    { price: 40 },
    { price: 55 },
    { price: 22 },
]

const total = items.reduce((sum, item) => {
    return sum + item.price
}, 0)
// Rather than write the arrow function all on one line, it was better to write it out with the return statement and curly brackets so that I could remember the default value 0 on the end.
console.log(total)
*/
// Use a WHILE loop to print out [5, 4, 3, 2, 1, 0]
/*
const myArray = []
let i = 5
while(i >= 0){
    myArray.push(i)
    i--
}
console.log(myArray)
// [5, 4, 3, 2, 1, 0]
*/

// 6-21-2022
// Create a closure function (a function within another function)
/*
function closure(variable){
    return function func(variable2){
        console.log(variable)
        console.log(variable2)
    }
}

const a = closure(2)
a(3)
*/
// How do you remove a property/value from an object?
/*
const person = {
    name: "Phil",
    age: 34,
    address: {
        street: "Joseph",
        town: "Oxford"
    }
}

delete person.age
console.log(person.age)
// undefined
*/
// Using Math.floor and Math.random, return a random whole number that is >= myMin and <= myMax.
/*
function randomRange(myMin, myMax){
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}

console.log(randomRange(2, 26))
*/
// Use recursion to return an array that begins with startNum and ends with endNum.
/*
function rangeOfNumbers(startNum, endNum){
    if(endNum - startNum === 0){
        return [startNum]
    }else{
        const newArray = rangeOfNumbers(startNum, endNum -1)
        newArray.push(endNum)
        return newArray
    }
}
console.log(rangeOfNumbers(2, 25))
// [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
*/
// 6-22-2022
// Use recursion to return an array that begins with startNum and ends with endNum.
/*
function rangeOfNumbers(startNum, endNum){
    if(endNum - startNum === 0){
        return [startNum]
    } else {
        const array = rangeOfNumbers(startNum, endNum - 1)
        array.push(endNum)
        return array
    }

}

console.log(rangeOfNumbers(2, 7))
//  [2, 3, 4, 5, 6, 7]
*/
/*
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ]

  function lookUpProfile(name, prop) {
    // loop through the array
    for(let i = 0; i < contacts.length; i++){
        if(name === contacts[i].firstName){
            if(contacts[i].hasOwnProperty(prop)){
                return contacts[i][prop]
            }else{
                return "No such property"
            }
        }
    }
    return "This contact does not exist"
        // use a nested if statement to check if name matches a contact and then if the property exists

                // else return "No such property"

    // If the loop fails (is false), return "Profile does not exist"
    }

  console.log(lookUpProfile("Harry", "likes"))
  */

// Do...while vs. while loops
/*
// Do while
let arr = []
let i = 5
do{
    arr.push(i)
    i--
} while(i > 0)
console.log(arr)
// [5, 4, 3, 2, 1]

// While
let arr2 = []
let j = 0
while(j < 5){
    arr2.push(j)
    j++
}
console.log(arr2)
// [0, 1, 2, 3, 4]
*/

// Write a for loop that iterates through the array and returns the total of the sum of the items in the array
/*
const myArr = [2, 3, 4, 5, 6]
let total = 0

for(let i = 0; i < myArr.length; i++){
    total += myArr[i]
}

console.log(total)
*/
// 6-23-2022
// Use a nested for loop to iterate through an array and multiply all of the values:
/*
function multiplyAll(arr){
    let product = 1
        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < arr[i].length; j++){
                product *= arr[i][j]
            }
        }
    return product
}

console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]))
*/
// Generate a random whole number between 1 and 10
// console.log(Math.floor(Math.random() * 11))

// Convert a while loop into a recursive function
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
// Print everyone's names with a while loop
// let currentPerson = person
// while(currentPerson != null){
//     console.log(currentPerson.name)
//     currentPerson = currentPerson.friend
// }

// function printNames(currentPerson){
//     if(currentPerson != null){
//         console.log(currentPerson.name)
//         printNames(currentPerson.friend)
//     }
// }

// OR
function printNames(currentPerson){
    if(currentPerson == null) return
        console.log(currentPerson.name)
        printNames(currentPerson.friend)
}

printNames(person)
*/
// 6-27-2022
/*
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ]

  function lookUpProfile(name, prop){
    for(let i = 0; i < contacts.length; i++){
        if(contacts[i].firstName === name){
            if(contacts[i].hasOwnProperty(prop)){
                return contacts[i][prop]
            }else{
                return "No such property"
            }
        }
    }
    return "Profile does not exist"

  }

  console.log(lookUpProfile("Akira", "age"))
  */

//   Create an anonymous ARROW function as the callback that prints out 10.
/*
function func(x, callback){
    callback(x)
}

func(10, (value) => console.log(value))
*/
// Use recursion to return an array that begins with startNum and ends with endNum.
/*
function rangeOfNumbers(startNum, endNum){
    if(endNum - startNum === 0){
        return [startNum]
    }else{
        const array = rangeOfNumbers(startNum, endNum - 1)
        array.push(endNum)
        return array
    }
}
console.log(rangeOfNumbers(2, 5))
*/
/*
// Return a random number between 0 and 50
function randomRange(){
    return Math.floor(Math.random() * (50 - 2 + 1) + 2)
}
console.log(randomRange())
// Make a min and max argument that the user can choose to specify a range of numbers from which a random number will be generated
function randomRangeGenerator(minVal, maxVal){
    return Math.floor(Math.random() * (maxVal - minVal + 1) + minVal)
}
console.log(randomRangeGenerator(2, 7))
*/
// Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.
/*
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }



function phoneticLookup(val) {
    let result = ""
  
    const list = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
      }

    result = list[val]
    return result
  }
  
console.log(phoneticLookup("foxtrot"))
 */ 

// Use map to double the numbers of an array in a new array.
/*
const a = [1, 2, 3, 4, 5, 6]
const b = a.map(val => val * 2)
console.log(b)
console.log(a)
// [2, 4, 6, 8, 10, 12]
*/

// Use find and filter on an array of objects of prices
/*
const prices = [
    { price: 12 },
    { price: 120 },
    { price: 122 },
    { price: 102 },
    { price: 19 },
    { price: 39 }
]

const total = prices.reduce((sum, item) => sum + item.price, 0)
console.log(total)

const found = prices.find(item => item.price > 12 && item.price < 40)
console.log(found)
// {price: 19}
const filtered = prices.filter(item => item.price > 12 && item.price < 40)
console.log(filtered)
// {price: 19}
// {price: 39}
*/

// do...while and while loop
/*
const a = []
let i = 0
while(i < 5){
    a.push(i)
    i++
}

console.log(a)

const b = []
let j = 0
do{
    b.push(j)
    j++
}while(j < 5)

console.log(b)
*/
// Change playerNumber to 16 and then use bracket notation to get the player associated with the playerNumber
/*
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
}

const playerNumber = 16
const player = testObj[playerNumber]
console.log(player)
// Montana



function getPlayer(obj, playerNumber){
    console.log(obj[playerNumber])
}

getPlayer(testObj, 16)
// Montana
*/
// 6-29-2022
// Use a WHILE loop to print out [5, 4, 3, 2, 1, 0]
/*
const myArray = []
let i = 5
while(i >= 0){
    myArray.push(i)
    i--
}
console.log(myArray)
*/
// Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.
/*
const myArray = [1, 2, 3, 4]
const removedFromMyArray = myArray.shift()
console.log(removedFromMyArray)
//1
const myArray2 = [[1, 2], ["John", 32]]
const removedFromMyArray2 = myArray2[1].shift()
console.log(removedFromMyArray2)
//John
*/

// Write a function that takes in an array, removes the first two items and replaces them with two others.
/*
function replaceFirstTwo(arr){
    arr.splice(0, 2, "New item 1", "New item 2")
    return arr
}
let itemArray = ["Humpty", "Dumbty", "Item 3", "Item4"]
console.log(replaceFirstTwo(itemArray))
// ['New item 1', 'New item 2', 'Item 3', 'Item4']
*/

// Write a function that takes in an array and returns a new array with only the third and fourth items in the original array.
/*
function pickAndChoose(arr){
    const newArray = arr.slice(2,4)
    return newArray
}

console.log(pickAndChoose(["rainy", "cloudy", "warm", "sunny", "tornados"]))
// ['warm', 'sunny']
*/

// Write a function that takes an array and a number. Use a while loop to loop over the array and push a copy of the array to a new array the number of times specified by the number argument.
/*
function copyArrays(arr, number){
    let newArray = []
    while(number >= 1){
        newArray.push([...arr])
        number--
    }
    return newArray
}

console.log(copyArrays(["Yes", "Hello", "Goodbye"], 3))
// [['Yes', 'Hello', 'Goodbye'],
// ['Yes', 'Hello', 'Goodbye'],
// ['Yes', 'Hello', 'Goodbye']]
*/

// 6-30-2022
/*
// Write a function that takes in an array, removes the first two items and replaces them with two others.
function replaceFirstTwo(arr){
    arr.splice(0, 2, "grumpy", "dopey")
    // or
    // arr.splice(0, 2)
    // arr.unshift("grumpy", "dopey")
    return arr
}

console.log(replaceFirstTwo(["happy", "hungry", "sleepy"]))
*/
// Write a function that takes in an array and returns a new array with only the third and fourth items in the original array.
/*
function threeAndFour(arr){
    let newArray = arr.slice(2,4)
    return newArray
}

console.log(threeAndFour(["happy", "hungry", "sleepy", "dopey"]))
*/
// Write a function that takes an array and a number. Use a while loop to loop over the array and push a copy of the array to a new array the number of times specified by the number argument.
/*
function copyMe(arr, num){
    let newArray =[]
    while(num >= 1){
        newArray.push([...arr])
        num--
    }
    return newArray
}

console.log(copyMe(["Yes", "No", "Maybe"], 3))
*/

// import * as funcModule from "./index.js"
// 7-1-2022
// Write a closure function that returns a function that logs out both its argument and the closure function's argument.
/*
function closure(variable){
    return function func(variable2){
        console.log(variable)
        console.log(variable2)
    }
}

let a = closure(1)
a(2)
*/
// Use recursion to return an array that begins with startNum and ends with endNum.
/*
function rangeOfNums(startNum, endNum){
    if(endNum - startNum === 0){
        return [startNum]
    }else{
        let array = rangeOfNums(startNum, endNum - 1)
        array.push(endNum)
        return array
    }
}

console.log(rangeOfNums(2, 8))
*/
// Write a function that takes in an array, removes the first two items and replaces them with two new ones.
/*
function removeFirstTwo(array){
    array.splice(0, 2, "Merry", "Frodo")
    return array
}

console.log(removeFirstTwo(["Bilbo", "Golem", "Pippin", "Sam"]))
// ['Merry', 'Frodo', 'Pippin', 'Sam']
*/
// Use a nested for loop to iterate through an array and multiply all of the values:
/*
function multiplyAllTheThings(arr){
    let product = 1
        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < arr[i].length; j++){
                product *= arr[i][j]
            }
        }
    return product
}

const array = [[1,2],[3,4],[5,6,7]]
console.log(multiplyAllTheThings(array))
// 5040
*/

// Write a function that takes in an array and returns a new array with only the third and fourth items in the original array.
/*
function onlyThirdAndFourth(arr){
    const newArray = arr.slice(2,4)
    return newArray
}
const originalGang = ["Merry", "Pippin", "Frodo", "Sam"]
console.log(onlyThirdAndFourth(originalGang))
// ['Frodo', 'Sam']
*/
//7-2-2022
// Loop through an object and return the number of users that are online with a for...in loop
/*
const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: true
    }
  }
  
  function countOnline(usersObj) {
    let number = 0
    for(user in usersObj){
        if(usersObj[user].online === true){
            number++
        }

    }
    return number
  }
  
  console.log(countOnline(users))
//   2
*/
// Add ["Paul", 35] to the beginning of the myArray variable using unshift().
/*
const myArray = [["Phil", 34], ["Jin", 4]]
myArray.unshift(["Paul", 35])
console.log(myArray[0])
// ["Paul", 35]
*/

// What method can you use on an object to return the keys of that object in an array?
/*
const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: true
    }
}

function printKeys(obj){
    return Object.keys(obj)
}

console.log(printKeys(users))
// ['Alan', 'Jeff', 'Sarah']
*/

// Using Math.floor and Math.random, return a random whole number that is >= myMin and <= myMax.
/*
function randomRange(myMin, myMax){
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}

console.log(randomRange(2,26))
*/
// 7-4-2022
/*
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ]

  function lookUpProfile(name, prop) {
    for(let i = 0; i < contacts.length; i++){
        if(name === contacts[i].firstName){
            if(contacts[i].hasOwnProperty(prop)){
                return contacts[i][prop]
            }
        }else{
            return "No such property"
        }
    } return "Profile does not exist"
  }
  
  console.log(lookUpProfile("Akira", "likes"))
//   ['Pizza', 'Coding', 'Brownie Points']
*/

// Assign list to a destructured array that is equal to the 3 through 10.
/*
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function removeFirstTwo(list){
    const [a, b, ...arr] = list
    return arr
}

const arr = removeFirstTwo(source)
console.log(arr)
*/

// 7-5-2022
// How do you remove a property/value from an object?
/*
const person = {
    name: "Phil",
    age: 34,
    favoriteFood: "pizza"
}

delete person.favoriteFood
console.log(person.favoriteFood)
//undefined
*/

// How do we generate a random WHOLE number between 1-10?
/*
let randomWhole = Math.floor(Math.random() * 11)
console.log(randomWhole)
*/

// Write a function that takes in an array, removes the first two items and replaces them with two new ones.
// Hint: The array method you use can take in more than two arguments.
/*
let fellowship = ["Ron", "Hermione", "Pippin", "Merry"] 
function replaceFirstTwo(arr){
    arr.splice(0, 2, "Frodo", "Sam")
    return arr
}

console.log(replaceFirstTwo(fellowship))
// ['Frodo', 'Sam', 'Pippin', 'Merry']
*/

// Write a function that takes in an array and returns a new array with only the third and fourth items in the original array.
/*
function threeAndFour(arr){
    let newArray = arr.slice(2,4)
    return newArray
}

const array = [1,2,3,4,5,6]

console.log(threeAndFour(array))
// [3, 4]
console.log(array)
// [1,2,3,4,5,6]
*/
// Use the reduce method to get the total price of all of the items.
/*
const items = [
    { price: 10 },
    { price: 110 },
    { price: 22 },
    { price: 37 },
    { price: 14 }
]

const total = items.reduce((sum, item) => sum + item.price, 0)
console.log(total)
// 193
*/
// Write a function that takes an array and a number. Use a while loop to loop over the array and push a copy of the array to a new array the number of times specified by the number argument.
/*
function copyMachine(arr, num){
    let newArray = []
    while(num >= 1){
        newArray.push([...arr])
        num--
    }
    return newArray
}

console.log(copyMachine([1,2,3,4], 4))
// [1, 2, 3, 4] x 4
*/

// Write a function that reverses a string (for loop)
/*
function reverseAString(str){
    reversedString = ""
    for (let i = str.length - 1; i >= 0; i--){
        reversedString += str[i]
    }
    return reversedString
}

console.log(reverseAString("Hello"))
*/
// Write a function that reverses a string (methods)
/*
function stringReverser(str){
    return str.split('').reverse().join('')
}

console.log(stringReverser("Hello2"))
// 2olleH
*/

//7-6-2022

// Write a function that reverses a string with a for loop
/*
function reverseMe(str){
    reversedStr = ""
    for(let i = str.length - 1; i >= 0; i--){
        reversedStr += str[i]
    }
    return reversedStr
}

console.log(reverseMe("hiiiiii"))
// iiiiiih
*/

// Use recursion to return an array that begins with startNum and ends with endNum.
/*
function rangeOfNumbers(startNum, endNum){
    if(endNum - startNum === 0){
        return [startNum]
    }else{
        let array = rangeOfNumbers(startNum, endNum - 1)
        array.push(endNum)
        return array
    }
}

console.log(rangeOfNumbers(2, 7))
*/

// Write a function that reverses a string (using methods)
/*
function reversoBot(str){
    return str.split('').reverse().join('')
}
console.log(reversoBot("Hello"))
// olleH
*/

// Convert this while loop into a recursive function.
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

let currentPerson = person
while(currentPerson != null){
    console.log(currentPerson.name)
    currentPerson = currentPerson.friend
}

function printNames(currentPerson){
    if(currentPerson == null) return
    console.log(currentPerson.name)
    printNames(currentPerson.friend)
}

printNames(person)
*/
// Write a for loop that iterates through the array and returns the total of the sum of the items in the array
/*
const myArr = [2, 3, 4, 5, 6]

let total = 0
for(let i = 0; i < myArr.length; i++){
    total += myArr[i]
}

console.log(total)
*/

// Loop through the array to return each item and wrap it in an <li> tag with a class "text-warning" using string template literals.
/*
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
    }

    function makeList(arr) {
    const failureItems = []
    for(let i = 0; i < arr.length; i++){
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    return failureItems
    }
    
    const failuresList = makeList(result.failure)
    console.log(failuresList)
    // [ '<li class="text-warning">no-var</li>',
    // '<li class="text-warning">var-on-top</li>',
    // '<li class="text-warning">linebreak</li>' ]
*/

// Find the longest word in a string and return the number of characters it has
/*
function findLongestWordLength(str) {
    let words = str.split(' ')
    let maxLength = 0
    let maxWord = ""
  
    for(let i = 0; i < words.length; i++){
      if(words[i].length > maxLength){
        maxLength = words[i].length
        if(maxLength === words[i].length){
            maxWord = words[i]
        }
      }
    }
    return `The longest word in this string is ${maxLength} letters long. The word is "${maxWord}."`
  }
  
  console.log(findLongestWordLength("Phil is finally beginning to grasp how to use JavaScript"));
//   The longest word in this string is 10 letters long. The word is "JavaScript."
*/

// 7-7-2022

// Create a function that loops through an object and returns the number of users where their online status is equal to true.
/*
const users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: true
    }
}

function whosOnline(usersObj){
    for(let user in usersObj){
        if(usersObj[user].online === true){
            console.log(user)
        }
    }
}
whosOnline(users)
// Jeff
// Sarah

function onlineCount(userObj){
    total = 0
    for(user in userObj){
        if(userObj[user].online === true){
            total++
        }
    }
    return total
}
console.log(onlineCount(users))
// 2

function countAndPrintOnline(userObj){
    let total = 0
    for(user in userObj){
        if(userObj[user].online === true){
            console.log(user)
            total++
        }
    }
    console.log(total)
}
countAndPrintOnline(users)
// Jeff
// Sarah
// 2
*/
/*
// Write a function that reverses a string with a for loop
function reverseString(string){
    let reversedStr = ""
    for(let i = string.length - 1; i >= 0; i--){
        reversedStr += string[i]
    }
    return reversedStr
}

console.log(reverseString("Yoooooo"))
// ooooooY
*/

/*
function findLongestWordLength(str) {
    let words = str.split(' ')
    let maxLength = 0
    let maxWord = ""
  
    for(let i = 0; i < words.length; i++){
      if(words[i].length > maxLength){
        maxLength = words[i].length
        maxWord = words[i]
      }
    }
    return `The longest word in this string is ${maxLength} letters long. The word is "${maxWord}."`
  }
  
  console.log(findLongestWordLength("Phil is finally beginning to grasp how to use JavaScript"));
//   The longest word in this string is 10 letters long. The word is "JavaScript."
*/
// Change this to use an anonymous function. 

// Hint: define printVariable within printName instead of outside of it.
/*function printVariable(variable){
    console.log(variable)
}

function printName(name, callback){
    callback(`Hello there, ${name}`)
}

printName("Phil", printVariable)
*/
/*
function printName(name, callback){
    callback(`Hello there, ${name}`)
}

printName("Phil", function(variable){
    console.log(variable)
})
*/

// What method can you use on an object to return the keys of that object in an array?
/*
const person = {
    name: "Phil",
    age: 34,
    favoriteIceCream: "chocolate"
}

console.log(Object.keys(person))
// ['name', 'age', 'favoriteIceCream']
*/

// Find the longest word in a string and print the length of that word (a number).
/*
function findTheLongestWord(str){
    let words = str.split(' ')
    let maxWordLength = 0
    for(let i = 0; i < words.length; i++){
        if(words[i].length > maxWordLength){
            maxWordLength = words[i].length
        }
    }
    return maxWordLength
}

console.log(findTheLongestWord("Jello hats are large and fluffy poopernickles"))
*/

// 7-8-2022
// Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.
/*
let quote = "3 blind mice"
let quoteRegex = /[^aeiou0-9]/gi
let result = quote.match(quoteRegex)
console.log(result)
*/
/*
// Using Math.floor and Math.random, return a random whole number that is >= myMin and <= myMax.
function randomRange(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(randomRange(1,5))
*/

// 7-10-2022

// Write a function that takes in an array and returns a new array with only the third and fourth items in the original array.
/*
function threeAndFour(array){
    return array.slice(2,4)
}

console.log(threeAndFour([1,2,3,4,5]))
// [3,4]
*/

// Use the forEach method to only print out the price of each item (only the number)
/*
const items = [
    { price: 10 },
    { price: 12 },
    { price: 14 },
    { price: 16 },
    { price: 18 },
]

items.forEach((item) => console.log(item.price))
// 10,12,14,16,18
*/

// Find the longest word in a string and print the length of that word (a number).
/*
function longestWord(string){
    let words = string.split(' ')
    let maxLength = 0
    for(let i = 0; i < words.length; i++){
        if(words[i].length > maxLength){
            maxLength = words[i].length
        }
    }
    return maxLength
}

console.log(longestWord("This is a test to see if sixteenpeople is the longest word"))
*/

// Write a function that reverses a string with a for loop
/*
function reverseMe(string){
    let reversedString = ""
    for(let i = string.length - 1; i >= 0; i--){
        reversedString += string[i]
    }
    return reversedString
}

console.log(reverseMe("Hello"))
*/

// What method can we use to determine if an object contains a property?
/*
const person = {
    name: "Phil"
}

function checkProp(obj, prop){
    if(obj.hasOwnProperty(prop)){
        console.log(obj[prop])
    }else{
        console.log("No such prop")
    }
}

checkProp(person, "name")
// Phil
checkProp(person, "age")
// No such prop
*/

// What is the difference between a do...while loop and a while loop?
/*
let i = 5
do{
    console.log(i)
    i--
}while(i > 0)
// 5,4,3,2,1
*/
/*
let i = 0
while(i <= 5){
    console.log(i)
    i++
}
*/

// import * as multiComponent from "./index.js"
// multiComponent.add(2,3)

// 7-11-2022
// Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.
/*
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }
 */ 
/*
function phoneticLookup(val) {
    let result = ""
    const obj = {
        alpha: "Adams",
        bravo: "Boston",
        charlie: "Chicago",
        delta: "Denver",
        echo: "Easy",
        foxtrot: "Frank"
      }
      result = obj[val]

      return result
  }
  
console.log(phoneticLookup("alpha"))
// Adams
*/

// Write a function that reverses a string (using methods)
/*
function reverseMe(str){
    return str.split('').reverse().join('')
}
console.log(reverseMe("Hello there"))
*/

/*
  function lookUpProfile(name, prop) {
    for(let i = 0; i < contacts.length; i++){
        if(contacts[i].firstName === name){
            if(contacts[i].hasOwnProperty(prop))
            return contacts[i][prop]
        }else{
            return "No such property"
        }
    }
    return "Profile does not exist"
  }
  
  console.log(lookUpProfile("Akira", "likes"))
//   ['Pizza', 'Coding', 'Brownie Points']
*/

// 7-12-2022

// Write a function that checks if the second argument is the last part of the first argument (a string).

// confirmEnding("Bastian", "n") should return true.
/*
function confirmEnding(str, ending){
    return str.slice(str.length - ending.length) === ending
}

console.log(confirmEnding("Hello", "o"))
*/

// Use filter to return only the first three numbers of an array on a new array.
/*
const a = [1,2,3,4,5]
const b = a.filter(value => value < 4)
console.log(b)
*/

// Write a function that takes an array and a number. Use a while loop to loop over the array and push a copy of the array to a new array the number of times specified by the number argument.
/*
function copyMachine(array, number){
    const newArray = []
    while(number >= 1){
        newArray.push([...array])
        number--
    }

    return newArray
}

console.log(copyMachine([1,2,3], 5))

*/

// 7-13-2022

// Retrieve all of the `twinkle`s from twinkleStar by checking to see if anything in twinkleStar matches starRegex globally and case insensitive (ignore case).
/*
let twinkleStar = "Twinkle, twinkle little star"
let regex = /twinkle/gi
console.log(twinkleStar.match(regex))
// ['Twinkle', 'twinkle']
*/

// Write a function that takes in a string and a number. The string should be repeated the number of times specified in the number parameter. Use a for loop and not the .repeat() method.
/*
function copyStr(str, num){
    let newStr = ""
    for(let i = 0; i < num; i++){
        newStr += str
    }
    return newStr
}

console.log(copyStr("Hello", 3))
// HelloHelloHello
*/

// Write a function that takes in an array, removes the first two items and replaces them with two new ones.
// Hint: The array method you use can take in more than two arguments.
/*
function removeAndReplace(array){
    array.splice(0, 2, "Bilbo", "Jimmy")
    return array
}

let arraybianNights = ["Happy", "Hungry", "Sleepy", "Sneezy"]
console.log(removeAndReplace(arraybianNights))
// ['Bilbo', 'Jimmy', 'Sleepy', 'Sneezy']
*/

// 7-14-2022
// Create a function that loops through an object and returns the number of users where their online status is equal to true.
/*
const users = {
    Alan: {
      online: true
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }

  function onlineUsers(userObj){
    let numberOnline = 0
    for(user in userObj){
        if(userObj[user].online)
        numberOnline++
    }
    return numberOnline
  }

  console.log(onlineUsers(users))
//   2
*/

// Find the longest word in a string and print the length of that word (a number).
/*
function findLongestWord(str){
    let word = str.split(' ')
    let maxLength = 0
    console.log(word)
    for(let i = 0; i < word.length; i++){
        if(word[i].length > maxLength){
            maxLength = word[i].length
        }
    }
    return maxLength
}

console.log(findLongestWord("A bee Ceeee"))
*/

// mixins
/*
let bird = {
    name: "Donald",
    numLegs: 2
  }
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  }
  
  let glideMixin = function(obj){
    obj.glide = function(){
      console.log("Gliding, baby")
    }
  }
  glideMixin(bird)
  glideMixin(boat)
  bird.glide()
  boat.glide()
// Gliding, baby
// Gliding, baby
*/

// 7-15-2022

// How do you select back-to-back characters like the ss' or pp's in Mississippi with Regex?
/*
let string = "Mississppi"
let regex = /s+/ig
console.log(string.match(regex))
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

let a = closure(2)
a(4)
// 2, 4
*/

// Using Math.floor and Math.random, return a random whole number that is >= min and <= max.
/*
function randomRange(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(randomRange(2,300))
*/
// What is a mixin and how can we use it?
/*
const dog = {
    name: "Bravo",
    age: 13
}

const bird = {
    name: "Doper",
    age: 3
}

function talkMixin(obj){
    obj.talk = function(){
        console.log(`Hello, my name is ${obj.name}`)
    }
}

talkMixin(dog)
dog.talk()
// Hello, my name is Bravo.
*/

