// const person = {
//     name: "Phil",
//     age: 33,
//     favoriteFood: "pizza",
//     address: {
//         street: "Joseph",
//         city: "Oxford"
//     }
// }

/*
Remove duplicates from an array:
const array = [1, 2, 3, 4, 4, 3, 2, 5]
const array2 = ["A", "B", "A", "W", "C", "D", "B"]

function removeDuplicates(array){
    return [...new Set(array)]
}

console.log(removeDuplicates(array))
// (5) [1, 2, 3, 4, 5]
console.log(removeDuplicates(array2))
// (5) ['A', 'B', 'W', 'C', 'D']

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

/*
REDUCE METHOD REVIEW


const reduceArray = [1, 2, 3, 4, 5]

function reduceArrayFunc(array){
    console.log(array.reduce((count, number) => count + number, 0))
}

reduceArrayFunc(reduceArray)
*/

/*
// getter review
const person = {
    firstName: "Phil",
    lastName: "Nelson",
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){
        ;[this.firstName, this.lastName] = value.split(' ')
    }
}

person.fullName = "Sally Smith"
console.log(person.fullName)
*/

/*
const person = {
    ageThisYear: 34,
    get birthYear(){
        const date = new Date()
        return date.getFullYear() - this.ageThisYear
    }
}

console.log(person.birthYear)
*/

/*
//getter setter w/ array destructuring
const person = {
    firstName: "Phil",
    lastName: "Nelson",
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){
        ;[this.firstName, this.lastName] = value.split(' ')
    }
}

person.fullName = "Ricky Bobby"
console.log(person.fullName)

*/

/*
// map review
const map = new Map([
    [1, {test1: "test1", desc1: "description1"}],
    [2, {test2: "test2", desc2: "description2"}],
    [3, {test3: "test3", desc3: "description3"}],        
])

function getId(id){
    return map.get(id)
}

console.log(getId(1))
*/

/*Optional Chaining Review

const details = {
    address: {
        street: "Joseph",
        city: "Oxford",
    },
}

function printCity(details){
    console.log(details?.address?.city)
}

printCity(details)
*/

/*
// Null Coalescing Review, shorthand
function printName(firstName, lastName){
    lastName ??= "Nelson"
    console.log(`${firstName} ${lastName}`)
}

printName("Phil", "Bobby")
*/

// Set Review
/*
function removeDups(array){
    return [...new Set(array)]
}

const numberArray = [1, 2, 3, 4, 3, 2, 3, 2, 1]

console.log(removeDups(numberArray))

*/

/*
const currencyMap = new Map([
    ["USA", "USD"],
    ["Mexico", "Peso"],
    ["Japan", "Yen"],
])

console.log(currencyMap.get("USA"))
*/

// function fullName(...name){
//     return `${firstName} ${middleName} ${lastName}`
// }

// const name = [firstName = "Phil", middleName = "Andrew", lastName = "Nelson"]

// console.log(fullName(...name))

// remove duplicates with new Set

/*
const array = [1, 2, 3, 4, 3, 2, 5, 6, 2]

function removeDups(array){
    return [...new Set(array)]
}

console.log(removeDups(array))
*/

// Polyfill review

// const phil = {
//     name: "Phil",
//     age: "33",
//     address: {
//         street: "Joseph",
//         city: "Oxford",
//     },
// }

// const details = {
//     hobby: "training",
// }

// const newObject = {...phil, ...details, favoriteColor: "blue"}

// console.log(newObject)

// const currencyMap = new Map([
//     ["USA", "USD"],
//     ["India", "Ruppee"],
//     ["Japan", "Yen"],
// ])

// console.log(currencyMap.set("USA", "DOLLA BILLS"))
// console.log(currencyMap.has("USA"))
// console.log(currencyMap.get("USA"))

// currencyMap.forEach(value => {
//     console.log(value)
// })

