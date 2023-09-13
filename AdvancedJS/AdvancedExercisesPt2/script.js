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

// 2-9-2023

// Write a function that takes in an array, removes the first two items and replaces them with two new ones.
// Hint: The array method you use can take in more than two arguments.
/*
function removeAndReplace(array){
    array.splice(0, 2, "black", "blue")
    return array
}

const colorArray = ["yellow", "red", "orange", "purple"]

const newColorArray = removeAndReplace(colorArray)
console.log(newColorArray)
// ['black', 'blue', 'orange', 'purple']
*/

// Create the map function from scratch (on Array.prototype)

// Remember that map only takes in a function. It is performing the method ON an array (not accepting it as a argument).
/*
Array.prototype.myMap = function(func){
    const newArray = []
    this.forEach(element => newArray.push(func(element)))
    return newArray
}

const myMapArray = [1,2,3,4,5]
console.log(myMapArray.myMap(element => element * 3))
*/

// 2-13-2023

// Use .replace() and a capture group to change the string "one two three" to "three two one"
/*
const string = 'one two three'
const regex = /(\w+)\s(\w+)\s(\w+)/
const captureGroup = '$1 $3 $2'
const reversedString = string.replace(regex, captureGroup)

console.log(reversedString)
// one three two
*/

// Create a function that compares two arrays and only returns an element that both arrays DO NOT share
/*
function unsharedElements(arr1, arr2) {
	const combinedArray = arr1.concat(arr2)
	const filteredArray = combinedArray.filter(
		(element) => !arr1.includes(element) || !arr2.includes(element)
	)
	return filteredArray
}

const nameArrayOne = ['Bill', 'Todd', 'Jim', 'Phil']
const nameArrayTwo = ['Bill', 'Todd', 'Phil']

const uniqueNameArray = unsharedElements(nameArrayOne, nameArrayTwo)
console.log(uniqueNameArray)
// ['Jim']
*/
//2-14-2023
// Write a function that returns the director, the average rating, and the films used to calculate the average for the films only by a certain director using filter, map, and reduce.
/*
const watchList = [
	{
		Title: 'Inception',
		Year: '2010',
		Rated: 'PG-13',
		Released: '16 Jul 2010',
		Runtime: '148 min',
		Genre: 'Action, Adventure, Crime',
		Director: 'Christopher Nolan',
		Writer: 'Christopher Nolan',
		Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy',
		Plot: 'A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
		Language: 'English, Japanese, French',
		Country: 'USA, UK',
		Awards: 'Won 4 Oscars. Another 143 wins & 198 nominations.',
		Poster:
			'http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
		Metascore: '74',
		imdbRating: '8.8',
		imdbVotes: '1,446,708',
		imdbID: 'tt1375666',
		Type: 'movie',
		Response: 'True',
	},
	{
		Title: 'Interstellar',
		Year: '2014',
		Rated: 'PG-13',
		Released: '07 Nov 2014',
		Runtime: '169 min',
		Genre: 'Adventure, Drama, Sci-Fi',
		Director: 'Christopher Nolan',
		Writer: 'Jonathan Nolan, Christopher Nolan',
		Actors: 'Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow',
		Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
		Language: 'English',
		Country: 'USA, UK',
		Awards: 'Won 1 Oscar. Another 39 wins & 132 nominations.',
		Poster:
			'http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg',
		Metascore: '74',
		imdbRating: '8.6',
		imdbVotes: '910,366',
		imdbID: 'tt0816692',
		Type: 'movie',
		Response: 'True',
	},
	{
		Title: 'The Dark Knight',
		Year: '2008',
		Rated: 'PG-13',
		Released: '18 Jul 2008',
		Runtime: '152 min',
		Genre: 'Action, Adventure, Crime',
		Director: 'Christopher Nolan',
		Writer:
			'Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)',
		Actors: 'Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine',
		Plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
		Language: 'English, Mandarin',
		Country: 'USA, UK',
		Awards: 'Won 2 Oscars. Another 146 wins & 142 nominations.',
		Poster:
			'http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
		Metascore: '82',
		imdbRating: '9.0',
		imdbVotes: '1,652,832',
		imdbID: 'tt0468569',
		Type: 'movie',
		Response: 'True',
	},
	{
		Title: 'Batman Begins',
		Year: '2005',
		Rated: 'PG-13',
		Released: '15 Jun 2005',
		Runtime: '140 min',
		Genre: 'Action, Adventure',
		Director: 'Christopher Nolan',
		Writer:
			'Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)',
		Actors: 'Christian Bale, Michael Caine, Liam Neeson, Katie Holmes',
		Plot: 'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.',
		Language: 'English, Urdu, Mandarin',
		Country: 'USA, UK',
		Awards: 'Nominated for 1 Oscar. Another 15 wins & 66 nominations.',
		Poster:
			'http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg',
		Metascore: '70',
		imdbRating: '8.3',
		imdbVotes: '972,584',
		imdbID: 'tt0372784',
		Type: 'movie',
		Response: 'True',
	},
	{
		Title: 'Avatar',
		Year: '2009',
		Rated: 'PG-13',
		Released: '18 Dec 2009',
		Runtime: '162 min',
		Genre: 'Action, Adventure, Fantasy',
		Director: 'James Cameron',
		Writer: 'James Cameron',
		Actors: 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang',
		Plot: 'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
		Language: 'English, Spanish',
		Country: 'USA, UK',
		Awards: 'Won 3 Oscars. Another 80 wins & 121 nominations.',
		Poster:
			'http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
		Metascore: '83',
		imdbRating: '7.9',
		imdbVotes: '876,575',
		imdbID: 'tt0499549',
		Type: 'movie',
		Response: 'True',
	},
]

function avgRating(movieArray, director) {
	const directorFilms = movieArray.filter(
		(film) => film['Director'] === director
	)
	const filmList = directorFilms.map((film) => JSON.stringify(film['Title']))
	const ratings = directorFilms.map((film) => Number(film.imdbRating))
	const sumOfRatings = ratings.reduce((rating, sum) => sum + rating, 0)
	const averageRating = sumOfRatings / ratings.length
	return `The average rating for films directed by ${director} is ${averageRating}. This average is taken from the IMDB ratings for ${
		filmList.length > 1
			? filmList.slice(0, ratings.length - 1) +
			  ', and ' +
			  filmList.slice(ratings.length - 1, ratings.length)
			: filmList
	}.`
}

console.log(avgRating(watchList, 'Christopher Nolan'))
// The average rating for films directed by Christopher Nolan is 8.675. This average is taken from the IMDB ratings for "Inception","Interstellar","The Dark Knight", and "Batman Begins".
*/

