let x = Math.PI/2;
let sen = 0;

for(let k = 0; k <= 10; k++){
    calcularfact()
    let ope = Math.pow(-1,k)*(Math.pow(x,2*k+1)/calcularfact(2*k+1))
    sen += ope
    console.log(ope)
}

function calcularfact(n){
    let fact = 1
    for(let i = 1; i <= n; i++){
          fact = i * fact
    }
    return fact
}