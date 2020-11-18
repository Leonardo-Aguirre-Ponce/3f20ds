let nl = 10;
let prev;
let nuev = [];

for(let j = 1; j <= nl; j++){
    triang(j);
}
console.log(nuev);

function triang(count){
    for(let i = count; i <= nl; i++){
        if(i === 1){
            prev = '1';
            nuev[i-1] = '1';
            return '1';
        }  
            nuev[i-1] = prev.concat(i);
            prev = nuev[i-1];
            return;
    }
}