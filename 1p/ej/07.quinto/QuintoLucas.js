let res = 0;
console.log(luc(5));

function luc(n){
    let res, pn = 2, sn = 1;
    if(n === 1){
        return pn;
    }
    if(n === 2){
        return sn;
    }
    else{
        for(let k = 1; k <= n-2; k++){
            res = pn + sn;
            pn = sn;
            sn = res;
        }
        return res;
    }
}