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
// Create an function that removes duplicates from an array using Set and return a new array
/*
function removeDups(array){
    return [...new Set(array)]
}

const array = [1,2,3,3,3,4,5,5,5]
console.log(removeDups(array))
*/

// 7-20-2022

// Create a Person class with a name

// Next, create a Janitor that inherits Person + takes an additional numberOfMops prop + creates a clean() function that prints 'I cleaned with numberOfMops mops'
/*
class Person {
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
        console.log(`${this.name} cleaned the whole school with ${this.numberOfMops} mops`)
    }    
}

const jeff = new Janitor("Jeff", 25)
jeff.clean()
// Jeff cleaned the whole school with 25 mops
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
*/
/*
// Class
class CreateUser{
    constructor(email, password,language){
        this.email = email
        this.password = password
        this.language = language
        }

        printPassword(){
            console.log(this.password)
    }
}

const newUser = new CreateUser("this@this.com", "mypass123", "Japanese")
newUser.printPassword()
*/
// Prototype
/*
function CreateUser(email, password,language){
        this.email = email
        this.password = password
        this.language = language
}

CreateUser.prototype.printPassword = function(){
    console.log(this.password)
}
        
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
// Ricky Bobby
*/

// Change the function to a pure function
/*
const person = {
    name: "Phil",
    friends: ["Simon", "Caleb"]
}

function addImpureFriend(friendName){
    person.friends.push(friendName)
}

function addPureFriend(obj, friendName){
    const newPerson = {...obj, friends: [...obj.friends, friendName]}
    return newPerson
}

const newPerson = addPureFriend(person, "Johnny")
console.log(newPerson.friends)
// ['Simon', 'Caleb', 'Johnny']

addImpureFriend("Jim")
console.log(person.friends)
// ['Simon', 'Caleb', 'Jim']
*/

// Jest description and test syntax
/*
describe("#functionName", () = > {
    test("This test should do this", () => {

    })
})
*/
// How do we prevent an object from being changed/mutated?
/*
const person = {
    name: "Phil",
    friends: ["Simon", "Caleb"]
}

Object.freeze(person)
person.name = "Jimmy"
console.log(person.name)
// Phil
*/

// What if we want to import everything from a js file? What is the syntax?

// import * as nameOfModuleModule from "./module.js"

// How do we destructure an object within another object, i.e. how do we get only the keys/values that we want from an object within another object?
/*
const person = {
    name: "Phil",
    personObj: {
        objName: "Jim",
        objFavFood: "jelly beans"
    }
}

const { personObj: { objName, objFavFood } } = person
console.log(objFavFood)
// jelly beans

*/

// 9-13-2022

// How do we create a new object based off of an already existing object?
// Option 1: Destructuring
/*
const person = {
    name: "Phil",
    age: 34,
    friends: {
        name: "Simon",
        age: 40
    },
    favoriteCookie: "Chocolate Chip"
}

const person2 = {...person}
person2.name = "Jimmy"
console.log(person2)
// {name: 'Jimmy', age: 34, friends: {…}, favoriteCookie: 'Chocolate Chip'}
*/
/*
// Option 2: Prototypes/Object.create
function Person(name, age){
    this.name = name
    this.age = age
}

Person.prototype.printName = function(){
    console.log(`Hello there. My name is ${this.name}.`)
}

const phil = new Person("Phil", 34)
phil.printName()
// Hello there. My name is Phil.
const newPerson = Object.create(phil)
newPerson.name = "Simon"
newPerson.printName()
// Hello there. My name is Simon.
*/
/*
const testMap = new Map([
    [1, {test: "Test 1", description: "Desc 1"}],
    [2, {test: "Test 2", description: "Desc 2"}],
    [3, {test: "Test 3", description: "Desc 3"}]
])

function getId(id){
    return testMap.get(id)
}

console.log(getId(3))
// {test: 'Test 3', description: 'Desc 3'}
*/
// Rest operator review
/*
function sum(...numbers){
    return numbers.reduce((sum, number) => sum + number, 0)
}

console.log(sum(2,3,4,5,6,7,8))
// 35

function multiplyAndAdd(multiplier, ...numbers){
    return multiplier * numbers.reduce((sum, number) => sum + number, 0)
}

console.log(multiplyAndAdd(3, 5, 6, 5, 20))
// 3 * (5+6+5+20) = 108
*/
/*
// Default params
function greet(firstName, lastName, greeting = "Hello there,"){
    console.log(`${greeting} ${firstName} ${lastName}`)
}

greet("Phil", "Nelson", "Greetings,")
// specified param:
// Greetings, Phil Nelson
greet("Phil", "Nelson")
// default param:
// Hello there, Phil Nelson
*/

// Use map (a higher order function) on this array to create a newArray that doubles each number in the array.
/*
const array = [1, 2, 3, 4, 5, 6]

const doubledArray = array.map(number => number * 2)
console.log(doubledArray)
// [2, 4, 6, 8, 10, 12]
*/

// Apply both the double function and the plusOne function to the array with map chaining and log out the result.
/*
const array = [1, 2, 3, 4, 5, 6]

function double(element){
    return element * 2
}

function plusOne(element){
    return element + 1
}

const doubledAndAdded = array.map(double).map(plusOne)
console.log(doubledAndAdded)
// [3, 5, 7, 9, 11, 13]
*/

// spread vs. rest operators
/*
// spread (values already known/defined)
function confirmFullName(firstName, middleName, lastName){
    return `Is your name ${firstName} ${middleName} ${lastName}?`
}

const fullName = ["Phil", "Andrew", "Nelson"]
console.log(confirmFullName(...fullName))

// rest (values unknown/undefined)

function multiplyNums(...nums){
    return nums.reduce((product, number) => product * number,1)
}

const arrayOfNums = [1,2,3,4]
console.log(multiplyNums(...arrayOfNums))
// 24
*/

// Destructure an object so that both the first name and last name are accessible as separate variables.
/*
function splitFullName(fullName){
    const [firstName, lastName] = fullName.split(" ")
    return {
        firstName,
        lastName
    }
}

const { firstName, lastName } = splitFullName("Phil Nelson")

console.log(firstName)
// Phil
*/

// 9-14-2022

// Find the longest word in a string and print the length of that word (a number).

// Hints
// 1. Create two variables
// 2. Check if the length of the string is longer than our variable
// 3. Don't forget to use i in the if statement
/*
function longestWord(string){
    let length = 0
    let longestWord = ""
    let words = string.split(' ')

    for(let i = 0; i < words.length; i++){
        if(words[i].length > length){
            length = words[i].length
            longestWord = words[i]
        }
    }
    return `The longest word in your sentence is ${longestWord} at ${length} characters.`
}

console.log(longestWord("Simon is a huge Marvel fan."))
*/

// Find the longest word in a string and print the length of that word (a number). Bonus: print out the word itself.
/*
function findLongestWord(string){
    let length = 0
    let words = string.split(' ')
    let longestWord = ""

    for(let i = 0; i < words.length; i++){
        if(words[i].length > length){
            length = words[i].length
            longestWord = words[i]
        }
    }

    return `The longest word in your sentence is ${longestWord} at ${length} characters long.`
}

console.log(findLongestWord("Simon loves Marvel very much."))
// The longest word in your sentence is Marvel at 6 characters long.
*/

// Write a function that takes a full name, splits the first name into an array, and returns it. Then destructure the array so that both the first name and last name are accessible as separate variables (assign the destructured array to the function).
/*
function splitFullName(fullName){
    return fullName.split(' ')

}

const [firstName, lastName] = splitFullName("Phil Nelson")
console.log(firstName)
// Phil
console.log(lastName)
// Nelson
*/

// null coalescing operator
/*
function printFullName(firstName, lastName){
    lastName = lastName ?? "Nelson"
    console.log(`${firstName} ${lastName}`)
}

printFullName("Phil", null)
// Phil Nelson
*/

// How do we export functions so that we can use them in other js files?

// export { upperCaseString, lowerCaseString }
/*
// Assign list to a destructured array that is equal to index 2 and up.
const source = ["apples", "pears", "oranges", "strawberries", "watermelon", "lemons", "peaches"];
function removeFirstTwo(arr) {
    const [indexZero, indexOne, ...indexTwoAndUp] = arr
    return indexTwoAndUp;
}
const arr = removeFirstTwo(source);
console.log(arr)
// ['oranges', 'strawberries', 'watermelon', 'lemons', 'peaches']
*/

// Optional chaining vs. if/else
/*
const person = {
    name: "Phil",
    age: 34,
    friend: {
        name: "Simon",
        age: 36
    },
    hobbies: [
        "programming", "training", "language learning"
    ]
}

function printFriendName(object){
    console.log(object?.friend?.name)
}
printFriendName(person)
// Simon

function printThirdHobby(object){
    console.log(object?.hobbies?.[2])
}
printThirdHobby(person)
// language learning
*/
// Loop through the array to return each item and wrap it in an <li> tag with a class "text-warning" using string template literals.
/*
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
    }
    function makeList(arr) {
    const successItems = []
    for(let i = 0; i < arr.length; i++){
        successItems.push(`<li class="text-warning">${arr[i]}</li>`)
    }

    return successItems
    }
    
    const successList = makeList(result.success)
    console.log(successList)
// ['<li class="text-warning">max-length</li>', '<li class="text-warning">no-amd</li>', '<li class="text-warning">prefer-arrow-functions</li>']
*/

// Create a class called Thermostat that takes in 'fahrenheit' as an argument within the constructor
// The Thermostat class should use a getter called 'temperature' to calculate and return celsius (C = 5/9 * (F - 32))
// The Thermostat class should also use a setter that takes in celsius as an argument and sets 'fahrenheit' to C * 9.0 / 5 + 32
//Log a celsius value by passing a fahrenheit value to Thermostat and then set a celsius value and log a fahrenheit value
/*
class Thermostat {
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

const thermos = new Thermostat(86)
console.log(thermos.temperature)
// 30°C

thermos.temperature = 800
console.log(thermos.fahrenheit)
// 1472°F

*/
// maps
/*
const coffeeMap = new Map([
    ["Komeda", "pretty darn good"],
    ["Boss", "alright"],
    ["Guatemalan", "the best in the world"],
])

coffeeMap.forEach((value, key) => console.log(`${key} coffee is ${value}.`))
// Komeda coffee is pretty darn good.
// Boss coffee is alright.
// Guatemalan coffee is the best in the world.
*/

// prototypes to classes
/*
class Person {
    constructor(name, age){
        this.name = name,
        this.age = age
    }

    goodName = "Philly"

    printName = function(){
        console.log(this.name)
    }

    printHi = function(){
        console.log("Hi")
    }
}

const phil = new Person("Phil", 34)
phil.printName()
phil.printHi()
*/

// 9-15-2022
// Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.
/*
let quote = "3 blind mice"
let quoteRegex = /[^aeiou0-9]/gi
let result = quote.match(quoteRegex)
console.log(result)
// [' ', 'b', 'l', 'n', 'd', ' ', 'm', 'c']
*/
/*
// What if we want to import everything from a js file? What is the syntax?
import * as myMathModule from "./mathModule.js"

myMathModule.add(2,3)
// 5
myMathModule.subtract(2,3)
// -1
*/

// Create a prototype with name and age parameters in the constructor function
// Add a function to the prototype that prints both name and age using string template literals
// Create two new prototypes
/*
function Person(name, age){
    this.name = name,
    this.age = age
}

Person.prototype.printGreeting = function(){
    console.log(`Hello. My name is ${this.name}. I am ${this.age} years old.`)
}

const phil = new Person("Phil", 34)
phil.printGreeting()
// Hello. My name is Phil. I am 34 years old.
const simon = Object.create(phil)
simon.name = "Simon"
simon.age = 40
simon.printGreeting()
// Hello. My name is Simon. I am 40 years old.
*/

// Create a new Dog class that extends Animal, adds an "owner" property, and redfines the function speak() to say "Woof!"
/*
class Animal {
    constructor(name){
        this.name = name
    }

    speak(){
        console.log(`Hey, my name name is ${this.name}`)
    }
}

class Dog extends Animal {
    constructor(name, owner){
        super(name),
        this.owner = owner
    }

    speak(){
        console.log(`Woof! My name is ${this.name}. My owner is ${this.owner}.`)
    }
}

const indy = new Dog("Indy", "Phil")
indy.speak()
// Woof! My name is Indy. My owner is Phil.
*/

// Use a getter to calculate a person's birth year based on { ageThisYear: 34 }
/*
const person = {
    ageThisYear: 34,
    get printBirthYear(){
        let date = new Date()
        return date.getFullYear() - this.ageThisYear
    }
}


console.log(person.printBirthYear)
// 1988

class Person {
    constructor(ageThisYear){
        this.ageThisYear = ageThisYear
    }

    get printBirthYear(){
        let date = new Date()
        return date.getFullYear() - this.ageThisYear
    }
}

const phil = new Person(34)
console.log(phil.printBirthYear)
// 1988
*/

// Change the function to a pure function
/*
const person = {
    name: "Phil",
    friends: ["Simon", "Caleb"]
}

// impure function
function addFriend(friendName){
    person.friends.push(friendName)
}
// pure function
function addFriendPure(object, friendName){
    return {...object, friends: [...object.friends, friendName]}
}

addFriend("Kelly")
console.log(person.friends)
// ['Simon', 'Caleb', 'Kelly']
const newPhil = addFriendPure(person, "Jimmy")
console.log(newPhil.friends)
// ['Simon', 'Caleb', 'Kelly', 'Jimmy']
console.log(person.friends)
// ['Simon', 'Caleb', 'Kelly']
*/
/*
function addFriendsPure(object, newFriendName){
    return {...object, friends: [...object.friends, newFriendName]}
}

const peeps = {
    name: "Phil",
    friends: [
        "Simon",
        "Caleb"
    ]
}

console.log(addFriendsPure(peeps, "Johnny"))
console.log(peeps.friends)
// ['Simon', 'Caleb'] (unchanged)
*/

// Double each element of an array with a for loop.
/*
const array = [1,2,3,4,5]

const doubled = array.map(number => number * 2)
console.log(doubled)
// [2, 4, 6, 8, 10]

function doubleMyArray(arr){
    let doubledArray = []
    for(let i = 0; i < arr.length; i++){
        doubledArray.push(arr[i] * 2)
    }
    return doubledArray
}

console.log(doubleMyArray(array))
// [2, 4, 6, 8, 10]
*/
/*
const array = [1,2,3,4,5]

function double(element){
    return element * 2
}

const doubledArray = array.map(double)
console.log(doubledArray)
// // [2, 4, 6, 8, 10]
*/

// 9-15-2022 Pt. 2
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
        console.log("meow")
    }
}

const cat = new Cat("Meowmers")
cat.speak()
// meow
console.log(cat.name)
// Meowmers
*/

// Create an function that removes duplicates from an array using Set.

// Return an array (not an object)
/*
const setTest = new Set([1,2,3,2,3,4])
console.log(setTest)
// {1, 2, 3, 4} (an object)
console.log([...setTest])
// [1, 2, 3, 4] (an array)

function removeDupsWithSet(array){
    return [...new Set(array)]
}

const array = [1,2,3,2,2,3,4,5,6]
console.log(removeDupsWithSet(array))
// [1, 2, 3, 4, 5, 6]
*/

// Create a Person class with a name

// Next, create a Janitor that extends Person + takes an additional numberOfMops prop + creates a clean() function that prints 'I cleaned with numberOfMops mops'
/*
class Person {
    constructor(name){
        this.name = name
    }
}

class Janitor extends Person {
    constructor(name, numberOfMops){
        super(name),
        this.numberOfMops = numberOfMops
    }

    clean(){
        console.log(`${this.name} cleaned the whole school with ${this.numberOfMops} mops today. How about that?`)
    }
}

const jim = new Janitor("Jim", 22)
jim.clean()
*/

// Clone an array without modifying the original
/*
const array = ["Billy", "Bobby", "Borpy"]
const clonedArray = [...array]
clonedArray.push("Burpy")
console.log(array)
console.log(clonedArray)
*/
/*
const objOne = {
    name: "Phil"
}

const objTwo = {
    favoriteFood: "pizza"
}

const objThree = {...objOne, ...objTwo, favDessert: "ice cream"}
console.log(objThree)
*/

// How do we write a polyfill for a function that doesn't yet exist or is not yet supported?

// Hint: We should wrap our function in something to check if it exists yet or not.
/*
if(Math.add == null){
    Math.add = function(a, b){
        return a + b
    }
}

console.log(Math.add(2,3))
// 5
*/
// Change the following function from an impure function to a pure function:
/*
const array = [1,2,3,4,5]
function addElement(element){
    array.push(element)
}

function addElementPure(arr, element){
    return [...arr, element]
}

console.log(addElementPure(array, 6))
// [1, 2, 3, 4, 5, 6]
*/

// Use Function Composition to combine both the double function and the plusOne function into one function.
/*
const array = [1,2,3,4,5]

function double(element){
    return element * 2
}

function plusOne(element){
    return element + 1
}

function doublePlusOne(element){
    return plusOne(double(element))
}

console.log(doublePlusOne(2))

const doubledAndPlused = array.map(doublePlusOne)
console.log(doubledAndPlused)
// [3, 5, 7, 9, 11]
*/

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

// How do we destructure an object within another object, i.e. how do we get only the keys/values that we want from an object within another object?
/*
const person = {
    friend: {
        name: "Simon",
        friend: {
            name: "Caleb"
        }
    }
}

const { friend: { friend: { name: SimonsFriend} } } = person
console.log(SimonsFriend)
*/
// Use the spread operator to convert node lists to arrays so that you can use array methods on them.
/*
const divs = [...document.querySelectorAll('div')]
divs.map(div => console.log(div))
*/

// 9-16-2022

// How do we select 0 or more characters like all of the a's in Aaaaaaaaargh?

// let string = "Aaaaaaaaargh"
// let regex = /a*/i
// let result = string.match(regex)
// console.log(result)
// 'Aaaaaaaaa', index: 0, input: 'Aaaaaaaaargh'

