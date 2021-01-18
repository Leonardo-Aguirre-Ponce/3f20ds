let hri = 10;
let hrf = 2500;
console.log('En 2500 hrs serán las', modular(),'hrs');

function modular(){
    let sumhrs = hrf + hri;
    let modulo = sumhrs % 24;
    return modulo;
}