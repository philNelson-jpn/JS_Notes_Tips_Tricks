// Classes


// function Person(name, age){
//     this.name = name
//     this.age = age
// }

// Person.printName = function(){
//     console.log(this.name)
// }

// Person.printHi = function(){
//     console.log("Hi")
// }

// Person.goodName = "Philly"

// console.log(Person.goodName)



// class Person {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }

//     static goodName = "Philly"
//     static printHi = function(){
//         console.log("Hi")
//     }

//     printName(){
//         console.log(this.name)
//     }
// }

// console.log(Person.goodName)

// EXERCISE //

// Convert the following code to use both prototypes and classes:

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

// function CreateUser(email, password, language){
//         this.email = email
//         this.password = password
//         this.language = language
// }

// CreateUser.prototype.printPassword = function(){
//     console.log(this.password)
// }




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

const user = new CreateUser("zam@bobby.com", "petsName5000", "Japanese")
console.log(user)
user.printPassword()
// CreateUser {email: 'zam@bobby.com', password: 'petsName5000', language: 'Japanese'}
// script.js:79 petsName5000





