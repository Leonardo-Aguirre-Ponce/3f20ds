let ini = Date.now(), ArrMAP = [], vald = [];

let ID4 = Math.floor(10 * Math.exp(4));
let ID6 = Math.floor(10 * Math.exp(6));
let ID5 = Math.floor(10 * Math.exp(5));

for (let i = 0; i <= ID6; i++) {
    ArrMAP.push((Math.floor(Math.random() * 9999)));
}
let a = ArrMAP.map(function (x,index) {
    if (index == ID4) {
        let end = Date.now();
        console.log((end-ini) + 'ms en posición: ' + ID4 + ' =10e4');
    }
    if (index == ID5) {
        let end = Date.now();
        console.log((end-ini) + 'ms en posición: ' + ID5 + ' =10e5');
    }
    if (index == ID6) {
        let end = Date.now();
        console.log((end-ini) + 'ms en posición: ' + ID6 + ' =10e6');
    }
})