// Convert an object into an array of names using a while loop and recursion
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

// while loop

let nameArray = []

let currentPerson = person
while(currentPerson != null){
    nameArray.push(currentPerson.name)
    currentPerson = currentPerson.friend
}
console.log(nameArray)
// ['Phil', 'Simon', 'Caleb']

// recursion
function printNames(obj){
    if(obj == null) return
    nameArray.push(obj.name)
    printNames(obj.friend)
    return nameArray
}

console.log(printNames(person))
*/

// Check if a string is made up of either Phil Nelson or Jin Nelson.
// Now check if any middle names or initials are also included.
/*
let string = "Phil Andrew Nelson"
let regex = /(Jin|Phil).*Nelson/gi
let check = regex.test(string)
console.log(check)
// true
*/

// 9-17-2022
// Using Math.floor and Math.random, return a random whole number that is >= myMin and <= myMax.
/*
function randomRange(myMin, myMax){
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}

console.log(randomRange(40,80))
*/

// Create a function that loops through an array and checks to see if a function that gets passed to our function as an argument returns an item from the array or else prints out undefined.
/*
function findElement(arr, func) {
    let num = 0;
    for(let i = 0; i < arr.length; i++){
      num = arr[i]
      if(func(num)){
        return num
      }
    }
      return undefined
  }
  
  console.log(findElement([1, 3, 3, 5], num => num % 2 === 0))
// undefined
console.log(findElement([1, 3, 4, 5], num => num % 2 === 0))
// 4
*/

// 9-19-2022
// Mixins
/*
const bird = {
    name: "Donald",
    wings: 2
}

const plane = {
    name: "Boeing",
    wings: 2
}

const flightMixin = function(obj){
    obj.flying = function(){
        console.log(`${obj.name} is soaring through the air`)
    }
}

flightMixin(plane)
plane.flying()
// Boeing is soaring through the air
flightMixin(bird)
bird.flying()
// Donald is soaring through the air
*/

// Use .replace() and a capture group to change the string "one two three" to "three two one"

// Remember, replace() takes two parameters.
/*
let string = "one two three"
let regex = /(\w+)\s(\w+)\s(\w+)/
let newString = "$3 $2 $1"
let result = string.replace(regex, newString)
console.log(result)
// three two one
*/

// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
/*
function findElement(arr, func){
    let num = 0
    for(let i = 0; i < arr.length; i++){
        num = arr[i]
        if(func(num)){
            return num
        }
    }
    return undefined
}

console.log(findElement([1,3,4,5], num => num % 2 === 0))
// 4
*/

// Find the longest word in a string and print the length of that word (a number). Bonus: print out the word itself.
/*
function findLongestWord(string){
    let words = string.split(' ')
    let numberOfChars = 0
    let longestWord = ""
    for(let i = 0; i < words.length; i++){
        if(numberOfChars < words[i].length){
            numberOfChars += words[i].length
            longestWord = words[i]
        }
    }

    return `The word, "${longestWord}," is the longest word in the sentence "${string}" at ${numberOfChars} characters long.`
}

console.log(findLongestWord("Hello there, General Kenobi"))
*/

// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
/*
function findElement(arr, func){
    let num = 0
    for(let i = 0; i < arr.length; i++){
        num = arr[i]
        if(func(num)){
            return num
        }
    }
    return undefined
}

console.log(findElement([1,2,3,4], num => num % 2 === 0))
// 2
*/

// 9-20-2022

// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

// If the function we pass to the array is true, return the number. If not, return undefined.
/*
function truthTest(arr, func){
    let num = 0
    for(let i = 0; i < arr.length; i++){
        num = arr[i]
        if(func(num)){
            return num
        }
    }
    return undefined
}

console.log(truthTest([1,3,3,5], num => num % 2 === 0))
// undefined
console.log(truthTest([1,2,3,5], num => num % 2 === 0))
// 2
*/

// Write a function that checks if the second argument (target) is the last part of the first argument (a string).

// confirmEnding("Bastian", "n") should return true.

// Hint: slice off the target's length from the string's length and see if it equals the target itself.
/*
function confirmEnding(string, target){
    let ending = string.slice(string.length - target.length)
    if(ending === target){
        return `Your target matches the end of the string.`
    }else {
        return `Your target, "${target}", does not match the end of the string, "${ending}"`
    }
}

console.log(confirmEnding("beebee", "ie"))
// Your target, "ie", does not match the end of the string, "ee"
*/

// Write a function that reverses a string with a for loop
/*
function reverseString(string){
    let reversedString = ""
    for(let i = string.length - 1; i >= 0; i--){
        reversedString += string[i]
    }
    return reversedString
}

console.log(reverseString("Hello"))
// olleH
*/

// Create a function that title cases a string (every word's first letter is capitalized)
// Hints: First split the string into multiple words
// Loop over the words
// Make each character (each index) lower case and split the words into characters
// set the first index (character) to upper case
// join all of the indexes (set str[i] to be joined on '')
// lastly return the full string joined on a space
/*
function titleCaseMe(str){
    str = str.split(' ')
    for(let i = 0; i < str.length; i++){

        str[i] = str[i].toLowerCase().split('')
        str[i][0] = str[i][0].toUpperCase()
        str[i] = str[i].join('')
    }

    return str.join(' ')
}

console.log(titleCaseMe("Hello there general kenobler of genosis"))
// Hello There General Kenobler Of Genosis

// Alernate Solution:

function titleCase(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
      .join(" ")
  }
  
  console.log(titleCase("I'm a little tea pot"))
//   I'm A Little Tea Pot
*/

// 9-21-2022

// Create a function that title cases a string (every word's first letter is capitalized)
/*
Hints:

・First split the string into multiple words
・Loop over the words
・Make each character (each index) lower case and split the words into characters
・Set the first index (character) to upper case
・Join all of the indexes (set str[i] to be joined on '')
・Lastly return the full string joined on a space
*/
/*
function titleCase(string){
    string = string.split(" ")
    for(let i = 0; i < string.length; i++){
        string[i] = string[i].toLowerCase().split('')
        string[i][0] = string[i][0].toUpperCase()
        string[i] = string[i].join('')
    }
    return string.join(' ')
}

console.log(titleCase("Hello there puny man"))
// Hello There Puny Man

function titleCaseMap(string){
    return string
    .toLowerCase()
    .split(' ')
    .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(' ')
}

console.log(titleCaseMap("Hello thEre pUny mAn"))
// Hello There Puny Man
*/

/*
function titleCaseMe(string){
    return string
    .toLowerCase()
    .split(' ')
    .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(' ')
}

console.log(titleCaseMe("wut wut in the butt"))
// Wut Wut In The Butt
*/

// array.splice() review
/*
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
*/
// Create a function that removes all falsy values from an array.
/*
function removeFalsy(array){
    let newArray = []
    for(let i = 0; i < array.length; i++){
        if(array[i]){
            newArray.push(array[i])
        }
    }
    return newArray
}

console.log(removeFalsy([1, 0, "", undefined, null, "what"]))
// [1, 'what']
console.log(removeFalsy([7, "", 0, "ate", undefined, 9]))
// [7, 'ate', 9]
*/

/*
Create a new object from an array of objects that only displays two keys from the original object
*/
/*
const movies = [
    {
        "Title": "Inception",
        "Released": "July 16, 2010",
        "Director": "Christopher Nolan",
        "imbdRating": "8.8"
    },
    {
        "Title": "Interstellar",
        "Released": "November 4, 2014",
        "Director": "Christopher Nolan",
        "imbdRating": "8.6"
    },
    {
        "Title": "The Dark Knight",
        "Released": "July 18, 2008",
        "Director": "Christopher Nolan",
        "imbdRating": "9.0"
    }
]

let titleAndReleaseDate = movies.map(item => ({
    title: item["Title"],
    releaseDate: item["Released"] 
}))
console.log(JSON.stringify(titleAndReleaseDate))

let titleAndRating = movies.map(item => ({
    title: item["Title"],
    imbdRating: item["imbdRating"] 
}))
console.log(JSON.stringify(titleAndRating))
*/
/*
const array = ["Yes", "No", "Maybe"]
array.splice(1, 0, "Definitely", "No way")
console.log(array)
// ['Yes', 'Definitely', 'No way', 'No', 'Maybe']
*/

// Create a function that removes all falsy values from an array.
/*
function removeFalsyBits(array){
    let trueArray = []
    for(let i = 0; i < array.length; i++){
        if(array[i]){
            trueArray.push(array[i])
        }
    }
    return trueArray
}

console.log(removeFalsyBits([null, "this", false, "is", undefined, "a", true, 0, "array", NaN, ""]))
// ['this', 'is', 'a', true, 'array']
*/

// Create a new object from an array of objects that only displays two keys from each of the original objects using map.
/*
const movies = [
    {
        "Title": "Inception",
        "Released": "July 16, 2010",
        "Director": "Christopher Nolan",
        "imbdRating": "8.8"
    },
    {
        "Title": "Interstellar",
        "Released": "November 4, 2014",
        "Director": "Christopher Nolan",
        "imbdRating": "8.6"
    },
    {
        "Title": "The Dark Knight",
        "Released": "July 18, 2008",
        "Director": "Christopher Nolan",
        "imbdRating": "9.0"
    }
]

let releasedAndRating = movies.map(item => ({
    "Release Date": item["Released"],
    "IMBD Rating": item["imbdRating"]
}))

console.log(JSON.stringify(releasedAndRating))
// [{"Release Date":"July 16, 2010","IMBD Rating":"8.8"},{"Release Date":"November 4, 2014","IMBD Rating":"8.6"},{"Release Date":"July 18, 2008","IMBD Rating":"9.0"}]
*/

// 9-22-2022
// How do we dynamically change the TAG that the styled-component renders, BUT only if it has a certain property (href)?
/*
<Link as={href ? 'a' : 'button'} href={href}>
    {children}
</Link>
*/

// Create a function that title cases a string (every word's first letter is capitalized)
/*
function titleCase(string){
    string = string.split(' ')
    for(let i = 0; i < string.length; i++){
        string[i] = string[i].toLowerCase().split('')
        string[i][0] = string[i][0].toUpperCase()
        string[i] = string[i].join('')
    }
    return string.join(' ')
}

console.log(titleCase("what is this nonsense?"))
// What Is This Nonsense?
*/

// Create a function that changes a string to title case (only the first letter of each word is capitalized) using map.
/*
function titleCaseMap(string){
    return string
    .toLowerCase()
    .split(' ')
    .map(item => item.replace(item.charAt(0), item.charAt(0).toUpperCase()))
    .join(' ')
}

console.log(titleCaseMap("this is madness"))
*/

// Create the map function from scratch
/*
const s = [42, 33, 97, 23]

Array.prototype.myMap = function(callback){
    const newArray = []
    this.forEach(item => newArray.push(callback(item)))
    return newArray
}

const sMap = s.myMap(function(item){
    return item * 2
})
console.log(sMap)
// [84, 66, 194, 46]

const t = s.map(item => item * 2)
console.log(t)
// [84, 66, 194, 46]


console.log("Yo")
*/

// 9-23-2022

// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

// If the function we pass to the array is true, return the number. If not, return undefined.
/*
function findElement(arr, func){
    let num = 0
    for(let i = 0; i < arr.length; i++){
        num = arr[i]
        if(func(num)){
            return num
        }
    }
    return undefined
}

console.log(findElement([1,2,4,6], num => num % 2 === 0))
// 2
console.log(findElement([1,3,3,6], num => num % 2 === 0))
// 6
console.log(findElement([1,3,3,5], num => num % 2 === 0))
// undefined
*/

// What's a good practice for setting default values in JS?
/*
const BOARD_SIZE = 5
const NUMBER_OF_PIPES = 10
// Use uppercase and underlines
*/

// Create the map function from scratch (on Array.prototype)
/*
const array = [24, 55, 67, 22]

Array.prototype.customMap = function(callback){
    let newArray = []
    this.forEach(item => newArray.push(callback(item)))
    return newArray
}

console.log(array.customMap(item => item * 2))
// [48, 110, 134, 44]
*/
/*
Array.prototype.myMap = function(callback){
    let newArray = []
    this.forEach(item => newArray.push(callback(item)))
    return newArray
}

const ranArray = [22, 44, 68, 800]

console.log(ranArray.myMap(item => item * 2))
// [44, 88, 136, 1600]
*/
// 9-24-2022

// Truth test function
/*
function findElement(arr, func){
    let num = 0
    for(let i = 0; i < arr.length; i++){
        num = arr[i]
        if(func(num)){
            return num
        }
    }
    return undefined
}

console.log(findElement([1,2,3,4], item => item % 2 === 0))
// 2
*/

// Create the map function from scratch (on Array.prototype)
/*
const s = [23, 44, 33, 20034]

Array.prototype.myMap = function(callback){
    let newArray = []
    this.forEach(item => newArray.push(callback(item)))
    return newArray
}

const t = s.myMap(item => item * 2)
console.log(t)
*/

// Default values in js
// const NUMBER_DRINKS = 7

// Create a function that removes all falsy values from an array.
/*
function removeFalsy(arr){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i]){
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(removeFalsy([1,2,3, 0, false, true, ""]))
// [1, 2, 3, true]
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

const nameArray = []
let currentPerson = person
while(currentPerson != null){
    nameArray.push(currentPerson.name)
    currentPerson = currentPerson.friend
}

console.log(nameArray)
// ['Phil', 'Simon', 'Caleb']
*/

//9-25-2022

// Create a function that changes a string to title case (only the first letter of each word is capitalized) using map.

// Lowercase the string, split the words up, use map with replace on character at index 0, rejoin the words with a space.
/*
function lowerCaseThisThing(string){
    return string.toLowerCase()
    .split(' ')
    .map(index => index.replace(index.charAt(0), index.charAt(0).toUpperCase()))
    .join(' ')
}

console.log(lowerCaseThisThing("hello there poopy butt"))
// Hello There Poopy Butt
*/
/*
function titleCaseLoop(string){
    string = string.split(' ')
    for(let i = 0; i < string.length; i++){
        string[i] = string[i].toLowerCase().split('')
        string[i][0] = string[i][0].toUpperCase()
        string[i] = string[i].join('')
    }
    return string.join(' ')
}

console.log(titleCaseLoop("yeah yeah what what"))
// Yeah Yeah What What
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
    for(let i = 0; i < contacts.length; i++){
        if(contacts[i].firstName === name){
            if(contacts[i].hasOwnProperty(prop)){
                return contacts[i][prop]
            }else{
                return "No such prop"
            }
        }
    }
    return "Profile does not exist"

  }

  console.log(lookUpProfile("Akira", "likes"))
//   ['Pizza', 'Coding', 'Brownie Points']
*/

// Create a new object from an array of objects that only displays two keys from the original object
/*
const arrayObj = [
    {name: "Philly",
    age: 37,
    job: "Unemployed"
    },    
    {name: "Jimbo",
    age: 27,
    job: "employed"
    },
    {name: "Carly",
    age: 22,
    job: "It's complicated"
    }
]

let arrayObjMap = arrayObj.map(item => ({
    name: item["name"],
    job: item["job"]
}))

console.log(arrayObjMap)
*/
// 9-26-2022

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

// Create the filter function from scratch with Array.prototype
/*
const array = [23, 33, 22, 4, 7, 80]

Array.prototype.myFilter = function(callback){
    let newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i])){
            newArray.push(this[i])
        }
    }
    return newArray
}

const evenFilter = array.myFilter(function(item){
    return item % 2 === 0
})

const oddFilter = array.myFilter(function(item){
    return item % 2 === 1
})

console.log(evenFilter)
// [22, 4, 80]
console.log(oddFilter)
// [23, 33, 7]
*/
/*
const array = [23, 33, 22, 4, 7, 80]

Array.prototype.myFilter = function(callback){
    let newArray = []
    this.forEach(function(item){
        if(callback(item)){
            console.log(newArray, item)
            newArray.push(item)
        }
    })
    return newArray
}

const evenFilter = array.myFilter(function(item){
    return item % 2 === 0
})

console.log(evenFilter)
// [22, 4, 80]
*/

// Create a function that concats two arrays together (the arguments provided to the function).
/*
function concatTwo(first, second){
    return first.concat(second)
}

let arrayOne = [1,2,3]
let arrayTwo = [4,5,6]
console.log(concatTwo(arrayOne, arrayTwo))
// [1, 2, 3, 4, 5, 6]

*/

// 9-27-2022

// Create the filter function from scratch with Array.prototype
/*
const array = [1,2,3,4,5,6,7]

Array.prototype.myFilt = function(callback){
    let newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i])){
            newArray.push(this[i])
        }
    }

    return newArray
}

const evenFilter = array.myFilt(function(item){
    return item % 2 === 0
})
console.log(evenFilter)
// [2, 4, 6]
*/

// What if we want to match a letter appearing between a range (say 3-6 times)?
/*
let ohStr = "Ohhhhhh no"
let ohRegex = /oh{7,8}/gi
console.log(ohRegex.test(ohStr))
// false (there are not between 7 and 8 h's in the string)
*/

// Use recursion to return an array that begins with startNum and ends with endNum.
/*
function rangeOfNumbers(startNum, endNum){
    if(endNum - startNum === 0) return [startNum]
    let array = rangeOfNumbers(startNum, endNum - 1)
    array.push(endNum)
    return array
}

console.log(rangeOfNumbers(1,6))
// [1, 2, 3, 4, 5, 6]
*/

// Create a function that concats two arrays together (the arguments provided to the function).
/*
function concatMe(firstThing, secondThing){
    return firstThing.concat(secondThing)
}
let firstArray = [1,2,3]
let secondArray = [4,5,6]

console.log(concatMe(firstArray,secondArray))
// [1, 2, 3, 4, 5, 6]
*/

  /*
  function getRating(watchList) {
    // set a variable to watchList called averageRating
    let averageRating = watchList
    // get only films by Christopher Nolan (filter)
    .filter(film => film.Director === "Christopher Nolan")
    // map the ratings so that they are numbers and not strings
    .map(film => Number(film.imdbRating))
    // use reduce to add the sum of ratings with ratings, then divide the length of only films by Christopher Nolan
    .reduce((sumOfRatings, rating) => sumOfRatings + rating) / watchList.filter(film => film.Director === "Christopher Nolan").length
    // return averageRating
    return averageRating
  }
  */

