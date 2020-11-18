let x = [], cant = 100000, max = 99999, min = 0, t = 0, inv;

for(let k = 0; k < 1; k++){
    random();
    let t1 = new Date().getTime();
    console.log(ordenar());
    let t2 = new Date().getTime();
    t = t2-t1;    
}

console.log('Inversiones promedio son: ',inv);
console.log('Promedio de tiempo de ejecución: ',t,'ms');
console.log('¿Se puede mejorar el tiempo de ejecución? Sí, con un mejor método de ordenamiento');

function random(){
    for (y = 0; y < cant; y++){
        x[y] = Math.floor(Math.random() * max + min);
    }
    return x;
}

function mov(n, ns){
    let nl = x[n];
    x[n] = x[ns];
    x[ns] = nl;
}

function ordenar(){
    inv = 0;
    for(let i = 0; i < cant; i++){
        for(let j = 0; j < cant-1; j++){
            if(x[j] > x[j+1]){
                mov(j, j+1);
                inv++
            }
            else continue;
        }
    }
    return x;
}