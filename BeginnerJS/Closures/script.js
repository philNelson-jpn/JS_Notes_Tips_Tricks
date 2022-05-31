function closure(variable){
    return function func(variable2){
        console.log(variable)
        console.log(variable2)
    }
}

const a = closure(1)
a(2)

