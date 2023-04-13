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

  depthFirstRecursive(startVertex) {
    const result = [];
    const visitedVertices = {};
    const adjacencyList = this.adjacencyList;

    function visit(vertex) {
      if (!vertex) return null;
      result.push(vertex);
      visitedVertices[vertex] = true;
      for (let neighbour of adjacencyList[vertex]) {
        if (!visitedVertices[neighbour]) {
          visit(neighbour);
        }
      }
    }
    visit(startVertex, adjacencyList);
    return result;
  }

  depthFirstIterative(startVertex) {
    const result = [];
    const visitedVertices = {};
    const stack = [];
    stack.push(startVertex);
    let current;

    while (stack.length > 0) {
      current = stack.pop();
      if (!visitedVertices[current]) {
        result.push(current);
        visitedVertices[current] = true;
        this.adjacencyList[current].forEach((neighbour) => {
          stack.push(neighbour);
        });
      }
    }
    return result;
  }

  breadthFirst(startVertex) {
    const result = [];
    const visitedVertices = {};
    const queue = [startVertex];
    let current;

    visitedVertices[startVertex] = true;
    while (queue.length > 0) {
      current = queue.shift();
      result.push(current);
      this.adjacencyList[current].forEach((neighbour) => {
        if (!visitedVertices[neighbour]) {
          visitedVertices[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }
    return result;
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

// //depth first
// g.addEdge("A", "B");
// g.addEdge("A", "C");
// g.addEdge("B", "D");
// g.addEdge("C", "E");
// g.addEdge("D", "E");
// g.addEdge("D", "F");
// g.addEdge("E", "F");

//breadth first
g.addEdge("A", "B");
g.addEdge("A", "E");
g.addEdge("B", "C");
g.addEdge("B", "D");
g.addEdge("C", "D");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