//   set a variable to watchList called averageRating

// get only films by Christopher Nolan (filter)

// map the ratings so that they are numbers and not strings
// (can use the Number() function)

// use reduce to add the sum of ratings with ratings, then divide the length of only films by Christopher Nolan

// return averageRating
/*
function getRating(watchList){
    let averageRating = watchList
    .filter(film => film.Director === "Christopher Nolan")
    .map(film => Number(film.imdbRating))
    .reduce((sumOfRatings, rating) => sumOfRatings + rating) / watchList.filter(film => film.Director === "Christopher Nolan").length
    return averageRating
}

  console.log(getRating(watchList))
//   8.675

  function nolanRatings(watchList){
    let nolanFilms = watchList.filter(film => film.Director === "Christopher Nolan")
    let ratings = nolanFilms.map(film => Number(film.imdbRating))
    let sumOfRatings = ratings.reduce((sumOfRatings, rating) => sumOfRatings + rating)
    let averageRating = sumOfRatings / nolanFilms.length
    return averageRating
  }

  console.log(nolanRatings(watchList))
//   8.675
*/
/*
const array = [6.4, 3.67, 4.88]
function squareMe(array){
 return array.map(num => parseInt(num))
}
const squaredIntegers = squareMe(array);
console.log(squaredIntegers);
// [6, 3, 4]
*/

//9-28-2022
// Write a function that returns the average rating for films only by a certain director using filter, map, and reduce.
/*
function getAvgRating(watchList){
    return watchList
    .filter(film => film.Director === "Christopher Nolan")
    .map(film => Number(film.imdbRating))
    .reduce((sumOfRatings, rating) => sumOfRatings + rating) / watchList.filter(film => film.Director === "Christopher Nolan").length
}

console.log(getAvgRating(watchList))

function getAvgDirectorRating(watchList, director){
    let films = watchList.filter(film => film.Director === `${director}`)
    let ratings = films.map(film => Number(film.imdbRating))
    let sumOfRatings = ratings.reduce((sumOfRatings, rating) => sumOfRatings + rating)
    let averageRating = sumOfRatings / films.length
    return `${director} has an average rating of ${averageRating}`
}

console.log(getAvgDirectorRating(watchList, "James Cameron"))
// James Cameron has an average rating of 7.9
console.log(getAvgDirectorRating(watchList, "Christopher Nolan"))
// Christopher Nolan has an average rating of 8.675
*/
/*
const numberArray = [22.3, 44.6, 3.23, 5.675]

function decToWhole(array){
    return array.map(number => parseInt(number))
}

console.log(decToWhole(numberArray))
// [22, 44, 3, 5]
*/
// sort an array without mutating the original
/*
const numberArray = [2,3,1,5,6,7,4]

function sortMe(array){
    return array.concat([]).sort(function(a,b){
        return a - b
    })
}

console.log(sortMe(numberArray))
// [1, 2, 3, 4, 5, 6, 7]
*/
/*
function splitify(str) {
    const split = str.split(/\W/)
    return split
  }
  
console.log(splitify("Hello World,I-am code"))
// [ 'Hello', 'World', 'I', 'am', 'code' ]
*/
/*
function removeSpecChar(string){
    return string.split(/\W/).join(' ')
}

console.log(removeSpecChar("May-the-force-be-with-you"))
// May the force be with you
*/
/*
function titleToSlug(title){
    return title
    .toLowerCase()
    .trim() //remove white spaces from either side of a string
    .split(/\s+/) //remove any space(s) between the string
    .join('-')
}

console.log(titleToSlug("How To Make  Slugs Out    Of Strings"))
// how-to-make-slugs-out-of-strings
*/

// 9-29-2022

// Create a function that returns the sum of a range of an array of two numbers ([1,4] would return 10 (1+2+3+4))
/*
function sumOfRange(array){
    let sum = 0
    let min = Math.min(array[0], array[1])
    let max = Math.max(array[0], array[1])
    for(let i = min; i <= max; i++){
        sum += i
    }
    return sum
}

console.log(sumOfRange([5,10]))
// 45
*/

// Using Math.floor and Math.random, return a random whole number that is >= myMin and <= myMax.
/*
function randomRange(myMin, myMax){
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}

console.log(randomRange(2, 45))
// floor is 2 (will never be lower than 2) random * myMax sets ceiling for max (45)
console.log(Math.floor(Math.random() * 10) + 2)
// floor is 2, ceiling is 10
*/

// How can you sort an array without mutating the original array? Bonus: What is the function that sorts numbers?
/*
function sortNumbers(array){
    return array.concat([]).sort(function(a,b){
        return a - b
    })
}
const myArray = [1,4,5,2,3,4]
console.log(sortNumbers(myArray))
// [1, 2, 3, 4, 4, 5]
console.log(myArray)
// [1,4,5,2,3,4]
*/

// How do we create a new object based off of an already existing object?
/*
const person = {
    name: "Phil",
    age: 34,
    address: {
        street: "Joseph",
        city: "Oxford"
    }
}

const p2 = Object.create(person)
console.log(p2.age)
*/
/*
const person = {
    name: "Phil",
    age: 34,
    skill: "JavaScript"
}

const p1 = {...person, skill:'React'}
const p2 = {skill:'React',...person}
console.log(p1.skill)
// React
console.log(p2.skill)
// JavaScript (React gets overridden when we use the spread operator to map person to p2 (there can only be one skill))
*/

// Use split and regex to return an array of words without any spaces or special characters.
/*
function noSpecialChars(string){
    return string.split(/\W/)
}
console.log(noSpecialChars("This-cannot!be~happening"))
*/

// Create the map function from scratch (on Array.prototype)
/*
const array = [1,2,4,66,77]
Array.prototype.myMap = function(callback){
    const newArray = []
    this.forEach(item => newArray.push(callback(item)))
    return newArray
}

console.log(array.myMap(item => item * 2))
*/

// Create a function that removes the dashes from the string "May-the-force-be-with-you".
/*
function removeDashes(string){
    return string.split('-').join(' ')
}

console.log(removeDashes("May-the-force-be-with-you"))
*/

// Write a function that takes an array and a number. Use a while loop to loop over the array and push a copy of the array to a new array the number of times specified by the number argument.
/*
function copyMachine(array, number){
    let newArray = []
    let i = 0
    while(i < number){
        newArray.push([...array])
        i++
    }
    return newArray
}

console.log(copyMachine([1,2,3], 3))
// [[1,2,3],[1,2,3],[1,2,3]]
*/

// What is a url slug and how do we create one from a title/heading on our page?
/*
function makeMeASlug(title){
    return title.toLowerCase().split(' ').join('-')
}

console.log(makeMeASlug("This is the end my only friend"))
// this-is-the-end-my-only-friend
*/

// Create a function that returns the sum of a range of an array of two numbers ([1,4] would return 10 (1+2+3+4))
/*
function returnRange(array){
    let sum = 0
    let min = Math.min(array[0],array[1])
    let max = Math.max(array[0],array[1])
    for(let i = min; i <= max; i++){
        sum += i
    }
    return sum
}

console.log(returnRange([1,4]))
// 10
*/

// ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]

// Create a function that compares two arrays and only returns an element that both arrays share
// Hint: combine the two arrays, filter out items that are not included in array1 or array2, return
/*
function sameElement(arr1, arr2){
    return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item))
}

console.log(sameElement(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))
// ['pink wool']
*/

// Create a function that takes an array and an unspecified number of arguments. The function should compare the arguments with the elements in the array. If any of the arguments match an element in the array, the element should be deleted from the array.
// Hint: Use the spread operator when defining params, filter the array by checking for things that should not be included (spread operator param)
/*
function pruneArray(arr, ...thingsToRemoveFromArray){
    return arr.filter(elem => !thingsToRemoveFromArray.includes(elem))
}

console.log(pruneArray([1,2,3,2,3,4,5], 2, 4))
// [1, 3, 3, 5]
*/

// 9-30-2022
// Create a function that title cases a string (every word's first letter is capitalized)
/*
// With a forLoop
function titleCaseIt(string){
    string = string.split(' ')
    for(let i = 0; i < string.length; i++){
        string[i] = string[i].toLowerCase().split('')
        string[i][0] = string[i][0].toUpperCase()
        string[i] = string[i].join('')
    }
    return string.join(' ')
}
console.log(titleCaseIt("this is a test"))
// This Is A Test
*/

// With Map
/*
function titleCaseIt(string){
    return string
    .toLowerCase()
    .split(' ')
    .map(item => item.replace(item.charAt(0), item.charAt(0).toUpperCase()))
    .join(' ')
}

console.log(titleCaseIt("this is a test"))
// This Is A Test
*/
/*
function removeFalsy(array){
    let newArray = []
    for(let i = 0; i < array.length; i++){
        if(array[i]){
            newArray.push(array[i])
        }
    }

    return newArray
}

console.log(removeFalsy(["yes", "", NaN, undefined, 7, 0]))
*/

// Create a function that changes a string to title case (only the first letter of each word is capitalized) using map.
/*
function titleCaseMap(string){
    return string
    .toLowerCase()
    .split(' ')
    .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(' ')
}

console.log(titleCaseMap("what is going on here"))
*/

// Find the longest word in a string and print the length of that word (a number). Bonus: print out the word itself.
/*
function longestWord(string){
    let words = string.split(' ')
    let lengthOfWord = 0
    let numberOfWords = 0
    let longestWord = ""
    for(let i = 0; i < words.length; i++){
        if(words[i].length > lengthOfWord){
            lengthOfWord = words[i].length
            longestWord = words[i]
        }if(words.length > numberOfWords){
            numberOfWords++
        }
    }
    return `Your string is ${numberOfWords} words long. The longest word in your string is "${longestWord}" at ${lengthOfWord} characters long.`
}

console.log(longestWord("this is a test yoooooo"))
// Your string is 5 words long. The longest word in your string is "yoooooo" at 7 characters long.

function wordCount(string){
    let words = string.split(' ')
    let numberOfWords = 0
    for(let i = 0; i < words.length; i++){
        if(words.length > numberOfWords){
            numberOfWords++
        }
    }
    return numberOfWords
}

console.log(wordCount("how to eat a bagel properly dammit"))
// 7
*/

// Create a new object from an array of objects that only displays two keys from the original object using map.
/*
function specificObjects(array){
    return array.map(movie => ({
        title: movie["Title"],
        releaseDate: movie["Released"]
    }))
}

console.log(JSON.stringify(specificObjects(watchList)))
*/

// Create a function that compares two arrays and only returns an element that both arrays share
/*
function compareArrays(arr1, arr2){
    return arr1
    .concat(arr2)
    .filter(element => !arr1.includes(element) || !arr2.includes(element))

}

console.log(compareArrays([1,2,3], [4,3,5]))
*/

// 10-1-2022

// Create a function that concats two arrays together (the arguments provided to the function).
/*
function concatArrays(arr1, arr2){
    return arr1.concat(arr2)
}
console.log(concatArrays([1,2,3],[4,5,6]))
// [1, 2, 3, 4, 5, 6]
*/

// What is a mixin and how can we use it?
/*
const bird = {
    ability: "fly",
    wings: 2
}

const plane = {
    ability: "fly",
    wings: 2
}

const myMix = function(object){
    return object.flying = function(){
        console.log("We are soaring, homie")
    }
}

myMix(bird)
bird.flying()
// We are soaring, homie
*/

// Write a function that checks if the second argument is the last part of the first argument (a string).

// confirmEnding("Bastian", "n") should return true.
/*
function confirmEnding(string, target){
    return string.slice(string.length - target.length) === target
}

console.log(confirmEnding("hello", "lo"))
*/

// Create a function that compares two arrays and only returns an element that both arrays DO NOT share
/*
function notInBoth(arr1, arr2){
    return arr1.concat(arr2).filter(element => !arr1.includes(element) || !arr2.includes(element))
}

console.log(notInBoth([1,2,3,4,5,6], [1,2,4,5,6,7]))
// [3, 7]
*/

// Write a function that returns the average rating for films only by a certain director using filter, map, and reduce.
/*
function avgRating(watchList){
    let averageRating = watchList
        .filter(film => film.Director === "Christopher Nolan")
        .map(film => Number(film.imdbRating))
        .reduce((sumOfRatings, rating) => sumOfRatings + rating) / watchList.filter(film => film.Director === "Christopher Nolan").length
        return averageRating
}

console.log(avgRating(watchList))
// 8.675

function avgRatingDirector(watchList, director){
    let films = watchList.filter(film => film.Director === `${director}`)
    let ratings = films.map(film => Number(film.imdbRating))
    let sumOfRatings = ratings.reduce((sum, rating) => sum + rating)
    let averageRating = sumOfRatings / films.length
    return `${director} has an average rating of ${averageRating}`

}

console.log(avgRatingDirector(watchList, "Christopher Nolan"))
// Christopher Nolan has an average rating of 8.675
*/

// 10-3-2022

// JSX Dom rendering

// ReactDOM.render(JSX, document.getElementById("fidgy"))

// Create a function that takes in a name and uses printVariable as a callback to print out "Hello, (name)"
/*
function printVariable(variable){
    console.log(variable)
}

const hello = function(name, func){
    return func(`Hello, ${name}`)
}

hello("Phil", printVariable)
// Hello, Phil
*/

// What is a url slug and how do we create one from a title/heading on our page?
/*
function createSlug(string){
    return string
        .toLowerCase()
        .split(' ')
        .join('-')
}

console.log(createSlug("ThiS Is A tEst"))
// this-is-a-test
*/

// Create the filter function from scratch with Array.prototype
/*
const array = [1,2,3,4,5,6,7,8]

Array.prototype.myFilter = function(callback){
    let newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i])){
            newArray.push(this[i])
        }
    }
    return newArray
}

const evenFilter = array.myFilter(function(item){
    return item % 2 === 0
})
console.log(evenFilter)

const oddFilter = array.myFilter(function(item){
    return item % 2 === 1
})
console.log(oddFilter)
*/

// Create a function that returns the sum of a range of an array of two numbers ([1,4] would return 10 (1+2+3+4))
/*
function rangeSum(array){
    let min = Math.min(array[0], array[1])
    let max = Math.max(array[0], array[1])
    let sum = 0
    for(let i = min; i <= max; i++){
        sum += i
    }
    return sum
}

console.log(rangeSum([5,10]))
*/

// Assign list to a destructured array that is equal to 3 through 10.
/*
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    let [a, b, ...arr] = list
    return arr; 
}
const arr = removeFirstTwo(source);
console.log(arr)
// [3, 4, 5, 6, 7, 8, 9, 10]
*/

// Create a function that removes the dashes from the string "May-the-force-be-with-you".
/*
function removeDashes(string){
    return string.split('-').join(' ')
}

console.log(removeDashes("May-the-force-be-with-you"))
// May the force be with you
*/

// Import everything from a js file

//import * as modalModules from "./index.js"

// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
/*
function truthTest(arr, func){
    let num = 0
    for(let i = 0; i < arr.length; i++){
        num = arr[i]
        if(func(num)){
            return num
        }
    }
    return undefined
}

console.log(truthTest([1,2,3,4], num => num % 2 === 0))
*/
/*
let numArray = [1,3,2,6,4,7,5]

function numberSorter(arr){
    return arr.concat().sort(function(a, b){
        return a - b
    })
}

console.log(numberSorter(numArray))
*/

// Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.
/*
let quote = "3 blind mice"
let quoteRegex = /[^aeiou0-9]/gi
let result = quote.match(quoteRegex)
console.log(result)
// [' ', 'b', 'l', 'n', 'd', ' ', 'm', 'c']
*/

// Find the longest word in a string and print the length of that word (a number).
/*
function findLongest(string){
    let words = string.split(' ')
    let numberOfChars = 0
    let longestWord = ""
    for(let i = 0; i < words.length; i++){
        if(words[i].length > numberOfChars){
            numberOfChars += words[i].length
            longestWord = words[i]
        }
    }
    return `The longest word is ${longestWord} at ${numberOfChars} characters`
}

console.log(findLongest("What is the longest word?"))
// The longest word is longest at 11 characters
*/

// Create a function that uses map to convert decimal numbers to whole numbers using parseInt()
/*
function decToWhole(array){
    return array.map(element => parseInt(element))
}

console.log(decToWhole([22.4,33.5,25.7]))
// [22, 33, 25]
*/

// 10-4-2022

// Create a function that compares two arrays and only returns an element that both arrays DO NOT share
/*
function compareArrays(arr1, arr2){
    return arr1.concat(arr2).filter(element => !arr1.includes(element) || !arr2.includes(element))
}

console.log(compareArrays([1,2,3],[1,2,4]))
// [3, 4]
*/

// Write a function that takes in a string and a number. The string should be repeated the number of times specified in the number parameter.
/*
function copyString(string, number){
    return string.repeat(number)
}
console.log(copyString("Hi", 2))
// HiHi
*/

// Split a string and use regex to return an array of words that contains no spaces or special characters.
/*
function combineArray(string){
    return string.split(/\W/)
}

console.log(combineArray("hello there my old friend"))
// ['hello', 'there', 'my', 'old', 'friend']
*/

// 10-5-2022

// Create the map function from scratch (on Array.prototype)
/*
Array.prototype.myMap = function(callback){
    let newArray = []
    this.forEach(item => newArray.push(callback(item)))
    return newArray
}

let array = [1,2,3,4,5]
let doubled = array.myMap(item => item * 2)
console.log(doubled)
// [2, 4, 6, 8, 10]
*/

// Write a function that returns the average rating for films only by a certain director using filter, map, and reduce.
/*
function avgRating(watchList){
    let averageRating = watchList
        .filter(film => film.Director === "Christopher Nolan")
        .map(film => Number(film.imdbRating))
        .reduce((sumOfRatings, sum) => sumOfRatings + sum) / watchList.filter(film => film.Director === "Christopher Nolan").length
        return averageRating
}

console.log(avgRating(watchList))
*/

