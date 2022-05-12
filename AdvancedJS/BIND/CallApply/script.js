window.name = "Global Name"

const person = {
    name: "Phil"
}

function printName(){
    console.log(this.name)
}

printName.call(person)
// Phil
// We do not have to call the function like when we use bind
    // printName.bind(person)()

// Apply is essentially the same as call, but requires that we pass an array of values to it when we call it
    // sum.apply(null, [2, 3])
    // sum.call(null, 2, 3)
        // null is just the placeholder for 'this' since we don't need to specify a 'this' we just make it null