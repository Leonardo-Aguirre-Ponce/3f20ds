let nset = new Set(), vald = [];

while (nset.size < 10) {
    index = nset.size;
    nomb = 'nombre';
    nombre = nomb + index;
    nset.add(nombre);   
}
console.log(nset);