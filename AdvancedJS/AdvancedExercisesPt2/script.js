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
