// import filesystem (fs is built into node)
const fs = require('fs')

module.exports = class FileSystem {
    static read(path){
        return new Promise((resolve, reject) => {
            fs.readFile(path, (err, data) => {
                if (err) return reject(err)
                resolve(data)
            })
        })
    }

    static write(){

    }
}