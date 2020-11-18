let res, 
num = 0, 
lnum = 1;

console.log(fibo(5));
function fibo(n){
    if(n === 1){
        return num;
    }
    if(n === 2){
        return lnum;
    }
    else{
        for(let k = 1; k <= n-2; k++){
            res = num + lnum;
            num = lnum;
            lnum = res;
        }
        return res;
    }
}