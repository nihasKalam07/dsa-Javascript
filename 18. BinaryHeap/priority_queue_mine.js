class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

// PriorityQueue implemented as MinBinaryHeap
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push(new Node(val, priority));
    this.bubbleUp();
    this.printQueue();
    return this.values;
  }

  // Lesser number gives more priority. That is 1 has more priority than 2.
  bubbleUp() {
    let currentIdx = this.values.length - 1;
    let currentItemPriority = this.values[currentIdx].priority;
    let parentIdx = Math.floor(Math.abs(currentIdx - 1) / 2);
    let parentItemPriority = this.values[parentIdx].priority;

    while (currentItemPriority < parentItemPriority) {
      this.swap(parentIdx, currentIdx);
      currentIdx = parentIdx;
      currentItemPriority = this.values[currentIdx].priority;
      parentIdx = Math.floor(Math.abs(currentIdx - 1) / 2);
      parentItemPriority = this.values[parentIdx].priority;
    }
  }

  swap(currentIndex, parentIndex) {
    let temp = this.values[currentIndex];
    this.values[currentIndex] = this.values[parentIndex];
    this.values[parentIndex] = temp;
  }

  dequeue() {
    this.printQueue();
    if (this.values.length === 0) return undefined;
    //replace min priority value(top element) with the last element
    let min = this.values[0];
    let lastEle = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = lastEle;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    // sink down the new top element. Smaller on top.
    let currentIndex = 0;
    let currentPriorityValue = this.values[0].priority;
    const length = this.values.length;

    let leftChildIdx = 2 * currentIndex + 1;
    let rightChildIdx = 2 * currentIndex + 2;

    let leftChildPriority = this.values[leftChildIdx]
      ? this.values[leftChildIdx].priority
      : undefined;
    let rightChildPriority = this.values[rightChildIdx]
      ? this.values[rightChildIdx].priority
      : undefined;

    while (
      currentPriorityValue > rightChildPriority ||
      currentPriorityValue > leftChildPriority
    ) {
      if (
        leftChildPriority > rightChildPriority ||
        (leftChildPriority === undefined && rightChildPriority !== undefined)
      ) {
        this.swap(currentIndex, rightChildIdx);
        currentIndex = rightChildIdx;
      } else if (
        leftChildPriority < rightChildPriority ||
        (rightChildPriority === undefined && leftChildPriority !== undefined)
      ) {
        this.swap(currentIndex, leftChildIdx);
        currentIndex = leftChildIdx;
      }
      leftChildIdx = 2 * currentIndex + 1;
      rightChildIdx = 2 * currentIndex + 2;
      leftChildPriority = this.values[leftChildIdx]
        ? this.values[leftChildIdx].priority
        : undefined;
      rightChildPriority = this.values[rightChildIdx]
        ? this.values[rightChildIdx].priority
        : undefined;
    }
  }

  printQueue() {
    console.log("length", this.values.length);
    for (let node of this.values) {
      console.log(node.val, node.priority);
    }
  }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);
ER.printQueue();