// Write a function that reverses a string with a for loop
/*
function reverseMe(string){
    let newString = ""
    for(let i = string.length - 1; i >= 0; i--){
        newString += string[i]
    }
    return newString
}

console.log(reverseMe("Hello"))
//elloH
*/

// REGEX
// Check if a string is made up of either Phil Nelson or Jin Nelson.
// Now check if any middle names or initials are also included.
/*
let string = "Jin Nelson"
let regex = /(Phil|Jin).*Nelson/
let result = regex.test(string)
console.log(result)
// true
*/

// Write a function that takes a full name, splits the first name into an array, and returns it. Then destructure the array so that both the first name and last name are accessible as separate variables (assign the destructured array to the function).
/*
function splitFullName(fullName){
    return fullName.split(' ')
}

let [firstName, lastName] = splitFullName("Phil Nelson")
console.log(firstName)
// Phil
*/

// 10-6-2022

// How can we create an array within a component, access it with props, and apply JS methods to it?
/*
const MyComponent = (props) => {
    return <p>{props.items.join(', ')}</p>
}

<Fruits items={["oranges", "apples"]} />
*/

// How do you render JSX components to the DOM? Hint: the method requires two arguments; component to render and the target node.
/*
ReactDOM.render(MyComponent, document.getElementById('poop'))
*/

// What are the three arguments/params that we can pass to array.splice()?
/*
array.splice(indexToMakeReplacement, NumItemsToBeRemoved, itemsToReplaceRemoved)
*/

// REGEX
// How do we select 0 or more characters like all of the a's in Aaaaaaaaargh?

// const string = "Aaaaaaaaaaargh"
// const regex = /a*/i
// const result = string.match(regex)

// console.log(result)

// How do we ensure that a property type is required before the value is displayed with React components?
/*
const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  }
  
  Items.propTypes = {
    quantity: PropTypes.number.isRequired
  }
  
  Items.defaultProps = {
    quantity: 0
  }
*/

// Create a function that title cases a string (every word's first letter is capitalized)
/*
function titleCaseIt(string){
    string = string.split(' ')
    for(let i = 0; i < string.length; i++){
        string[i] = string[i].toLowerCase().split('')
        string[i][0] = string[i][0].toUpperCase()
        string[i] = string[i].join('')
    }
    return string.join(' ')
}

console.log(titleCaseIt("Hello there dingle butt"))
// Hello There Dingle Butt
*/

/*
function titleCaseIt(string){
    let titledString = string
    .toLowerCase()
    .split(' ')
    .map(elem => elem.replace(elem.charAt(0), elem.charAt(0).toUpperCase()))
    .join(' ')
    return titledString
}

console.log(titleCaseIt("Hello there dingle butt"))
// Hello There Dingle Butt
*/
/*
class MyComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: "Philly Mac"
        }
    }
}

render(){
    return (
        <div>
            <h1>{this.state.name}</h1>
        </div>
    )
}
*/
/*
Item.propTypes = {
    name: PropTypes.string.isRequired
}
*/
/*
class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.reset = this.reset.bind(this)
    }
  
  increment(){
    this.setState(state => ({
      count: state.count + 1
    }))
  }
  decrement(){
    this.setState(state => ({
      count: state.count - 1
    }))
  }
  reset(){
    this.setState(state => ({
      count: state.count = 0
    }))
  }
    render() {
      return (
        <div>
          <button className='inc' onClick={this.increment}>Increment!</button>
          <button className='dec' onClick={this.decrement}>Decrement!</button>
          <button className='reset' onClick={this.reset}>Reset</button>
          <h1>Current Count: {this.state.count}</h1>
        </div>
      );
    }
  };
*/

//10-7-2022

// How do you render React components to the DOM? (Different from how you pass JSX elements to the render).
/*
ReactDOM.render(<MyComponent />, document.getElementById("jobs"))
*/

// Impure function to a pure function
/*
const person = {
    name: "Phil",
    friends: ["Simon", "Caleb"]
}

function addFriend(friendName){
    person.friends.push(friendName)
}

addFriend("Jill")

function addFriendPure(obj, friendName){
    return {...obj, friends: [...obj.friends, friendName]}
}

const person2 = addFriendPure(person, "Jimmy")
console.log(person2.friends)
// ['Simon', 'Caleb', 'Jill', 'Jimmy']
console.log(person.friends)
// ['Simon', 'Caleb', 'Jill']
*/

// React - ensure that a property type is required before the value is displayed
/*
Items.propTypes = {
    name: PropTypes.string.isRequired
}
*/

// How do you make a component stateful and then how do you access the props defined in the constructor?
/*
class People extends React.Component {
    constructor(props){
        super(props)
    
    this.state = {
        name: 'Philly Mac'
    }
}

    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}
*/
/*
const List = props => {
    return <p>{props.array.join(', ')}</p>
}

class People extends React.Component {
    constructor(props){
        super(props)
}
    render(){
        return(
            <div>
                <List array={[1,2,3,4]}></List>
            </div>
        )
    }
}
*/

// Create a new object from an array of objects that only displays two keys from the original object using map.
/*
const movies = [
    {
        "Title": "Inception",
        "Released": "July 16, 2010",
        "Director": "Christopher Nolan",
        "imbdRating": "8.8"
    },
    {
        "Title": "Interstellar",
        "Released": "November 4, 2014",
        "Director": "Christopher Nolan",
        "imbdRating": "8.6"
    },
    {
        "Title": "The Dark Knight",
        "Released": "July 18, 2008",
        "Director": "Christopher Nolan",
        "imbdRating": "9.0"
    }
]
const ratingAndDirector = movies.map(item => ({
    rating: item["imbdRating"],
    director: item["Director"]
}))

console.log(JSON.stringify(ratingAndDirector))
*/

// Create a function that returns the sum of a range of an array of two numbers ([1,4] would return 10 (1+2+3+4))
/*
function sumOfRange(array){
    let min = Math.min(array[0], array[1])
    let max = Math.max(array[0], array[1])
    let sum = 0
    for(let i = min; i <= max; i++){
        sum += i
    }
    return sum
}

console.log(sumOfRange([4,1]))
*/

// 10-8-2022

// Write a React component from scratch
/*
class MyComponent extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
      return(
        <div>
          <h1>My First React Component!</h1>
        </div>
      )
    }
}

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'))
// h1 rendered to the DOM
*/
/*
// Use regext and .replace() and a capture group to change the string "one two three" to "three two one"
let string = "You are strong with the force"
let regex = /(\w+)\s(\w+)\s(\w+)\s(\w+)\s(\w+)\s(\w+)/
let newString = "$3 $1 $2 $4 $5 $6"
let result = string.toLowerCase().replace(regex, newString)
console.log(result)
// strong you are with the force
*/

// How can you sort an array without mutating the original array? Bonus: What is the function that sorts numbers?
/*
function sortArray(array){
    return array.concat([]).sort(function(a,b){
        return a - b
    })
}

const numberArray = [6,4,3,2,1,5]
console.log(sortArray(numberArray))
*/
/*
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        count: 0
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.reset = this.reset.bind(this)
    }

    increment(){
        this.setState(state => ({
            count: state.count + 1
        }))
    }

    decrement(){
        this.setState(state => ({
            count: state.count - 1
        }))
    }

    reset(){
        this.setState(state => ({
            count: state.count = 0
        }))
    }

    render() {
        return (
            <div>
                <button className='inc' onClick={this.increment}>Increment!</button>
                <button className='dec' onClick={this.decrement}>Decrement!</button>
                <button className='reset' onClick={this.reset}>Reset</button>
                <h1>Current Count: {this.state.count}</h1>
            </div>
        )
    }
}
*/

// 10-10-2022

// How can we create an array within a component, access it with props, and apply JS methods to it?
/*
const List = props => {
    return <p>{props.items.join(', ')}</p>
}

class MyComponent extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1>Hello there</h1>
                <List items={["tree", "bear", "honey"]}/>
            </div>
        )
    }
}
*/

// Create a component called Camper with an arrow function that contains a paragraph that includes a name value passed to props.
/*
const Camper = props => {
    return <p>{props.name}</p>
}

Camper.defaultProps = {
    name: "CamperBot"
}

Camper.propTypes = {
    name: PropTypes.string.isRequired
}
*/

// Create a component that uses three functions: increment, decrement, and reset. The component should return three buttons with onClicks that trigger each function ({this.increment}, etc.) and an h1 with a current count set to {this.state.count}.
/*
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        count: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }
        increment(){
            this.setState(state => ({
                count: state.count + 1
            }))
        }

        decrement(){
            this.setState(state => ({
                count: state.count - 1
            }))
        }

        reset(){
            this.setState(state => ({
                count: state.count = 0
            }))
        }
        render() {
            return (
                <div>
                    <button className='inc' onClick={this.increment}>Increment!</button>
                    <button className='dec' onClick={this.decrement}>Decrement!</button>
                    <button className='reset' onClick={this.reset}>Reset</button>
                    <h1>Current Count: {this.state.count}</h1>
                </div>
            )
        }
}
*/

// Create a function that compares two arrays and only returns an element that both arrays DO NOT share
/*
function compareArrays(arr1, arr2){
    return arr1.concat(arr2).filter(element => !arr1.includes(element) || !arr2.includes(element))
}

console.log(compareArrays([1,2,3], [2,3,4]))
*/

/*
Array.prototype.myFilter = function(callback){
    const newArray = []
    console.log(this)
    for(let i = 0; i < this.length; i++){
        if(callback(this[i])){
            newArray.push(this[i])
        }
    }
    return newArray
}

const array = [1,2,3,4,5,6]

const evenFilter = array.myFilter(function(item){
    return item % 2 === 0
})

const oddFilter = array.myFilter(function(item){
    return item % 2 === 1
})

console.log(evenFilter)
// [22, 4, 80]
console.log(oddFilter)
// [23, 33, 7]
*/
/*
class Thermostat {
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

const thermos = new Thermostat(86)
console.log(thermos.temperature)

thermos.temperature = 800
console.log(thermos.fahrenheit)
*/

// 10-11-2022
// Create a function that changes a string to title case (only the first letter of each word is capitalized) using map.
/*
function toTitleCase(string){
    return string
    .toLowerCase()
    .split(' ')
    .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(' ')
}
// forgot to use "val" in val.replace()

console.log(toTitleCase("hello there buffalo"))
// Hello There Buffalo
*/

// What is a url slug and how do we create one from a title/heading on our page?
/*
function createSlug(string){
    return string
    .toLowerCase()
    .split(' ')
    .join('-')
}

console.log(createSlug("this Is a TESt"))
// this-is-a-test
*/

// Create a function that uses map to convert decimal numbers to whole numbers using parseInt()
/*
function decToWhole(arrayOfNumbers){
    return arrayOfNumbers.map(val => parseInt(val))
}

console.log(decToWhole([22.3, 44.232, 55.6]))
// [22, 44, 55]
*/

// Write a function that returns the average rating for films only by a certain director using filter, map, and reduce.
/*
function getAvgRating(watchList, director){
    let filmDirector = watchList.filter(film => film.Director === `${director}`)
    let ratings = filmDirector.map(film => Number(film.imdbRating))
    let sumOfRatings = ratings.reduce((sumOfRatings, rating) => sumOfRatings + rating)
    let averageRating = sumOfRatings / filmDirector.length
    return `${director}'s films have an average rating of ${averageRating}.`
}

console.log(getAvgRating(watchList, "James Cameron"))
// James Cameron's films have an average rating of 7.9.
console.log(getAvgRating(watchList, "Christopher Nolan"))
// Christopher Nolan's films have an average rating of 8.675.
*/
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

// How do you render JSX components to the DOM? Hint: the method requires two arguments; component to render and the target node.
    // ReactDOM.render(MyComponent, document.getElementById('target-node'))


// Create a map that contains three arrays with the keys 1, 2, 3 (as placeholders for ids). Each key should have a test AND a description value assigned to it. Next, create a function that gets an id (1, 2, or 3) from our map and returns it.
/*
const idMap = new Map([
    [1, {test: "test1", description: "dec1"}],
    [2, {test: "test2", description: "dec2"}],
    [3, {test: "test3", description: "dec3"}],
])

function getId(id){
    return idMap.get(id)
}

console.log(getId(2))
*/
/*
class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        submit: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    handleSubmit(event) {
      event.preventDefault()
      this.setState({
        submit: this.state.input
      })
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.input} onChange={this.handleChange}/>
            <button type='submit'>Submit!</button>
          </form>
            <h1>{this.state.submit}</h1>
        </div>
      );
    }
  }
*/
/*
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeUsers: null
      };
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({
          activeUsers: 1273
        });
      }, 500);
    }
    render() {
      return (
        <div>
          <h1>Active Users: {this.state.activeUsers}</h1>
        </div>
      );
    }
  }
  */

// 10-12-2022
/*
  function printVariable(variable){
    console.log(variable)
  }

  function printName(name, callback){
    callback(`Hello, ${name}`)
  }

printName("Phil", (variable) => console.log(variable))
// Hello, Phil
*/
// Remove dashes/special chars from a string
/*
function removeDashes(string){
    return `${string.split(/[\W]/).join(' ')}.`
}

console.log(removeDashes("this-is?the-end-my!only(friend"))
*/

// Using Math.floor and Math.random, return a random whole number that is >= myMin and <= myMax.
/*
function returnRandomRange(min, max){
    return Math.floor(Math.random() * (max - min) + 1) + min
}

console.log(returnRandomRange(2,24))
*/

// Create the map function from scratch (on Array.prototype)
/*
Array.prototype.myMap = function(callback){
    let newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i]))
    }
    return newArray
}
*/
/*
Array.prototype.myMap = function(callback){
    let newArray = []
    this.forEach(item => newArray.push(callback(item)))
    return newArray
}


const array = [2,3,4,5,6]
const mapped = array.myMap(value => value * 2)
console.log(mapped)
// [4, 6, 8, 10, 12]
*/
/*
class Colorful extends React.Component {
    render() {
      return (
        <div></div>
      )
    }
  }
*/
/*
// Inline styles in JSX
const STYLES = {
    titleStyles: {
      color: "purple",
      fontSize: 40,
      border: "2px solid purple",
      width: "fit-content",
      padding: 14
      },
    paragraphStyles: {
      color: "rebeccapurple",
      fontSize: 20,
      border: "2px solid hotpink",
      width: "fit-content",
      padding: 12
      }      

    }

class Colorful extends React.Component {
  render() {
    return (
      <div>
        <h1 style={STYLES.titleStyles}>I'm a title</h1>
        <p style={STYLES.paragraphStyles}>I'm a paragraph</p>
      </div>
    )
  }
}
*/

// Toggle the display of an element with an if/else statement within our render
/*
class MyComponent extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        display: true
      }
      this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
      this.setState((state) => ({
        display: !state.display
      }))
    }
    render() {
      if(this.state.display){
      return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
           <h1>Displayed!</h1>
         </div>
      )
      }else{
        return (
          <div>
            <button onClick={this.toggleDisplay}>Toggle Display</button>
          </div>
        )
      }
    }
  }
  */

//   Same if/else on one line:
/*
  class MyComponent extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        display: true
      }
      this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
      this.setState((state) => ({
        display: !state.display
      }))
    }
    render() {
        return (
           <div>
             <button onClick={this.toggleDisplay}>Toggle Display</button>
             {this.state.display && <h1>Displayed!</h1>}
           </div>
        )
      }
  }
*/

// 10-13-2022

// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
/*
function truthTest(arr, func){
    let num = 0
    for(let i = 0; i < arr.length; i++){
        num = arr[i]
        if(func(num)){
            return num
        }
    }
    return undefined
}

let numArray = [1,2,3,4,5,6,7]

console.log(truthTest(numArray, num => num % 2 === 0))
// 2
*/

// Find the longest word in a string and print the length of that word (a number). Bonus: print out the word itself. Bonus bonus: get a word count of the whole string.
/*
function findLongestWord(string){
    let words = string.split(' ')
    let wordLength = 0
    let longestWord = ""

    for(let i = 0; i < words.length; i++){
        if(words[i].length > wordLength){
            wordLength = words[i].length
            longestWord = words[i]
            console.log(longestWord)
            // this
            // longest
        }
    }
    return `The longest word in your string is "${longestWord}", at ${wordLength} characters long.`
}

console.log(findLongestWord("this is the longest word"))
// The longest word in your string is "longest", at 7 characters long.
*/

// Create a function that concats two arrays together (the arguments provided to the function).
/*
function concatMe(arr1, arr2){
    return arr1.concat(arr2)
}

let arrayOne = [1,2,3,4,5]
let arrayTwo = [6,7,8,9,10]

console.log(concatMe(arrayOne, arrayTwo))
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/
// How do you create inline styles in JSX? Create a div that has the color of red and the font size of 72px in rem.
/*
class Colorful extends React.Component {
    render() {
        return (
            <div style={{color: "red", fontSize: "calc(72 / 16 * 1rem)"}}>Some big, red text</div>
        )
    }
}
*/
// Replace an if/else statement with &&
/*
render(){
    return (
        <div>
            <button onClick={this.toggleDisplay}>Toggle Display</button>
            {this.state.display && <h1>Displayed!</h1>}
        </div>
    )
}
*/

// 10-14-2022
/*
// sort an array without mutating the original
function sortArray(array){
    return array.concat([]).sort(function(a,b){
        return a - b
    })
}

let array = [1,4,2,5,3,7,4,9,10]
console.log(sortArray(array))
// [1, 2, 3, 4, 4, 5, 7, 9, 10]
*/

// What is a mixin and how can we use it?
/*
let bird = {
    name: "Donald",
    wings: 2
}

let plane = {
    name: "DC3",
    wings: 2,
    flying(){
        console.log(`${this.name} is flying!`)
    }
}

let flyMixin = function(obj){
    obj.flying = function(){
        console.log(`${obj.name} is flying!`)
    }
    obj.age = 44
}

flyMixin(bird)
bird.flying()
console.log(bird.age)

plane.flying()
*/

