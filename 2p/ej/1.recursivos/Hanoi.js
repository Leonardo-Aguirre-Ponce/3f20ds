let t1 = 1, t2 = 2, t3 = 3, n = 4;

const hanoi = (n, org, dst, a) => {
    if(n === 1)   console.log("Cambiar el disco " + n + " de la torre " + org + " a la torre " + dst);
    else {
        hanoi(n - 1, org, a, dst);
        console.log("Cambiar el disco " + n + " de la torre " + org + " a la torre " + dst);
        hanoi(n - 1, a, dst, org);
    }
}
hanoi(n, t1, t3, t2);