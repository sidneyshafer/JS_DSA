// Define a Node
// - piece of data (val)
// - reference to next node (next)

//Create a Node Object
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// bad example of linked list
// var first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you?");

// console.log(first);

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //insert node at end of list
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  //remove the last node from list
  pop() {
    if (!this.head) return undefined;
    var curr = this.head;
    var newTail = curr;
    while(curr.next) {
      newTail = curr;
      curr = curr.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return curr;
  }
  //remove current head node from list and shift head to next node
  shift() {
    if (!this.head) return undefined;
    var currHead = this.head;
    this.head = currHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currHead;
  }
  //add node to beginning of list
  unshift(val) {
    var newNode = new Node(val);
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
  //return an item/node at a given index
  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    var counter = 0;
    var curr = this.head;
    
    while (counter != idx) {
      curr = curr.next;
      counter++;
    }
    return curr;
  }
  //change value of node based on position in list
  set(idx, val) {
    var foundNode = this.get(idx);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  //add a node to list at a specific position
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return !!this.push(val);
    if (idx === 0) return !!this.unshift(val);

    var newNode = new Node(val);
    var prev = this.get(idx - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  //remove a node from list at a specific position
  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) return this.shift();
    if (idx === (this.length - 1)) return this.pop();

    var prev = this.get(idx - 1);
    var removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }
  //reverse list
  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;

    var prev = null;
    var next;

    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  //prints all values in list in order as an array
  print() {
    var arr = [];
    var curr = this.head;
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
    console.log(arr);
  }
}

var list = new SinglyLinkedList();

list.push(100);
list.push(200);
list.push(300);
list.push(400);
// console.log(list.remove(2));
// console.log(list.insert(2, 250));
// console.log(list.insert(0, 50));
console.log(list);
list.print();
console.log(list.reverse());
list.print();

// list.push("HELLO");
// list.push("GOODBYE");
// list.push("!");

// console.log(list);
// // console.log(list.pop());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list);
// list.push(100);
// console.log(list);
// list.pop();
// console.log(list);
// list.unshift("Sidney");
// list.unshift("Allie");
// list.push("Brent");
// list.push("Lisa");
// console.log(list);
// console.log(list.get(3));
// console.log(list.get(1));
// // console.log(list.get(0));
// console.log(list.set(0, "Tj"));
// console.log(list.get(0));
// console.log(list);