// How do you make a component stateful and then how do you access the props defined in the constructor?
/*
class MyComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: "Philly"
        }
    }

    render(){
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}
*/
/*
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        count: 0
        }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.reset = this.reset.bind(this)
    }
    increment(){
        this.setState(state => ({
            count: state.count + 1
        }))
    }
    // ↓ Also is valid
    // increment(){
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }
    decrement(){
        this.setState(state => ({
            count: state.count - 1
        }))
    }
    reset(){
        this.setState(state => ({
            count: state.count = 0
        }))
    }
    render() {
        return (
            <div>
                <button className='inc' onClick={this.increment}>Increment!</button>
                <button className='dec' onClick={this.decrement}>Decrement!</button>
                <button className='reset' onClick={this.reset}>Reset</button>
                <h1>Current Count: {this.state.count}</h1>
            </div>
        )
    }
}
*/
// Pass array props to a component and perform an array method on them
/*
const List = props => {
    return <h1>{props.array.join(', ')}</h1>
}

class Todo extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <h1>Todo Lists</h1>
                <h2>Today:</h2>
                <List array={["walk the dog", "eat pizza", "workout"]} />
            </div>
        )
    }
}
*/

// How do you render React components to the DOM? (Different from how you pass JSX elements to the render).
/*
ReactDOM.render(<ComponentName />, document.getElementById("node-item"))
*/

// Update a todo list based on user input with map()
/*
const textAreaStyles = {
    maxWidth: "100%",
    margin: 5
  };
//   cosmedic styles:
  const wrapperStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
  
  const buttonStyles = {
    color: "white",
    background: "black",
    border: "none",
    padding: "10px 20px",
    borderRadius: "20px"
  }
  
  const textStyles = {
    textAlign: "center"
  }

  class MyToDoList extends React.Component {
    constructor(props) {
      super(props);
      // Change code below this line
      this.state = {
        userInput: "",
        toDoList: []
      }
      // Change code above this line
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit() {
      const itemsArray = this.state.userInput.split(',');
      this.setState({
        toDoList: itemsArray
      });
    }
    handleChange(e) {
      this.setState({
        userInput: e.target.value
      });
    }
    render() {
      const items = this.state.toDoList.map(item => <li>{item}</li>)
      return (
        <div style={wrapperStyles}>
          <textarea
            onChange={this.handleChange}
            value={this.state.userInput}
            style={textAreaStyles}
            placeholder='Separate Items With Commas'
          />
          <br />
          <button style={buttonStyles} onClick={this.handleSubmit}>Create List</button>
          <h1 style={textStyles}>My "To Do" List:</h1>
          <ul>{items}</ul>
        </div>
      );
    }
  }
  */

//   Adding keys to <li>s when mapping lists
/*
const frontEndFrameworks = [
    'React',
    'Angular',
    'Ember',
    'Knockout',
    'Backbone',
    'Vue'
  ];
//   Avoid using the array's index as the key for each item.
  function Frameworks() {
    const renderFrameworks = frontEndFrameworks.map(item => <li key={item}>{item}</li>)
    return (
      <div>
        <h1>Popular Front End JavaScript Frameworks</h1>
        <ul>
          {renderFrameworks}
        </ul>
      </div>
    );
  };
*/

// Filter out only users that are online
/*
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users: [
          {
            username: 'Jeff',
            online: true
          },
          {
            username: 'Alan',
            online: false
          },
          {
            username: 'Mary',
            online: true
          },
          {
            username: 'Jim',
            online: false
          },
          {
            username: 'Sara',
            online: true
          },
          {
            username: 'Laura',
            online: true
          }
        ]
      };
    }
    // Again, make sure that you add a key to your array when using map
    render() {
      const usersOnline = this.state.users.filter(user => user.online)
      const renderOnline = usersOnline.map(user => <li key={user.username}>{user.username}</li>)
      return (
        <div>
          <h1>Current Online Users:</h1>
          <ul>{renderOnline}</ul>
        </div>
      );
    }
  }
  */

// 10-15-2022
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
function lookUpProfile(name, prop){
    for(let i = 0; i < contacts.length; i++){
        if(contacts[i].firstName === name){
            if(contacts[i].hasOwnProperty(prop)){
                return contacts[i][prop]
            }else{
                return "no such property"
            }
        }
    }
    return "Profile does not exist"
}

console.log(lookUpProfile("Akira", "likes"))
//['Pizza', 'Coding', 'Brownie Points']
*/

// Create a new object from an array of objects that only displays two keys from the original object using map.
/*
const objArray = [
    {
        name: "Billy",
        age: 52,
        birthdate: 1965
    },
    {
        name: "Jill",
        age: 246,
        birthdate: 1776
    }
]

const newObj = objArray.map(item => ({
    name: item.name,
    age: item.age
}))

console.log(JSON.stringify(newObj))
// [{"name":"Billy","age":52},{"name":"Jill","age":246}]
*/

// titlecase a string
/*
function titleCaseThisShit(string){
    string = string.split(' ')
    for(let i = 0; i < string.length; i++){
        string[i] = string[i].toLowerCase().split('')
        string[i][0] = string[i][0].toUpperCase()
        string[i] = string[i].join('')
    }
    return string.join(' ')
}

console.log(titleCaseThisShit("yo yo what what in the butt"))
// Yo Yo What What In The Butt
*/
/*
function titleCaseThisShit(string){
    return string.toLowerCase()
        .split(' ')
        .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
        .join(' ')
}

console.log(titleCaseThisShit("yo yo what what in the butt"))
*/

// 10-17-2022
// Testing with Jest review
/*
// const { sum, getLargest } = require('./script.js')
test('code adds two numbers correctly', () => {
    const a = 1
    const b = 2
    expect(sum(1,2)).toBe(3)
})

test('code finds the largest element in an array', () => {
    const array = [1,2,3,4]
    expect(getLargest(array)).toBe(4)
})
*/

// Write a function that checks if the second argument is the last part of the first argument (a string).

// confirmEnding("Bastian", "n") should return true.
/*
function confirmEnding(string, target){
    return string.slice(string.length - target.length) === target
}

console.log(confirmEnding("Bastian", "n"))
// true
*/

// Create a function that returns the sum of a range of an array of two numbers ([1,4] would return 10 (1+2+3+4))
/*
function sumOfRange(array){
    let sum = 0
    let min = Math.min(array[0], array[1])
    let max = Math.max(array[0], array[1])

    for(let i = min; i <= max; i++){
        sum += i
    }

    return sum
}

console.log(sumOfRange([4,10]))
// 49
// 4+5+6+7+8+9+10 = 49
*/

// Split a string and use regex to return an array of words that contains no spaces or special characters.
/*
function stringToArray(string){
    return string.split(/\W/)
}

console.log(stringToArray("hello-there?fellow&coder writer"))
// ['hello', 'there', 'fellow', 'coder', 'writer']
*/
/*
// Inline styles in JSX
class Colorful extends React.Component {
    render() {
        return (
            <div style={{color: "red", fontSize: "calc(72 / 16 * 1rem)"}}></div>
        )
    }
}
*/

// Create a function that removes all falsy values from an array.
/*
function removeFalsy(array){
    const truthyArray = []
    for(let i = 0; i < array.length; i++){
        if(array[i]){
            truthyArray.push(array[i])
        }
    }
    return truthyArray
}

console.log(removeFalsy([0, true, 7, false, undefined, "yes", 8, null]))
// [true, 7, 'yes', 8]
*/

// Convert this object into an array of names. You can use a while loop or recursion to achieve this.
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
let personArray = []

while(currentPerson != null){
    personArray.push(currentPerson.name)
    currentPerson = currentPerson.friend
}

console.log(personArray)
// ['Phil', 'Simon', 'Caleb']
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

let friendArray = []

function printNames(object){
    if(object == null) return
    friendArray.push(object.name)
    printNames(object.friend)
    return friendArray
}

console.log(printNames(person))
*/
/*
const array = [1,2,3,4,5,6,7,8,9,10]

Array.prototype.myFilter = function(callback){
    let newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i])){
            newArray.push(this[i])
        }
    }
    return newArray
}

const evenFilter = array.myFilter(function(item){
    return item % 2 === 0
})

console.log(evenFilter)
// [2, 4, 6, 8, 10]
*/

// 10-18-2022
// Convert an if/else statement to use &&. 
// Hint: You only need one return statement and one <h1> tag.
/*
render(){
    return(
        <div>
            <button onClick={this.toggleDisplay}>Toggle Display</button>
            {this.state.display && <h1>Displayed!</h1>}
        </div>
    )
}
*/

// find vs. filter
/*
const array = [1,2,3,4,5]
const a = array.filter(item => item % 2 === 0)
console.log(a)
// [2,4]
const b = array.find(item => item % 2 === 0)
console.log(b)
// 2
*/

// What is the shorthand character class of [A-Za-z0-9_]?
///\w/

// Convert code to use both prototypes and classes
/*
function CreateUser(email, password, language){
    this.email = email
    this.password = password
    this.language = language
}

CreateUser.prototype.printPassword = function(){
    console.log(this.password)
}
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
*/
/*
const newUser = new CreateUser("hello@there.com", "GeneralKenobi", "Japanese")
newUser.printPassword()
// GeneralKenobi
*/

// 10-19-2022
/*
// Create a component that takes in array props and applies array methods to them
const List = (props) => {
    return <p>{props.item.join(', ')}</p>
}

<List item={["this", "that", "the other"]} />
// this, that, the other
*/
// Make a component stateful and render the state
/*
class MyComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'Philly'
        }
    }
    render(){
        return (
            <>
                <p>{this.state.name}</p>
            </>
        )
    }
}
*/
// How do we ensure that a property type is required before the value is displayed?
/*
const propTypes = {
    name: PropTypes.string.isRequired
}
*/

// How do we create a component that uses destructuring to house props? Create a component called Employee with firstName, lastName, and age as props.
// import React from 'react'
/*
const Employee = (props) => {
    const { firstName, lastName, age } = props

    return (
        <>
            <h1>This is the name of the employee</h1>
            <p>{firstName} {lastName}</p>
            <h2>This is the age of the employee</h2>
            <p>{age}</p>
        </>
    )
}
// export default Employee
*/

// How do you find all of the whitespaces in a sentence? Regex
// /\s/g
// while vs. do...while loops
/*
const myArray = []
let i = 10

while(i < 5){
    myArray.push(i)
    i++
}

console.log(myArray)
// []

do{
    myArray.push(i)
    i++
}while(
    i < 5
)
console.log(myArray)
// [10]
*/

// How do we create a new object based off of an already existing object?
/*
const person = {
    name: "Phil",
    age: 34,
    favFood: "pizza",
    favDessert: "ice cream"
}

const person2 = Object.create(person)
person2.name = "Jerry"
console.log(person2.age)
// 34
*/

//10-20-2022
// Create the map function from scratch with Array.prototype
/*
const array = [2,3,4,5,1,2,6,7]

Array.prototype.myMap = function(callback){
    const newArray = []
    this.forEach(item => newArray.push(callback(item)))
    return newArray
}

const doubledArray = array.myMap(item => item * 2)
console.log(doubledArray)
*/

// JSX commenting = {/* */}

// Destructuring deeply nested objects and creating aliases for them

// Create a function that loops through an object and returns the number of users where their online status is equal to true.
/*
const users = {
    Alan: {
        online: false,
    },
    Jim: {
        online: true,
    },
    Kelly: {
        online: false,
    },
}

function checkOnline(object){
    let numberOnline = 0
    for(let user in object){
        if(object[user].online){
            numberOnline++
        }
    }
    return numberOnline
}

console.log(checkOnline(users))
*/
//destructuring to variables
/*
const [Jimmy, b, ...rest] = [10, 20, 30, 40, 50]
console.log(Jimmy, rest)
*/

// 10-21-2022

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

function getNames(currentPerson){
    if(currentPerson == null) return
    console.log(currentPerson.name)
    getNames(currentPerson.friend)
}

getNames(person)
// Phil, Simon, Caleb
*/

// Create a function that uses map to convert decimal numbers to whole numbers using parseInt()
/*
function decToWhole(array){
    return array.map(item => parseInt(item))
}
console.log(decToWhole([1.2, 3.4, 5.4434]))
// [1, 3, 5]
*/

// How do you remove a property/value from an object?
/*
const person = {
    name: "Phil",
    friend: "Simon",
    hobby: "wakeboarding"
}

delete person.hobby
console.log(person)
// {name: 'Phil', friend: 'Simon'}
*/

// Use recursion to return an array that begins with startNum and ends with endNum.
/*
function rangeOfNumbers(startNum, endNum){
    if(endNum - startNum === 0){
        return [startNum]
    } 
        let array = rangeOfNumbers(startNum, endNum - 1)
        array.push(endNum)
        return array
}

console.log(rangeOfNumbers(2, 7))
// [2, 3, 4, 5, 6, 7]
*/

// Create a function that changes a string to title case (only the first letter of each word is capitalized) using map.
/*
function toTitleCase(string){
    return string.toLowerCase()
    .split(' ')
    .map(word => word.replace(word.charAt(0), word.charAt(0).toUpperCase()))
    .join(' ')
}

console.log(toTitleCase("hello brandon"))
// Hello Brandon
*/

// 10-22-2022
/*
import React, { useState } from "react";

export default function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? "Log out" : "Login"}
      </button>
      {loggedIn ? <h3>Hello there!</h3> : <h3>Please log in</h3>}
    </div>
  );
}
*/
// 10-23-2022

// What if we want to import everything from a js file? What is the syntax?
// import * as myModule from './myModules.js'

// Render JSX components:
// ReactDOM.render(<Component />, document.getElementById("target-node"))

// 10-24-2022
// Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.
/*
let quote = "3 blind mice"
let quoteRegex = /[^aeiou0-9]/gi
let result = quote.match(quoteRegex)
console.log(result)
*/


const watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
    }
  ]
/*
  function getAvgRating(watchList, director){
    let directorFilms = watchList.filter(film => film.Director === director)
    let ratings = directorFilms.map(film => Number(film.imdbRating))
    let sumOfRatings = ratings.reduce((rating, sum) => rating + sum)
    let averageRating = sumOfRatings / directorFilms.length
    return averageRating
}

console.log(getAvgRating(watchList, "Christopher Nolan"))
// 8.675
*/

// Create a function that compares two arrays and only returns an element that both arrays DO NOT share
/*
const arr1 = [1,2,3,4,5,6]
const arr2 = [1,2,5,6,7,8]

function compareArrays(arr1, arr2){
    return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item))
}

console.log(compareArrays(arr1, arr2))
// [3, 4, 7, 8]
*/

// 10-25-2022

// Create a function that title cases a string (every word's first letter is capitalized)
/*
function titleCase(string){
    return string
    .toLowerCase()
    .split(' ')
    .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(' ')
}

console.log(titleCase("this is a test with no capitalization"))
// This Is A Test With No Capitalization
*/

// Create the filter function from scratch with Array.prototype
// with forEach()
/*
const array = [0, 1, 2, 3, 4, 5, 6]

Array.prototype.myFilter = function(callback){
    const filteredArray = []
    this.forEach(item => callback(this[item]) ? filteredArray.push(this[item]) : undefined)
    return filteredArray
}

const evenFilter = array.myFilter(function(item){
    return item % 2 === 0
})

console.log(evenFilter)
// [0, 2, 4, 6]
*/

// Check if a string is made up of either Phil Nelson or Jin Nelson.
// Now check if any middle names or initials are also included.
/*
let string = "Jio Nelson"
let regex = /(Phil|Jin).*Nelson/i
let result = regex.test(string)
console.log(result)
// false
*/

// How can you sort an array without mutating the original array? Bonus: What is the function that sorts numbers?
/*
function sortArray(array){
    return array.concat([]).sort(function(a,b){
        return a - b
    })
}

console.log(sortArray([2,1,7,3,5]))
//  [1, 2, 3, 5, 7]
*/

// 10-26-2022
// Create a slug from a title/heading of the page
/*
function createSlug(title){
    return title.toLowerCase().split(' ').join('-')
}

console.log(createSlug("this is a test"))
// this-is-a-test
*/

// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
/*
function findElement(arr, func){
    let num = 0
    for(let i = 0; i < arr.length; i++){
        num = arr[i]
        if(func(num)){
            return num
        }
    }
    return undefined
}

console.log(findElement([1,7,3,4,5], num => num % 2 === 0))
// 4
*/

// 10-27-2022

// What if we want to match a letter appearing between a range (say 3-6 times)?
/*
let ohStr = "Ohhhhhh no"
let ohRegex = /Oh{7,8} no/i
console.log(ohRegex.test(ohStr))
// false
*/

// Apply both the double function and the plusOne function to the array with map chaining and log out the result.
/*
const array = [1,2,3,4,5]

function double(element){
    return element * 2
}

function plusOne(element){
    return element + 1
}

const doubledPlusOne = array.map(double).map(plusOne)
console.log(doubledPlusOne)
// [3, 5, 7, 9, 11]
*/

// Inline styles in JSX
// <h1 style={{color: "white"}}></h1>

// When using Redux in your project, what are the three things that you need to set up a store for your state?

// Redux is 'ard! Actions, Reducer(s), Dispatch 

// REDUX: When you have multiple reducers what is something that you can do so that you do not have to import each reducer individually?

// Import combineReducers from redux

// How does the file name and the selector of a class in CSS modules in React appear (in dev tools)?

// <div class='file-name_class-name'>

// 10-28-2022

