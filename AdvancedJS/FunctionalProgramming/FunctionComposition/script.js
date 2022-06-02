// Combine multiple functions into one

const array = [1, 2, 3, 4, 5]

function double(element){
    return element * 2
}

function plusOne(element){
    return element + 1
}

console.log(array.map(double))
// [2, 4, 6, 8, 10]

console.log(array.map(double).map(plusOne))
// [3, 5, 7, 9, 11]

// Function composition is "backwards"
// double is executed first, then plusOne
function doubleThenAddOne(element){
    return plusOne(double(element))
}


console.log(array.map(doubleThenAddOne))
// [3, 5, 7, 9, 11]

