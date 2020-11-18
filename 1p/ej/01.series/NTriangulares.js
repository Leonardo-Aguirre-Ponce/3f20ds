let nl = 10; 
let prev;
for(let j = 1; j <= nl; j++){
    console.log(triang(j));
}

function triang(count){
for(let i = count; i <= nl; i++){
if(i === 1){
    prev = '1';
    return '1';
}  
    let nuev = prev.concat(i);
    prev = nuev;
    return nuev;
}
}