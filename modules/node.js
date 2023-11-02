export default class Node {
  constructor(value = null, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
  setLeft(node) {
    this.left = node;
  }
  setRight(node) {
    this.right = node;
  }
}
