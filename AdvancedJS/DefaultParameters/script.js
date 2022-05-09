// Setting up default parameters

function greetings(firstName, lastName, greeting = "Hello there,"){
    console.log(`${greeting} ${firstName} ${lastName}`)
}

greetings("Phil", "Nelson")

// With objects

function greetObj(firstName, {salutation = "Hi", suffix = "Mr"} = {}){
    console.log(`${salutation} ${suffix} ${firstName}`)
}

greetObj("Phil")