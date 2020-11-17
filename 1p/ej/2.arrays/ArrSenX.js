let x = Math.PI/2;
let sen = 0; 
vectsen = [] 

for(k = 0; k <= 10; k++){
    calcularfact()
    semi = Math.pow(-1,k)*(Math.pow(x,2*k+1)/calcularfact(2*k+1))
    sen += semi
    vectsen[k] = sen
    console.log(vectsen[k])
}

function calcularfact(n){
    let fact = 1
    for(i = 1; i <= n; i++){
          fact = i * fact
    }
    return fact
}