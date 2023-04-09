class Stack {
  constructor() {
    this.list = new SinglyLinikedList();
  }

  push(val) {
    this.list.unshift(val);
    this.print();
  }

  pop() {
    this.list.shift();
    this.print();
  }

  print() {
    let arr = [];
    let currentNode = this.list.head;
    while (currentNode) {
      arr.push(currentNode.val);
      currentNode = currentNode.next;
    }
    console.log(arr);
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinikedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    let next = currentHead.next;
    currentHead.next = null;
    this.head = next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currentHead = this.head;
      this.head = newNode;
      newNode.next = currentHead;
    }
    this.length++;
    return this;
  }
}

let stack = new Stack();
stack.push("Apple");
stack.push("Banana");
stack.push("Mango");
stack.push("Orange");
stack.push("Grapes");
