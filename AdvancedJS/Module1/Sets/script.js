// An extension of arrays
// no bracket notation (no indeces)
// Sets create an array-like set that can only contain unique values

const set = new Set([1, 2, 3, 4, 3, 4, 2])
console.log(set)
// Set(4) {1, 2, 3, 4}
set.delete(3)
console.log(set)

// Create an function that removes duplicates from an array:
function removeDups(array){
    return new Set([...array])
}

console.log(removeDups([1, 2, 3, 4, 2, 4, 5, 2, 3]))
// Set(5) {1, 2, 3, 4, 5}