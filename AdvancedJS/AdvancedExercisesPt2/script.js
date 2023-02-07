// //2-1-2023

// Change the following function from an impure function to a pure function:
/*
const array = [1,2,3,4,5]

function addElement(element){
    array.push(element)
}

function addElementPure(array, element){
    return [...array, element]
}


const newArray = addElementPure(array, 6)
console.log(newArray)
// [1, 2, 3, 4, 5, 6]
console.log(array)
// [1, 2, 3, 4, 5]
*/

// Convert the following code to use both prototypes and classes
/*
function createUser(email, password, language){
    return {
        email,
        password,
        language,
        printPassword(){
            console.log(this.password)
        }
    }
}

const newUser = createUser("philly@bill.com", "1234", "Japanese")
newUser.printPassword()

class CreateUserClass{
    constructor(email, password, language){
        this.email = email
        this.password = password
        this.language = language
    }

    printPasswordClass(){
        console.log(this.password)
    }
}

function CreateUserProto(email, password, language){
        this.email = email
        this.password = password
        this.language = language
}

CreateUserProto.prototype.printPassProto = function(){
    console.log(this.password)
}
*/

//2-2-2023
// How do we write a polyfill for a function that doesn't yet exist or is not yet supported?
/*
if(Math.double == null){
    Math.double = function(number){
        return number * 2
    }
}

console.log(Math.double(2))
//4
*/

// How do you create a new Map? Since creating a new map creates something like an object that is actually an array, what is something that we can do that we can't do with normal objects?
/*
const currencyMap = new Map([
    ["America", "USD"],
    ["Japan", "Yen"],
    ["Mexico", "Peso"],
])

currencyMap.set("India", "Ruppee")
//We can use array methods on Maps even though they behave a lot like objects
const countries = currencyMap.forEach((item, index) => console.log(index))
// America, Japan, Mexico, India
*/

// 2-3-2023
// Use filter to return only the first three numbers of an array on a new array.
/*
const a = [1,2,3,4,5]

const firstThree = a.filter(num => num < 4)
console.log(firstThree)
function firstThreeFunc(array){
    const [a, b, c, ...rest] = array
    return [a, b, c]
}

const firstThreeArray = firstThreeFunc(a)
console.log(firstThreeArray)
*/

//2-4-2023
/*
function findLongestWord(string){
    let num = 0
    let words = string.split(' ')
    for(let i = 0; i < words.length; i++){
        if(words[i].length > num){
            num = words[i].length
        }
    }

    return num
}

console.log(findLongestWord("this is a testy"))
*/

// 2-7-2023
// Create a function that returns the sum of a range of an array of two numbers ([1,4] would return 10 (1+2+3+4))
/*
function arrayRange(array){
    let result = 0
    let min = Math.min(array[0], array[1])
    let max = Math.max(array[0], array[1])
    for(let i = min; i <= max; i++){
        result += i
    }
    return result
}

let rangedArray = arrayRange([4, 1])
console.log(rangedArray)
*/

// Write a function that checks if the second argument is the last part of the first argument (a string).

// confirmEnding("Bastian", "n") should return true.
/*
function confirmEnding(string, target){
    return string.slice(string.length - target.length) === target
}

console.log(confirmEnding("Phil", "m"))
//false
console.log(confirmEnding("Phil", "l"))
// true
*/

// ・Create a class called Thermostat that takes in 'fahrenheit' as an argument within the constructor
// ・The Thermostat class should use a getter called 'temperature' to calculate and return celsius (C = 5/9 * (F - 32))
// ・The Thermostat class should also use a setter that takes in celsius as an argument and sets 'fahrenheit' to C * 9.0 / 5 + 32
// ・Log a celsius value by passing a fahrenheit value to Thermostat and then set a celsius value and log a fahrenheit value
// Bonus: Add °C and °F to the results accordingly.
/*
class Thermostat{
    constructor(fahrenheit){
        this.fahrenheit = fahrenheit
    }

    get temperature(){
        return `${5/9 * (this.fahrenheit - 32)}°C`
    }

    set temperature(celsius){
        this.fahrenheit = `${celsius * 9 / 5 + 32}°F`
    }
}

const newThermo = new Thermostat(32)
console.log(newThermo.temperature)
// 0°C
newThermo.temperature = 32
console.log(newThermo.fahrenheit)
// 89.6°F
*/

// Use map to apply the double function to the array and then log out the result.
/*
const array = [1,2,3,4,5]

const double = (element) => element * 2

const doubledArray = array.map(element => double(element))
const doubledArraySimple = array.map(double)
console.log(doubledArray)
// [2, 4, 6, 8, 10]
console.log(doubledArraySimple)
// [2, 4, 6, 8, 10]
*/

// How do we create a component that uses destructuring to house props? Create a component called Employee with firstName, lastName, and age as props.
/*
function Employee(){
    const employees = [{
        firstName: "Phil",
        lastName: "Nelson",
        age: 34
    }]
    return (
        <>
        <h1>Employee Names</h1>
        {employees.map(({firstName, lastName, age}) => <h4>{firstName}</h4>)}
        </>
    )
}
*/

// 2-8-2023

// Use map (a higher order function) on this array to create a newArray that doubles each number in the array.
/*
const array = [1,2,3,4,5,6]

const doubledArray = array.map(element => element * 2)
console.log(doubledArray)
// [2, 4, 6, 8, 10, 12]
*/

