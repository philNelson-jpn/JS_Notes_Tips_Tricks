
const FileSystem = require('./FileSystem')

module.exports = class Account{
    constructor(name){
        this.name = name
    }
// declare private variables (unchangeable)
    #name
    #balance
// Create getters to READ private variables (not change them)
    get name(){
        return this.#name
    }

    get balance(){
        return this.#balance
    }

    // Get the file path from the accounts folder
    get filePath(){
        return `accounts/${this.name}.txt`
    }

    async #load(){
        this.#balance = parseFloat(await FileSystem.read(this.filePath))
    }

    static async find(accountName){
        const account = new Account(accountName)
        try {
            await account.#load()
            return account
        } catch (err) {
            return
        }
    }
}