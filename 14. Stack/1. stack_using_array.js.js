class Stack {
  constructor() {
    this.array = [];
  }

  push(val) {
     this.array.push(val);
  }

  pop() {
    return this.array.pop();
  }
}