// const person = {
//     firstName: "Phil",
//     lastName: "Nelson",
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`
//     },
//     set fullName(value){
//         ;[this.firstName, this.lastName] = value.split(' ')
//     },
// }



// console.log(person.fullName)

// 5-25-2022

/*Spread/Rest operator, cloning arrays
// const array = [1, 2, 3, 4, 5]
// const newArray = [...array]

// array.push(1)
// newArray.push(5)

// console.log(newArray)
// console.log(array)

*/

/*
// Create an array from a node list
const divs = [...document.querySelectorAll("div")]

divs.forEach(div => {
    console.log(div)
})
*/

/*

// Create a prototype and add a function to it
function Person(name, age){
    this.name = name
    this.age = age
}

Person.prototype.printName = function(){
    console.log(this.name)
}

const newPerson = new Person("Phil", 33)
const newPerson2 = Object.create(newPerson)

newPerson2.name = "Bob"
console.log(newPerson2.age)
*/

/*
function Person(name, age){
    this.name = name
    this.age = age
}

Person.prototype.getAge = function(){
    console.log(this.age)
}

const person = new Person("PhillyMac", 3244)
const person2 = Object.create(person)

person2.name = "Ricky Bobby"
person2.age = 32
console.log(person2)
*/

/*Polyfill Review
const number = 5

if (Math.double == null){
    Math.double = function(number){
        return number * 2
    }
}

console.log(Math.double(number))
*/

/*----------------------------------------------------------
------------------------------------------------------------
---------------Convert prototype to class-------------------
------------------------------------------------------------
------------------------------------------------------------

// function Person(name, age){
//     this.name = name
//     this.age = age
// }


class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    getName(){
        console.log(this.name)
    }

    static printHi(){
        console.log("Hi")
    }
    static goodName(){
        console.log("Philzer")
    }
}

console.log(Person.printHi())
*/

/* Function
// function createUser(email, password, language){
//     return {
//         email,
//         password,
//         language,
//         printPassword(){
//             console.log(this.password)
//         }
//     }
// }

// console.log(createUser("test@test.com", "password", "English"))
*/

/*Prototype
function CreateUser(email, password, language){
        this.email = email
        this.password = password
        this.language = language
}

CreateUser.prototype.printPassword = function(){
    console.log(this.password)
}

const user = new CreateUser("happy@poop.com", "12345", "Hindi")
console.log(user)
user.printPassword()

*/
/*Class
class CreateUser{
    constructor(email, password, language){
        this.email = email
        this.password = password
        this.language = language
    }

    printPassword(){
        console.log(this.password)
    }
}

const user = new CreateUser("gman@gmail.com", "Mithy32", "Japanese")
user.printPassword()
*/

/*------------------------------------------------------------
------------------------------------------------------------
-------------------------Extends----------------------------
------------------------------------------------------------
-----------------------------------------------------------*/

/*
class Animal {
    constructor(name){
        this.name = name
    }

    speak(){
        console.log(`Hello, my name is ${this.name}`)
    }
}


class Dog extends Animal{
    constructor(name, owner){
        super(name)
        this.owner = owner
    }

    speak(){
        console.log("Woof!")
    }
}

const doge = new Dog("Dogey", "PhillyMac")
console.log(doge)
console.log(doge.speak())



/*
class Dog extends Animal {
    constructor(name, owner){
        super(name)
        this.owner = owner
    }
    speak(){
        console.log("Arf!")
    }
}

const dog = new Dog("Fluffy", "Phil")
console.log(dog.owner)

class Cat extends Animal {
    speak(){
        console.log("Meow")
    }
}

const cat = new Cat("Flooper")
console.log(cat.speak())

*/

/*Challenge*/

// Create a Person class with a name

// Next, create a Janitor that inherits Person + takes an additional numberOfMops prop + creates a clean() function that prints 'I cleaned with numberOfMops mops'

/*
class Person{
    constructor(name){
        this.name = name
    }
}

class Janitor extends Person{
    constructor(name, numberOfMops){
        super(name)
        this.numberOfMops = numberOfMops
    }

    clean(){
        console.log(`I just cleaned the whole school with ${this.numberOfMops} mops!`)
    }
}

const janitor = new Janitor("Jerry", 23)
console.log(janitor.name)
console.log(janitor.clean())
// Jerry
// I just cleaned the whole school with 23 mops!
*/

/*
// Change from impure function to pure function
const array = [1, 2, 3, 4]

// impure
function addElement(element){
    array.push(element)
}

// pure (does not modify original array)
function addElementPure(a, element){
    return [...a, element]
}

console.log(addElementPure(array, 5))
console.log(array)
*/

/*
const array = [1, 2, 3, 4, 3, 4, 6, 7, 5, 3, 2]

function removeDups(array){
    return [...new Set(array)]
}

const noDups = removeDups(array)

console.log(noDups)
*/

/*
// Map Exercise
const coffeeMap = new Map([
    ["Komeda", "delicious"],
    ["Guatamala", "out of this world"],
    ["Honduras", "absolutely stunning"],
])

console.log(coffeeMap.set("Komeda", "ridiculously good"))
// {'Komeda' => 'ridiculously good', 'Guatamala' => 'out of this world', 'Honduras' => 'absolutely stunning'}

coffeeMap.forEach((value, key) => {
    console.log(`${key} coffee is ${value}`)
})

// Komeda coffee is ridiculously good
// Guatamala coffee is out of this world
// Honduras coffee is absolutely stunning

console.log(coffeeMap.has("Komeda"))
// true
*/

/*
// Function that takes a full name, splits it and returns an object of the first and last name

function splitName(fullName){
    ;[firstName, lastName] = fullName.split(' ')
    return {
        firstName,
        lastName
    }
}

splitName("Phil Nelson")
console.log(firstName)
// Phil
console.log(lastName)
// Nelson
*/

// impure to pure function

/*
const person = {
    name: "Phil",
    friends: ["Simon", "Caleb"],
}

function addFriend(p, friendName){
    return { ...p, friends: [...p.friends, friendName] }
}

const newFriendObj = addFriend(person, "Bobby")
console.log(newFriendObj.friends) 
*/

/*
// Class, extends, super, functions within classes
class Person {
    constructor(name){
        this.name = name
    }
}

class Janitor extends Person {
    constructor(name, numberOfMops){
        super(name)
        this.numberOfMops = numberOfMops
    }

    clean(){
        console.log(`I cleaned with ${this.numberOfMops} mops, today.`)
    }
}

const janitor = new Janitor("Jerry", 25)

console.log(janitor.clean())
*/

/*

// Polyfill
const number = 5

if(Math.double == null){
Math.double = function(number){
    return number * 2
}}

console.log(Math.double(number))
*/

/*
// Modify the function of a class with a class that extends another class
class Animal {
    constructor(name){
        this.name = name
    }

    speak(){
        console.log(`Hi, my name is ${this.name}`)
    }
}

class Dog extends Animal {
    speak(){
        console.log("WOOF!")
    }
}

const indy = new Dog("Indy")
indy.speak()
*/

/*
class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    printName(){
        console.log(this.name)
    }

    printHi(){
        console.log("Hi")
    }
    
}

Person.goodName = "Philly"

console.log(Person.goodName)
*/

// 5-30-2022

/*
class Animal {
    constructor(name){
        this.name = name
    }

    speak(){
        console.log(`Yo, what up, this ya boy ${this.name}`)
    }
}

const dog = new Animal("Indy")
console.log(dog.speak())
// Yo, what up, this ya boy Indy

class Cat extends Animal {
    speak(){
        console.log(`${this.name} says 'Meow'`)
    }
}

const cat = new Cat("Meowmers")
console.log(cat.speak())
// Meowmers says 'Meow'
*/

/*
// Functions on prototypes + creating new objects
function Person(name, age){
    this.name = name
    this.age = age
}

Person.prototype.sayIntro = function(name, age){
    console.log(`Hello, my name is ${this.name}. I am ${this.age} years old.`)
}

const newPerson = new Person("Phil", 33)
const newPerson2 = Object.create(newPerson)
newPerson2.name = "Simon"
newPerson2.age = 40
newPerson.sayIntro()
newPerson2.sayIntro()
*/

/*
// Double an array of numbers with a for loop
const array = [1, 2, 3, 4, 5]

const newArray = []

for(i = 0; i < array.length; i++){
    newArray.push(array[i] * 2)
}

console.log(newArray)
*/

/*
const person = {
    name: "Phil",
    friends: ["Simon", "Caleb"],
}

function addFriend(a, friendName){
    return {...a, friends: [...a.friends, friendName]}
}

const newPerson = addFriend(person, "Bobby")

console.log(newPerson.friends)
// ['Simon', 'Caleb', 'Bobby']
console.log(person.friends)
// ['Simon', 'Caleb']
// The original object remains unchanged

*/

/*
class CreateUser {
    constructor(email, password, language){
        this.email = email
        this.password = password
        this.language = language
    }

    printPassword(){
        console.log(this.password)
    }
}

const phil = new CreateUser("testy@tentacles.com", "1234567", "Nihongo")
phil.printPassword()
*/

// 6-1-2022

/*
class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    printName(){
        console.log(this.name)
    }

    printHi(){
        console.log(`Hello, ${this.name}`)
    }

    static goodName = "Philly"
}

const phil = new Person("Phil", 25)

console.log(Person.goodName)
*/

/*
function printFullName(fullName){
    return fullName.split(' ')
}

const [firstName, lastName] = printFullName("Phil Nelson")
console.log(firstName)
*/

// default params in objects
/*
function greet(firstName, {salutation = "Hello there,", japaneseTitle = "san"} = {}){
    console.log(`${salutation} ${firstName}-${japaneseTitle}`)
}

greet("Phil")

function speakJapanese(sentence){
    return sentence.split(' ')
}

const [subject, verb, object] = speakJapanese("私は 食べる ラーメンを")
console.log(subject, object, verb)
*/

// 6-2-2022
/*
const person = {
    firstName: "Phil",
    lastName: "Nelson",
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
}

console.log(person.fullName)
*/

/*
// Print everyone's name from this object with a recursive function:

const person = {
    name: "Phil",
    friend: {
        name: "Simon",
        friend: {
            name: "Caleb"
        }
    }
}

function getNames(currentPerson){
    if(currentPerson == null) return
    console.log(currentPerson.name)
    getNames(currentPerson.friend)
}

getNames(person)
*/

// Add a friend to an array within a new object
/*
const person = {
    name: "Phil",
    friends: ["Simon", "Caleb"],
}

function addFriend(p, newFriend){
    return {...p, friends: [...p.friends, newFriend]}
}

const threeFriends = addFriend(person, "Ricky")
console.log(threeFriends.friends)
*/

/*
const person = {
    firstName: "Phil",
    lastName: "Nelson",
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){
        return [this.firstName, this.lastName] = value.split(' ')
    }
}

person.fullName = "Ricky Bobby"

console.log(person.firstName)
// Ricky
*/

// Reassign a key within an object
/*
const person = {
    name: "Phil"
}

const {name: firstName} = person
console.log(firstName)
// Phil
*/

// Polyfill Review
/*
if(Math.double == null){
    Math.double = function(number){
        console.log(number * 2)
    }
}

Math.double(2)
*/

/*
// new class that extends another and assigns new properties + super() and modifies a function within
class Animal {
    constructor(name){
        this.name = name
    }

    speak(){
        console.log(`It's ya boi, ${this.name}`)
    }
}

