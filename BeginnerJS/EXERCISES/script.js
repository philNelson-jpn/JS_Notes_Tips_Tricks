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
const num = Math.floor(Math.random() * 11)
console.log(num)