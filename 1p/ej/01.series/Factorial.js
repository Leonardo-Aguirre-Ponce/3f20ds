let fact = 1

calcularfact()

function calcularfact(){
    for(k = 1; k <= 10; k++){
        fact = k * fact
        console.log(fact)
    }
}