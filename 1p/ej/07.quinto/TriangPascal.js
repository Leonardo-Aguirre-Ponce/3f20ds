function trianPascal(n) {
    res=[[1], [1, 1]];
    for (let l=3; l<=n; l++) {
        res.push(
            [...Array(l)].map((el, i, a) =>
                i==0 || i==a.length-1 ? 1 : res[l-2][i-1]+res[l-2][i]));
    }
    return res;
} console.log(trianPascal(5));