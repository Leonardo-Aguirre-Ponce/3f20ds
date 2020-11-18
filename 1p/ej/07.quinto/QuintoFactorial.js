let i;

console.log(calcularfactorial(5));

function calcularfactorial(n){
    let fact = 1;
    if(n === 0){
        return 1;
    }
    else{        
        for(i = 1; i <= n; i++){
         fact = i * fact;
        }
        return fact;
    }
}