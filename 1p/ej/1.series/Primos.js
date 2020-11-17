let n = 1, i;
let ns = 2;
do{
  let l = 0;
    for(i = 1; i <= ns; i++){
        if(ns%i === 0){
            l++;
        }
    }
    if(l <= 2){
        console.log(ns);
        n++;
      }
      ns++;
} while(n <= 10);