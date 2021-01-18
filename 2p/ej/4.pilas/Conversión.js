const convr = (n, b) => {
    let pila = [], result = [];
    while(n > 0){
        pila.push(n % b);
        n = Math.floor(n / b);
    }
    while(pila.length > 0){ result.push(pila.pop()); }
    return result.join('');
}
const num = 20, base = 2;
console.log(convr(num, base));