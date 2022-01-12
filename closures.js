//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//////////////
// CLOSURES //
//////////////

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

// A closure is the combination of a function and the lexical environment in which that function was declared

function makeFunction(){
    // Begin: Lexical environment of displayName function
    
    // let name can be here or outside of the function
    let name = "Phil"

    function displayName(){
        console.log(name)
    }

    return displayName
    // End: Lexical environment of displayName function
}

// let name can be here or inside of the function
// let name = "Phil"

let displayNameTwo = makeFunction()
displayNameTwo() //Logs "Phil"

// Notes

// displayNameTwo is a reference to the instance of the function displayName, created when makeFunction was *invoked*

// The instance of displayName maintains a reference to it's lexical environment (from let name to return displayName)

// When displayName is invoked, the let name remains available for use, and "Phil" is passed to the console

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

////////////////////////////////////
// PASSING FUNCTIONS AS ARGUMENTS //
////////////////////////////////////

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

function printSomething(something){
    console.log(something)
}

function sayWhatsUp(name, callback){
    callback("What's up, " + name)
}

sayWhatsUp("Phil", printSomething)

// Breakdown:

// printSomething() - logs something to the console

// callback - maps a function’s functionality to an argument/parameter
    // printSomething is the function being mapped here

// sayWhatsUp() - takes a name and maps printSomething() to callback()

// sayWhatsUp(“Phil”, printSomething) - logs “What’s up, Phil” to the console.

//////////////////////////////////////////
// PASSING FUNCTIONS AS ARGUMENTS Pt. 2 //
//////////////////////////////////////////

function doStuff(a, b, name){
    print(sum(a, b))
    print(sayHi(name))
}

function print(variable){
    console.log(variable)
}

function sum(a, b){
    return a + b
}

function sayHi(name){
    return "Hi, my name is " + name
}

doStuff(2, 10, "Phil")

/////////////////////////////////////////////////////////////
// PASSING FUNCTIONS AS ARGUMENTS Pt. 2 w/ Arrow Functions //
/////////////////////////////////////////////////////////////

let printArrow = variable => console.log(variable)

let sumArrow = (a, b) => a + b

let sayHiArrow = name => "Arrow says hello to " + name

let doStuffArrow = (a, b, name) => {
    printArrow(sumArrow(a, b))
    printArrow(sayHiArrow(name))
}

doStuffArrow(12, 14, "Philly Arrow Man")

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

////////////////////////////////////
//////////// RECURSION /////////////
////////////////////////////////////

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

