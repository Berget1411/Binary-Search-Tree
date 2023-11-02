import Node from './node.js';

export default class Tree {
  constructor(arr = null) {
    this.root = this.buildTree(arr);
  }

  buildTree(arr) {
    if (arr.length - 1 < 0) return null;

    const mid = Math.floor((arr.length - 1) / 2);

    const root = new Node(arr[mid]);

    root.setLeft(buildTree(arr.slice(0, mid)));
    root.setRight(buildTree(arr.slice(mid)));

    return root;
  }
}
