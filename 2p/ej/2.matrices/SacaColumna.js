class SacaColumna {
    constructor(userData)
    {
        this.userData = userData;
    }
    eligirColumna()
   {
       this.userData =  Number(prompt("Columna de la matriz:"));
       while (this.userData <  1 || this.userData > 3)
       {
           alert("La matriz es de 3x3, ingresa de nuevo un dato");
           this.userData = Number(prompt("Columna de la matriz:"))
       }
       return this.userData;
   }
   sacaColumna(matriz)
   {
       let ind = this.userData -1;
       console.log('Seleccionó la columna ',this.userData,':')
       let columna = matriz.map(function(matriz)
       {
           console.log(matriz[ind]);
       });
   }
}
let matriz = [[1,2,3], [4,5,6], [7,8,9]];
let miMatriz = new SacaColumna();
miMatriz.eligirColumna();
miMatriz.sacaColumna(matriz);