// 2-15-2023
// Use object lookup instead of a long switch statement
/*
const date = new Date().getDay()

const dayMap = {
	0: 'Sunday',
	1: 'Monday',
	2: 'Tuesday',
	3: 'Wednesday',
	4: 'Thursday',
	5: 'Friday',
	6: 'Saturday',
}
const yesterday = dayMap[date - 1]
const today = dayMap[date]
const tomorrow = dayMap[date + 1]

const dayString = `Today is ${today}, yesterday was ${yesterday}, and tomorrow is ${tomorrow}`
console.log(dayString)
*/

// 2-17-2023

// Regex, find all of the white spaces in a sentence
/*
const string = 'This is a test to see how many whitespaces there are'
const regex = /\s/g
const whiteSpaceCheck = string.match(regex)
console.log(whiteSpaceCheck.length)
// 10
*/

//2-18-2023

// Write a function that takes a full name, splits the first name into an array, and returns it. Then destructure the array so that both the first name and last name are accessible as separate variables (assign the destructured array to the function).
/*
function splitFullName(fullname){
	return fullname.split(' ')
}

const [firstName, lastName] = splitFullName("Phil Nelson")
console.log(firstName)
// Phil
console.log(lastName)
// Nelson
*/

// Write a function that reverses a string with a for loop
/*
function reverseString(string){
	let reversedString = ""
	for(let i = string.length -1 ; i >= 0; i--){
		reversedString += string[i]
	}
	return reversedString
}

console.log(reverseString("hello"))
// olleh
*/

// 2-20-2023

// Find the longest word in a string and print the length of that word (a number). Bonus: print out the word itself. Bonus bonus: get a word count of the whole string.
/*
const sampleString =
	'What do you think the longest word in this string is, supercalifragilisticexpialadocious or abrakadabra?'

function findLongestWord(string) {
	const words = string.split(' ')
	let wordLength = 0
	let longestWord = ''
	let numOfWords = words.length
	for (let i = 0; i < words.length; i++) {
		if (words[i].length > wordLength) {
			wordLength = words[i].length
			longestWord = words[i]
		}
	}
	return `The longest word in the sentence "${string}" is "${longestWord}" at ${wordLength} characters long. Your sentence is ${numOfWords} words long.`
}

const longestWordNum = findLongestWord(sampleString)
console.log(longestWordNum)
// The longest word in the sentence "What do you think the longest word in this string is, supercalifragilisticexpialadocious or abrakadabra?" is "supercalifragilisticexpialadocious" at 34 characters long. Your sentence is 14 words long.
*/

// Create a function that uses map to convert decimal numbers to whole numbers using parseInt()
/*
function decToWhole(numberArray) {
	return numberArray.map((number) => parseInt(number))
}

console.log(decToWhole([2.223, 4.223, 54.6345]))
// [2, 4, 54]
*/
// 2-25-2023
// Create the filter function from scratch with Array.prototype
/*
Array.prototype.myFilter = function (callback) {
	let filteredArray = []
	for (let i = 0; i < this.length; i++) {
		if (callback(this[i])) {
			filteredArray.push(this[i])
		}
	}
	return filteredArray
}

const array = [1, 2, 3, 4, 5, 6, 7]

const evenFilter = array.myFilter((item) => item % 2 === 0)
console.log(evenFilter)
[2,4,6]
*/

// Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.
/*
let quote = '3 blind mice'
let quoteRegex = /[^aeiou0-9]/gi
let result = quote.match(quoteRegex)
console.log(result)
//[' ', 'b', 'l', 'n', 'd', ' ', 'm', 'c']
*/

// 2-26-2023

// Write a function that takes a full name, takes the first name and the last name, and saves them as separate variables in an object. Then destructure the object so that both the first name and last name are accessible as separate variables.
/*
function printFullName(fullName){
	const [firstName, lastName] = fullName.split(' ')
	return {
		firstName,
		lastName
	}
}

const philly = printFullName("Phil Nelson")
console.log(philly.firstName)
*/

// 3-2-2023
// Using Math.floor and Math.random, return a random whole number that is >= myMin and <= myMax.
/*
function randomRange(myMin, myMax) {
	return Math.ceil(Math.random() * (myMax - myMin + 1)) + myMin - 1
}

console.log(randomRange(2, 4))
*/

// Create a function that uses a closure (a function within another function) called closure() that takes in one argument (a variable).

// The function within closure() (func()) will take in a separate argument (another variable) and log both the closure() arg. and the func() arg.

/*
function closure(variable1) {
	return function func(variable2) {
		console.log('step 1')
		console.log(variable1)
		console.log('step 2')
		console.log(variable2)
		console.log('step 3')
	}
}

const someFunc = closure(1)
someFunc(3)
*/

// 3-4-2023

// Mixins
/*
const bird = {
	name: 'Donald',
	canFly: true,
	numOfWings: 2,
}

const plane = {
	name: 'DC3',
	canFly: true,
	numOfWings: 2,
}

const flyingMixin = (object) => {
	object.fly = () => console.log(`${object.name} is flying!`)
}

flyingMixin(plane)
plane.fly()
// DC3 is flying!
flyingMixin(bird)
bird.fly()
// Donald is flying!
*/

// 3-9-2023
// Change this to use an anonymous function.
/*
function printVariable(variable) {
	console.log(printVariable)
}

function printName(name, callback) {
	callback(`Hi, my name is ${name}.`)
}

printName('Phil', (variable) => console.log(variable))
*/

// 3-10-2023

