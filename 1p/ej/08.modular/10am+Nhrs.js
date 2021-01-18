let hri = 10;
let hrf = 365;

console.log('En ',hrf, 'horas serán las', modular(),'hrs');

function modular(){
    let sumhrs = hrf + hri;
    let modulo = sumhrs % 24;
    return modulo;
}