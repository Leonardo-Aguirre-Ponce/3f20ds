let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let n = x.map(function (x, index) {
    x = 'nombre';
    return x + index;
})
console.log(n);