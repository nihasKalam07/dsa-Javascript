class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  dequeue() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    let next = currentHead.next;
    currentHead.next = null;
    this.head = next;
    this.length--;
    if (this.length === 0) this.tail = null;
    this.print();
    return currentHead.val;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentTail = this.tail;
      currentTail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
    this.print();
    return this;
  }

  print() {
    let arr = [];
    let currentNode = this.head;
    while (currentNode) {
      arr.push(currentNode.val);
      currentNode = currentNode.next;
    }
    console.log(arr);
  }
}

let queue = new Queue();
queue.enqueue("Apple");
queue.enqueue("Banana");
queue.enqueue("Mango");
queue.enqueue("Orange");
queue.enqueue("Grapes");