// Loop through an array of objects, use a nested if statement to check if one property matches one argument and if a property exists (second argument). Return no such property if it does not exist and return object does not exist if neither match.
/*
const contacts = [
	{
		firstName: 'Akira',
		lastName: 'Laine',
		number: '0543236543',
		likes: ['Pizza', 'Coding', 'Brownie Points'],
	},
	{
		firstName: 'Harry',
		lastName: 'Potter',
		number: '0994372684',
		likes: ['Hogwarts', 'Magic', 'Hagrid'],
	},
	{
		firstName: 'Sherlock',
		lastName: 'Holmes',
		number: '0487345643',
		likes: ['Intriguing Cases', 'Violin'],
	},
	{
		firstName: 'Kristian',
		lastName: 'Vos',
		number: 'unknown',
		likes: ['JavaScript', 'Gaming', 'Foxes'],
	},
]

function lookupProfile(name, prop) {
	for (let i = 0; i < contacts.length; i++) {
		const contactName = contacts[i]
		if (name === contactName.firstName || name === contactName.lastName) {
			if (contactName.hasOwnProperty(prop)) {
				return contactName[prop]
			} else {
				return `"${prop}" does not exist in contacts object.`
			}
		}
	}
	return 'Profile does not exist'
}

console.log(lookupProfile('Vos', 'likes'))
// ['JavaScript', 'Gaming', 'Foxes']
*/
/*
// How do we add a default parameter to our function?
function printName(firstName = 'Joe', lastName = 'Schmoe') {
	console.log(`${firstName} ${lastName}`)
}

printName()
// Joe Schmoe
*/

// 3-12-2023

// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
/*
function findElement(arr, func){

	for(let i = 0; i < arr.length; i++){
		if(func(arr[i])){
			return arr[i]
		}
	}
	return undefined
}

const array = [1,3,4,5,6]

console.log(findElement(array, (item) => item % 2 === 0))
*/

// Convert an object of people with friends into an array of just names (name and friend keys). With while loop or recursion.
/*
const person = {
	name: 'Phil',
	friend: {
		name: 'Simon',
		friend: {
			name: 'Caleb',
		},
	},
}

let friendArray = []

function createFriendArray(object) {
	if (object == null) return
	friendArray.push(object.name)
	createFriendArray(object.friend)
	return friendArray
}

console.log(createFriendArray(person))
*/

// Optional chaining
/*
const person = {
	name: 'Phil',
	friend: {
		name: 'Simon',
		address: {
			town: 'Landon',
			street: 'Cali St.',
		},
	},
}

function printFriendsStreet(object) {
	console.log(object?.friend?.address?.street)
}

printFriendsStreet(person)
// Cali St.
*/

// 3-24-2023
/*
const obj = {
	name: 'Phil',
	age: 34,
}

delete obj.name

console.log(obj.name)
//undefined
*/

// convert a while loop into a recursive function
/*
const person = {
	name: 'Phil',
	friend: {
		name: 'Simon',
		friend: {
			name: 'Caleb',
		},
	},
}

// let currentPerson = person
// while (currentPerson != null) {
// 	console.log(currentPerson.name)
// 	currentPerson = currentPerson.friend
// }

function printNames(currentPerson) {
	if (currentPerson == null) return
	console.log(currentPerson.name)
	printNames(currentPerson.friend)
}

printNames(person)
// Phil Simon Caleb
*/

// How do we destructure an object within another object, i.e. how do we get only the keys/values that we want from an object within another object?
/*
const person = {
	name: 'Kocho',
	age: 34,
	address: {
		street: 'Jose',
		zone: {
			parkingLot: 'Zone B',
			lotNum: 32,
		},
	},
}

const {
	address: {
		zone: { lotNum },
	},
} = person
console.log(lotNum)
// 32
*/

// 3-26-2023

// Change an impure function to a pure function
/*
const person = {
	name: "Phil",
	friends: ["Simon", "Caleb"]
}

function addFriends(...friendName){
	const newPerson = {
		...person,
		friends: [...person.friends, ...friendName]
	}

	return newPerson
}

const newPerson = addFriends("Jimbo", "John", "Jorgeo")
console.log(newPerson.friends)
// ['Simon', 'Caleb', 'Jimbo', 'John', 'Jorgeo']
console.log(person.friends)
// ['Simon', 'Caleb']

*/

//3-29-2023

// How do you set default values in JavaScript?
/*
function printName(firstName, lastName = 'Nelson') {
	console.log(`${firstName} ${lastName}`)
}

printName('Phil')
*/

//4-1-2023

// How do we select 0 or more characters like all of the a's in Aaaaaaaaargh?

// const str = 'Aaaaaaaaargh'
// const regex = /a*/i
// console.log(str.match(regex))
// // 'Aaaaaaaaa', index: 0, input: 'Aaaaaaaaargh'

// Create the filter function from scratch with Array.prototype
/*
Array.prototype.myFilter = function (callback) {
	const newArray = []
	this.forEach((num) =>
		callback(this[num]) ? newArray.push(this[num]) : undefined
	)
	return newArray
}

const numArray = [1, 2, 3, 4, 5, 6]

console.log(numArray.myFilter((item) => item % 2 === 0))
*/

// Check if a string is made up of either Phil Nelson or Jin Nelson. Now check if any middle names or initials are also included.
/*
const names = 'Phil Nelson'
const regex = /(Jin|Phil).*Nelson/
const result = regex.test(names)
console.log(result)
*/

// 4-4-2023
// Maps in JS
/*
const currencyMap = new Map([
	["America", "USD"],
	["Mexico", "Peso"],
	["Japan", "Yen"],
])

currencyMap.set("Netherlands", "Euro")

currencyMap.forEach(value => console.log(value))
// USD, Peso, Yen, Euro

console.log(currencyMap.get("America"))
// USD

console.log(currencyMap)
// 0: {"America" => "USD"}
// key: "America"
// value: "USD"
// ...
*/

// Use a getter to calculate a person's birth year based on { ageThisYear: 34 }
/*
const person = {
	name: "Phil",
	ageThisYear: 35,
	get calculateBirthYear(){
		const date = new Date()
		return date.getFullYear() - this.ageThisYear
	}
}

console.log(person.calculateBirthYear)
// 1988
*/

// 4-6-2023
// Create a function that title cases a string (every word's first letter is capitalized)
/*
function titleCaseIt(string) {
	return string
		.toLowerCase()
		.split(' ')
		.map((word) => word.replace(word.charAt(0), word.charAt(0).toUpperCase()))
		.join(' ')
}

console.log(titleCaseIt('hello there you slick looking cool dude'))
*/

//4-7-2023

// Use recursion to return an array that begins with startNum and ends with endNum.
/*
function rangeOfNums(startNum, endNum) {
	if (endNum - startNum === 0) return [startNum]
	console.log(endNum)

	const rangeArray = rangeOfNums(startNum, endNum - 1)

	rangeArray.push(endNum)
	return rangeArray
}

console.log(rangeOfNums(2, 7))
// [2, 3, 4, 5, 6, 7]
*/

