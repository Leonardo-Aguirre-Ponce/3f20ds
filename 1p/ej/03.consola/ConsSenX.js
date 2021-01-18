let sen = 0
let n = prompt('Cuál es el valor de n?')
let x = prompt('Cuál es el valor de x?')

for(k = 0; k <= n; k++){
    calcularfact()
    ope = Math.pow(-1,k)*(Math.pow(x,2*k+1)/calcularfact(2*k+1))
    sen += ope
    console.log(ope)
}

function calcularfact(n){
    let fact = 1
    for(i = 1; i <= n; i++){
          fact = i * fact
    }
    return fact
}