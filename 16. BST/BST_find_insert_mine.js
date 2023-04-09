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
      if (current.val === val) {
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
}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(13);
bst.insert(2);
bst.insert(7);
bst.insert(11);
bst.insert(16);
bst.insert(40);
bst.insert(14);

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