// 4-8-2023
// Create a function that takes in a name and uses printVariable as a callback to print out "Hello, (name)"
/*
function printVariable(variable) {
	console.log(variable)
}

function printName(name, callback) {
	callback(`Hello ${name}`)
}

printName('Phil', printVariable)
// Hello Phil

*/

// Create a new object from an array of objects that only displays two keys from the original object using map.
/*
const arrayOfObjs = [
	{ name: 'Phil', age: 34, favoriteFood: 'pizza' },
	{ name: 'Simon', age: 40, favoriteFood: 'yakiniku' },
]

const favoriteFoods = arrayOfObjs.map(({ favoriteFood }) => ({
	favoriteFood,
}))

console.log(favoriteFoods)
*/

// 4-9-2023
// Write a function that checks if the second argument is the last part of the first argument (a string).
/*
function checkEnding(string, target){
	const slicedString = string.slice(string.length - target.length)
	return slicedString === target
}

console.log(checkEnding("Hello", "llo"))
// true
*/

// Combine two objects together with the spread operator by cloning one of the objects and then adding a new key/value pair.
/*
const person = {
	name: "Jimmy",
	age: 459,
	hobby: "Alchemy"
}

const animal = {
	type: 'tiger',
	color: "black",
	abilities: [
		'tear you to shreds',
		'cunning',
		'500lb bite'
	]
}

const animalMan = {...person, ...animal, desire: "rule the world"}

console.log(animalMan.desire)
// rule the world
console.log(animalMan.hobby)
// Alchemy
*/

// 4-12-2023
// Create an function that removes duplicates from an array using Set. Return an array (not an object)
/*
const arr = [1, 2, 3, 2, 3, 2, 4, 5, 2, 3]

function removeDups(array) {
	return [...new Set(array)]
}

const noDupsArr = removeDups(arr)
console.log(noDupsArr)
// [1, 2, 3, 4, 5]
*/

// 4-16-2023
// Create a function that compares two arrays and only returns an element that both arrays DO NOT share
/*
function compareArrays(arr1, arr2) {
	return arr1
		.concat(arr2)
		.filter((value) => !arr1.includes(value) || !arr2.includes(value))
}
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [1, 2, 3, 6, 5]
const noDupsArr = compareArrays(arr1, arr2)
console.log(noDupsArr)
// [4, 6]
*/

//4-17-2023
// Write a function that takes an array and a number. Use a while loop to loop over the array and push a copy of the array to a new array the number of times specified by the number argument.
/*
function copyArray(arr, num){
	const newArray = []
	let i = 0
	while(i < num){
		newArray.push([...arr])
		i++
	}
	return newArray
}

const superArray = copyArray([1,2,3,4], 3)
console.log(superArray)
*/
//4-18-2023
// Apply both the double function and the plusOne function to the array with map chaining and log out the result.
/*
const array = [1,2,3,4]

function double(element){
	return element * 2
}

function plusOne(element){
	return element + 1
}

const doubledPlusOne = array.map(element => plusOne(double(element)))
const doubledPlusOne2 = array.map(double).map(plusOne)
console.log(doubledPlusOne)
// [3, 5, 7, 9]
console.log(doubledPlusOne2)
// [3, 5, 7, 9]
*/

// 4-19-2023
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
	Grace: {
		online: true,
	},
}

function getNumOnline(obj) {
	let numOnline = 0
	for (const user in obj) {
		if (obj[user].online) {
			numOnline++
		}
	}
	return numOnline
}

const usersOnline = getNumOnline(users)
console.log(usersOnline)
*/

// 4-22-2023
// Create a function that returns the sum of a range of an array of two numbers ([1,4] would return 10
/*
function sumOfRange(arr){
	let sum = 0
	let min = Math.min(arr[0], arr[1])
	let max = Math.max(arr[0], arr[1])
	for(let i = min; i <= max; i++){
		console.log(`sum is ${sum}`)
		console.log(`i is ${i}`)
		sum += i
	}
	return sum
}

console.log(sumOfRange([1,4]))
//10
*/

// 4-24-2023

// Using Math.floor and Math.random, return a random whole number that is >= myMin and <= myMax.
/*
function randomRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(randomRange(2, 8))
// Random number between 2 and 8
*/

// 4-26-2023
// Create the map function from scratch (on Array.prototype)

// Remember that map only takes in a function. It is performing the method ON an array (not accepting it as a argument).
/*
Array.prototype.myMap = function(callback){
	const arr = []
	this.forEach(item => arr.push(callback(item)))
	// for(let i = 0; i < this.length; i++){
	// 	arr.push(callback(this[i]))
	// }
	return arr
}
const arr1 = [1,2,3,4,5]
const doubledArray = arr1.myMap(item => item * 2)
console.log(doubledArray)
*/

// 5-1-2023
// Write a function that reverses a string (using methods)
// First break up the string into individual characters, reverse them, then join them back together
/*
function reverseString(string) {
	return string.split('').reverse().join('')
}

console.log(reverseString('animal'))
// lamina
*/

// 5-3-2023

// Use .replace() and a capture group to change the string "one two three" to "three two one"
/*
const string = "one two three"
const regex = /(\w+)\s(\w+)\s(\w+)/
const newOrder = '$3 $2 $1'
const newString = string.replace(regex, newOrder)
console.log(newString)
*/

// 5-4-2023
// Use the forEach method to only print out the price of each item (only the number)
/*
const items = [
	{ price: 10 },
	{ price: 20 },
	{ price: 30 },
	{ price: 50 },
	{ price: 70 },
]
const arrayOfPrices = []
const iteratePrices = items.forEach((item) => {
	arrayOfPrices.push(item.price)
})

console.log(arrayOfPrices)
//[10, 20, 30, 50, 70]
*/

// Assign list to a destructured array that is equal to 3 through 10.
/*
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
	const [a, b, ...arr] = list
return arr;
}
const arr = removeFirstTwo(source);
console.log(arr)
// [3, 4, 5, 6, 7, 8, 9, 10]
*/

