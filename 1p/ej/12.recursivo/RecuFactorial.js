let n = 5;

console.log(calcularfact(n));

function calcularfact(fact){
    if(fact === 0){
        return 1;
    }
    fact = fact*calcularfact(fact-1);
    return fact;
}