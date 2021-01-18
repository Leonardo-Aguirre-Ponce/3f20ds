let fact = [1]

calcularfact()

function calcularfact(){
    for(k = 1; k <= 9; k++){
        fact[k] = k * fact[k-1]
    }
}

console.log(fact)