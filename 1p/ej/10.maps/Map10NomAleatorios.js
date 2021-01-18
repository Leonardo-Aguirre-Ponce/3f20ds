let ArrMAP = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], vald = [];

let n = ArrMAP.map(function () {
    return 'nombre' + funValid();
})

function funValid() {
    do {
        x = Math.round(Math.random() * 10);

    } while (vald.indexOf(x) !== -1);
    vald.push(x);
    return x;
}

console.log(n);