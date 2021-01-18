class Dancr{
    constructor(nombre, sexo){
        this.nombre = nombre;
        this.sexo = sexo;
    }
}

class Queue{
    constructor(){
        this.dataStore = [];
    }
    enQueue(dato){
        return this.dataStore.push(dato);
    }
    deQueue(){
        return this.dataStore.shift();
    }
    front(){
        return this.dataStore[0];
    }
    back(){
        return this.dataStore[this.dataStore.length - 1];
    }
    isEmpty(){
        if(this.dataStore.length === 0){
            return true;
        }else{
            return false;
        }
    } 
}

function getDancrs(hombres, mujeres, dancers){
    let nombres = [];
    nombres = dancers;
    for(let i = 0; i < nombres.length; i++){
        nombres[i] = nombres[i].trim();
    }
    for(let i = 0; i < nombres.length; i++){
        let dancer = nombres[i].split(' ');
        let sex = dancer[0];
        let nombre = dancer[1];
        if(sex === 'F'){
            mujeres.enQueue(new Dancr(nombre, sex));
        }else{
            hombres.enQueue(new Dancr(nombre, sex));
        }
    }
}

function dance(hombres, mujeres){
    console.log('Las parejas de baile son: \n');
    while(!mujeres.isEmpty() && !hombres.isEmpty()){
        let persona = mujeres.deQueue();
        console.log('La bailarina es: ' + persona.nombre);
        persona = hombres.deQueue();
        console.log('Y su pareja es: ' + persona.nombre + '\n');
    }
}

const dancers = ['F Allison McMillan','M Frank Opitz','M Mason McMillan','M Clayton Ruff'
,'F Cheryl Ferenback','M Raymond Williams','F Jennifer Ingram','M Bryan Frazer',
'M David Durr','M Danny Martin','F Aurora Adney'];
let bailarines = new Queue();
let bailarinas = new Queue();
getDancrs(bailarines, bailarinas, dancers);
dance(bailarines, bailarinas);
if(!bailarinas.isEmpty()){
    console.log(bailarinas.front().nombre + ' está esperando bailar');
}
if(!bailarines.isEmpty()){
    console.log(bailarines.front().nombre + ' está esperando bailar');
}