class Dog extends Animal {
    constructor(name, owner){
        super(name)
        this.owner = owner
    }

    speak(){
        console.log(`Woof woof, bitch, I'm ${this.name}`)
    }
}

const indy = new Dog("Indy", "Philly")

indy.speak()
console.log(indy.owner)
*/

/*
// Use map to apply the double function to the array and then log out the result.

const array = [1, 2, 3, 4, 5]

function double(element){
    return element * 2
}

console.log(array.map(double))
// [2, 4, 6, 8, 10]

function plusOne(element){
    return element + 1
}

// Use map to apply BOTH the plusOne function and the double function to the array and then log out the result.

console.log(array.map(double).map(plusOne))
// [3, 5, 7, 9, 11]

// Combine both functions into one function (function composition) map it and log it out

function doBoth(element){
    return plusOne(double(element))
}

console.log(array.map(doBoth))
// [3, 5, 7, 9, 11]

//NOTE Function composition is "backwards"
// double is executed first, then plusOne
*/

// create a map with three arrays, each with an id and an object with two keys/values. Write a function that gets the id and returns the object contents:
/*
const testMap = new Map([
    [1, {test: "test1", desc: "description1"}],
    [2, {test: "test2", desc: "description2"}],
    [3, {test: "test3", desc: "description3"}],
])

function getId(id){
    return testMap.get(id)
}

console.log(getId(1))
// {test: 'test1', desc: 'description1'}
*/

// get birth year with a getter function on an object
/*
const person = {
    name: "Phil",
    ageThisYear: 34,
    get birthYear(){
        const date = new Date()
        return date.getFullYear() - this.ageThisYear
    }
}

console.log(person.birthYear)
*/
// Create a Person class with a name

// Next, create a Janitor that inherits Person + takes an additional numberOfMops prop + creates a clean() function that prints 'I cleaned with numberOfMops mops'
/*
class Person {
    constructor(name){
        this.name = name
    }
}

class Janitor extends Person {
    constructor(name, numberOfMops){
        super(name)
        this.numberOfMops = numberOfMops
    }

    clean(){
        console.log(`${this.name} just cleaned this whole muthaeffing building with ${this.numberOfMops} muthaeffing mops`)
    }
}

const janitor = new Janitor("Jimmy", 25)
janitor.clean()
// Jimmy just cleaned this whole muthaeffing building with 25 muthaeffing mops
*/

// 6-6-2022
// pure functions
/*
const person = {
    name: "Phil",
    friends: ["Simon", "Caleb"],
}

function addFriend(p, friendName){
    return {...p, friends: [...p.friends, friendName]}
}

const newFriendList = addFriend(person, "Jimmy")
console.log(newFriendList.friends)
*/

// double each index of an array with map
/*
const array = [1, 2, 3, 4, 5]

const b = array.map(element => element * 2)
console.log(b)
*/

// Destructure an object within another object
/*
const person = {
    name: "Phil",
    address: {
        street: "Jose",
        city: "Oxphord"
    }
}

const { address: {street} } = person
console.log(street)
*/

// double each index of an array with a for loop
/*
const array = [1, 2, 3, 4, 5]

const newArray = []

for(let i = 0; i < array.length; i++){
    newArray.push(array[i] * 2)
}

console.log(newArray)
*/
// Compose two functions together:
/*
const array = [1, 2, 3, 4, 5]

function double(element){
    return element * 2
}

function plusOne(element){
    return element + 1
}

function doublePlusOne(element){
    return plusOne(double(element))
}
// Alternatives:
// const newArray = array.map(element => doublePlusOne(element))
// const newArray = array.map(doublePlusOne)
// console.log(newArray)
// [3, 5, 7, 9, 11]

const newArray = array.map(double)
console.log(newArray)
*/

