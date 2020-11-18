let k = 0, i;
let ns = 2;
let n = [];

do{
  let l = 0;
    for(i = 1; i <= ns; i++){
    if(ns%i === 0){l++;}
    }
    if(l <= 2){
    n[k] = ns;
    k++;
    }
    ns++;
} while(k <= 9);
console.log(n);