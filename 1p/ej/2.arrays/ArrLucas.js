let res = []; 
let pn = 2;
let sn = 1;
res[0] = pn
res[1] = sn

for(k = 2; k <= 9; k++){
    res[k] = pn + sn;
    pn = sn;
    sn = res[k];
}
console.log(res)