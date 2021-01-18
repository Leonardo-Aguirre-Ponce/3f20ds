let n = [0]

for (let k = 1; k <= 10; k++){
      n[k] = Math.pow(-1,k)*(2*k-1);
}
    n.shift();
    console.log(n);