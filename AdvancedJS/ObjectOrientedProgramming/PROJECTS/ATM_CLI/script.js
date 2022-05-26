// Ask for an account
// If account does not exist, ask to create account
// Ask what they want to do
// Execute command

    // View
    // Withdraw
    // Deposit

//Account Object

const Account = require('./Account')
const CommandLine = require('./CommandLine')

// Change the following to use async await
// CommandLine.ask("Which account would you like to access?").then(response => {
//     CommandLine.print(response)
// })
// ↓

async function main(){
    const accountName = await CommandLine.ask("Which account would you like to access?")

    const account = awaitAccount.find(accountName)
    if (account) {
        console.log("Found account")
    } else {
        console.log("Cannot find account")
    }
}

main()

