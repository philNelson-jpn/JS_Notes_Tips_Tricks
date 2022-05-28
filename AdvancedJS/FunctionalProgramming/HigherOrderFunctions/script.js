

// Double each element of the array, with a for loop
// const newArray = []

// for(let i = 0; i < array.length; i++){
//     newArray.push(array[i] * 2)
// }

// Double each element of the array, with higher order functions

// const newArray = array.map(element => element * 2)
// console.log(newArray)
// [2, 4, 6, 8, 10]

// Custom higher order function that doubles every other number in an array:
/*
const array = [1, 2, 3, 4, 5]

function everyOtherMap(a, func){
    return a.map((element, i) => {
        if(i % 2 === 0) return func(element)
        return element
    })
}

const newArray = everyOtherMap(array, element => element * 2)

console.log(newArray)
*/

// Custom higher order function that groups people by the amount of people friends have:

const people = [
    {
        name: "Phil",
        friends: ["Simon", "Caleb"]
    },
    {
        name: "Jim",
        friends: ["Joey"]
    },
    {
        name: "Carol",
        friends: ["Jimmy", "Johnson"]
    }
]

function groupBy(array, func){
    return array.reduce((grouping, element) => {
        const key = func(element)
        if(grouping[key] == null) grouping[key] = []
        grouping[key].push(element)
        return grouping
    }, {})
}

const results = groupBy(people, person => person.friends.length)
console.log(results)
