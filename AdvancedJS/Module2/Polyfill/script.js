// Simulate a function that doesn't exist yet or is not available in a browser yet, say Math.double(number), that will be added in a future update

const number = 5

console.log(Math.double(number))
// Uncaught TypeError: Math.double is not a function

// We can create a new script that assigns a custom implementation that will execute the code the way we want:

/*
In polyfill.js

Math.double = function(number){
    return number * 2
}

However, this will overwrite the function if it already exists or becomes available, so we should wrap it in an if check

if (Math.double == null)    {
    Math.double = function(number){
        return number * 2
    }
}

*/