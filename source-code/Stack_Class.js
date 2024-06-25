class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  //PUSH METHOD: add an item to the beginning of the stack
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  //POP METHOD: remove an item at the beginning of the stack
  pop() {
    if (!this.first) return null;

    var temp = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = temp.next;
    }
    this.size--;
    return temp.value;
  }
}

var stack = new Stack();

stack.push(100);
stack.push(200);
stack.push(300);
stack.push(400);
console.log(stack.pop()); //Output: 400
console.log(stack);