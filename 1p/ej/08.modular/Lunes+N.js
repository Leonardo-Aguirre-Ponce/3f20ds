let d = 1;
let ds = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
let n = 111;

console.log('En ',n, 'días será', modular());

function modular(){
    let sumds = n + d - 1;
    let modulo = sumds % 7;
    return ds[modulo];
}