/*
function printName(firstName, lastName = "Nelson"){
    console.log(`${firstName} ${lastName}`)
}

printName("Phil")
*/
// String together multiple maps on an array to apply multiple functions and then create a function that does both
/*
const array = [1, 2, 3, 4, 5]

function double(element){
    return element * 2
}

function plusOne(element){
    return element + 1
}

function doublePlusOne(element){
    return plusOne(double(element))
}

const doubledArray = array.map(double)
console.log(doubledArray)
// [2, 4, 6, 8, 10]
const doubledPlusOneArray = array.map(double).map(plusOne)
console.log(doubledPlusOneArray)
// [3, 5, 7, 9, 11]
// OR
const doubledPlusOneArray2 = array.map(doublePlusOne)
console.log(doubledPlusOneArray2)
// [3, 5, 7, 9, 11]
*/
// Use the reduce method in conjunction with a multiplier argument and the rest operator to take in any number of parameter
/*
function sum(multiplier, ...numbers){
    return multiplier * numbers.reduce((sum, number) => sum + number, 0)
}

console.log(sum(10, 3, 5, 23))
*/
/*
function Person(name, age){
    this.name = name,
    this.age = age
}

Person.prototype.printName = function(){
    console.log(this.name)
}

const person = new Person("Phil", 34)
person.printName()
*/
/*
function Person(name, age){
    this.name = name
    this.age = age
}

Person.prototype.printGreeting = function(){
    console.log(`Hello there, my name is ${this.name}. I am ${this.age} years old.`)
}

const person = new Person("Philly MacDonald", 3256)
person.printGreeting()
// Hello there, my name is Philly MacDonald. I am 3256 years old.

const person2 = Object.create(person)
person2.name = "Simon"

person2.printGreeting()
// Hello there, my name is Simon. I am 3256 years old.

*/

/*
// Add an element to a new array with a pure function
const array = [1, 2, 3, 4]

function addElement(a, element){
    return [...a, element]
}

console.log(array)

console.log(addElement(array, 5))
*/
// Add a new friend to an array within an object with a pure function
/*
const person = {
    name: "Phil",
    friends: ["Simon", "Caleb"]
}

function addFriend(object, friendName){
    return {...object, friends: [...object.friends, friendName]}
}

const newFriendObject = addFriend(person, "Jimmy")

console.log(newFriendObject.friends)

*/
// Rest vs. Spread operator
/*
const addThese = [2, 3, 5, 6, 90, 23]

function sum(...numbers){
    return numbers.reduce((sum, number) => sum + number, 0)
}

console.log(sum(...addThese))
*/
/*
function printName(firstName, lastName){
    console.log(`${firstName} ${lastName}`)
}

const name = ["Phil", "Nelson"]

printName(...name)
*/

// 6-9-2022

// Create a function on a prototype, create a new variable based on the prototype with arguments, use the function on the variable to log out the arguments, then create a new object based on variable (not the prototype)
/*
function Person(name, age){
    this.name = name
    this.age = age
}

Person.prototype.printGreeting = function(){
    console.log(`Hello there. My name is ${this.name}. I am ${this.age} years old.`)
}

const person1 = new Person("Ricky Bobby", 322)
const person2 = Object.create(person1)
person2.name = "Obi-wan Kenobi"
person2.age = 56

person1.printGreeting()
// Hello there. My name is Ricky Bobby. I am 322 years old.
person2.printGreeting()
// Hello there. My name is Obi-wan Kenobi. I am 56 years old.
*/
/*
import { sum } from ("./scriptName.js")
test("it's supposed to do this", () => {
    const a = 1
    const b = 2
    expect(sum(a, b)).toBe(3)
})
*/
// Default values in functions:
/*
function printFullName(firstName, lastName = "Nelson"){
    console.log(`${firstName} ${lastName}`)
}

printFullName("Phil")
*/
// Add a describe block to a test:
/*
describe("#sum", () => {
    test("it's supposed to do this", () => {
        const a = 1
        const b = 2
        expect(sum(a, b)).toBe(3)
    })
})
*/
// Class + extends + modifying functions
/*
class Animal {
    constructor(name){
        this.name = name
    }

    speak(){
        console.log(`${this.name} says what's up.`)
    }
}

class Cat extends Animal {
    speak(){
        console.log(`${this.name} says 'MEOW.'`)
    }
}

const cat = new Cat("Jimmy")
cat.speak()
// Jimmy says 'MEOW.'
*/

// Remove Duplicates from an array
/*
const array = [1, 2, "beef", 4, 3, 2, "beef", 5, 6, 6, "beefy"]

function removeDuplicates(array){
    return [...new Set(array)]
}

console.log(removeDuplicates(array))
// [1, 2, 'beef', 4, 3, 5, 6, 'beefy']
*/

// Prototype to Class
/*
class Person{
    constructor(name, age){
    this.name = name
    this.age = age
    }

    printName(){
        console.log(this.name)
    }

    printHi(){
        console.log("Hi")
    }

    static goodName = "Philly"
}

const phil = new Person("Phillllllly", 33)
console.log(phil.age)
// 33
console.log(phil.goodName)
// undefined because static
*/

/*
const array = [1, 2, 3, 4, 5]

function double(element){
    return element * 2
}

function plusOne(element){
    return element + 1
}

function doublePlusOne(element){
    return plusOne(double(element))
}

const doubledPlusOneArray = array.map(element => doublePlusOne(element))
console.log(doubledPlusOneArray)
*/

// 6-11-2022

// Optional Chaining in place of if/else statements or shortcircuiting
/*
const person = {
    name: "Philly MacDonald",
    age: 34,
    address: {
        street: "Jose",
        zip: 45344,
    }
}

function printStreet(person){
    console.log(person?.address?.street)
}

printStreet(person)
// Jose
*/

// 6-13-2022
// Create a new Dog class that extends Animal, adds an "owner" property, and redfines the function speak() to say "Woof!"
/*
class Animal {
    constructor(name){
        this.name = name
    }

    speak(){
        console.log(`Hello, my name is ${this.name}`)
    }
}

class Dog extends Animal{
    constructor(name, owner){
        super(name)
        this.owner = owner
    }

    speak(){
        console.log("Woof, bitches")
    }
}

const indy = new Dog("Indy", "Phil")

console.log(indy.owner)
// Phil
indy.speak()
// Woof, bitches
*/

