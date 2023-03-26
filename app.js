class Node {
  constructor(val, next) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      // if(!this.head)
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return;
    let currentNode = this.head;
    let previousNode = currentNode;
    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      this.tail = previousNode;
      this.tail.next = null;
      this.length--;
    }
    return currentNode;
  }

  shift() {
    if (!this.head) return;
    let currentHead = this.head;
    this.head = this.head.next;
    this.length--;
    return currentHead;
  }

  unshift(val) {
    let newNode = Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return;

    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  set(index, value) {
    let nodeAt = this.get(index);
    if (nodeAt) {
      nodeAt.val = value;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let previousNode = this.get(index - 1);
    let nextNode = previousNode.next;
    let newNode = new Node(val);
    previousNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    let prev = this.get(index - 1);
    let target = prev.next;
    let next = target.next;
    prev.next = next;
    this.length--;
    return target;
  }

  reverse() {
    this.print();

    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

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

let sll = new SinglyLinkedList();
sll.push("Shakeela");
sll.push("Maria");
sll.push("Reshma");
sll.push("Devika");

console.log("after push", sll);
console.log("reverse", sll.reverse());

// console.log(sll.pop());
// console.log(sll.pop());
// console.log(sll.pop());
// console.log(sll.pop());
// console.log(sll.pop());
// console.log(sll.pop());
// console.log("after pop", sll);

// let node = sll.get(1);
// console.log("get", node);
