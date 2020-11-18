let k = 1, i, 
ns = 2;

console.log(prims(5));
function prims(n){
    do{
        let l = 0;
          for(i = 1; i <= ns; i++){
              if(ns%i === 0){
                  l++;
              }
          }
          if(l <= 2){
              prim = ns;
              k++;
            }
            ns++;
      } while(k <= n);
      return prim;    
}