// 5-5-2023
// Create a function that removes all falsy values from an array with for loop, forEach, and filter.
/*
function removeFalsy(array) {
	const truthyArray = []
	// for (let i = 0; i < array.length; i++) {
	// 	if (array[i]) {
	// 		truthyArray.push(array[i])
	// 	}
	// }
	// return truthyArray

	// array.forEach((item) => item ? truthyArray.push(item) : truthyArray)
	// return truthyArray

	return array.filter(item => item)
	
}

const truthisized = removeFalsy([3, 'yes', '', 0, undefined, null, 7, 'we do'])
console.log(truthisized)
// [3, 'yes', 7, 'we do']
*/

// Create a function that removes the dashes from a string bonus for removing all special characters. Sample string: "May-the-force-be-with-you".
/*
function removeDashes(string){
	// return string.split('-').join(' ') + '.'

	// remove any special chars:
	return `${string.split(/\W/).join(' ')}.`
}

const forceBeWithYou = "May-the-force-be-with-you"

console.log(removeDashes(forceBeWithYou))
// May the force be with you.
*/

// 5-7-2023
// Write a function that reverses a string with a for loop
/*
function reverseAString(string){
	let reversedString = ""
	for(let i = string.length - 1; i >= 0; i--){
		reversedString += string[i]
	}

	return reversedString
}

console.log(reverseAString('hello'))
// olleh
*/

// 5-10-2023

// Loop through the array to return each item and wrap it in an <li> tag with a class "text-warning" using string template literals.
/*
const result = {
	success: ['max-length', 'no-amd', 'prefer-arrow-functions'],
	failure: ['no-var', 'var-on-top', 'linebreak'],
	skipped: ['no-extra-semi', 'no-dup-keys'],
}
function makeList(arr) {
	const failureItems = []
	for (let i = 0; i < arr.length; i++) {
		failureItems.push(`<li class='text-warning'>${arr[i]}</li>`)
	}
	return failureItems
}

const failuresList = makeList(result.failure)
console.log(failuresList)
// ["<li class='text-warning'>no-var</li>", "<li class='text-warning'>var-on-top</li>", "<li class='text-warning'>linebreak</li>"]
*/

// 5-11-2023

// Loop through an array of objects, use a nested if statement to check if one property matches one argument and if a property exists (second argument). Return no such property if it does not exist and return object does not exist if neither match.
/*
const contacts = [
	{
		firstName: 'Akira',
		lastName: 'Laine',
		number: '0543236543',
		likes: ['Pizza', 'Coding', 'Brownie Points'],
	},
	{
		firstName: 'Harry',
		lastName: 'Potter',
		number: '0994372684',
		likes: ['Hogwarts', 'Magic', 'Hagrid'],
	},
	{
		firstName: 'Sherlock',
		lastName: 'Holmes',
		number: '0487345643',
		likes: ['Intriguing Cases', 'Violin'],
	},
	{
		firstName: 'Kristian',
		lastName: 'Vos',
		number: 'unknown',
		likes: ['JavaScript', 'Gaming', 'Foxes'],
	},
]

function lookUpProfile(name, prop) {
	for (let i = 0; i < contacts.length; i++) {
		const contact = contacts[i]
		const contactProp = contact[prop]
		const nameExists = 
			name === contact.firstName || name === contact.lastName
		const propExists = contact.hasOwnProperty(prop)

		if (nameExists) {
			if (propExists) {
				return contactProp
			} else {
				return 'No such property'
			}
		}
	}
	return 'Contact does not exist'
}

const contactLikes = lookUpProfile('Harry', 'likes')
console.log(contactLikes)
// ['Hogwarts', 'Magic', 'Hagrid']

*/
/*
// Create a map that contains three arrays with the keys 1, 2, 3 (as placeholders for ids). Each key should have a test AND a description value assigned to it. Next, create a function that gets an id (1, 2, or 3) from our map and returns it.

const testMap = new Map([
	[1, { test: 'test1', description: 'desc1' }],
	[2, { test: 'test2', description: 'desc2' }],
	[3, { test: 'test3', description: 'desc3' }],
])

function getMapID(id) {
	const mapId = testMap.get(id)
	return mapId.test
}

console.log(getMapID(3))
// test3
*/

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

const arrayOfArrays = [[1,2], [3,4], [5,6,7]]
const isIt5040 = multiplyAll(arrayOfArrays)
console.log(isIt5040)
// 5040
*/

// Find the longest word in a string and print the length of that word (a number).
/*
function findLongestWord(string){
	let numOfLetters = 0
	let longestWord = ''
	const words = string.split(' ')

	for(let i = 0; i < words.length; i++){
		if(words[i].length > numOfLetters){
			numOfLetters = words[i].length
			longestWord = words[i]
		}
	}
	return `The longest word in your string is "${longestWord}" with ${numOfLetters} letters`

}

console.log(findLongestWord("hello there you fabulous thing"))
// The longest word in your string is "fabulous" with 8 letters
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

const array = [1,2,3,4,5,6,7,8]

const evenFilter = array.myFilter(item => item % 2 === 0)
console.log(evenFilter)
// [2, 4, 6, 8]
const oddFilter = array.myFilter(item => item % 2 === 1)
console.log(oddFilter)
// [1, 3, 5, 7]
*/

// 5-15-2023
// Retrieve all of the `twinkle`s from twinkleStar by checking to see if anything in twinkleStar matches starRegex globally and case insensitive (ignore case).
/*
let twinkleStar = 'Twinkle, twinkle, little star'
let starRegex = /twinkle/gi
let result = twinkleStar.match(starRegex)
console.log(result)
// ['Twinkle', 'twinkle']
*/
// Create a Person class with a name and another class that inherits it

// Next, create a Janitor that inherits Person + takes an additional numberOfMops prop + creates a clean() function that prints 'I cleaned with numberOfMops mops'
/*
class Person {
	constructor(name = 'Jimbo', sex = 'male') {
		this.name = name
		this.sex = sex
	}
}

class Janitor extends Person {
	constructor(name, sex, numOfMops = 2) {
		super(name, sex), (this.numOfMops = numOfMops)
	}

	clean() {
		return `${this.name} is such a badass, ${
			this.sex === 'male' ? 'he' : 'she'
		} cleaned the whole place by ${
			this.sex === 'male' ? 'him' : 'her'
		}self with ${this.numOfMops} mops!`
	}
}

const janjan = new Janitor()

console.log(janjan.clean())
// Jimbo is such a badass, he cleaned the whole place by himself with 2 mops!
*/