// Write a function that takes a full name, takes the first name and the last name, and saves them as separate variables in an object. Then destructure the object so that both the first name and last name are accessible as separate variables.
/*
function fullToFirstLast(fullname){
    const [firstName, lastName] = fullname.split(' ')
    return {
        firstName,
        lastName
    }
}

const philObj = fullToFirstLast("Phil Nelson")
console.log(philObj.firstName)
*/
/*
function printLongestWord(string){
    let num = 0
    let longestWord = ''
    let words = string.split(' ')
    for(let i = 0; i < words.length; i++){
        if(words[i].length > num){
            num = words[i].length
            longestWord = words[i]
        }
    }
    return `The longest word in your string is ${longestWord} at ${num} characters long.`
}

console.log(printLongestWord("hello there finickyfoop fuckerduckery"))
// The longest word in your string is fuckerduckery at 13 characters long.
*/

// Using Math.floor and Math.random, return a random whole number that is >= myMin and <= myMax.
/*
function randomRange(myMin, myMax){
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}

console.log(randomRange(2,4))
*/

// How do we create a component that uses destructuring to house props? Create a component called Employee with firstName, lastName, and age as props.
/*
const Employee = (props) => {
    const {firstName, lastName, age} = props
}
*/

// Mixins
/*
const bird = {
    name: "Donald",
    wings: 2
}

const plane = {
    name: "Boeing",
    wings: 2
}

const flyMixin = (obj) => {
    obj.flying = function(){
        console.log("I'm flying, bitches!")
    }
}

flyMixin(bird)
bird.flying()
// I'm flying, bitches!
*/

// How does the file name and the selector of a class in CSS modules in React appear (in dev tools)?
// <h1 class="file-name_class-name"></h1>

// Write a function that takes in a string and a number. The string should be repeated the number of times specified in the number parameter. Use a for loop and not the .repeat() method.
/*
function copyMachine(string, number){
    let repeatedString = ""
    for(let i = 0; i < number; i++){
        repeatedString += string
    }
    return repeatedString
}

console.log(copyMachine("hello", 5))
// hellohellohellohellohello
*/

// 10-29-2022
// Inline styles in React
// Create a div that has the color of red and the font size of 72px in rem.
/*
const Component = () => {
    <div style={{color: "red", fontSize: "calc(72/16 * 1rem)"}}>
        <h1></h1>
    </div>
}
*/

// 10-31-2022

// Create a new object from an array of objects that only displays two keys from the original object using map.
/*
const arrayOfObjs = [
    {
        name: "Phil",
        age: 34,
        hobby: "programming"
    },
    {
        name: "Simone",
        age: 44,
        hobby: "studying Japanese"
    },
    {
        name: "Caleb",
        age: 35,
        hobby: "tennis"
    }
]


const newObj = arrayOfObjs.map(item => ({
    newName: item["name"],
    newAge: item["age"]
}))

console.log(newObj[0].newName)
// Phil
*/

// Write a function that takes a full name, splits the first name into an array, and returns it. Then destructure the array so that both the first name and last name are accessible as separate variables (assign the destructured array to the function).
/*
function splitFullName(fullname){
    return fullname.split(' ')
}

const [firstName, lastName] = splitFullName("Phil Nelson")
console.log(firstName)
// Phil
*/

// Change the function to a pure function
/*
const person = {
    name: "Phil",
    friends: ["Simon", "Caleb"]
}

function addFriend(obj, friendName){
    const newPerson = {...obj, friends: [...obj.friends, friendName]}
    return newPerson
}

console.log(addFriend(person, "Jack"))
// friends + Jack
*/

// null coalescence 
/*
function nullCoalTester(firstName, lastName){
    lastName ??= "Nelson"
    console.log(`${firstName} ${lastName}`)
}

nullCoalTester("Phil")
// Phil Nelson
nullCoalTester("Phil", 0)
// Phil 0

*/
/*
// Imperative programming:
const header = document.createElement('h1')
header.textContent = "I love fish"
header.className = "fish-sticks"
document.getElementById("id").append(header)
// declarative programming:
ReactDOM.render(<Header className='fish-sticks'/>, document.getElementById("id"))
*/

// 11-2-2022

// Create a welcome page with an <h1> for Welcome, a login button, and a <h3> greeting. The button and the greeting text should display differently depending on the state (logged in or not). Use useState() and the ternary operator to toggle loggedIn and setLoggedIn.
/*
const Login = () => {
    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <div>
            <h1>Welcome</h1>
            <button onClick={() => setLoggedIn(!loggedIn)}>{
                loggedIn ? "Log out" : "Login"
            }</button>
            <h3>{loggedIn ? "Welcome to our site" : "Please login"}</h3>
        </div>
    )
}
*/

// Set up a quick React project from scratch

// React: Create an array of employees. In the return statement first use a conditional statement to check if there are any employees and that the array has more than 0 items in it. Render an <h1> of Employee List and an <h5> of all of the employees using map(). The <h1> and the names of the employees should only show if there is at least one employee in the array.
/*
const employees = ["Jim", "Carl", "Homer", "Moe"]

{employees && employees.length > 0 && (
    <div>
        <h1>Employee List</h1>
        {employees.map(employee => (
            <h4>{employee}</h4>
        ))}
    </div>
)}
*/

// 11-3-2022

// How can you compare React props to something in HTML? How about something in JS?
// HTML attributes like an image's src="" and an input's type (radio, text, date, etc.), 

// JS - passing params to a function instead of not passing anything.
// 
// For example: f we just had a function that added 1 and 2 together, it would always produce 3. However, if we changed the function to take in two parameters (a and b), then we can add virtually any two numbers together.

// What is a React component?
// A function that allows us to compose JSX elements that can be reused across our site. Alt: a function that returns UI (React elements) that look very much like HTML. Components are composable, like lego bricks or puzzle pieces that you can use to build larger/greater things.

// Can you pass custom props into native DOM elements? - React
// No, you can only pass custom props to custom components. 

// Create a function that removes the dashes from the string "May-the-force-be-with-you". 

// Bonus: Remove ALL special characters + Add a period at the end.
/*
function removeDashes(string){
    return string.split(/\W/).join(' ') + "."
}

console.log(removeDashes("this-is-a-test"))
// this is a test.
*/

// 11-4-2022

// Create the map function from scratch (on Array.prototype)

// Array.prototype.myMap = function(callback){
//     let newArray = []
//     for(let i = 0; i < this.length; i++){
//         newArray.push(callback(this[i]))
//     }
//     return newArray
// }
/*
Array.prototype.myMap = function(callback){
    let newArray = []
    this.forEach(item => newArray.push(callback(item)))
    return newArray
}

const array = [1,2,3,4,5,6]
const arrayTwo = array.map(item => item * 2)
console.log(arrayTwo)
console.log(array.myMap(item => item * 2))
*/

// Create a function that changes a string to title case (only the first letter of each word is capitalized) using map.
/*
function toUpperCase(string){
    return string.toLowerCase().split(' ').map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase())).join(' ')
}

let string = "Hello there you monster"
console.log(toUpperCase(string))
*/

// Write a function that reverses a string with a for loop
/*
function reverseLoop(string){
    let reversedString = ""
    for(let i = string.length - 1; i >= 0; i--){
        reversedString += string[i]
    }
    return reversedString
}

console.log(reverseLoop("hello there"))
*/

// 11-6-2022
/*
function greetPerson(name, {salutation = "Hello there,", suffix = "Mr."} = {}){
    console.log(`${salutation} ${suffix} ${name}`)
}

greetPerson("Phil", {salutation: "Good day,", suffix: "Master"})
// Good day, Master Phil
*/


// 11-7-2022
/*
const header = document.createElement('h1')
header.textContent = "What are those???"
header.className = "header-element"
document.getElementById('root').append(header)
*/

// Remember to use the useEffect() hook in place of didComponentMount() etc. for API calls/calls to a server

// 11-8-2022
// Write a function that returns the average rating for films only by a certain director using filter, map, and reduce.

// Hints:
// set a variable to watchList called averageRating

// get only films by Christopher Nolan (filter)

// map the ratings so that they are numbers and not strings
// (can use the Number() function)

// use reduce to add the sum of ratings with ratings, then divide the length of only films by Christopher Nolan

// return averageRating
/*
function avgRating(watchList, director){
    const films = watchList.filter(film => film.Director === director)
    const ratings = films.map(film => Number(film.imdbRating))
    const sumOfRatings = ratings.reduce((sum, ratingSum) => sum + ratingSum)
    const averageRating = sumOfRatings / films.length
    return `${director}'s films have an average rating of ${averageRating}`
}

console.log(avgRating(watchList, "Christopher Nolan"))
*/

// Create a function that removes all falsy values from an array.
/*
const arr = [0, 2, false, true, undefined, "hello", "", null, "goodbye"]

function removeFalsy(array){
    const truthyArray = []
    array.forEach(item => item ? truthyArray.push(item) : truthyArray)
    return truthyArray
}

console.log(removeFalsy(arr))
// [2, true, 'hello', 'goodbye']
*/

// Create a function that returns the sum of a range of an array of two numbers ([1,4] would return 10 (1+2+3+4))

// Note: be carerful, if the first index is a larger number than the second, you need to account for that too.
/*
function sumOfRange(array){
    let min = Math.min(array[0], array[1])
    let max = Math.max(array[0], array[1])
    let sum = 0
    for(let i = min; i <= max; i++){
        sum += i
    }
    return sum
}

console.log(sumOfRange([1,4]))
*/

// 11-9-2022
// Create a function that gets a random url from an array of objects. Assign the function to the onClick of the button.
/*
function handleClick(){
    const memeArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memeArray.length)
    const url = memeArray[randomNumber].url
    console.log(url)
}
*/

// Regex - What character do we use to select the first word in a string and what character do we use to select the last character in a string?
/*
let string = "The last car on a train is the caboose"
let firstWord = /^The/
let lastWord = /caboose$/
let regex = firstWord.test(string)
let regexLast = lastWord.test(string)

console.log(regex, regexLast)
// true true
*/

// How would you describe the concept of "state"?
// State is the tracking and updating of changes made by the user. It is also a way for React to remember saved values from within a component. This is similar to declaring variables from within a component, with a few added bonuses.

// Assign list to a destructured array that is equal to 3 through 10.
/*
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    const [a, b, ...arr] = list
return arr;
}
const arr = removeFirstTwo(source);
console.log(arr)
*/

// Create the filter function from scratch with Array.prototype
/*
Array.prototype.myFilter = function(callback){
    let filteredArray = []
    this.forEach(item => callback(this[item]) ? filteredArray.push(this[item]) : undefined)
    return filteredArray
}

const array2 = [1,2,3,4,5,6,7,8]

const evenArray = array2.myFilter(item => item % 2 === 0)
console.log(evenArray)
*/


/*

// When we create a function that updates the previous state of an element, what is the best practice for updating that state?

// Create a callback function within our setState function
const [ count, setCount ] = React.useState(0)

function increaseCount(){
    setCount(prevCount => prevCount + 1)
}
*/

// 11-10-2022

// Update the JSX so that the Star component can toggle the favorite star.
/*
export default function Star(props) {
    const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"
    return (
        <img 
            src={`../images/${starIcon}`} 
            className="card--favorite"
            
        />
    )
}

// ↓
// Star component
// onClick={props.handleClick}
// App
// handleClick={toggleFavorite}
*/

// Convert this object into an array of names. You can use a while loop or recursion to achieve this.
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
let nameArray = []

while(currentPerson != null){
    nameArray.push(currentPerson.name)
    currentPerson = currentPerson.friend
}

console.log(nameArray)
// ['Phil', 'Simon', 'Caleb']

*/

// Create a function that concats two arrays together (the arguments provided to the function).
/*
function concatArrays(arr1, arr2){
    return arr1.concat(arr2)
}

const array1 = [1,2,3,4]
const array2 = [5,6,7,8]
console.log(concatArrays(array1, array2))
*/

// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
/*
function findElement(arr, func){
    let num = 0
    for(let i = 0; i < arr.length; i++){
        num = arr[i]
        if(func(arr[i])){
            return num
        }

    }

    return undefined
}

console.log(findElement([1,2,3,4,5], num => num % 2 === 0))
// 2
*/

// 11-11-2022

// Find the longest word in a string and print the length of that word (a number).
/*
function findLongestWord(string){
    let words = string.split(' ')
    let num = 0
    for(let i = 0; i < words.length; i++){
        if(words[i].length > num){
            num = words[i].length
        }
    }
    return num
}

console.log(findLongestWord("hello there misterpoopy"))
// 11
*/

// Write a function that takes an array and a number. Use a while loop to loop over the array and push a copy of the array to a new array the number of times specified by the number argument.
/*
function copyArray(array, number){
    let newArray = []
    while(number >= 1){
        newArray.push([...array])
        number--
    }
    return newArray
}

console.log(copyArray(["hey", "hello", "goodbye"], 4))
// ["hey", "hello", "goodbye"] x 4
*/

// Create a function that compares two arrays and only returns an element that both arrays DO NOT share
/*
function notTheSame(arr1, arr2){
    return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item))
}

console.log(notTheSame([2,3,4], [2,4,5]))
// [3, 5]
*/

// Use .replace() and a capture group to change the string "one two three" to "three two one"
/*
let string = "one two three"
let captureGroup = /(\w+)\s(\w+)\s(\w+)/
let newString = "$3 $2 $1"

let reversedString = string.replace(captureGroup, newString)
console.log(reversedString)
// three two one
*/

// 11-12-2022

// Retrieve all of the `twinkle`s from twinkleStar by checking to see if anything in twinkleStar matches starRegex globally and case insensitive (ignore case).
/*
let twinkleStar = "Twinkle twinkle little star"
let regex = /twinkle/gi
let result = twinkleStar.match(regex)
console.log(result)
// ['Twinkle', 'twinkle']

*/

// Write a function that checks if the second argument is the last part of the first argument (a string).
/*
function confirmEnding(string, letter){
    return string.slice(string.length - letter.length) === letter
}

console.log(confirmEnding("Bastian", "n"))
// true
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

function lookupProfile(name, prop){
    for(let i = 0; i < contacts.length; i++){
        if(contacts[i].firstName === name){
            if(contacts[i].hasOwnProperty(prop)){
                return contacts[i][prop]
            }else{
                return "no such property"
            }
        }
    }
    return "no profile exists"
}

console.log(lookupProfile("Akira", "likes"))
// ['Pizza', 'Coding', 'Brownie Points']
*/

// use map to convert decimal numbers to whole numbers using parseInt()
/*
const numArray = [22.34, 44.342, 64.2341, 77.3243]

const wholeNums = numArray.map(num => parseInt(num))
console.log(wholeNums)
[22, 44, 64, 77]
*/
/*
// Function:
const numArray = [22.34, 44.342, 64.2341, 77.3243]
const decToWhole = (array) => array.map(num => parseInt(num))
console.log(decToWhole(numArray)) 
[22, 44, 64, 77]
*/

//11-13-2022
/*
const person = {
    name: "Phil",
    address: {
        street: "Jose",
        zones: {
            zipcode: 43212,
            carlos: 332211
        }
    }
}

const {zones} = person.address
console.log(zones)
// {zipcode: 43212, carlos: 332211}
*/


// Toggle function
/*
export default function App() {
    const [squares, setSquares] = React.useState(boxes)
        
    function toggle(id){
        setSquares(prevState => {
            return prevState.map(square => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            on={square.on} 
            toggle={() => toggle(square.id)}
        />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}
*/

// 11-14-2022

// Create a function that loops through an object and returns the number of users where their online status is equal to true.
/*
const users = {
    Alan: {
        online: true
    },
    Jim: {
        online: true
    },
    Kim: {
        online: false
    },
    Kelly: {
        online: true
    },
}

function numOnline(object){
    let numOnline = 0
    for(let user in object){
        if(object[user].online){
            numOnline++
        }
    }
    return numOnline
}

console.log(numOnline(users))
*/

// Find the longest word in a string and print the length of that word (a number). Bonus: print out the word itself. Bonus bonus: get a word count of the whole string.
/*
function findLongestWord(string){
    let wordLength = 0
    let words = string.split(' ')
    let longestWord = ""
    let stringWordCount = 0

    for(let i = 0; i < words.length; i++){
        if(words[i].length > wordLength){
            wordLength = words[i].length
            longestWord = words[i]
            stringWordCount = words.length
        }
    }
    return `Hello. Your string has a total word count of ${stringWordCount}. The longest word in your string is "${longestWord}" at ${wordLength} characters long.`
}

let string = "This is a test for giggles and gaggligoop"
console.log(findLongestWord(string))
// Hello. Your string has a total word count of 8. The longest word in your string is "gaggligoop" at 10 characters long.
*/

// Create a function that title cases a string (every word's first letter is capitalized)
/*
function titleCase(string){
    return string
    .toLowerCase()
    .split(' ')
    .map(word => word.replace(word.charAt(0), word.charAt(0).toUpperCase()))
    .join(' ')
}

console.log(titleCase("hello there mr kenobs"))
*/

// How do we create a new object based off of an already existing object?
/*
const users = {
    Alan: {
        online: true
    },
    Jim: {
        online: true
    },
    Kim: {
        online: false
    },
    Kelly: {
        online: true
    },
}

// const users2 = Object.create(users)
// or
const users2 = {...users}
console.log(users2.Alan.online)
*/

// Split a string and use regex to return an array of words that contains no spaces or special characters.
/*
function splitToArray(string){
    return string.split(/\W/)
}

console.log(splitToArray("what&you$doing#man ho"))
// ['what', 'you', 'doing', 'man', 'ho']
*/

// 11-15-2022

// Import a "json file" into a react app, destructure the object to the lowest level and add an alias to one of the names within an object.
/*
const person = {
    name: "Phil",
    address: {
        street: {
            name: "Jose",
            number: 7762
        }
    }
}

const {address: {street: {number: streetNumber}}} = person
console.log(streetNumber)
// 7762
*/

// 11-16-2022
// Clean up functions in React
/*
import React, {useState, useEffect} from "react"

export default function WindowTracker() {
        /**
     * Challenge:
     * 1. Create an useEffect() that listens for a resize event
     * 2. Create state called `windowWidth`, default to 
     *    `window.innerWidth`
     * 3. When the window width changes, update the state
     * 4. Display the window width in the h1 so it updates
     *    every time it changes

    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth)

    React.useEffect(() => {
        function windowWatcher(){
            setWindowWidth(window.innerWidth)
            }
            
            window.addEventListener("resize", windowWatcher)
            
            return function(){
                window.removeEventListener("resize", windowWatcher)
            }
    }, [])
    
    return (
        <h1>Window width: {windowWidth}</h1>
    )
}
*/

