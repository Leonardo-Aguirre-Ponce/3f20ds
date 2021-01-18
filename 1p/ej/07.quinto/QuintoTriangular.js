let nl = 5, prev, nuev = 0;

for(let j = 1; j <= nl; j++){
    triangular(j);
}
console.log(nuev);
function triangular(contador){
    for(let i = contador; i <= nl; i++){
        if(i === 1){
            prev = '1';
            return '1';
        }  
            nuev = prev.concat(i);
            prev = nuev;
            return nuev;
    }
}