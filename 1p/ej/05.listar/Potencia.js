let S = [3,1,4,2,3];
    function pot(x) {
        return x.redu((k, n) => 
            k.concat(k.map(d => [n].concat(d))), [[]]);
    }
console.log(pot(S));