//////////////
// CLOSURES //
//////////////


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



