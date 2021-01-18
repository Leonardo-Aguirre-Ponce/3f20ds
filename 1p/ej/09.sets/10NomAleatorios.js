let nset = new Set(), vald = [];

while (nset.size < 10) {
    index = funValid();
    nomb = 'nombere';
    aleat = nomb + index;
    nset.add(aleat);   
}
function funValid() {
    do {
        x = Math.round(Math.random() * 10);

    } while (vald.indexOf(x) !== -1);
    vald.push(x);
    return x;
}
console.log(nset);