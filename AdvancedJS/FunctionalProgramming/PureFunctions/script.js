// // Change the following function from an impure function to a pure one

// const array = [1, 2, 3, 4]

// function addElement(element){
//     array.push(element)
// }

// // A function is impure when it modifies anything outside of it (a global element)
// // In order to do this for arrays, we need to return a brand new array WITHIN our function

// function addElementPure(a, element){
//     return [...a, element]
// }

// console.log(array)
// // [1, 2, 3, 4] 
// console.log(addElementPure(array, 5))
// // [1, 2, 3, 4, 5] → A new array

// // A function is only pure if it returns immutable (unchageable) values. Therefore, if we pass a const variable to a function, the function will still be a pure function

const person = {
    name: "Phil",
    friends: ["Simon", "Caleb"],
}

// impure function
function addFriend(friendName){
    person.friends.push(friendName)
}

function addFriendPure(p, friendName){
    return {...p, friends: [...p.friends, friendName]}
}

const newFriendObject = addFriendPure(person, "Ricky")
console.log(newFriendObject.friends[2])






// Pure function
/*
function addFriendPure(p, friendName){
    return {...p, friends: [...p.friends, friendName]}
}
console.log(person)
// ['Simon', 'Caleb']
console.log(addFriendPure(person, "Bobby"))
// ['Simon', 'Caleb', 'Bobby']
*/




