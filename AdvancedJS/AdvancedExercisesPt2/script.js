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

