const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  rootNode = null;
  
  root() {
      return this.rootNode;
  }

  add(data) {
      this.rootNode = addNode(this.rootNode, data);
      function addNode(node, data) {
          if (!node) return new Node(data);
          if (node.data === data) return node;
          if (data < node.data) {
            node.left = addNode(node.left, data);
          } else {
            node.right = addNode(node.right, data);
          }
      return node;
      }
  }

  has(data) {
    if (this.find(data)) return true;
    else return false;
    }
  

  find(data, node = this.rootNode) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.find(data, node.left);
    } else if (data > node.data) {
      return this.find(data, node.right);
    } else {
      return node;
    }
  }

  remove(data) {
      this.rootNode = removeNode(this.rootNode, data);
      function removeNode(node, data) {
          if (!node) return;
          if (data < node.data) {
              node.left = removeNode(node.left, data);
              return node;
          }
          if (data > node.data) {
              node.right = removeNode(node.right, data);
              return node;
          }
          if (!node.left && !node.right) return null;
          if (!node.left) return node.right;
          if (!node.right) return node.left;

          let minRight = node.right;
          while (minRight.left) {
              minRight = minRight.left;
          }
          node.data = minRight.data;
          node.right = removeNode(node.right, minRight.data);
          return node;
      }
  }

min() {
    if (!this.rootNode) return null;
    let node = this.rootNode;
    while (node.left) {
        node = node.left;
    }
    return node.data;
}

max() {
    if (!this.rootNode) return null;
    let node = this.rootNode;
    while (node.right) {
        node = node.right;
    }
    return node.data;
}
}

module.exports = {
  BinarySearchTree
};