// 5-19-2023
// Write a function that takes in an array, removes the first two items and replaces them with two new ones.
/*
const arrables = ['Gimli', 'Faramir', 'Legolas', 'Aragorn', 'Gandalf']
function replaceFirstTwo(array) {
	const [a, b, ...list] = array
	return ['Jim', 'Greg', ...list]
}

console.log(replaceFirstTwo(arrables))
// ['Jim', 'Greg', 'Legolas', 'Aragorn', 'Gandalf']
*/
/*
// Replace an undetermined amount of items in the array with at least the number of items in the original array:

const arrables = ['Gimli', 'Faramir', 'Legolas', 'Aragorn', 'Gandalf']
function replaceFirstTwo(array, ...newItems) {
	if (array.length < newItems.length) {
		throw new Error(`You cannot replace more than ${array.length} items.`)
	}
	array.splice(0, newItems.length, ...newItems)
	return array
}

console.log(replaceFirstTwo(arrables, 'Kimberly', 'Kyle', 'Jim', 'Kyle', 'Bob'))
// ['Kimberly', 'Kyle', 'Jim', 'Kyle', 'Bob']

console.log(replaceFirstTwo(arrables, 'Kimberly', 'Kyle', 'Jim', 'Kyle', 'Bob', 'Johnny'))
//  Error: You cannot replace more than 5 items.


// ['Jim', 'Greg', 'Legolas', 'Aragorn', 'Gandalf']
*/

// 5-22-2023
// Create a function that changes a string to title case (only the first letter of each word is capitalized) using map.
/*
function titleCaseMe(string){
	return string
		.toLowerCase()
		.split(' ')
		.map(word => word.replace(word.charAt(0), word.charAt(0).toUpperCase()))
		.join(' ')
}

console.log(titleCaseMe("hello there mr. bandit"))
// Hello There Mr. Bandit
*/

// 6-2-2023

// Use the reduce method to get the total price of all of the items.
/*
const items = [
	{price: 10},
	{price: 20},
	{price: 30},
	{price: 40},
]

const totalPrice = items.reduce(function(sum, item){
	console.log(sum)
	return (item.price + sum)
}, 100)
console.log(totalPrice)
// 200
*/

// 6-3-2023

// Write a function that takes in a string and a number. The string should be repeated the number of times specified in the number parameter. Use a for loop and not the .repeat() method.
/*
function repeatMe(string, number){
	let repeatedString = ''
	for(let i = 0; i < number; i++){
		repeatedString += string
	}
	return repeatedString
}

console.log(repeatMe("hello", 5))
*/

// 6-6-2023

// Convert an object into an array of names. You can use a while loop or recursion to achieve this.
/*
const friends = {
	name: 'Phil',
	friends: {
		name: 'Caleb',
		friends: {
			name: 'Simon',
		},
	},
}

const newFriends = []
let currentPerson = friends

while (currentPerson != null) {
	newFriends.push(currentPerson.name)
	currentPerson = currentPerson.friends
}

console.log(newFriends)
// ['Phil', 'Caleb', 'Simon']
*/

// 6-7-2023

// Write a function that takes in an array and returns a new array with only the third and fourth items in the original array.
/*
function thirdAndFourth(array){
	return array.slice(2,4)
}

const arr = [1,2,3,4,5]

console.log(thirdAndFourth(arr))
// [3, 4]
console.log(arr)
// [1,2,3,4,5]
*/
/*
function splitFullName(fullName){
	return fullName.split(' ')
}

const [firstName, lastName] = splitFullName('Phil Nelson')
const phil = {
	firstName,
	lastName
}

console.log(phil.firstName)
// Phil
*/

// 6-18-2023

// Create a function that uses map to convert decimal numbers to whole numbers using parseInt()
/*
function decToWhole(decNumArr){
	const wholeNumArr = decNumArr.map(num => parseInt(num))
	return wholeNumArr
}

const decArr = [22.23, 44.23, 55.63, 11.5522234]
console.log(decToWhole(decArr))
// [22, 44, 55, 11]
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

const newTemp = new Thermostat(32)
console.log(newTemp.temperature)
// 0°C
newTemp.temperature = 72
console.log(newTemp.fahrenheit)
// 161.6°F
*/

// 6-22-2023

// Write a function that takes a full name, takes the first name and the last name, and saves them as separate variables in an object. Then destructure the object so that both the first name and last name are accessible as separate variables.
/*

function createPersonObject(fullname, address){
	const [firstName, lastName] = fullname.split(' ')
	return {
		firstName,
		lastName,
		address
	}
}

const person = createPersonObject('Phil Nelson', '6020 Jose Rd.')
console.log(person)
const person2 = new Object(person)
person2.firstName = "Bobby"
console.log(person2)

*/

// 6-24-2023
// Write a function that checks if the second argument is the last part of the first argument (a string).

// confirmEnding("Bastian", "n") should return true.
/*
function confirmEnding(string, target) {
	const slicedStr = string.slice(string.length - target.length)
	console.log(slicedStr)
	// l
	return slicedStr === target
}

console.log(confirmEnding('phil', 'r'))
*/

// What is a mixin and how can we use it?
/*
const donald = {
	name: 'Donald',
	numOfWings: 2
}

const plane = {
	name: 'DC-3',
	numOfWings: 2
}

const flyingMixin = function(object){
	object.flying = function(){
		console.log(`${object.name} is cruising at high altitude`)
	}
}

flyingMixin(donald)
donald.flying()
*/

// 6-25-2023

// Write a function that returns the average rating for films only by a certain director using filter, map, and reduce.
/*
function getAvgRating(watchList){
	const nolanFilms = watchList.filter(film => film.Director === 'Christopher Nolan')
	const allRatings = nolanFilms.map(film => Number(film.imdbRating))
	const sumOfRatings = allRatings.reduce((sum, ratings) => ratings + sum)
	const averageRating = sumOfRatings / allRatings.length
	return averageRating
}

console.log(getAvgRating(watchList))
// 8.675
*/

// Using Math.floor and Math.random, return a random whole number that is >= myMin and <= myMax.
/*
function randomRange(myMin, myMax) {
	return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}

console.log(randomRange(2, 5))
*/

