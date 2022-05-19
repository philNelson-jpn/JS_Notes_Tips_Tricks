const inputElement = document.getElementById("equation")
const outputElement = document.getElementById("results")
const form = document.getElementById("equation-form")

// Get a digit that is surrounded by any amount of white space on both sides that has a / or * inbetween (checks for division or multiplication) \S takes into account negative numbers and very large numbers (just \d only takes in digits)
const MULTIPLY_DIVIDE_REGEX = /(?<operand1>\S+)\s*(?<operation>[\/\*])\s*(?<operand2>\S+)/
// Repeat for addition and subtraction
// include the lookback (?<!e) to check for scientific notation output that returns - and ignores it
const ADD_SUBTRACT_REGEX = /(?<operand1>\S+)\s*(?<operation>(?<!e)[\-\+])\s*(?<operand2>\S+)/
// Repeat for parenthesis && exponent
const PARENTHESIS_REGEX = /\((?<equation>[^\(\)]*)\)/
const EXPONENT_REGEX = /(?<operand1>\S+)\s*(?<operation>\^)\s*(?<operand2>\S+)/

form.addEventListener("submit", e => {
    e.preventDefault()

    const result = parse(inputElement.value)
    outputElement.textContent = result
})

function parse(equation){
    if (equation.match(PARENTHESIS_REGEX)) {
        const subEquation = equation.match(PARENTHESIS_REGEX).groups.equation
        const result = parse(subEquation)
        const newEquation = equation.replace(PARENTHESIS_REGEX, result)
        return parse(newEquation)
      } else if (equation.match(EXPONENT_REGEX)) {
        const result = handleMath(equation.match(EXPONENT_REGEX).groups)
        const newEquation = equation.replace(EXPONENT_REGEX, result)
        return parse(newEquation)
      } else if (equation.match(MULTIPLY_DIVIDE_REGEX)){
        const result = handleMath(equation.match(MULTIPLY_DIVIDE_REGEX).groups)
        // replace the result of division/multiplication as the new number to be added/subtracted from any remaining numbers in the equation (2 + 2 * 6 will be replaced with 2 + 12)
        const newEquation = equation.replace(MULTIPLY_DIVIDE_REGEX, result)
        return parse(newEquation)
    }   else  if (equation.match(ADD_SUBTRACT_REGEX)){
        const result = handleMath(equation.match(ADD_SUBTRACT_REGEX).groups)
        const newEquation = equation.replace(ADD_SUBTRACT_REGEX, result)
        return parse(newEquation)
    }
    else {
        return parseFloat(equation)
        // return NaN if letters are used in input
    }
}

function handleMath( { operand1, operand2, operation } ){
    const number1 = parseFloat(operand1)
    const number2 = parseFloat(operand2)

    switch(operation){
        case '*':
            return number1 * number2
        case '/':
            return number1 / number2 
        case '+':
            return number1 + number2
        case '-':
            return number1 - number2     
        case "^":
            return number1 ** number2                              
    }
}