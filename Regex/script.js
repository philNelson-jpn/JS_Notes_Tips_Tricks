/*
let twinkleStar = "Twinkle, twinkle, little star"
let starRegex = /twinkle/gi
let result = twinkleStar.match(starRegex)

console.log(result)
// ['Twinkle', 'twinkle']
*/

// 6-28-2022
// How do we ignore case (uppercase/lowercase) when writing regex?
/*
let string = "Hello, my name is Bob. Hello, hello, hElLo"
let wordToCheck = /hello/ig
let check = wordToCheck.test(string)
// true
// Test with wordToCheck on the string.
let returnAll = string.match(wordToCheck)
// ['Hello', 'Hello', 'hello', 'hElLo']
// MATCH our string using wordToCheck
console.log(check)
console.log(returnAll)
*/


// Retrieve all of the `twinkle`s from twinkleStar by checking to see if anything in twinkleStar matches starRegex globally and case insensitive (ignore case).
/*
let twinkleStar = "Twinkle, twinkle, little star"
let starRegex = /twinkle/gi
let match = twinkleStar.match(starRegex)
console.log(match)
// ['Twinkle', 'twinkle']
let test = starRegex.test(twinkleStar)
console.log(test)
// true
*/

// How would you use a character class to extract ALL of the vowels from this sentence, ignoring case?
/*
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, note tried it."
let vowels = /[aeiou]/gi
let result = quoteSample.match(vowels)
console.log(result)
// ['e', 'a', 'e', 'o', 'u', 'i', 'e', 'a', 'o', 'e', 'o', 'e', 'I', 'a', 'e', 'o', 'o', 'e', 'i', 'o', 'e', 'o', 'e', 'i', 'e', 'i']
*/
// Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.
/*
let quoteSample = "3 blind mice"
let regex = /[^aeiou0-9]/gi
let result = quoteSample.match(regex)
console.log(result)
*/
// What does the `.` do in Regex (also called the dot or period)?
// Wildcard
/*
let bugStr = "There is a big in this code"
let bagStr = "There is a bag in this code?"
let baggyBugs = /b.g/
console.log(baggyBugs.test(bugStr))
// true
console.log(baggyBugs.test(bagStr))
// true
*/
/*
let quote = "<h1>Winter is coming</h1>"
let regex = /<.*?>/
let result = quote.match(regex)
console.log(result)
// <h1>
*/

// Check if a string is made up of either Phil Nelson or Jin Nelson
/*
let name1 = "Phil Nelson"
let nameRegex1 = /(Phil|Jin) Nelson/
console.log(nameRegex1.test(name1))
// true

// Now check if any middle names or initials are also included
let name2 = "Jin Arthur Nelson"
let nameRegex2 = /(Phil|Jin).*Nelson/
console.log(nameRegex2.test(name2))
// true
*/

// 6-29-2022
// How do you select back-to-back characters like the ss' or pp's in Mississippi?
/*
const hardSpelling = "Mississippi"
const doubleLetterRegex = /s+/gi
const doubleLetterRegex = /s{2}/gi
const result = hardSpelling.match(doubleLetterRegex)
console.log(result)
// ['ss', 'ss']
*/
// Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.
/*
let quote = "3 blind mice"
let quoteRegex = /[^aeiou0-9]/gi
let result = quote.match(quoteRegex)
console.log(result)
// [' ', 'b', 'l', 'n', 'd', ' ', 'm', 'c']
*/
// How do we select 0 or more characters like all of the a's in Aaaaaaaaargh?

// let argh = "Aaaaaaaaaaaargh"
// let arghRegex = /a*/i
// console.log(argh.match(arghRegex))
// // Aaaaaaaaaaaa

// Change regex so that only the first <h1> is logged.
/*
let quote = "<h1>Winter is coming</h1>"
let quoteRegex = /<.*?>/
console.log(quote.match(quoteRegex))
// <h1>
*/
// What character do we use to select the first word in a string and what character do we use to select the last character in a string?
// ^ for the first word and $ for the last

// What is the shorthand character class of [A-Za-z0-9_]?
// /\w/

