const array = [1, 2, 3, 4, 5]

// Double each element of the array, original way
// const newArray = []
// for(let i = 0; i < array.length; i++){
//     newArray.push(array[i] * 2)
// }

// Double each element of the array, with higher order functions
const newArray = array.map(element => element * 2)

console.log(newArray)
// [2, 4, 6, 8, 10]


