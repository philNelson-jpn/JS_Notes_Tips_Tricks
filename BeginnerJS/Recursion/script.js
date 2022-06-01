// Recursive Functions
// Loop within a function rather than just inside a normal loop

// for loop
// for(let i = 1; i <= 10; i++){
//     console.log(i)
// }

// with a recursive function
/*
function printNumber(number){
    if (number > 10) return

    console.log(number)
    printNumber(number + 1)
}

printNumber(1)
*/

// sum with a for loop 
/*
let sum = 0
for(let i = 1; i <= 10; i++){
    sum = sum + i
}

console.log(sum)
*/

// sum with a recursive function
/*
function numberSum(number){
    if(number <= 0) return 0
    return number + numberSum(number - 1)
}

console.log(numberSum(10))
*/
/*
// First iteration:
function numberSum(10){
    if(10 <= 0) return 0
    return 10 + numberSum(10 - 1)
}
*/
// 10 + (10 - 1) = 19
// 19 + 8 = 27
// 27 + 7 = 34
// 34 + 6 = 40
// 40 + 5 = 45
// 45 + 4 = 49
// 49 + 3 = 52
// 52 + 2 = 54
// 54 + 1 = 55
// 55 + 0 = 55


const person = {
    name: "Phil",
    friend: {
        name: "Simon",
        friend: {
            name: "Caleb"
        }
    }
}

// print all of the people from person with a while loop

let currentPerson = person
while (currentPerson != null){
    console.log(currentPerson.name)
    currentPerson = currentPerson.friend
}


// print all of the people from person with a recursive function

function printNames(currentPerson){
    if(currentPerson == null) return
    console.log(currentPerson.name)
    printNames(currentPerson.friend)
}

printNames(person)

// NOTE: return just means exit out of this function