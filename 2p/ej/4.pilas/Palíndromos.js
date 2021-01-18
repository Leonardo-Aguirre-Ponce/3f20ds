const palínd = () => {
    let cadena=prompt("Escribe una palabra").toLowerCase();
    for (let i=0;i<cadena.length;i++){ 
         if(cadena[i]!=cadena[cadena.length-i-1]) return false;}
    return true; }
if(palínd()) alert("Es palíndromo");
else alert("No es palíndromo");