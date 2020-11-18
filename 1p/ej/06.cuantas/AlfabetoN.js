let r = 20, n = 30, cant = 0;

if(r > n){
    console.log('Imposible calcular, ya que r es mayor que n.');
}
else{
    cant = calcularfact(n)/calcularfact(n-r);
    console.log(cant);
    
    function calcularfact(n){
        let fact = 1;
        for(let i = 1; i <= n; i++){
              fact = i * fact;
        }
        return fact;
    }
}