// How do we create a function on a prototype?
/*
function Person(name, age){
    this.name = name
    this.age = age
}

Person.prototype.greet = function(){
    console.log(`Hello, my name is ${this.name}`)
}

const person = new Person("Phil", 33)
person.greet()
// Hello, my name is Phil
*/

// Double each element of an array with a for loop.
/*
const array = [1, 2, 3, 4, 5]

const newArray = []

for(let i = 0; i < array.length; i++){
    newArray.push(array[i] * 2)
}

console.log(newArray)
// [2, 4, 6, 8, 10]
*/

// Add a setter to this code so that we can set an explicit fullName outside of the person object.
/*
const person = {
    firstName: "Phil",
    lastName: "Nelson",
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){
        return [this.firstName, this.lastName] = value.split(' ')
    }
}

person.fullName = "Philly MacDonald"
console.log(person.fullName)
// Philly MacDonald
*/


// Test syntax with Jest
/*
describe("#sum", ()=>{
    test("the code is supposed to do this", ()=>{
        // test
    })
})
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

console.log(createUser("test@test.com", "password76", "English"))
*/
// Prototype:
/*
function CreateUser(email, password, language){
        this.email = email
        this.password = password
        this.language = language
}

CreateUser.prototype.printPassword = function(){
    console.log(this.password)
}

const newUser = new CreateUser("test@test.com", "password76", "English")
newUser.printPassword()
*/
// Class
/*
class CreateUser{
    constructor(email, password, language){
        this.email = email
        this.password = password
        this.language = language
    }
    printPassword(){
        console.log(this.password)
    }
}

const newUser = new CreateUser("test@test.com", "password76", "English")
newUser.printPassword()
*/

// Change the function to a pure function
/*
const person = {
    name: "Phil",
    friends: ["Simon", "Caleb"],
}
// impure
/*
function addFriends(friendName){
    person.friends.push(friendName)
}
*/
/*
function addFriends(object, friendName){
    return {...object, friends: [...object.friends, friendName]}
}


const newFriendList = addFriends(person, "Bobby")
console.log(newFriendList.friends)
// ['Simon', 'Caleb', 'Bobby']
console.log(person.friends)
// ['Simon', 'Caleb']
*/
// 6-14-2022
/*
function printName(fullName){
    ;[firstName, lastName] = fullName.split(' ')
    return {
        firstName,
        lastName
    }
}

const phil = printName("Phil Nelson")
console.log(phil.firstName)
// Phil
*/
// Jest test syntax
/*
test("this test should do this", ()=>{
    const a = 1
    const b = 2
    expect(sum(a, b)).toBe(3)
})
*/
// Use map to apply the double function to the array and then log out the result.
/*
const array = [1, 2, 3, 4, 5, 6]

function double(element){
    return element * 2
}

console.log(array.map(double))
*/
// 6-15-2022
// How do we write a polyfill for a function that doesn't yet exist or is not yet supported?

// Hint: We should wrap our function in something to check if it exists yet or not.
/*
if(Math.double == null){
    Math.double = function(value){
        console.log(value * 2)
    }
}

Math.double(2)
*/
// 6-16-2022
// Calculate a person's age with a getter based on ageThisYear
/*
const person = { 
    ageThisYear: 34,

    get calcAge(){
        const date = new Date()
        return date.getFullYear() - this.ageThisYear
    }
}

console.log(person.calcAge)
*/
// Change the key of an object with destructuring
/*
const person = {
    name: "Phil",
    age: 34,
    address: {
        street: "Joseph",
        city: "Oxford"
    }
}

const { name: firstName, address } = person
console.log(firstName)
*/
// 6-17-2022
// Null coalescing operator - who is your daddy and what does he do?
/*
function printName(firstName, lastName){
    lastName = lastName ?? "Nelson"
    return `${firstName} ${lastName}`
}

console.log(printName("Phil"))
// Phil Nelson
console.log(printName("Phil", null))
// Phil Nelson
console.log(printName("Phil", undefined))
// Phil Nelson
console.log(printName("Phil", "Poopers"))
// Phil Poopers
*/

// Create a Person class with a name

// Next, create a Janitor that inherits Person + takes an additional numberOfMops prop + creates a clean() function that prints 'I cleaned with numberOfMops mops'
/*
class Person{
    constructor(name){
        this.name = name
    }
}

class Janitor extends Person{
    constructor(name, numberOfMops){
        super(name)
        this.numberOfMops = numberOfMops
    }

    clean(){
        console.log(`${this.name} just cleaned the whole damn school with ${this.numberOfMops} mops, homie.`)
    }
}

const jim = new Janitor("Jim", 25)
jim.clean()
// Jim just cleaned the whole damn school with 25 mops, homie.
*/
// Use a nest for loop to interate through a nested array and return the product of all of the values within the arrays
/*
function multiplyAll(arr) {
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
/*

The lookUpProfile() function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.

Hint 1
Use a for loop to cycle through the contacts list.

Hint 2
Use a nested if statement to first check if the firstName matches, and then checks if the prop matches.
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

        // use a nested if statement to check if name matches a contact and then if the property exists

                // else return "No such property"

    // If the loop fails (is false), return "Profile does not exist"

  }
  
  console.log(lookUpProfile("Akira", "likes"))
//   ['Pizza', 'Coding', 'Brownie Points']
*/
/*
    for(let i = 0; i < contacts.length; i++){
        if(contacts[i].firstName === name){
            if(contacts[i].hasOwnProperty(prop)){
                return contacts[i][prop]
            }else{
                return "No such property"
            }
        }
    }
    return "No such contact"
*/
// 6-20-2022
// Write a function that takes a full name and splits it, destructure the full name into a first and last name
/*
function printFullName(fullName){
    return fullName.split(' ')

}

const [firstName, lastName] = printFullName("Phil Nelson")
console.log(firstName)
*/
// Change the following function from an impure function to a pure function:
/*
const array = [1, 2, 3, 4]
function addElementImpure(element){
    array.push(element)
}

function addElement(arr, element){
    return [...arr, element]
}
console.log(addElement(array, 5))
// [1, 2, 3, 4, 5]
console.log(array)
// [1, 2, 3, 4]
*/
// How do we create a function on a prototype?
/*
function Person(name, age){
    this.name = name
    this.age = age
}

Person.prototype.greet = function(){
    console.log(`Hello there, ${this.name}`)
}

const phil = new Person("Phil", 34)
phil.greet()
*/
/*
const person = {
    name: "Phil",
    friends: ["Simon", "Caleb"]
}

function addFriendImpure(friendName){
    person.friends.push(friendName)
}

function addFriendPure(obj, friendName){
    return {...obj, friends: [...obj.friends, friendName]}
}

const newPerson = addFriendPure(person, "Bobby")
console.log(newPerson.friends)
// ['Simon', 'Caleb', 'Bobby']
addFriendImpure("Ricky")
console.log(person.friends)
// ['Simon', 'Caleb', 'Ricky']
*/

