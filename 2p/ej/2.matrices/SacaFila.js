class SacaFila{
    constructor(userData)
    {
        this.userData = userData;
    }
    insertar()
    {
        this.userData =  Number(prompt("Fila de la matriz:"));
        while (this.userData <  1 || this.userData > 3)
        {
            alert("La matriz es de 3x3, ingresa de nuevo un dato");
            this.userData = Number(prompt("Fila de la matriz:"))
        }
        return this.userData;
    }
    impresiondeFila(matriz)
    {
        let ind = this.userData - 1;
        console.log('Columna elegida ',this.userData,':', matriz[ind]);
    }
}

let matriz = new Array([1,2,3], [4,5,6], [7,8,9]);
let column = new SacaFila();
column.insertar();
column.impresiondeFila(matriz)