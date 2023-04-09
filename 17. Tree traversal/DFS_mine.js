class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (currentNode.val === val) return undefined;
        if (val < currentNode.val) {
          if (currentNode.left) {
            currentNode = currentNode.left;
          } else {
            currentNode.left = newNode;
            break;
          }
        } else if (val > currentNode.val) {
          if (currentNode.right) {
            currentNode = currentNode.right;
          } else {
            currentNode.right = newNode;
            break;
          }
        }
      }
    }
    return this;
  }

  find(value) {
    if (!this.root) return null;
    let current = this.root;
    while (current) {
      if (current.val === value) {
        console.log(current.val);
        return current;
      }
      if (value < current.val) {
        current = current.left;
      } else if (value > current.val) {
        current = current.right;
      }
    }
    return null;
  }

  // Preorder means take the value of the current node first, and then
  // take the values from left and right nodes.
  DFSPreOrder(current = this.root, visitedNodes = []) {
    if (!current) return undefined;

    visitedNodes.push(current.val);
    if (current.left) this.DFSPreOrder(current.left, visitedNodes);
    if (current.right) this.DFSPreOrder(current.right, visitedNodes);
    return visitedNodes;
  }

  // Postorder means take the values from left and right nodes first,
  // and then take the value of the current node.
  DFSPostOrder(current = this.root, outputArr = []) {
    if (!current) return undefined;
    if (current.left) this.DFSPostOrder(current.left, outputArr);
    if (current.right) this.DFSPostOrder(current.right, outputArr);
    outputArr.push(current.val);
    return outputArr;
  }

  // Inorder means first visit the left node, take value and then
  // visit the parent node, take value and the finally visit the
  // right node and take value.
  DFSInOrder() {
    if (!this.root) return undefined;
    let outputArr = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      outputArr.push(node.val);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return outputArr;
  }

  BFS() {
    if (!this.root) return undefined;
    let current = this.root;
    let queue = [];
    let visitedNodes = [];
    queue.push(current);

    while (queue.length > 0) {
      current = queue.shift();
      visitedNodes.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return visitedNodes;
  }
}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(13);
bst.insert(2);
bst.insert(7);

console.log(bst.BST());
function findHeight(root) {
  if (!root) return 0;

  return 1 + Math.max(findHeight(root.left), findHeight(root.right));
}
var printTree = function (root) {
  let m = findHeight(root);
  let n = Math.pow(2, m) - 1;
  let result = [];

  // Fill the empty 2d array with ""
  for (let i = 0; i < m; i++) {
    result.push([]);
    for (let j = 0; j < n; j++) {
      result[result.length - 1].push("");
    }
  }

  // DFS the tree , and add the root to the mid index of the current array, recursively call the same for the root's left and right child , if root is null return to its parent call instance

  function fill(root, start = 0, end = result[0].length - 1, row = 0) {
    if (!root) return;

    let column = Math.floor((start + end) / 2);

    result[row][column] = root.val.toString();

    if (root.left) fill(root.left, start, column - 1, row + 1);

    if (root.right) fill(root.right, column + 1, end, row + 1);
  }

  fill(root);

  return result;
};