// Use map (a higher order function) on this array to create a newArray that doubles each number in the array.
/*
const array = [1, 2, 3, 4, 5]

const newArray = array.map(element => element * 2)
console.log(newArray)
// [2, 4, 6, 8, 10]
*/

// Combine two objects together with the spread operator by cloning one of the objects and then adding a new key/value pair.
/*
const obj1 = {
    name: "Phil"
}

const obj2 = {
    age: 33
}

const obj3 = {...obj1, ...obj2, favoriteFood: "spicy stuff"}

console.log(obj3)
*/
// Use Function Composition to combine both the double function and the plusOne function into one function.

// Careful, order matters.
/*
const array = [1, 2, 3, 4, 5]

function double(element){
    return element * 2
}

function plusOne(element){
    return element + 1
}

function doubleAndOne(element){
    return plusOne(double(element))
}

console.log(array.map(element => doubleAndOne(element)))
*/
// Apply both the double function and the plusOne function to the array with map chaining and log out the result.
/*
const array = [1, 2, 3, 4, 5]

function double(element){
    return element * 2
}

function plusOne(element){
    return element + 1
}

console.log(array.map(double).map(plusOne))
*/
// 6-21-2022
// What is the difference between toBe and toEqual in Jest testing?
/*
test('equal vs tobe', () => {
    const obj = { a: 1, b: 2 }

    expect(obj).toBe({ a: 1, b: 2 })
    // FAIL
    expect(obj).toEqual({ a: 1, b: 2 })
    // PASS
})
*/
// 6-22-2022
// Prevent an object from being mutated
/*
const person = {
    name: "Phil"
}

Object.freeze(person)
person.name = "George"
console.log(person.name)
// Phil
*/
// How do we clone an array without modifying the reference of the original?
/*
const array = [1, 2, 3, 4, 5]
const array2 = [...array]
array.push(3)
array2.push(44)
console.log(array)
console.log(array2)
*/
/*
// Assign list to a destructured array that is equal to the 3 through 10.
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    const [a, b, ...arr] = list
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr)
// [ 3, 4, 5, 6, 7, 8, 9, 10 ]
*/
// Create a function that loops through an array within a object and inserts each value of the array within some code using template literals
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
//   [ '<li class="text-warning">no-var</li>',
//   '<li class="text-warning">var-on-top</li>',
//   '<li class="text-warning">linebreak</li>' ]
*/

// Create a class called Thermostat that takes in 'fahrenheit' as an argument within the constructor
// The Thermostat class should use a getter called 'temperature' to calculate and return celsius (C = 5/9 * (F - 32))
// The Thermostat class should also use a setter that takes in celsius as an argument and sets 'fahrenheit' to C * 9.0 / 5 + 32
/*
class Thermostat{
    constructor(fahrenheit){
        this.fahrenheit = fahrenheit
    }

    get temperature(){
        return 5 / 9 * (this.fahrenheit - 32)
    }

    set temperature(celsius){
        this.fahrenheit = celsius * 9 / 5 + 32
    }
}

const thermos = new Thermostat(86)
console.log(thermos.temperature)
// 30
*/
// 6-23-2022
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
// Prevent an object from being mutated (make it immutable)
/*
const person = {
    name: "Phil"
}
Object.freeze(person)
person.name = "Georgey"
console.log(person.name)
// Phil
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
//   [ '<li class="text-warning">no-var</li>',
//   '<li class="text-warning">var-on-top</li>',
//   '<li class="text-warning">linebreak</li>' ]
*/
// What do we surround our tests with in Jest to add more detailed desriptions? What is the syntax?
// BONUS: What is a convention for functions?
/*
describe('#functionName', () => {
    test('This test should do this', () => {
        const a = 1
        const b = 2
        expect(functionName(a, b)).toBe(3)
    })
})
*/

// Create a class called Thermostat that takes in 'fahrenheit' as an argument within the constructor
// The Thermostat class should use a getter called 'temperature' to calculate and return celsius (C = 5/9 * (F - 32))
// The Thermostat class should also use a setter that takes in celsius as an argument and sets 'fahrenheit' to C * 9.0 / 5 + 32
/*
class Thermostat {
    constructor(fahrenheit){
        this.fahrenheit = fahrenheit
    }

    get temperature(){
        return 5 / 9 * (this.fahrenheit - 32)
    }

    set temperature(celsius){
        this.fahrenheit = celsius * 9 / 5 + 32
    }
}

const thermos = new Thermostat(86)
console.log(thermos.temperature)
thermos.temperature = 26
console.log(thermos.temperature)
*/
/*
// Propert syntax for exporting functions from a js file
export { functionName, functionName2 }
// Propert syntax for importing functions from a js file
import { functionName, functionName2 } from './index.js'
*/
// 6-27-2022
/*
// Create a new Map that has an three ids with three an object made up of two key/value pairs for each. Write a function that returns the object's contents when we pass it the id from the Map we created:
const testMap = new Map([
    [1, {test: "test1", desc: "description1"}],
    [2, {test: "test2", desc: "description2"}],
    [3, {test: "test3", desc: "description3"}]
])

function getId(id){
    return testMap.get(id)
}

console.log(getId(2))
*/

// Import EVERYTHING from a file
// import * as moduleName from "./module_stuff.js"
/*
const starWarsMap = new Map([
    ["A New Hope", "a classic"],
    ["The Empire Strikes Back", "the best of the bunch"],
    ["The Return of the Jedi", "a good time"]
])

starWarsMap.forEach((value, key) => {
    console.log(`${key} is considered ${value} by everyone.`)
})
// A New Hope is considered a classic by everyone.
// The Empire Strikes Back is considered the best of the bunch by everyone.
// The Return of the Jedi is considered a good time by everyone.
*/
/*
import * as moduleName from "./poopy.js"
moduleName.functionName(arg, arg2)
*/

