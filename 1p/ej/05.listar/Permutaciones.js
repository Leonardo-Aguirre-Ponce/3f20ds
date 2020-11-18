let S = [3, 1, 4, 2, 32];

console.log(permu(S));

function permu(conj){
    let res = [];
    if (conj.length === 0){
        return [];
    }
    if (conj.length === 1){
        return [conj];
    }
    for (let i = 0; i < conj.length; i++) {
        const valact = conj[i];
        const restan = conj.slice(0, i).concat(conj.slice(i + 1));
        const restantperm = permu(restan);
        for (let j = 0; j < restantperm.length; j++){
            const permu2 = [valact].concat(restantperm[j]);
            res.push(permu2);
        }
    }
    return res;
}