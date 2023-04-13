class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
    //{ node: v2, weight } this is similar to { node: v2, weight: weight }
  }

  findShortestPath(start, finish) {
    //create distance object
    //create pq
    // create previous object
    let distanceObj = {};
    let pq = new PriorityQueue();
    let previousObj = {};
    for (const v in this.adjacencyList) {
      if (v === start) {
        distanceObj[v] = 0;
        pq.enqueue(v, 0);
      } else {
        distanceObj[v] = Infinity;
        pq.enqueue(v, Infinity);
      }
      previousObj[v] = null;
    }

    //loop thorgh the pq
    // get the children. check its distance from starting vertex.
    // if the distance < current distance, then update the previous
    //  and distance value and enqueue the pq

    let smallest;
    while (pq.values.length > 0) {
      smallest = pq.dequeue().val;
      if (smallest === finish) break;
      let neighbours = this.adjacencyList[smallest];
      for (const neighbour of neighbours) {
        // calculating distance from the neighboring node to the start.
        const newDistanceFromStart = distanceObj[smallest] + neighbour.weight;
        let neighbourNode = neighbour.node;
        if (newDistanceFromStart < distanceObj[neighbourNode]) {
          previousObj[neighbourNode] = smallest;
          distanceObj[neighbourNode] = newDistanceFromStart;
          pq.enqueue(neighbourNode, newDistanceFromStart);
        }
      }
    }

    // Get the shortest path from the previousObj
    let shortestPath = [];
    let currentNode = finish;
    while (currentNode) {
      shortestPath.push(currentNode);
      currentNode = previousObj[currentNode];
    }

    console.log("distances", distanceObj);
    return shortestPath.reverse();
  }
}

// SimplePriorityQueue uses sort method. So time complexity is O(N*log N)
class SimplePriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

// PriorityQueue based on Binary heap. Time complexity is O(log N)
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

let g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);
