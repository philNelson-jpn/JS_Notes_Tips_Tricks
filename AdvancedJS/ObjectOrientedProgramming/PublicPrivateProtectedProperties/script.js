class Person {
    constructor(name){
        this.name = name
    }
}

// Change our Janitor class to use private/protected properties/methods

class Janitor extends Person {
    constructor(name, numberOfMops){
        super(name)
        this.numberOfMops = numberOfMops
    }

    // private properties w/ # 
    // protected properties w/ _
    _cleaningProductCount = 10

    clean(){
        console.log(`I just cleaned the whole freakin school with ${this.numberOfMops} mops and ${this._cleaningProductCount} cleaning products biatch!`)
    }
}

class SuperJanitor extends Janitor {
    _cleaningProductCount = 1001
}

const janitor2 = new SuperJanitor("Phillis", 20)
console.log(janitor2.clean())