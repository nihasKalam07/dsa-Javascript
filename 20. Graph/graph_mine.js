class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      return true;
    }
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(function (v) {
      if (v !== v2) {
        return v;
      }
    });
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => {
      if (v !== v1) {
        return v;
      }
    });
  }

  removeVertex(v1) {
    // remove all the edges of this particular vertex v1.
    for (let v2 of this.adjacencyList[v1]) {
      this.removeEdge(v1, v2);
    }
    // Then remove the vertex v1 itself.
    delete this.adjacencyList[v1];
  }
}

let g = new Graph();
g.addVertex("London");
g.addVertex("Dubai");
g.addVertex("Tokyo");
g.addVertex("Kochi");

g.addEdge("Dubai", "London");
g.addEdge("Kochi", "Dubai");
g.addEdge("Tokyo", "Dubai");
g.addEdge("Kochi", "London");
g.addEdge("Kochi", "Tokyo");
