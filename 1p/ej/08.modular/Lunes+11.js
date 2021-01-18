let d = 1; 
let ds = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

console.log('En 11 días será', modular());

function modular(){
    let sumds = 11 + d - 1;
    let modulo = sumds % 7;
    return ds[modulo];
}