// What is the shorthand character class of [^A-Za-z0-9_]?
// /\W/

// What is the shorthand character class of [0-9]; only selecting digits?
// /\d/

// What is the shorthand character class of [^0-9]; only selecting NON-digits?
// /\D/

// How do you find all of the whitespaces in a sentence?
// /\s/

// What would the the regex be for ohRegex when we want to match the entire phrase Oh no only when it has 3 to 6 letter h's.
/*
let ohStr = "Ohhhhhh no"
let ohRegex = /Oh{3,6} no/i
console.log(ohRegex.test(ohStr))
*/

// What character can you use to match both the American and British spellings of words (favorite/favourite, color/colour, etc.)?
/*
let iro = "color"
let iro2 = "colour"
let iroRegex = /colou?r/
console.log(iroRegex.test(iro), iroRegex.test(iro2))
// true true
*/
// Check if a string is made up of either Phil Nelson or Jin Nelson. Then check if any middle names or initials are also included.
/*
let fullName = "Jin Arthur Nelson"
let nameRegex = /(phil|jin).*nelson/i
console.log(nameRegex.test(fullName))
*/
// Flip the order of a string with capture groups
/*
let string = "one two three"
let regex = /(\w+)\s(\w+)\s(\w+)/
let newString = "$3 $2 $1"
let result = string.replace(regex, newString)
console.log(result)
// three two one

console.log("one two three four".replace(/(\w+)\s(\w+)\s(\w+)\s(\w+)/, '$4 $3 $2 $1'))
// four three two one
*/

// console.log("Phil".replace(/(\w+)(\w+)(\w+)(\w+)/, '$4$3$2$1'))
// lihP


// 6-30-2022
// Use .replace() and a capture group to change the string "one two three" to "three two one"
/*
let string = "one two three"
let regex = /(\w+)\s(\w+)\s(\w+)/gi
let newString = "$3 $2 $1"
console.log(string.replace(regex, newString))
// three two one
*/
// How do we select 0 or more characters like all of the a's in Aaaaaaaaargh?

// let string = "Aaaaaaaaaargh"
// let regex = /a*/i
// let result = string.match(regex)
// console.log(result)
// // Aaaaaaaaaa
// 7-1-2022
// Return all "twinkle"s
/*
let twinkleStar = "Twinkle, twinkle little star."
let regex = /twinkle/gi
let result = twinkleStar.match(regex)
console.log(result)
*/

//7-2-2022
// How do we specify a lower/upper limit or an exact match of character length with {}?
/*
let string = "Ohhhhhh wow"
let regex = /Oh{2,6} wow/
console.log(regex.test(string))
// true
*/
/*
// What does the `.` do in Regex (also called the dot or period)?
let string = "Ohhhhhh waw"
let regex = /Ohhhhhh w.w/
console.log(regex.test(string))
// true
*/
// [0-9] shorthand = /\d/

// What character do we use to select the first word in a string and what character do we use to select the last character in a string?
// ^First and last$

// Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.
/*
let quote = "3 blind mice"
let quoteRegex = /[^aeiou0-9]/gi
console.log(quote.match(quoteRegex))
//  [' ', 'b', 'l', 'n', 'd', ' ', 'm', 'c']
*/

// 7-4-2022
// Match a string as long as it has the correct last name (can take in two first names and any middle name)
/*
let string = "Jin Arthur Nelson"
let regex = /(Phil|Jin).*Nelson/
console.log(string.match(regex))
*/

// 7-5-2022

// Use .replace() and a capture group to change the string "one two three" to "three two one"
/*
let string = "one1 two2 three3"
let regex = /(\w+)\s(\w+)\s(\w+)/
let newString = "$3 $2 $1"
console.log(string.replace(regex, newString))
// three3 two2 one1
*/

// Retrieve all of the `twinkle`s from twinkleStar by checking to see if anything in twinkleStar matches starRegex globally and case insensitive (ignore case).
/*
let string = "Twinkle, twinkle little star"
let regex = /twinkle/gi
let result = string.match(regex)
console.log(result)
*/