let fact = 1, i = prompt()

calcularfact()
function calcularfact(){
    for(k = 1; k <= i; k++){
        fact = k * fact
        console.log(fact)
    }
}