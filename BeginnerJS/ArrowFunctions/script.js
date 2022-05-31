// ARROW FUNCTIONS
/*
function printName(name){
    console.log(`It's ya boy, ${name}`)
}

const printArrow = (name) => {
    console.log(`It's ya boy, ${name}`)
}

printArrow("Phil")
// It's ya boy, Phil
*/
/*
function printHi(name){
    return `Hi, ${name}`
}

const printArrowHi = name => `Hi, ${name}`

console.log(printArrowHi("Phil"))
// Hi, Phil
*/

/*
function hi(){
    console.log("Hi")
}

const hiArrow = () => console.log("Hi")

hiArrow()
// Hi
*/

// Anonymous Arrow Functions

function func(x, callback){
    callback(x)
}

func(10, variable => console.log(variable))
// 10