// Assign list to a destructured array that is equal to 3 through 10.
/*
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function removeFirstTwo(list){
    const [a, b, ...arr] = [...list]
    return arr
}
console.log(removeFirstTwo(source))
*/
/*
// Tests in Jest
test("this test should do this", ()=> {
    const a = 1
    const b = 2
    expect(func(a, b)).toBe(3)
})
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

    // How do we prevent an object from being changed/mutated?
    
    /*const person = {
        name: "Phil"
    }

    Object.freeze(person)
    person.name = "Dave"
    console.log(person.name)
    // Phil
    */
/*
// Remove duplicates from an array with a function that uses Set
    const arr = [1,1,2,3,3,3,4,5,6,6,7,7]
    function removeDups(arr){
        return [...new Set(arr)]
    }
    const newArr = removeDups(arr)
    console.log(newArr)

*/

// Add a setter to this code so that we can set an explicit fullName outside of the person object.
/*
const person = {
    firstName: "Phil",
    lastName: "Nelson",
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){
        ;[this.firstName, this.lastName] = value.split(' ')
    }
}

person.fullName = "Ricky Bobby"
console.log(person.fullName)
*/
// Create a class called Thermostat that takes in 'fahrenheit' as an argument within the constructor
// The Thermostat class should use a getter called 'temperature' to calculate and return celsius (C = 5/9 * (F - 32))
// The Thermostat class should also use a setter that takes in celsius as an argument and sets 'fahrenheit' to C * 9.0 / 5 + 32
/*
class Thermostat{
    constructor(fahrenheit){
        this.fahrenheit = fahrenheit
    }
    get temperature(){
        return 5 / 9 * (this.fahrenheit - 32)
    }
    set temperature(celsius){
        this.fahrenheit = celsius * 9 / 5 + 32
    }
}

const thermos = new Thermostat(86)
console.log(thermos.temperature)
*/
// How do we use the spread operator to change node lists into arrays (since they are already very similar)?
/*
const divs = [...document.querySelectorAll("div")]
divs.forEach(div => console.log(div))
*/

// 6-28-2022

// What is the syntax for importing a js file into another js file?

// import { variable, functionName } from "./index.js"

// 6-29-2022
// Bind 'this' to person so that "Phil" is printed instead of "Global Name"
/*
window.name = "Global Name"

const person = {
    name: "Phil"
}

function printName(){
    console.log(this.name)
}

printName.bind(person)()
*/
// Double each element of an array with a for loop.
/*
const array = [1, 2, 3, 4, 5]
const newArray = []
for(let i = 0; i < array.length; i++){
    newArray.push(array[i] * 2)
}
// With map
// const newArray = array.map(value => value * 2)

console.log(newArray)
*/

// 7-1-2022
/*
class Thermostat {
    constructor(fahrenheit){
        this.fahrenheit = fahrenheit
    }

    get temperature(){
        return 5/9 * (this.fahrenheit - 32)
    }

    set temperature(celsius){
        this.fahrenheit = celsius * 9 / 5 + 32
    }
}

const thermos = new Thermostat(86)
console.log(thermos.temperature)
// 30 (C)
thermos.temperature = 37
console.log(thermos.fahrenheit)
// 98.6 (F)
*/

// How is the spread operator different from the rest operator?
// Spread
/*
const array = [1, 2, 3, 4, 5]
const newArray = [0, ...array]
console.log(newArray)
// Rest
function arraySum(...numbers){
    return numbers.reduce((sum, number) => sum + number, 0)
}
console.log(arraySum(...[1,2,3,4,5]))
*/

// import a default function from a js file
// import poopers from "./index.js"
// no {}, name it anything you like

// Use map to apply the double function to the array and then log out the result.
/*
const array = [1,2,3,4,5]

function double(element){
    return element * 2
}

console.log(array.map(double))
*/
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
      online: false
    }
  }
  
  function countOnline(usersObj) {
    let total = 0
    for(let user in usersObj){
      if(usersObj[user].online === true){
        total++
      }
    }
      return total
  }
  
  console.log(countOnline(users))
*/
/*
// Return an array of the keys of an object (users)
let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    return Object.keys(obj)
  }
  
  console.log(getArrayOfUsers(users));
//   [ 'Alan', 'Jeff', 'Sarah', 'Ryan' ]
*/

// 7-2-2022

// Create a new Cat class that extends Animal and redefines the speak() function to say "meow"
/*
class Animal {
    constructor(name){
        this.name = name
    }

    speak(){
        console.log(`Hi, my name is ${this.name}`)
    }
}

class Cat extends Animal {
    speak(){
        console.log(`Meow meow meow my name is ${this.name}`)
    }
}

const kitty = new Cat("KittyKat")
kitty.speak()
// Meow meow meow my name is KittyKat
*/

// 7-4-2022
// Prevent an object from being mutated
/*
const person = {
    name: "Phil"
}

Object.freeze(person)
person.name = "George"
console.log(person.name)
*/

// Change the function to a pure function
/*
const person = {
    name: "Phil",
    friends: ["Simon", "Caleb"]
}
function addFriendImpure(friendName){
    person.friends.push(friendName)
}
addFriendImpure("Bobby")
console.log(person.friends)

function addFriendPure(obj, friendName){
    return {...obj, friends: [...obj.friends, friendName]}
}
console.log(addFriendPure(person, "Kelly"))
console.log(person.friends)
*/

// Convert this code to use classes instead of prototype.
/*
function Person(name, age){
    this.name = name,
    this.age = age
}

Person.prototype.printName = function(){
    console.log(this.name)
}

Person.prototype.printHi = function(){
    console.log(`Hi, ${this.name}`)
}
*/
/*
class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    printName(){
        console.log(this.name)
    }

    printHi(){
        console.log(`Hello there, ${this.name}`)
    }
}

const person = new Person("Phil", 34)
person.printName()
person.printHi()
*/
// How do we changed the name of a key when destructuring an object?
/*
const person = {
    name: "Phil",
    age: 34,
    address: {
        street: "Joseph",
        city: "Oxford"
    }
}

const { name: firstName, age, address} = person 
console.log(firstName, address.street)
// Phil Joseph
*/

//7-5-2022
// What if we want to import everything from a js file? What is the syntax?
// import * as mathModule from "./math.js"

