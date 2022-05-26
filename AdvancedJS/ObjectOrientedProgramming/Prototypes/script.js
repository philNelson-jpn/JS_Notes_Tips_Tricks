// Prototypes
function Person(name, age){
    this.name = name,
    this.age = age
}
// Person is our prototype, but there is always one level higher than the prototype that we created (the Object)

Person.prototype.printName = function(){
    console.log(this.name)
}
// When we create a function on our prototype, it is generally best practice to create it outside of the prototype


const person = new Person("Phil", 33)


const person2 = Object.create(person)

person2.name = "Jim"
person2.printName()
// Jim

console.log(person2.age)
// 33

console.log(Object.getPrototypeOf(person2) === person)
// We can see that both person2 and person share the same base/prototype, even if we change keys/values

Person.prototype.printHi = function(){
    console.log("Hi")
}

person.printHi()
//Hi



