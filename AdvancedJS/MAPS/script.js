/*
const CURRENCY_MAP = {
    "United States": "USD",
    India: "Rupee",
}

const currency = CURRENCY_MAP["India"]

console.log(currency)
*/
// OR
/*
const CURRENCIES = [
    { name: "USD", country: "United States" },
    { name: "Rupee", country: "India"}
]

const currency = CURRENCIES.find(currency => currency.country === "India").name

console.log(currency)
*/

// MAPS

const currencyMap = new Map([
    ["United States of America", "USD"],
    ["India", "Ruppee"],
    ["Japan", "Yen"],
])

currencyMap.forEach((value) => {
    console.log(value)
})
// USD Ruppee Yen

console.log(currencyMap.get("India"))
// Ruppee

currencyMap.set("Mexico", "Peso")
console.log(currencyMap.get("Mexico"))
// Peso

console.log(currencyMap.has("Mexico"))
// true

currencyMap.delete("India")
console.log(currencyMap)
