let d = 1;
let ds = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

console.log('Hace 11 días fue', modular());

function modular(){
    let lessds = 11 % 7;
    if(lessds >= d){
        let sumds = 7 + d - lessds -1;
        return ds[sumds];       
    }
    let sumds = d - lessds - 1;
    return ds[sumds];
}