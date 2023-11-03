import Node from './node.js';

export default class Tree {
  constructor(arr = null) {
    this.root = this.buildTree(this.sortArray(arr));
  }

  min(root) {
    if (!root.left) return root.value;

    return this.min(root.left);
  }

  sortArray(arr) {
    const sorted = [...new Set(arr)].sort((a, b) => a - b);
    return sorted;
  }

  buildTree(arr) {
    if (arr.length === 0) return null;

    const mid = Math.floor((arr.length - 1) / 2);

    const root = new Node(
      arr[mid],
      this.buildTree(arr.slice(0, mid)),
      this.buildTree(arr.slice(mid + 1)),
    );

    return root;
  }

  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  insertNode(root, value) {
    if (root === null) return new Node(value);

    if (root.value < value) {
      root.right = this.insertNode(root.right, value);
    } else {
      root.left = this.insertNode(root.left, value);
    }
    return root;
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) return root;

    if (root.value > value) {
      root.left = this.deleteNode(root.left, value);
    } else if (root.value < value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }

  prettyPrint(node = this.root, prefix = '', isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? '│   ' : '    '}`,
        false,
      );
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

  find(value, root = this.root) {
    if (root === null) return root;

    if (root.value > value) root = this.find(value, root.left);
    else if (root.value < value) root = this.find(value, root.right);

    return root;
  }

  levelOrder(cb, root = this.root) {
    if (root === null) return;

    const queue = [];
    const arr = [];

    queue.push(root);

    while (queue.length) {
      const current = queue[0];
      if (cb) cb(current);
      else {
        arr.push(current.value);
      }
      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
      queue.shift();
    }
    if (!cb) return arr;
  }

  //root left right
  preorder(cb, root = this.root) {
    if (root === null) return [];
    const stack = [root];
    const results = [];

    while (stack.length) {
      const node = stack.pop();
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
      if (cb) cb(node);
      results.push(node.value);
    }
    if (!cb) return results;
  }

  //left root right
  inorder(cb, result = [], node = this.root) {
    if (!this.root) return [];
    if (node === null) return;

    this.inorder(cb, result, node.left);
    cb ? cb(node) : result.push(node.value);
    this.inorder(cb, result, node.right);

    if (result) return result;
  }

  //left right root
  postorder(cb, result = [], node = this.root) {
    if (!this.root) return [];
    if (node === null) return;

    this.postorder(cb, result, node.left);
    this.postorder(cb, result, node.right);
    cb ? cb(node) : result.push(node.value);

    if (result) return result;
  }

  height(node = this.root) {
    if (!node) return -1;

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  depth(nodeVal, node = this.root, edgeCount = 0) {
    if (!node) return;

    if (node.value === nodeVal) return edgeCount;

    if (node.value > nodeVal) {
      return this.depth(nodeVal, node.left, edgeCount + 1);
    }

    return this.depth(nodeVal, node.right, edgeCount + 1);
  }
}
