class Grafo{
    constructor(){
        this.vertx = [];
        this.sizeOfvertex = 0;
        this.sizeOfedges = 0;
        this.adjmatrix = [];
    }
    addVertex(nodo){
        if(this.vertx.includes(nodo)){
            return -1;
        }
        this.vertx.push(nodo);
        this.sizeOfvertex++;
        this.adjmatrix = new Array(this.sizeOfvertex);
        for(let i = 0; i < this.sizeOfvertex; i++){
            this.adjmatrix[i] = new Array(this.sizeOfvertex);
        }
        this.fill();
        return this.vertx;
    }
    addEdge(nodo1, nodo2){
        if(this.adjmatrix[this.vertx.indexOf(nodo1)][this.vertx.indexOf(nodo2)] !== 1){
            this.adjmatrix[this.vertx.indexOf(nodo1)][this.vertx.indexOf(nodo2)] = 1;
            this.sizeOfedges++;
            return this.adjmatrix;
        }else{
            this.adjmatrix[this.vertx.indexOf(nodo1)][this.vertx.indexOf(nodo2)]++;
            this.sizeOfedges++;
            return this.adjmatrix;
        }
    }  
    fill(){
        for(let i = 0; i < this.sizeOfvertex; i++){
            for(let j = 0; j < this.sizeOfvertex; j++){
                if(this.adjmatrix[i][j] === undefined ){
                    this.adjmatrix[i][j] = 0
                }else{
                    continue;
                }
            }
        }
    }
    size(){
        return this.sizeOfvertex;
    }
}

let garf = new Grafo();
garf.addVertex(5);
garf.addVertex(4);
garf.addVertex(7);
garf.addVertex(9);
garf.addVertex(8);
garf.addVertex(6);
garf.addEdge(5, 4);
garf.addEdge(4, 5);
garf.addEdge(5, 5);
garf.addEdge(5, 5);
garf.addEdge(9, 5);
garf.addEdge(5, 9);
garf.addEdge(4, 7);
garf.addEdge(7, 4);
garf.addEdge(8, 9);
garf.addEdge(9, 8);
garf.addEdge(4, 6);
garf.addEdge(6, 4);
garf.fill();
console.log('El tamaño es: '+garf.size());
console.log(garf.adjmatrix);