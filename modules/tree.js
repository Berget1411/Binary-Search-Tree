import buildTree from './buildTree';

export default class Tree {
  constructor(arr = null) {
    this.arr = arr;
    this.root = buildTree(this.arr);
  }
}
