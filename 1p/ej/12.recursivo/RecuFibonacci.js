let n1 = 10;

console.log(calcularfibo(n1));

function calcularfibo(fibo){
    if(fibo === 1){
        return 0;
    }
    if(fibo === 2){
        return 1;
    }
    fibo = calcularfibo(fibo-1) + calcularfibo(fibo-2);
    return fibo;
}