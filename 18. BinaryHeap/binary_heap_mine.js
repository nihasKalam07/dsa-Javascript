class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
    return this.values;
  }

  bubbleUp() {
    let currentIndex = this.values.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    let currentValue = this.values[currentIndex];
    let parentValue = this.values[parentIndex];

    while (currentValue > parentValue) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
      currentValue = this.values[currentIndex];
      parentValue = this.values[parentIndex];
    }
  }

  swap(currentIndex, parentIndex) {
    let temp = this.values[currentIndex];
    this.values[currentIndex] = this.values[parentIndex];
    this.values[parentIndex] = temp;
  }

  // Swap the last element with the first element(largest element in case of max heap).
  // Then sink down the new first element(swap it with largest of
  // left or right children until the left and right becomes smaller than
  // the parent node)
  extractMax() {
    console.log("before", this.values);
    if (this.values.length === 0) return undefined;
    //replace max value(top element) with the last element
    let max = this.values[0];
    let lastEle = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = lastEle;
      this.sinkDOwn();
    }
    console.log("after", this.values);
    return max;
  }

  sinkDOwn() {
    // sink down the new top element
    let currentIndex = 0;
    let currentValue = this.values[0];
    const length = this.values.length;

    let leftChildIdx = 2 * currentIndex + 1;
    let rightChildIdx = 2 * currentIndex + 2;

    let leftChild = this.values[leftChildIdx];
    let rightChild = this.values[rightChildIdx];

    while (currentValue < rightChild || currentValue < leftChild) {
      if (
        leftChild >= rightChild ||
        (leftChild !== undefined && rightChild === undefined)
      ) {
        this.swap(currentIndex, leftChildIdx);
        currentIndex = leftChildIdx;
      } else if (
        leftChild < rightChild ||
        (rightChild !== undefined && leftChild === undefined)
      ) {
        this.swap(currentIndex, rightChildIdx);
        currentIndex = rightChildIdx;
      }
      leftChildIdx = 2 * currentIndex + 1;
      rightChildIdx = 2 * currentIndex + 2;
      leftChild = this.values[leftChildIdx];
      rightChild = this.values[rightChildIdx];
    }
  }
}

class MinBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleDown();
    return this.values;
  }

  bubbleDown() {
    let currentIndex = this.values.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    let currentValue = this.values[currentIndex];
    let parentValue = this.values[parentIndex];

    while (currentValue < parentValue) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
      currentValue = this.values[currentIndex];
      parentValue = this.values[parentIndex];
    }
  }

  swap(currentIndex, parentIndex) {
    let temp = this.values[currentIndex];
    this.values[currentIndex] = this.values[parentIndex];
    this.values[parentIndex] = temp;
  }
}

let max = new MaxBinaryHeap();
max.insert(50);
max.insert(40);
max.insert(35);
max.insert(25);
max.insert(20);
max.insert(45);

let min = new MinBinaryHeap();
min.insert(50);
min.insert(40);
min.insert(35);
min.insert(25);
min.insert(20);
min.insert(45);

console.log(max.values);
console.log(min.values);