// 6-26-2023
// Use recursion to return an array that begins with startNum and ends with endNum.
/*
function rangeOfNumbers(startNum, endNum){
	if(endNum - startNum === 0){
		return [startNum]
	}

	const rangeArray = rangeOfNumbers(startNum, endNum - 1)	
	rangeArray.push(endNum)

	return rangeArray
}

console.log(rangeOfNumbers(2, 8))
*/

// 6-27-2023
// Change a function that uses a callback to use an anonymous function instead
/*
function printName(name, callback){
	callback(`Hello ${name}`)
}

printName('Phil', (variable) => {
	console.log(variable)
})
// Hello Phil
*/

// Change an impure function to a pure function
/*
const person = {
	name: 'Phil',
	friends: ['Simon', 'Caleb'],
}

function addFriend(obj, ...friendName) {
	const newObj = { ...obj, friends: [...obj.friends, ...friendName] }
	return newObj
}

const newPerson = addFriend(person, 'Bobby', 'Kelly', 'Janet')
console.log(newPerson.friends)
// ['Simon', 'Caleb', 'Bobby', 'Kelly', 'Janet']
console.log(person.friends)
// ['Simon', 'Caleb']
*/

// 6-28-2023
/*
const person = {
	firstName: 'Phil',
	lastName: 'Nelson',
	get fullName(){
		return `${this.firstName} ${this.lastName}`
	},

	set fullName(value){
		;[this.firstName, this.lastName] = value.split(' ')
	}
}

console.log(person.fullName)
// Phil Nelson

person.fullName = 'Kelly Williams'
console.log(person.fullName)
// Kelly Williams
*/

// 6-29-2023

// Find the longest word in a string and print the length of that word (a number). Bonus: print out the word itself. Bonus bonus: get a word count of the whole string.
/*
function findLongestWord(string) {
	let length = 0
	const words = string.split(' ')
	let longestWord = ''
	
	for (let i = 0; i < words.length; i++) {
		if (words[i].length > length) {
			length = words[i].length
			longestWord = words[i]
		}
	}
	return `Hello, your sentence has ${words.length} words. The longest word in this sentence is "${longestWord}." "${longestWord}" is ${length} characters long.`
}

console.log(
	findLongestWord(
		'this is a test to see that phillymacdonald is the longest word'
	)
)
*/

// How can you sort an array without mutating the original array? Bonus: What is the function that sorts numbers?
/*
const unsortedArray = [2,1,6,4,5,3]

function sortArray(array){
	const clonedArray = [...array]
	return clonedArray.sort((a,b) => a - b)
}

console.log(sortArray(unsortedArray))
// [1, 2, 3, 4, 5, 6]
console.log(unsortedArray)
// [2, 1, 6, 4, 5, 3]
*/

// 7-2-2023

// Create a new object from an array of objects that only displays two keys from the original object using map.
/*
const arrayOfObjs = [
	{
		name: 'Phil',
		age: 34,
		local: 'Japan'
	},
	{
		name: 'John',
		age: 35,
		local: 'USA'
	},
	{
		name: 'Kimberly',
		age: 32,
		local: 'Czech Republic'
	}
]

const newObj = arrayOfObjs.map(({name, local}) => (
	{name, local}
))

const newObj2 = arrayOfObjs.map(item => (
	{
		name: item.name,
		local: item.local
	}
))

console.log(newObj)
console.log(newObj2)
// (3) [{…}, {…}, {…}]
// {name: 'Phil', local: 'Japan'}
// {name: 'John', local: 'USA'}
// {name: 'Kimberly', local: 'Czech Republic'}
*/

// 7-3-2023
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

// const doubledPlusOne = array.map(item => doublePlusOne(item))
const doubledPlusOne = array.map(doublePlusOne)
console.log(doubledPlusOne)
// [3, 5, 7, 9, 11]
*/

// 7-4-2023

// Create the filter function from scratch with Array.prototype
/*
Array.prototype.myFilter = function(callback){
	const filteredArray = []
	for(let i = 0; i < this.length; i++){
		if(callback(this[i])){
			filteredArray.push(this[i])
		}
	}
	return filteredArray
}

const arrayOfNums = [1,2,3,4,5,6,7,8,9]

const evenFilter = arrayOfNums.myFilter(function(item){
	return item % 2 === 0
})
console.log(evenFilter)
[2,4,6,8]

const oddFilter = arrayOfNums.myFilter(function(item){
	return item % 2 === 1
})
console.log(oddFilter)
[1,3,5,7,9]
*/

//7-16-2023

// Convert a while loop into a recursive function
/*
const person = {
	name: 'Phil',
	friend: {
		name: 'Simon',
		friend: {
			name: 'Caleb',
		},
	},
}

let currentPerson = person
// while (currentPerson != null) {
// 	console.log(currentPerson.name)
// 	currentPerson = currentPerson.friend
// }

function logName(currentPerson) {
	if (currentPerson == null) return

	console.log(currentPerson.name)
	logName(currentPerson.friend)
}

logName(currentPerson)
*/

// 7-20-2023
// Split a string and use regex to return an array of words that contains no spaces or special characters.
/*
const string = "Hello goodbye see you farewell !  ?"
const splitString = string.split(/\W+/)
const filteredString = splitString.filter(word => word !== '')
console.log(filteredString)
// ['Hello', 'goodbye', 'see', 'you', 'farewell']
*/

// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.
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
//2
*/

// 7-21-2023
// Create a function that returns the sum of a range of an array of two numbers ([1,4] would return 10 (1+2+3+4))
/*
const arrToBeSummed = [1,4]

function sumOfRange(array){
	let sum = 0
	const maxNum = Math.max(array[0], array[1])
	const minNum = Math.min(array[0], array[1])

	for(let i = minNum; i <= maxNum; i++){
		console.log({sum, i})
		sum += i
	}
	return sum
}

console.log(sumOfRange(arrToBeSummed))
// {sum: 0, i: 1}
// {sum: 1, i: 2}
// {sum: 3, i: 3}
// {sum: 6, i: 4}
// 10
*/

// 7-24-2023
// How do you create a new Map. Since creating a new map creates something like an object that is actually an array, what is something that we can do that we can't do with normal objects.
/*
const currencyMap = new Map([
	['the US', 'Dollars'],
	['Mexico', 'Pesos'],
	['Japan', 'Yen'],
])

currencyMap.forEach((currency, country) => {
	console.log(`The currency of ${country} is ${currency}.`)
})
// The currency of the US is Dollars.
// The currency of Mexico is Pesos.
// The currency of Japan is Yen.
*/

