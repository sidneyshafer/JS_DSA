//Build a Queue from scratch using JS Classes

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  //ENQUEUE METHOD: add an item to the end of a queue
  enqueue(val) {
    var newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode
    }
    return ++this.size;
  }
  //DEQUEUE METHOD: remove an item from the beginning of the queue
  dequeue() {
    if (!this.first) return null;

    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

var q = new Queue();

q.enqueue(100);
q.enqueue(200);
q.enqueue(300);
console.log(q.enqueue(400));
console.log(q.dequeue());
console.log(q);