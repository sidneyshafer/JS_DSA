class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//Binary Search Tree Class
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  //INSERT METHOD: inserting a node into a binary search tree
  insert(value) {
    var newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;

      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  //FIND METHOD: finding a node in a binary search tree
  find(value) {
    if (this.root === null) return false;

    var current = this.root, found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  //BFS METHOD: visit each node in a BST list and return a list of all values
  breadthFirstSearch() {
    var data = [], queue = [], node = this.root;
    
    queue.push(node);
    while(queue.length) {
      node = queue.shift();
      data.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
}

var tree = new BinarySearchTree();
tree.root = new Node(10);

tree.insert(5);
tree.insert(13);
tree.insert(7);
tree.insert(2);

console.log(tree);
console.log(tree.breadthFirstSearch());