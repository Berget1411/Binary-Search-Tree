import Node from './node.js';

export default class Tree {
  constructor(arr = null) {
    this.root = this.buildTree(this.sortArray(arr));
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
}
