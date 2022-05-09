// Setting up default parameters

function greetings(firstName, lastName, greeting = "Hello there,"){
    console.log(`${greeting} ${firstName} ${lastName}`)
}

greetings("Phil", "Nelson")
// Hello there, Phil Nelson
// Setting 'greeting' to "Hello there," as a default ensures that a salutation will be included even if one is not specified.


// With objects

function greetObj(firstName, {salutation = "Hi", suffix = "Mr"} = {}){
    console.log(`${salutation} ${suffix} ${firstName}`)
}

greetObj("Phil")
// Hi Mr Phil
// If we want to pass objects to our function we should also default our object to an object so that the default salutation and suffix gets passed to the function even if no params are specified.