// 11-17-2022

// Regex: What character can you use to match both the American and British spellings of words (favorite/favourite, color/colour, etc.)?
/*
const AmerString = "color"
const BritString = "colour"

const regex = /colou?r/
console.log(regex.test(BritString))
// true
*/

// What is the shorthand character class of [A-Za-z0-9_]?
// let regex = /\w/

// Write a function that reverses a string (using methods)
/*
const string = "fooey"
function reverseString(string){
    return string.split('').reverse().join('')
}

console.log(reverseString(string))
// yeoof
*/

// Using Math.floor and Math.random, return a random whole number that is >= myMin and <= myMax.
/*
function randomRange(myMin, myMax){
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}

console.log(randomRange(2, 10))
*/

// Write a function that takes in an array, removes the first two items and replaces them with two new ones.
/*
function replaceTwo(array){
    array.splice(0, 2, "Dillan", "Brandon")
    return array
}

const array = ["Bobby", "Rando", "Kelly", "Jimbo"]

console.log(replaceTwo(array))
*/

// Create a map that contains three arrays with the keys 1, 2, 3 (as placeholders for ids). Each key should have a test AND a description value assigned to it. Next, create a function that gets an id (1, 2, or 3) from our map and returns it.
/*
const testMap = new Map([
    [1, {test: "test 1", description: "description 1"}],
    [2, {test: "test 2", description: "description 2"}],
    [3, {test: "test 3", description: "description 3"}]
])

function getId(map, id){
    return map.get(id)
}

console.log(getId(testMap, 1))
// {test: 'test 1', description: 'description 1'}
*/

// 11-18-2022

// Create a new object from an array of objects that only displays two keys from the original object using map.
/*
const objArray = [
    {name: "Phil", "age": 34, favcolor: "blue"},
    {name: "Jim", "age": 56, favcolor: "red"},
    {name: "Kelly", "age": 24, favcolor: "purple"}
]

const twoKeys = objArray.map(item => ({
    name: item.name,
    age: item["age"]
}))
console.log(twoKeys[0].name, twoKeys[1].age)
// Phil 56
*/

// 11-19-2022

// Change this to use an anonymous function. 
/*
// function printVariable(variable){
//     console.log(variable)
// }

function printName(name, callback){
    callback(`Hello ${name}`)
}

printName("Phil", (greeting) => {
    console.log(greeting)
})
*/

// 11-22-2022

// REGEX: How do we select 0 or more characters like all of the a's in Aaaaaaaaargh?

// let string = "AAAAAAaaaaarrrgh"
// let regex = /a*/i
// let result = string.match(regex)
// console.log(result)
// // AAAAAAaaaaa

// What is a mixin and how can we use it?
/*
const bird = {
    name: "Donald",
    numWings: 2
}

const plane = {
    name: "DC3",
    numWings: 2
}

const flyMix = function(obj){
    obj.flying = function(){
        console.log(`${obj.name} is flying`)
    }
}

flyMix(plane)
plane.flying()
// DC3 is flying
*/

// 11-24-2022

// Regex: What is the shorthand character class of [0-9]; only selecting digits?
/*
let string = "9 out of 10 people are 1000 years old"
let regex = /\d/g
let result = string.match(regex)
console.log(result)
// Array of 9 1 0 1 0 0 0
*/

// What does the `.` do in Regex (also called the dot or period)?

// let string = "fix"
// let regex = /f.x/g
// let result = regex.test(string)
// console.log(result)
// true
// Kind of like a placeholder that will check an unknown letter

// What is the shorthand for all non digits? [^0-9]
// let string = "9 out of 10 people are 1000 years old"
// let regex = /\D/g
// let result = string.match(regex)
// console.log(result)
// [' ', 'o', 'u', 't', ' ', 'o', 'f', ' ', ' ', 'p', 'e', 'o', 'p', 'l', 'e', ' ', 'a', 'r', 'e', ' ', ' ', 'y', 'e', 'a', 'r', 's', ' ', 'o', 'l', 'd']

// Use the forEach method to only print out the price of each item (only the number)
/*
const items = [
    { price: 10 },
    { price: 13 },
    { price: 12 },
    { price: 17 },
    { price: 1 }
]

items.forEach(item => console.log(item.price))
*/

// How can you sort an array without mutating the original array? Bonus: What is the function that sorts numbers?
/*
const array = [6, 2, 5, 1, 4, 9, 3, 7, 10, 8]

function sortArray(array){
    const newArray = array.slice().sort(function(a,b){
        return a - b
    })
    return newArray
}

console.log(sortArray(array))
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(array)
// [6, 2, 5, 1, 4, 9, 3, 7, 10, 8]
*/

// 11-26-2022
// How do we add a test to our script.test.js file and how do we use the expect() and toBe() functions within those tests? (Using Jest)
// test("this should do this", () => {
//     const a = 1
//     const b = 2
//     expect(sum(a + b)).toBe(3)
// })


// Create a function that uses a closure (a function within another function) called closure() that takes in one argument (a variable).

// The function within closure() (func()) will take in a separate argument (another variable) and log both the closure() arg. and the func() arg.

// Hint: We need to assign closure() to a variable to be able to use the function within it when we call it again.
/*
function closure(variable1){
    return function func(variable2){
        console.log(variable1, variable2)
    }
}

const a = closure(2)
a(3)
2  3
*/

// Write a function that takes in a string and a number. The string should be repeated the number of times specified in the number parameter. Use a for loop and not the .repeat() method.
/*
function copyMachine(string, number){
    let newString = ""
    for(let i = 0; i < number; i++){
        newString += string + " "
    }
    return newString
}

console.log(copyMachine("this is insane", 3))
// this is insane this is insane this is insane 
*/

// 11-28-2022
// Generate new dice while holding dice that have been clicked
// export default function App() {
    /**
     * Challenge: Create a function `holdDice` that takes
     * `id` as a parameter. For now, just have the function
     * console.log(id).
     * 
     * Then, figure out how to pass that function down to each
     * instance of the Die component so when each one is clicked,
     * it logs its own unique ID property. (Hint: there's more
     * than one way to make that work, so just choose whichever
     * you want)
     * 
     */
    /*
        const [dice, setDice] = React.useState(allNewDice())
        
        function generateDice(){
            return {
                    value: Math.ceil(Math.random() * 6),
                    isHeld: false,
                    id: nanoid()
                }
        }
        
        function allNewDice() {
            const newDice = []
            for (let i = 0; i < 10; i++) {
                newDice.push(generateDice())
            }
            return newDice
        }
        
        function rollDice() {
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ?
                    die :
                    generateDice()
            }))
        }
        
        function holdDice(id){
            setDice(oldDice => oldDice.map(die => {
                return die.id === id ?
                    {...die, isHeld: !die.isHeld} :
                    die
            }))
        }
        
        const diceElements = dice.map(die => (
            <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)}/>
        ))
        
        return (
            <main>
                <div className="dice-container">
                    {diceElements}
                </div>
                <button className="roll-dice" onClick={rollDice}>Roll</button>
            </main>
        )
    }
    */

// 11-29-2022

// Write a function that takes in an array and returns a new array with only the third and fourth items in the original array.
/*
const array = ["Happy", "Dopey", "Sleepy", "Doc", "Grumpy", "Bashful", "Sneezy"]

const thirdAndFourth = (array) => {
    return array.slice(2, 4)
}

console.log(thirdAndFourth(array))
// ['Sleepy', 'Doc']
*/

// Create the filter function from scratch with Array.prototype
/*
Array.prototype.myFilter = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i])){
            newArray.push(this[i])
        }
    }
    return newArray
}

const array = [1,22,3,43,54,60,72]
const evenFilter = array.myFilter(item => item % 2 === 0)
const oddFilter = array.myFilter(item => item % 2 === 1)
console.log(evenFilter)
// [22, 54, 60, 72]
console.log(oddFilter)
// [1, 3, 43]
*/

// 11-30-2022

// REGEX
// Change regex so that only the first <h1> is logged (lazy matching).

// Now, regex is returning everything between <> which includes the ending tag as well.
/*
let quote = "<h1>Winter is coming</h1>"
let regex = /<.*?>/
let result = quote.match(regex)
console.log(result)
// <h1>
*/

// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

/*
const numArray = [1,2,3,4,5,6]
function findElement(arr, func){
    let num = 0
    for(let i = 0; i < arr.length; i++){
        if(func(arr[i])){
            num = arr[i]
            return num
        }
    }
    return undefined
}

console.log(findElement(numArray, num => num % 2 !== 0))
// 1
*/

// import everything from a js file
// import * as mathModules from './index.js'

// Create a function that changes a string to title case (only the first letter of each word is capitalized) using map.
/*
function toTitleCase(string){
    return string
    .toLowerCase()
    .split(' ')
    .map(word => word.replace(word.charAt(0), word.charAt(0).toUpperCase()))
    .join(' ')
}

console.log(toTitleCase("can't touch this"))
// Can't Touch This
*/

// Create an function that returns an array of 10 random numbers that correspond to a die face (1-6)
/*
function allNewDice(){
    const randomNumArray = []
    for(let i = 0; i < 10; i++){
        randomNumArray.push(Math.ceil(Math.random() * 6))
    }
    return randomNumArray
}

*/

// 12-3-2022
// REGEX
// How would you use a character class to extract ALL of the vowels from this sentence, ignoring case?
/*
let quote = "The quick brown fox jumped over the lazy dog"
let regex = /[aeiou]/ig
let result = quote.match(regex)
console.log(result)
// ['e', 'u', 'i', 'o', 'o', 'u', 'e', 'o', 'e', 'e', 'a', 'o']
*/

// How do you select back-to-back characters like the ss' or pp's in Mississippi?
/*
let string = "Mississippppi"
let regex = /p+/gi
let result = string.match(regex)
console.log(result)
// ['pppp']
*/

// Check if a string is made up of either Phil Nelson or Jin Nelson.
// Now check if any middle names or initials are also included.
/*
let name = "John Andrew Nelson"
let regex = /(Phil|Jin).*Nelson/gi
console.log(regex.test(name))
// false
*/

// impure to pure functions
/*
const person = {
    name: "Phil",
    friends: ["Simon", "Caleb"]
}
*/

// impure function
// function addFriends(friendName){
//     person.friends.push(friendName)
// }

// pure function
/*
function addFriends(obj, friendName){
    return {...obj, friends: [...obj.friends, friendName]}
}

const newPerson = addFriends(person, "Philly Mac")
console.log(newPerson.friends)
// ['Simon', 'Caleb', 'Philly Mac']
console.log(person.friends)
// ['Simon', 'Caleb']
*/

// Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.
/*
let quote = "3 blind mice"
let regex = /[^aeiou0-9]/gi
let result = quote.match(regex)
console.log(result)
// [' ', 'b', 'l', 'n', 'd', ' ', 'm', 'c']
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

const thermos = new Thermostat(32)
console.log(thermos.temperature)
// 0°C
thermos.temperature = 100
console.log(thermos.fahrenheit)
// 212°F
*/

// Create a function that returns the sum of a range of an array of two numbers ([1,4] would return 10 (1+2+3+4))
/*
function sumOfRange(array){
    const min = Math.min(array[0], array[1])
    const max = Math.max(array[0], array[1])
    let sum = 0
    for(let i = min; i <= max; i++){
        sum += i
    }
    return sum
}

console.log(sumOfRange([1,4]))
// 10
*/

//12-6-2022

// Use recursion to return an array that begins with startNum and ends with endNum.
/*
function rangeOfNumbers(startNum, endNum){
    if(endNum - startNum === 0) return [startNum]
    console.log(endNum)
    const newRange = rangeOfNumbers(startNum, endNum - 1)

    newRange.push(endNum)
    
    return newRange
}

console.log(rangeOfNumbers(2, 7))
//[2, 3, 4, 5, 6, 7]

*/

// Create the map function from scratch (on Array.prototype)
/*
const arr = [1,2,3,4,5]

Array.prototype.myMap = function(func){
    const newArray = []
    this.forEach(item => newArray.push(func(item)))
    return newArray
}

const doubled = arr.myMap(item => item * 2)
console.log(doubled)
*/

// What is a url slug and how do we create one from a title/heading on our page?
// A: A dash separated string that appears in the address bar and is associated with a specific page or anchor on a page
/*
function createSlug(string){
    return string.toLowerCase().split(' ').join('-')
}

console.log(createSlug("this is an Amazing AchiEveMent by ScienTists"))
// this-is-an-amazing-achievement-by-scientists
*/

// 12-9-2022

// Remove a property/value from an object
/*
const person = {
    name: "Phil",
    age: 42,
    hobbies: [
        "rock climbing",
        "training",
        "programming"
    ]
}
delete(person.age)
delete person.hobbies[0]
console.log(person.age)
// undefined
console.log(person.hobbies)
// [empty, 'training', 'programming']
*/
/*
function avgRating(watchList, director){

    const directorFilms = watchList.filter(film => film.Director === director)
    const ratings = directorFilms.map(film => Number(film.imdbRating))
    const summedRatings = ratings.reduce((rating, ratingSum) => rating + ratingSum)
    const averageRating = summedRatings / directorFilms.length
    return averageRating
}

console.log(avgRating(watchList, "Christopher Nolan"))
// 8.675
*/

// Create two sets of state one to hold form input and other to convert that input into data displayed on the screen. Handle the the onChange property to keep track of what is being typed in the form, handle the submit by updating the state to hold an array of everything typed plus everything that was submitted before. Lastly display the output in the DOM
/*
const [inputData, setInputData] = useState({firstName: "", lastName: ""})
const [contactsData, setContactsData] = useState([])

function handleChange(event) {
    const {name, value} = event.target
    setInputData(prevInputData => ({...prevInputData, [name]: value}))
}

function handleSubmit(event) {
    event.preventDefault()
    setContactsData(prevContacts => [...prevContacts, inputData])
}

const contacts = contactsData.map(contact => <h2 key={contact.firstName + contact.lastName}>{contact.firstName} {contact.lastName}</h2>)
*/

// 12-12-2022

// Write a function that reverses a string with a for loop
/*
const hello = "hello"

function reverseString(string){
    let reversedString = ""
    for(let i = string.length - 1; i >= 0; i--){
        reversedString += string[i]
    }
    return reversedString
}

console.log(reverseString(hello))
// olleh

function reverseStringMethod(string){
    return string.split('').reverse().join('')
}

console.log(reverseString(hello))
// olleh
*/

// Search through an array of objects and return a property of one of the objects based on the name of the object and if that prop exists or not.
/*
  function lookUpProfile(name, prop){
    for(let i = 0; i < contacts.length; i++){
        const contact = contacts[i]
        const {firstName, lastName} = contact

        if(name === firstName || lastName){
            if(contact.hasOwnProperty(prop)){
                return contact[prop]
            }else{
                return "No such prop"
            }
        }
    }
    return "Profile does not exist"
  }

  console.log(lookUpProfile("Laine", "likes"))
*/

// Write a function that takes a full name, splits the first name into an array, and returns it. Then destructure the array so that both the first name and last name are accessible as separate variables (assign the destructured array to the function).
/*
function splitFullName(fullName){
    return fullName.split(' ')
}

const [firstName, lastName] = splitFullName("Phil Nelson")
console.log(firstName)
// Phil
*/

// Create a new object from an array of objects that only displays two keys from the original object using map.
/*
const arrayOfObjs = [
    {
        name: "Phil",
        age: 34,
        hobbies: [
            "rock climbing",
            "eating pizza",
            "training",
            "playing with children"
        ]
    },
    {
        name: "John",
        age: 34,
        hobbies: [
            "rocking",
            "eating gyoza",
            "training pilates",
            "playing games"
        ]
    },
    {
        name: "Kyle",
        age: 34,
        hobbies: [
            "running",
            "eating ice cream",
            "track and field",
            "playing soccer"
        ]
    }
]

const newArrayOfObjs = arrayOfObjs.map(obj => ({
    name: obj.name,
    hobbies: obj.hobbies
}))
console.log(newArrayOfObjs)
// arrayOfObjs - age
*/

// 12-13-2022
// Create a function that loops through an object and returns the number of users where their online status is equal to true.
/*
const users = {
    Alan: {
        online: true
    },
    Phil: {
        online: false
    },
    Gwen: {
        online: true
    },
    Gwong: {
        online: true
    }
}

function onlineUsers(obj){
    let numberOnline = 0
    for(let user in obj){
        if(obj[user].online){
            numberOnline++
        }
    }
    return numberOnline
}

console.log(onlineUsers(users))
*/

// REGEX: How do we specify a lower/upper limit or an exact match of character length with {}?
/*
let string = "Ohhhhhh wow"
let regex = /Oh{1,5}h wow/
let result = regex.test(string)
console.log(result)
// true
*/

// 12-14-2022
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

let currentPerson = person
while(currentPerson != null){
    console.log(currentPerson.name)
    currentPerson = currentPerson.friend
}

function printName(currentPerson){
    if(currentPerson == null) return
    console.log(currentPerson.name)
    printName(currentPerson.friend)
}

printName(person)
*/
// Loop through an array to return each item and wrap it in an <li> tag with a class "text-warning" using string template literals.
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

// Regex find all of the whitespaces in a sentence
/*
let string = "hello      there my old friend"
let regex = /\s+/g
let result = string.match(regex)
console.log(result)
// Add the plus to get multiple spaces in a row
// ['       ', ' ', ' ', ' ']
*/

// Write a function that checks if the second argument is the last part of the first argument (a string).

// confirmEnding("Bastian", "n") should return true.
/*
let string = "Kenobi"

function confirmEnding(string, character){
    return string.slice(string.length - character.length) === character
}

console.log(confirmEnding(string, "obi"))
// true
*/

