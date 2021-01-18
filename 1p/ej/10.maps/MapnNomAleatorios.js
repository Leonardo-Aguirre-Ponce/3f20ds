let arrMAp = [], vald = [];

let IDK = Math.floor(10 * Math.exp(6));

for (let i = 0; i <= IDK; i++) {
    arrMAp.push((Math.floor(Math.random() * 9999)));
}

let n = arrMAp.map(function(x) {
    return 'nombre' + x;
})
console.log(n);