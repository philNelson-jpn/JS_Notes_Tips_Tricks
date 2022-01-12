// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward

//TASK//
//Return true if the given string is a palindrome. Otherwise, return false.

function palindrome(string){
    // First, lowercase the string and use RegExp to remove unwanted characters
    const re = /[\W_]/g
    const lowRegStr = string.toLowerCase().replace(re, '')

    // Reverse the string and save it in a new variable
    const reverseStr = lowRegStr.split('').reverse().join('')

    // Check if reverseStr is strictly equals to lowRegStr
    console.log(reverseStr === lowRegStr)
}

palindrome("Yo, banana boy!")