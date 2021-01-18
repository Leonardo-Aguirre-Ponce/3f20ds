let nset = new Set(), vald = [];
let iter = Math.floor(Math.random()*(11-1)+1);

while (nset.size < iter) {
    valor = funValid();
    nomb = 'nombre';
    aleat = nomb + valor;
    nset.add(aleat);   
}
function funValid() {
    do {
        x = Math.round(Math.random() * 10);

    } while (vald.indexOf(x) !== -1);
    vald.push(x);
    return x;
}
console.log(nset);