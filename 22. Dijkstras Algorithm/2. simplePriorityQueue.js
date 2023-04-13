class PriorityQueue {
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
    // this.values.sort(function(a, b) { return a.priority - b.priority}); This is
    // same as the above line.
    // (a, b) => { return a.priority - b.priority} same as this one.
  }
}

const p = new PriorityQueue();
p.enqueue("A", 2);
p.enqueue("B", 1);
p.enqueue("C", 5);
p.enqueue("D", 4);
p.sort();
