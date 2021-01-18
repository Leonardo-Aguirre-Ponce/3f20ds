class Nodo{
    constructor(data){
        this.data = data;
        this.children = [];
    }
}

class Árbol{
    constructor(){
        this.raíz = null;
    }
    addNode(dato, parentNode){
        let nodo = new Nodo(dato);
        let padre = parentNode ? this.BFS(parentNode) : null;

        if(padre){
            padre.children.push(nodo);
        }else{
            if(!this.raíz){
                this.raíz = nodo;
            }else{
                return 'Ese nodo ya existe';
            }
        }
    }
    BFS(dato){
        let cola = [this.raíz];
        let _node = null;

        this.recorrerBFS((nodo) => {
          if (nodo.data == dato)
            _node = nodo;
        })
    
        return _node;
    }
    recorrerBFS(cb){
        let cola = [this.raíz];
        while(cola.length){
            let nodo = cola.shift();
            if(cb){
                cb(nodo)
            }
            for(let i = 0; i < nodo.children.length; i++){
                cola.push(nodo.children[i]);
            }
        }
    }
}

let plant = new Árbol();
plant.addNode('a');
plant.addNode('b', 'a');
plant.addNode('c', 'a');
plant.addNode('d', 'b');
plant.addNode('e', 'b');
plant.addNode('f', 'c');
plant.addNode('g', 'c');
plant.recorrerBFS((nodo) => {console.log('Nodo actual: ', nodo)});