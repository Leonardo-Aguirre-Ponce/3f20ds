let x = prompt('Cuál es el valor de x?');
let n = prompt('Cuántos resultados necesitas?');
let op1, op2, res;

for (let i = 1; i <= n; i++) {
    op1 = Math.pow(-1,i+1);
    op2 = Math.pow(x-1,i);
    res = ((op1/i)*w);
    console.log(res);
}