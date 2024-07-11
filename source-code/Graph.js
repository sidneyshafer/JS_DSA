class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(
            v => v !== v2
        );
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(
            v => v !== v1
        );
    }
    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length) {
            const adjacencyVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacencyVertex);
        }
        delete this.adjacencyList[vertex];
    }
}

var g = new Graph();
g.addVertex("Apple");
g.addVertex("Bread");
g.addVertex("Eggs");
g.addVertex("Grapes");
g.addVertex("Potato Chips");

g.addEdge("Apple", "Bread");
g.addEdge("Potato Chips", "Grapes");
g.addEdge("Grapes", "Eggs");
g.addEdge("Eggs", "Bread");
g.addEdge("Apple", "Grapes");
// g.removeEdge("Eggs", "Bread");

g.removeVertex("Apple");

console.log(g);