// Using Math.floor and Math.random, return a random whole number that is >= myMin and <= myMax.
/*
function randomRange(myMin, myMax){
    return Math.floor(Math.random() * myMax - myMin + 1) + myMin
}

console.log(randomRange(2, 4))
*/

// 12-16-2022

// Find the longest word in a string and print the length of that word (a number). Bonus: print out the word itself. Bonus bonus: get a word count of the whole string.
/*
const string = "She sells seashells by the seashore"

function findLongestWord(string){
    const words = string.split(' ')
    let letterCount = 0
    let longestWord = ""
    let stringLength = words.length

    for(let i = 0; i < words.length; i++){
        if(words[i].length > letterCount){
            letterCount = words[i].length
            longestWord = words[i]
        }
    }

    return `The longest word in your sentence is "${longestWord.toUpperCase()}" at ${letterCount} characters long. Your sentence has ${stringLength} words.`
}

console.log(findLongestWord(string))
// The longest word in your sentence is "SEASHELLS" at 9 characters long. Your sentence has 6 words.
*/

// Use a getter to calculate a person's birth year based on { ageThisYear: 34 }
/*
const person = {
    name: "Phil",
    ageThisYear: 34,
    get birthYear(){
        const date = new Date()
        const birthDate = date.getFullYear() - this.ageThisYear
        return birthDate
    }
}

console.log(person.birthYear)
// 1988
*/

// 12-17-2022

// Create an function that removes duplicates from an array using Set.

// Return an array (not an object)
/*
function removeDups(array){
    const newArray = [...new Set(array)]
    return newArray
}

console.log(removeDups([1,2,3,3,4,3,5]))
// [1, 2, 3, 4, 5]
*/

// 12-20-2022

/*
// What is the shorthand character class for [^A-Za-z0-9]?
let quote = "Hello 456! Where is your bottom?"
let regex = /[^A-Za-z0-9]/g
let regexShort = /\W/g
let result = quote.match(regex)
let result2 = quote.match(regexShort)
console.log(result)
// [' ', '!', ' ', ' ', ' ', ' ', '?']
console.log(result2)
// [' ', '!', ' ', ' ', ' ', ' ', '?']
// /\W/
*/

// What method can you use on an object to return the keys of that object in an array?
/*
let obj = {
    name: "Phil",
    age: 34,
    occupation: "teacher",
    hobbies: [
        "training",
        "coding",
        "spending time with family"
    ]
}

const objKeys = Object.keys(obj)
console.log(objKeys)
// ['name', 'age', 'occupation', 'hobbies']

// With a function

function returnKeys(obj){
    return Object.keys(obj)
}

console.log(returnKeys(obj))
// ['name', 'age', 'occupation', 'hobbies']
*/

// Add a setter to this code so that we can set an explicit fullName outside of the person object.
/*
const person = {
    firstName: "Phil",
    lastName: "Nelson",
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(name){
        [this.firstName, this.lastName] = name.split(' ')
    }
}

person.fullName = "Kelly Clarkson"
console.log(person.firstName)
// Kelly
*/

// Apply both the double function and the plusOne function to the array with map chaining and log out the result.
/*
const array = [1,2,3,4,5]

function double(element){
    return element * 2
}

function plusOne(element){
    return element + 1
}

const doubledPlusOne = array.map(element => double(element)).map(element => plusOne(element))

// or the shorthand: const doubledPlusOne = array.map(double).map(plusOne)
console.log(doubledPlusOne)
*/

// Create a function that compares two arrays and only returns an element that both arrays DO NOT share
/*
const arr1 = [1,2,3,4,5,6,7]
const arr2 = [2,3,4,5,6,7,8]

function compareArrays(arr1, arr2){
    return arr1.concat(arr2).filter(item=> !arr1.includes(item) || !arr2.includes(item))
}

console.log(compareArrays(arr1, arr2))
// [1, 8]
*/


// Write a function that takes a full name, takes the first name and the last name, and saves them as separate variables in an object. Then destructure the object so that both the first name and last name are accessible as separate variables.
/*
function splitFullName(fullName){
    const [firstName, lastName] = fullName.split(' ')
    return {
        firstName,
        lastName
    }
}

const { firstName, lastName } = splitFullName("Phil Nelson")
console.log(lastName)
// Nelson
*/

// How do we change the name of a key when destructuring an object?
/*
const person = {
    name: "Phil"
}

const {name: firstName} = person
console.log(firstName)
// Phil

*/

// Create the filter function from scratch with Array.prototype
/*
Array.prototype.myFilter = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        let truthyValue = this[i]
        if(callback(truthyValue)){
            newArray.push(truthyValue)
        }
    }
    return newArray
}

const array = [1,2,3,4,5,6]

const evenFilter = array.myFilter(item => item % 2 === 0)
const oddFilter = array.myFilter(item => item % 2 === 1)
console.log(evenFilter)
console.log(oddFilter)
*/

// 12-24-2022
// Use .replace() and a capture group to change the string one two three to three two one
/*
const string = "one two three"
const regex = /(\w+)\s(\w+)\s(\w+)/
const reverser = "$2 $1 $3"
const reversedString = string.replace(regex, reverser)
console.log(reversedString)
// two one three
*/

// 12-27-2022
// Use map to double the numbers of an array in a new array.
/*
const array = [1,2,3,4,5]
function doubleArray(array){
    return array.map(item => item * 2)
}

const doubledArray = doubleArray(array)
console.log(doubledArray)
// [2, 4, 6, 8, 10]
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

// What is the null coalescing operator, where is it used, and what does it do?
/*
function printName(firstName, lastName){
    lastName = lastName ?? "Nelson"
    console.log(firstName, lastName)
}
printName("Phil")
// Phil Nelson
*/

// Create a function that uses map to convert decimal numbers to whole numbers using parseInt()
/*
function decToWhole(array){
    return array.map(item => parseInt(item))
}

console.log(decToWhole([22.2, 33.4, 77.33234, 55.2311]))
// [22, 33, 77, 55]
*/

// What do we surround our tests with in Jest to add more detailed desriptions? What is the syntax?
// BONUS: What is a convention for functions?
/*
describe('#sum', () => {
    test('it adds numbers correctly', () => {
        const a = 1
        const b = 2
        expect(sum(a, b)).toBe(3)
    })
})
*/

// Create a function that removes the dashes from the string "May-the-force-be-with-you". 

// Bonus: Remove ALL special characters + Add a period at the end.
/*
const string = "May-the-force$be&with?you"

function removeDashes(string){
    return string.split(/\W/).join(' ') + "."
}

console.log(removeDashes(string))
// May the force be with you.
*/

// 12-28-2022
// What method can we use to determine if an object contains a property?
/*
const person = {
    name: "Phil",
    age: 34,
    hobbies: [
        "training",
        "music",
        "programming",
        "movies"
    ]
}

function findProp(obj, prop){
    if(obj.hasOwnProperty(prop)){
        return obj[prop]
    }
    return "Not Found"
}

console.log(findProp(person, "name"))
// Phil
*/

// How do we generate a random WHOLE number between 1-10?
/*
function generateRandomNumber(){
    return Math.ceil(Math.random() * 10)
}

const randomNumber = generateRandomNumber()
console.log(randomNumber)
// random number between 1-10
*/

// 12-30-2022
// What if we want to match a letter appearing between a range (say 3-6 times)?
/*
let ohStr = "Ohhhhh no"
let ohRegex = /Oh{2,5} no/
let result = ohRegex.test(ohStr)
console.log(result)
// true
*/

// What is a mixin and how can we use it?
/*
const plane = {
    name: "A DC3",
    numOfWings: 2,
    capableOfFlight: true
}

const penguin = {
    name: "Pen Pen",
    numOfWings: 2,
    capableOfFlight: false
}

const flyingMixin = function(obj){
    obj.flight = function(){
        console.log(`${obj.name} has ${obj.numOfWings} wings. ${obj.capableOfFlight ? "" : "However, "}${obj.name} is ${obj.capableOfFlight ? "quite" : "not"} capable of flight.`)
    }
}

flyingMixin(penguin)
penguin.flight()
// Pen Pen has 2 wings. However, Pen Pen is not capable of flight.

flyingMixin(plane)
plane.flight()
// DC3 has 2 wings. DC3 is quite capable of flight.
*/

// Use a nested for loop to iterate through an array and multiply all of the values:
/*
function multiplyAll(arr){
    let product = 1
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            console.log(arr[i][j])
            console.log(product)
            product *= arr[i][j]
        }
    }
    return product
}

let productOfArrays = multiplyAll([[1,2], [3,4], [5,6,7]])
console.log(productOfArrays)
*/

// 12-31-2022
// Difference between find and filter
// find finds the first item that meets the criteria outlined in the function while filter finds all instances
/*
const array = [1,2,3,4,5,6]
const found = array.find(item => item % 2 === 0)
const filtered = array.filter(item => item % 2 === 0)
console.log(found)
// 2
console.log(filtered)
// [2, 4, 6]
*/

// Create a function that title cases a string (every word's first letter is capitalized)
/*
function titleCaseIt(string){
    return string.toLowerCase().split(' ').map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase())).join(' ')
}

const string = "this is A funKy WaY to TESt if ThiS IS woRking"
console.log(titleCaseIt(string))
// This Is A Funky Way To Test If This Is Working
*/

// 1-1-2023
// Create a function that removes all falsy values from an array.
/*
function removeFalsy(array){
    return array.filter(item => {
        if(item){
            return item
        }
    })
}

console.log(removeFalsy([1, "this", undefined, null, 0]))
// [1, 'this']
*/

// 1-2-2023

// Create an anonymous ARROW function as the callback that prints out 10.
/*
function func(x, callback){
    callback(x)
}

func(10, (x) => console.log(x))
// 10
*/

// How do we prevent an object from being changed/mutated?
/*
const person = {
    name: "Phil"
}

Object.freeze(person)

person.name = "Bob"
console.log(person.name)
// TypeError
*/

// 1-3-2023
// Write a function that takes an array and a number. Use a while loop to loop over the array and push a copy of the array to a new array the number of times specified by the number argument.
/*
function multiplyArray(array, number){
    const newArray = []
    while(number >= 1 ){
        newArray.push([...array])
        number--
    }
    return newArray
}

const array1 = [1,2,3,4]
console.log(multiplyArray(array1, 4))
*/

// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.
/*
function findElement(arr, func){
    for(let i = 0; i < arr.length; i++){
        let num = arr[i]
        if(func(num)){
            return num
        }
    }
    return undefined
}

console.log(findElement([1,5,3,3,5], num => num % 2 === 0))
// undefined
console.log(findElement([1,2,3,3,5], num => num % 2 === 0))
// 2
*/

// 1-6-2023

// When using Redux in your project, what are the three things that you need to set up a store for your state?
// actions, reducers, dispatch
// Redux is very 'ARD - Action Reducer Dispatch

// Convert this object into an array of names. You can use a while loop or recursion to achieve this.
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

const personArray = []

function createPersonArray(currentPerson){
    if(currentPerson == null) return
    personArray.push(currentPerson.name)
    createPersonArray(currentPerson.friend)
    return personArray
}
console.log(createPersonArray(person))
// ['Phil', 'Simon', 'Caleb']
*/

/*
let currentPerson = person
const personArray = []

while(currentPerson != null){
    personArray.push(currentPerson.name)
    currentPerson = currentPerson.friend
}

console.log(personArray)
// ['Phil', 'Simon', 'Caleb']
*/

// How do we create a new object based off of an already existing object?
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

const person2 = Object.create(person)
console.log(person2.name)
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
        console.log(`${this.name} just cleaned the whole school with ${this.numberOfMops} mops!`)
    }
}

const jerry = new Janitor("Jerry", 23)
jerry.clean()
// Jerry just cleaned the whole school with 23 mops!
*/

// 1-7-2023
/*
const myArray = []
let i = 10

while(i < 10){
    myArray.push(i)
    i++
}
console.log(myArray)
// []

do{
    myArray.push(i)
    i++
}while(i < 10)

console.log(myArray)
// [10]
*/

// Change this to use an anonymous function. 
/*
function printVariable(variable){
    console.log(variable)
}

function printName(name, callback){
    callback(`Hello ${name}`)
}

printName("Phil", (variable)=>{
    console.log(variable)
})

*/

// Use the reduce method to get the total price of all of the items.
/*
const items = [
    { price: 10 },
    { price: 12 },
    { price: 17 },
    { price: 250 },
    { price: 121 }
]

const totalPrice = items.reduce((sum, item) => sum + item.price, 0)
console.log(totalPrice)
// 410
*/

// Create a new Dog class that extends Animal, adds an "owner" property, and redfines the function speak() to say "Woof!"
/*
class Animal {
    constructor(name){
        this.name = name
    }

    speak(){
        console.log(`${name} says "hello"`)
    }
}

class Dog extends Animal {
    constructor(name, owner){
        super(name)
        this.owner = owner
    }

    speak(){
        console.log(`${this.owner} told ${this.name} to say "woof!"`)
    }
}

const indy = new Dog("Indy", "Phil")
indy.speak()
// Phil told Indy to say "woof!"
*/

//1-8-2023
// Convert this code to use classes instead of prototype.
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

    static goodName = "Philly"
}

const phil = new Person("Phil", 34)
phil.printName()
//"Phil"
*/

// 1-14-2023
// functions on prototypes
/*
function Person(name, age){
    this.name = name
    this.age = age
}

Person.prototype.printName = function(){
    console.log(this.name)
}

const phil = new Person("Phil", 34)
phil.printName()
*/

// 1-15-2023
// Check if a string is made up of either Phil Nelson or Jin Nelson.
// Now check if any middle names or initials are also included.
/*
const name = "Phil Andrew Nelson"
const regex = /(Phil|Jin).*Nelson/
const check = regex.test(name)
console.log(check)
// true
*/

// Write a for loop that iterates through the array and returns the total of the sum of the items in the array
/*
const myArr = [2,3,4,5,6,7]

function sumArray(array){
    let total = 0
    for(let i = 0; i < array.length; i++){
        total += array[i]
    }
    return total
}

const total = sumArray(myArr)

console.log(total)
*/

// Add ["Paul", 35] to the beginning of the myArray variable using unshift().
/*
const array = [["Jim", 33], ["Tom", 44], ["Beverely", 62]]

array.unshift(["Paul", 35])

console.log(array[0])
// ['Paul', 35]
*/

// 1-16-2023
// What are the three arguments that we can pass to array.splice()?
/*
const array = ["A New Hope", "Return of the Jedi"]

array.splice(1, 0, "The Empire Strikes Back")

console.log(array)
// ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi']
*/

// What is the shorthand character class of [A-Za-z0-9_]?
/*
const string = "Hello b-23"
const regex = /\w/g
const result = string.match(regex)
console.log(result)
// ['H', 'e', 'l', 'l', 'o', 'b', '2', '3']
*/

// 1-17-2023
// Bracket notation when accessing properties from an object
/*
const players = {
    1: "Bobby Ricky",
    16: "Phil Jackson"
}

function getPlayerNum(obj, playerNum){
    console.log(obj[playerNum])
}

getPlayerNum(players, 1)
*/


// Convert a switch statement to an object that can be used to look up a key and return a value associated with that key.
/*
function phoneticLookup(val) {
    let result = ""

    const lookup = {
        "alpha":"Adams",
        "bravo":"Boston",
        "charlie":"Chicago",
        "delta":"Denver",
        "echo":"Easy",
        "foxtrot":"Frank"
    }

    result = lookup[val]
  
    return result
  }
  
console.log(phoneticLookup("charlie"))
*/

// 1-19-2023
// Create a map that contains three arrays with the keys 1, 2, 3 (as placeholders for ids). Each key should have a test AND a description value assigned to it. Next, create a function that gets an id (1, 2, or 3) from our map and returns it.
/*
const testMap = new Map([
    [1, {test: "test1", desc: "desc1"}],
    [2, {test: "test2", desc: "desc2"}],
    [3, {test: "test3", desc: "desc3"}]
])

function getId(id){
    return testMap.get(id)
}

console.log(getId(2))
// {test: "test2", desc: "desc2"}
*/

// 1-20-2023
/*
// Using Math.floor and Math.random, return a random whole number that is >= myMin and <= myMax.
function randomRange(myMin, myMax){
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}

console.log(randomRange(2, 6))
*/

// 1-21-2023
// How do we select 0 or more characters like all of the a's in Aaaaaaaaargh?

// let string = "Aaaaaaaargh"
// let argRegex = /a*/i
// let result = string.match(argRegex)
// console.log(result)
// // 'Aaaaaaaa'
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

  function lookupProfile(name, prop){
    for(let i = 0; i < contacts.length; i++){
        const contact = contacts[i]
        if(name === contact.firstName || name === contact.lastName){
            if(contact.hasOwnProperty(prop)){
                return contact[prop]
            }else{
                return "No such property"
            }
        }
    }
    return "Profile does not exist"
  }

  console.log(lookupProfile("Vos", "likes"))

*/
/*
const person = {
    name: "Phil",
    friends: [
        "Simon",
        "Caleb"
    ]
}

function addFriend(obj, friend){
    return {...obj, friends: [...obj.friends, friend]}
}

const person2 = addFriend(person, "Jimmy")
console.log(person2.friends)
// ['Simon', 'Caleb', 'Jimmy']
*/

// 1-23-2023

// Create the filter function from scratch with Array.prototype
/*
Array.prototype.myFilter = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        const num = this[i]
        if(callback(num)){
            newArray.push(num)
        }
    }
    return newArray
}
const array = [2,3,5,6]

const evenFilter = array.myFilter(function(item){
    return item % 2 === 0
})

console.log(evenFilter)
// [2, 6]
*/

// Use Function Composition to combine both the double function and the plusOne function into one function.
/*
const array = [1,2,3,4,5,6]

function double(element){
    return element * 2
}

function plusOne(element){
    return element + 1
}

function doubledPlusOne(element){
    return plusOne(double(element))
}
console.log(array.map(doubledPlusOne))
// [3, 5, 7, 9, 11, 13]
*/

