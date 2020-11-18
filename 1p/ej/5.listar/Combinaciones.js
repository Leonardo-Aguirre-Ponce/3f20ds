let S = [3, 1, 4, 2, 31];
let r = 2;

console.log(comb(S,r));

function comb(conj, cantsub){
    let res = [];
    if(cantsub === 0 || cantsub > conj.length){
        return [];
    }
    if(conj.length === cantsub){
        return [conj];
    }
    if(cantsub === 1){
        const subconjunto = [];
        for(let k = 0; k < conj.length; k++){
            subconjunto[k] = [conj[k]];
        }
        return subconjunto;
    }
    for(let i = 0; i < conj.length; i++){
        const valact = conj[i];
        let lim = cantsub-1;
        const resto = conj.slice(i+1);
        const combs = comb(resto, lim);
        for(let j = 0; j < combs.length;j++){
            const comb = [valact].concat(combs[j]);
            res.push(comb);
        }
    }
    return res;
}