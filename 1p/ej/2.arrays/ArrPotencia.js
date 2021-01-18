let cons = 3;
let ns = [];
for (k = 1; k <= 10; k++){
    ns[k] = Math.pow(cons,k)
}
ns.shift()
console.log(ns)