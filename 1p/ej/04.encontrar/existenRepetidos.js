let S = [3, 1, 4, 2, 3] 
 
for (let i = 0; i < S.length; i++) {
    for (let y = i; y < S.length; y++) {
        if (S[i] == S[y + 1]) {
            console.log('Los valores repetidos son: ',S[i]);
        }   else{
            console.log('No hay valores repetidos')
        }
    }
}