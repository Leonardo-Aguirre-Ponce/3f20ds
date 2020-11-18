let i;
let ns = 2; 
let k = 1;
let n = prompt('Cuántos números primos necesitas?');

do{
  let l = 0;
    for(i = 1; i <= ns; i++){
    if(ns%i === 0){l++;}
    }
    if(l <= 2){
    console.log(ns);
    k++;
    }
    ns++;
} while(k <= n);