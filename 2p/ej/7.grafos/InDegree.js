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
    addEdge(node1, node2){
        if(this.adjmatrix[this.vertx.indexOf(node1)][this.vertx.indexOf(node2)] !== 1){
            this.adjmatrix[this.vertx.indexOf(node1)][this.vertx.indexOf(node2)] = 1;
            this.sizeOfedges++;
            return this.adjmatrix;
        }else{
            this.adjmatrix[this.vertx.indexOf(node1)][this.vertx.indexOf(node2)]++;
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
    inDegree(nodo){
        let index = this.vertx.indexOf(nodo);
        let sum = 0;
        for(let i = 0; i < this.sizeOfvertex; i++){
            sum += this.adjmatrix[i][index];
        }
        if(this.adjmatrix[index][index] > 0){
            sum += this.adjmatrix[index][index];
        }
        return sum;
    }
}

let graf = new Grafo();
graf.addVertex(5);
graf.addVertex(4);
graf.addVertex(7);
graf.addVertex(9);
graf.addVertex(8);
graf.addVertex(6);
graf.addEdge(5, 4);
graf.addEdge(9, 5);
graf.addEdge(4, 7);
graf.addEdge(9, 4);
graf.addEdge(8, 9);
graf.addEdge(6, 4);
graf.fill();
console.log(graf.adjmatrix);
console.log('inDegree del vertice indicado: '+graf.inDegree(4));