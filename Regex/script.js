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
let name1 = "Phil Nelson"
let nameRegex1 = /(Phil|Jin) Nelson/
console.log(nameRegex1.test(name1))
// true

// Now check if any middle names or initials are also included
let name2 = "Jin Arthur Nelson"
let nameRegex2 = /(Phil|Jin).*Nelson/
console.log(nameRegex2.test(name2))
// true



