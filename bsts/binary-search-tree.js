class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let current = this.root;

    if (this.root === null){
      this.root = new Node(val);
      return this;
    }

    while(true){
      if (val > current.val){
        if (current.right === null){
          current.right = new Node(val);
          return this;
        }
        current = current.right;
      } else {
        if (current.left === null){
          current.left = new Node(val);
          return this;
        }
        current = current.left;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node=this.root) {
    if (this.root === null){
      this.root = new Node(val);
      return this;
    }

    if (val > node.val){
      if (node.right){
        return this.insertRecursively(val, node.right);
      } else {
        node.right = new Node(val);
        return this;
      }
    } else {
      if (node.left){
        return this.insertRecursively(val, node.left);
      } else {
        node.left = new Node(val);
        return this;
      }
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    while (current){
      if (current.val === val) return current;
      else if (val > current.val){
        current = current.right;
      } else {
        current = current.left;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if (node === null) return undefined;
    else if (node.val === val) return node;
    else if (val > node.val) return this.findRecursively(val, node.right);
    else return this.findRecursively(val, node.left);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node=this.root, path=[]) {
    path.push(node.val);
    if (node.left) this.dfsPreOrder(node.left, path);
    if (node.right) this.dfsPreOrder(node.right, path);
    return path;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node=this.root, path=[]) {
    if (node.left) this.dfsInOrder(node.left, path);
    path.push(node.val);
    if (node.right) this.dfsInOrder(node.right, path);
    return path;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node=this.root, path=[]) {
    if (node.left) this.dfsPostOrder(node.left, path);
    if (node.right) this.dfsPostOrder(node.right, path);
    path.push(node.val);
    return path;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const path = [];
    const travQueue = this.root ? [this.root] : [];
    while (travQueue.length){
      let current = travQueue.shift();
      path.push(current.val);
      if (current.left) travQueue.push(current.left);
      if (current.right) travQueue.push(current.right);
    }
    return path;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;