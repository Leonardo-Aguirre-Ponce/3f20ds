let n = []
for (k = 1; k <= 10; k++){
    n[k] = Math.floor(Math.random() * 10 + 1)
}
n.shift()
console.log(n)