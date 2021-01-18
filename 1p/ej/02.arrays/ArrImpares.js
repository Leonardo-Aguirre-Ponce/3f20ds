let n = [0]
for (k = 1; k <= 10; k++){
    n[k] = (2*k)- 1
}
n.shift()
console.log(n)