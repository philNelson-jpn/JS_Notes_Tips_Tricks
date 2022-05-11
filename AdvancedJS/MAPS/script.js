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

/*
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
// 0: {"United States of America" => "USD"}
// 1: {"Japan" => "Yen"}
// 2: {"Mexico" => "Peso"}
*/

const items = [
    {
        id: 1,
        name: "Test",
        description: "desc",
    },
    {
        id: 2,
        name: "Test2",
        description: "desc2",
    },
    {
        id: 3,
        name: "Test3",
        description: "desc3",
    },        
]

function getItemArray(id){
    return items.find(item => item.id === id)
}

console.log(getItemArray(2))

const itemsMap = new Map([
    [1, {id: 1, test: "test1", description: "description1"}],
    [2, {id: 2, test: "test2", description: "description2"}],
    [3, {id: 3, test: "test3", description: "description3"}]          
])

function getItem(id) {
    return itemsMap.get(id)
}

console.log(getItem(2))