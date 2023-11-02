import Node from './node';

export default class Tree {
  constructor(arr = null) {
    this.arr = arr;
    this.root = buildTree();
  }
}
