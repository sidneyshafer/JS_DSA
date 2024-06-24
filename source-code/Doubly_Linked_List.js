
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //PUSH METHOD: add a node to the end of a doubly linked list
  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  //POP METHOD: remove a node from the end of a doubly linked list
  pop() {
    if (!this.head) return undefined;
    
    var poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  //SHIFT METHOD: remove a node from the beginning of a doubly linked list
  shift() {
    if (this.length === 0) return undefined;

    var oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  //UNSHIFT METHOD: add a node to the beginning of a doubly linked list
  unshift(val) {
    var newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  //GET METHOD: access a node in a doubly linked list by its position
  get(idx) {
    if (idx < 0 || idx >= this.length) return null;

    var count, curr;

    if (idx <= this.length/2) {
      count = 0;
      curr = this.head;

      while (count !== idx) {
        curr = curr.next;
        count++;
      }
    } else {
      count = this.length-1;
      curr = this.tail;

      while (count !== idx) {
        curr = curr.prev;
        count--;
      }
    }
    return curr;
  }
  //SET METHOD: replacing the value of a node in a doubly linked list
  set(idx, val) {
    var foundNode = this.get(idx);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  //INSERT METHOD: add a node in a doubly linked list by a certain position
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);

    var newNode = new Node(val);
    var beforeNode = this.get(idx-1);
    var afterNode = beforeNode.next;

    beforeNode.next = newNode, newNode.prev = beforeNode;
    newNode.next = afterNode, afterNode.prev = newNode;
    this.length++;
    return true;
  }
}

var list = new DoublyLinkedList();

list.push(100);
list.push(200);
list.push(300);
list.push(400);
// list.push(500);
// list.push(600);

// list.pop();
// console.log(list.shift());
console.log(list.insert(1, 150));
console.log(list);
// console.log(list.set(1, 50));
// console.log(list.get(0));
// console.log(list.unshift(100));
// console.log(list.shift());