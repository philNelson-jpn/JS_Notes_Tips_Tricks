////////////////////////////////////
//////////// RECURSION /////////////
////////////////////////////////////

// Essentially a function that calls itself

function printNumber(number){
    if(number > 5) return
    console.log(number)
    printNumber(number + 1)
}

printNumber(1)

// PRINTS 1, 2, 3, 4, 5 to the console.

// BREAKDOWN //

// You can essentially copy the same functionality of the for and while loops above to print 1-5 when given a starting number (printNumber(1)). 

// 1. We create a function, printNumber, that takes one argument (number)

// 2. We create an if statement, that checks if the number is greater than 5 and then returns that value

// 3. We log the value (console.log(number))

// 4. We then call the function within the function to add another number to it (number + 1)

// 5. Now that the number is 2, it gets checked against the if statement, returned if true, logged, and then has another 1 added to it (making it 3)

// 6. This loop repeats until number > 5 is false.

// 7. We call the function with a number outside the scope of the function.

//////////////////////////////////////////
//////////// RECURSION PT. 2 /////////////
//////////////////////////////////////////

// TASK //

// Loop through an object and return all of the names within that object.

const person = {
    name: "Phil",
    friend: {
        name: "Jim",
        friend: {
            name: "Carol"
        }
    }
}

// With a while loop:

let currentPerson = person
while (currentPerson !=null) {
    console.log(currentPerson.name)
    currentPerson = currentPerson.friend
}

// PRINTS: Phil, Jim, Carol to the console.

// BREAKDOWN //

// We set a variable (currentPerson) to person, run the loop while there is an instance of a person (currentPerson is not null), log the person’s name (currentPerson.name) and then move the loop to go through currentPerson’s friends (currentPerson.friend).

// With a recursion:

const personRecursion = {
    name: "Brad",
    friend: {
        name: "Cliff",
        friend: {
            name: "Junior"
        }
    }
}

const currentPersonRecursion = personRecursion
function printNames(currentPersonRecursion){
    if (currentPersonRecursion == null) return
    console.log(currentPersonRecursion.name)
    printNames(currentPersonRecursion.friend)
}

printNames(personRecursion)

// PRINTS Brad, Cliff, Junior to the console

// BREAKDOWN //

// With recursion, we are running a function within another function, so we first create a function (currentPersonRecursion) where we would have normally created a variable in a while loop.

//---------------------------
// while loop	
// let currentPerson = person	

// recursive function
// printNames(currentPersonRecursion)
//---------------------------

// We then use an if statement to check whether currentPersonRecursion exists or not and return it if a person does NOT exist.

//---------------------------
// while loop	
// while (currentPerson != null)

// recursive function
// 	if (currentPersonRecursion == null) return 
// (exit out of/stop the function)
//---------------------------

// Next, we log the person’s name (currentPersonRecursion.name) and set currentPersonRecursion to currentPersonRecursion.friend with the printNames function (the function within another function)


//---------------------------
// while loop	
// console.log(currentPerson.name)	console.log(currentPerson.name)

// recursive function
// currentPersonRecursion = currentPersonRecursion.friend	printNames(currentPersonRecursion.friend)
//---------------------------

// Note: It seems that whenever we set a value in a while loop, we are calling a function in recursion.

// Lastly, call the function.