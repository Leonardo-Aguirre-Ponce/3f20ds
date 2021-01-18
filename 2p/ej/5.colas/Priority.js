class Paciente{
    constructor(nombre, código){
        this.nombre = nombre;
        this.código = código;
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
        let priority = this.dataStore[0].código;
        for (let i = 1; i < this.dataStore.length; ++i){
            if (this.dataStore[i].código < priority){
            priority = i;
            }
        }
        return this.dataStore.splice(priority, 1);
    }
    front(){
        return this.dataStore[0];
    }
    back(){
        return this.dataStore[this.dataStore.length - 1];
    }
    toString() {
        let retStr = "";
        for (let i = 0; i < this.dataStore.length; ++i){
            retStr += this.dataStore[i].nombre + " Código: "+ this.dataStore[i].código + "\n";
        }
        return retStr;
    }
    isEmpty(){
        if(this.dataStore.length === 0){
            return true;
        }else{
            return false;
        }
    } 
}

const pacientes = ['Ponce', 'Vega', 'Torres', 'Martinez', 'Aguirre'];
const codigos = [5, 4, 6, 1, 1];
let cola = new Queue()
for(let i = 0; i < pacientes.length; i++){
    let paciente = new Paciente(pacientes[i], codigos[i]);
    cola.enQueue(paciente);
}

console.log(cola.toString());
for(let i = 0; i < 3; i++){
    let visto = cola.deQueue();
    console.log("Paciente actualmente atendido: " + visto[0].nombre);
    console.log("Pacientes en espera: ");
    console.log(cola.toString());
}