// Convert this code to use a getter instead of a function:
/*
const person = {
    firstName: "Phil",
    lastName: "Nelson",
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}
*/
/*
// How do we create a function on a prototype?
function Person(name, age){
    this.name = name
    this.age = age
}

Person.prototype.printName = function(){
    console.log(`Hello. My name is ${this.name}.`)
}

const will = new Person("Will", 45)
const anotherPerson = Object.create(will)
anotherPerson.name = "Philly Mac"
will.printName()
// Hello. My name is Will.
anotherPerson.printName()
// Hello. My name is Philly Mac.

*/

// How do we export functions so that we can use them in other js files?
// export {uppercaseString, lowercaseString}

// Create a new Dog class that extends Animal, adds an "owner" property, and redfines the function speak() to say "Woof!"
/*
class Animal {
    constructor(name){
        this.name = name
    }

    speak(){
        console.log(`Yo, it's ya boi ${name}`)
    }
}

class Dog extends Animal {
    constructor(name, owner){
        super(name)
        this.owner = owner
    }

    speak(){
        console.log(`This is ${this.name} saying "Woof!"`)
    }
}

const puppers = new Dog("Indy", "Phil")
puppers.speak()
*/
// How do you set default values in JavaScript?

// const DEFAULT_NUMBER = 5

// How do we ensure that default parameters get passed to our function even when they are within an object and no arguments are given when the function is called?
/*
const person = {
    name: "Phil",
    age: 34,
    likes: "dogs"
}

function printInfo(name, age = 34){
    console.log(`Hi, my name is ${name} and I am ${age} years old. I like ${person.likes}.`)
}

printInfo("Phil")
*/

// 7-8-2022
// Write a function that takes a full name, splits the first name into an array, and returns it. Then destructure the array so that both the first name and last name are accessible as separate variables (assign the destructured array to the function).
/*
function printName(fullName){
    return fullName.split(' ')
}

const [firstName, lastName] = printName("Phil Nelson")
console.log(firstName)
*/

// Write a function that checks if the second argument is the last part of the first argument (a string).

// confirmEnding("Bastian", "n") should return true.
/*
function confirmEnding(str, target){
    return str.slice(str.length - target.length) === target
}

console.log(confirmEnding("This is a beach ball, bitch", "bith"))
// false
console.log(confirmEnding("This is a beach ball, bitch", "bitch"))
// true
*/
/*
function repeatString(str, num){
    let repeatedString = ""
    for(let i = 0; i < num; i++){
        repeatedString += str
    }
    return repeatedString
}

console.log(repeatString("Happy", 4))
// HappyHappyHappyHappy
*/

// 7-9-2022
// Return a boolean if the end of a string matches a target we pass to it.
/*
function confirmEnding(string, target){
    return string.slice(string.length - target.length) === target
}

console.log(confirmEnding("Fee fi foo fum", "n"))
*/

// Write a function that takes in a string and a number. The string should be repeated the number of times specified in the number parameter. Use a for loop and not the .repeat() method.
/*
function repeatString(string, number){
    let repeatedString = ""
    for(let i = 0; i < number; i++){
        repeatedString += string
    }
    return repeatedString
}
console.log(repeatString("Hello", 3))
// HelloHelloHello
*/

// 4 methods used with Map
// set get has delete (clear to remove all)
/*
const currencyMap = new Map([
    ["United States of America", "USD"],
    ["Japan", "Yen"],
    ["India", "Ruppee"],
    ["Mexico", "Peso"]
])
currencyMap.forEach((currency) => {
    console.log(currency)
})
currencyMap.set("Russia", "Broke as fuck")
console.log(currencyMap.get("Russia"))
console.log(currencyMap.has("USD"))
*/
/*
const person = {
    name: "Phil"
}

const person2 = Object.create(person)
console.log(person2.name)
*/

// Polyfill
/*
if(Math.double == null){
Math.double = function(value){
    return value * 2
}
}

console.log(Math.double(2))
*/

// 7-11-2022

// Assign list to a destructured array that is equal to 3 through 10.
/*
const source = [1,2,3,4,5,6,7,8,9,10]
function removeFirstTwo(list){
    ;[a, b, ...arr] = list
    return arr
}
console.log(removeFirstTwo(source))
*/

// Use a getter to calculate a person's birth year based on { ageThisYear: 34 }
/*
class Person {
    constructor(name, ageThisYear){
        this.name = name
        this.ageThisYear = ageThisYear
    }
    get calcBirthYear(){
        const date = new Date()
        return date.getFullYear() - this.ageThisYear
    }
}

const phil = new Person("Phil", 37)
console.log(phil.calcBirthYear)
// 1985
*/

// Create a class called Thermostat that takes in 'fahrenheit' as an argument within the constructor
// The Thermostat class should use a getter called 'temperature' to calculate and return celsius (C = 5/9 * (F - 32))
// The Thermostat class should also use a setter that takes in celsius as an argument and sets 'fahrenheit' to C * 9.0 / 5 + 32
//Log a celsius value by passing a fahrenheit value to Thermostat and then set a celsius value and log a fahrenheit value
/*
class Thermostat{
    constructor(fahrenheit){
        this.fahrenheit = fahrenheit
    }

    get temperature(){
        return 5/9 * (this.fahrenheit - 32)
    }

    set temperature(celsius){
        return this.fahrenheit = celsius * 9 / 5 + 32
    }
}

const thermos = new Thermostat(32)
thermos.temperature = 35
console.log(thermos.fahrenheit)
// 95
*/

// 7-13-2022
// Change the following function from an impure function to a pure function:
/*
const array = [1,2,3,4]

function addElement(element){
    array.push(element)
}
addElement(5)
console.log(array)
//[1, 2, 3, 4, 5]

function addElementPure(array, element){
    const newArray = [...array]
    newArray.push(element)
    return newArray
    // or
    return [...array, element]
}

console.log(addElementPure(array, 7))
console.log(array)
*/

// 7-15-2022

// Use Function Composition to combine both a doubling function and an addition function into one.
/*
const array = [1,2,3,4,5]

function double(element){
    return element * 2
}

function plusOne(element){
    return element + 1
}

function doubleAndOne(element){
    return plusOne(double(element))
}

const result = array.map(doubleAndOne)
console.log(result)
*/

// 7-17-2022
// Create an function that removes duplicates from an array using Set:

function removeDups(array){
    return [...new Set(array)]
}

const array = [1,2,3,3,3,4,5,5,5]
console.log(removeDups(array))