// 7-27-2023
// Create a function that loops through an object and returns the number of users where their online status is equal to true
/*
const users = {
	Alan: {
		online: true,
	},
	Jim: {
		online: false,
	},
	Carol: {
		online: true,
	},
	Kimberly: {
		online: false,
	},
}

function countOnline(userObj) {
	let numOnline = 0
	for (let user in userObj) {
		if (userObj[user].online) {
			numOnline++
		}
	}
	return numOnline
}

console.log(countOnline(users))
// 2
*/

// Loop through an array of objects, use a nested if statement to check if one property matches one argument and if a property exists (second argument). Return no such property if it does not exist and return object does not exist if neither match.
/*
const contacts = [
	{
		firstName: 'Akira',
		lastName: 'Laine',
		number: '0543236543',
		likes: ['Pizza', 'Coding', 'Brownie Points'],
	},
	{
		firstName: 'Harry',
		lastName: 'Potter',
		number: '0994372684',
		likes: ['Hogwarts', 'Magic', 'Hagrid'],
	},
	{
		firstName: 'Sherlock',
		lastName: 'Holmes',
		number: '0487345643',
		likes: ['Intriguing Cases', 'Violin'],
	},
	{
		firstName: 'Kristian',
		lastName: 'Vos',
		number: 'unknown',
		likes: ['JavaScript', 'Gaming', 'Foxes'],
	},
]

function lookUpProfile(name, prop){
	for(let i = 0; i <= contacts.length; i++){
		const contactName = contacts[i].firstName
		const contactProp = contacts[i][prop]
		const hasProp = contacts[i].hasOwnProperty(prop)
		if(name === contactName){
			if(hasProp){
				return contactProp
			}else {
				return 'No such prop'
			}
		}
	}
	return "There ain't no profile, dummy"
}

console.log(lookUpProfile('Akira', 'likes'))
// ['Pizza', 'Coding', 'Brownie Points']
*/

// 7-29-2023
// Use map to apply a double function to an array and then log out the result.
/*
const array = [1,2,3,4,5]

function double(element){
	return element * 2
}

console.log(array.map(element => double(element)))
// [2, 4, 6, 8, 10]
*/

// Create the map function from scratch (on Array.prototype)
/*
Array.prototype.myMap = function(callback){
	const array = []
	this.forEach(item => array.push(callback(item)))
	// for(let i = 0; i < this.length; i++){
	// 	array.push(callback(this[i]))
	// }
	return array
}

const arr = [1,2,3,4,5]

console.log(arr.myMap(el => el * 2))
// [2, 4, 6, 8, 10]
*/

// 8-8-2023
// Calculate a person's birth year based on { ageThisYear: 35 }
/*
function getBirthYear(ageThisYear) {
	const date = new Date().getFullYear()
	console.log(date - ageThisYear)
}

const person = {
	name: 'Phil',
	age: 35,
}

getBirthYear(person.age)
// 1988
*/

// Write a function that reverses a string with a for loop
/*
function reverseString(str){
	let reversedString = ""
	for(let i = str.length - 1; i >= 0; i--){
		reversedString += str[i]
	}
	return reversedString
}

console.log(reverseString("Hello there Obi-wan"))
naw-ibO ereht olleH
*/

// 8-9-2023
// Use .replace() and a capture group to change the string "one two three" to "three two one"
/*
const str = 'one two three'
const regex = /(\w+)\s(\w+)\s(\w+)/
const capgrp = '$3 $2 $1'
const reversedStr = str.replace(regex, capgrp)
console.log(reversedStr)
// three two one
*/
// 8-15-2023
// function that compares two arrays and only returns an element that both arrays DO NOT share
/*
const arr1 = [2,4,6,7]
const arr2 = [2,4,6,8]

function compareArrays(arr1, arr2){
	const combinedArrays = arr1.concat(arr2)
	return combinedArrays.filter(num => !arr1.includes(num) || !arr2.includes(num))
}

console.log(compareArrays(arr1, arr2))
// [7, 8]
*/

//8-23-2023
// Create a function that uses a closure (a function within another function) called closure() that takes in one argument (a variable).
/*
function closure(variable){
	return function func(variable2){
		console.log(variable)
		console.log(variable2)
	}
}

const a = closure(1)
a(2)
// 1
// 2
*/

// 8-26-2023
// Create a function that removes duplicates from an array using Set.
/*
const numArray = [1,2,3,4,5,4,5,2,3,4]

function removeDups(array){
	const noDupsArray = [...new Set(array)]
	return noDupsArray
}

console.log(removeDups(numArray))
// [1, 2, 3, 4, 5]
*/

// 8-30-2023
// Create a setter function that allows someone to change the full name
/*
const person = {
	firstName: 'Phil',
	lastName: 'Nelson',
	get fullName() {
		return `${this.firstName} ${this.lastName}`
	},
	set fullName(value) {
		return ([this.firstName, this.lastName] = value.split(' '))
	},
}

person.fullName = "Jim Morrison"
console.log(person.fullName)
// Jim Morrison
*/
/*
// Create a new Cat class that extends Animal and redefines the speak() function to say "meow"
class Animal {
	constructor(name) {
		this.name = name
	}

	speak() {
		console.log(`Hello, there. My name is ${this.name}.`)
	}
}

class Cat extends Animal {
	speak() {
		console.log('meoooooow')
	}
}

const meowmers = new Cat("Meowmers")
meowmers.speak()
// meoooooow
*/

// 9-4-2023
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

// 9-7-2023
// Using Math.floor and Math.random, return a random whole number that is >= myMin and <= myMax.
/*
function randomRange(myMin, myMax) {
	const number = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
	return number
}

const ranged = randomRange(2, 6)
console.log(ranged)
// num between 2 and 6
*/

// 9-13-2023
// Create the filter function from scratch with Array.prototype
/*
Array.prototype.myFilter = function(callback){
	const filteredArray = []
	this.forEach(element => {
		if(callback(element)){
			filteredArray.push(element)
		}
	})
	return filteredArray
}

const arr = [1,2,3,4,5]
console.log(arr.myFilter(item => item % 2 === 0))
// [2, 4]
*/
