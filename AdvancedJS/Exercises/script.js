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

function printName(firstName, lastName){
    console.log(`${firstName} ${lastName}`)
}

const name = ["Phil", "Nelson"]

printName(...name)






