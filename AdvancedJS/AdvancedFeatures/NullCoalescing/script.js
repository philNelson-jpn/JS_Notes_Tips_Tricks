// Null Coalescing

function greet(firstName, lastName){
    lastName = lastName ?? "Nelson"
    console.log(`${firstName} ${lastName}`)
}

greet("Phil", null)
// Phil Nelson
greet("Phil", undefined)
// Phil Nelson
greet("Phil", 0)
// Phil 0
greet("Phil", "")
// Phil 

// Another way to write null coalescing
function greet(firstName, lastName){
    lastName ??= "Nelson"
    console.log(`${firstName} ${lastName}`)
}

greet("Phil", "Goblin")
// Phil Goblin