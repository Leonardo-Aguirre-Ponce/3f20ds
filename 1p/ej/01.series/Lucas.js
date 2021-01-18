let res;
let pn = 2;
let sn = 1;
console.log(pn)
console.log(sn)
for(k = 1; k <= 10; k++){
    res = pn + sn;
    pn = sn;
    sn = res;
    console.log(res)
}