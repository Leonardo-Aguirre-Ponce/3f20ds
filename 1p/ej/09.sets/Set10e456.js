let ini = Date.now();
let eul = new Set();
let ID4 = Math.floor(10 * Math.exp(4));
let ID6 = Math.floor(10 * Math.exp(6));
let ID5 = Math.floor(10 * Math.exp(5));

    while (eul.size < ID6) {
        x = (Math.floor(Math.random() * 9999));
        eul.add(x)

        if (eul.size == ID4) {
            let end = Date.now();
            console.log((end - ini) + 'ms en posición: ' + ID4 + ' =10e4');
        }
        if (eul.size == ID5) {
            let end = Date.now();
            console.log((end - ini) + 'ms en posición: ' + ID5 + ' =10e5');
        }
        if (eul.size == ID6) {
            let end = Date.now();
            console.log((end - ini) + 'ms en posición: ' + ID6 + ' =10e6');
        }
    }