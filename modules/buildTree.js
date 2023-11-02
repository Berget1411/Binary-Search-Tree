import Node from './node';

export default function buildTree(arr) {
  const mid = (arr.length - 1) / 2;

  const root = new Node(arr[mid]);

  root.setLeft(buildTree(arr.slice(0, mid)));
  root.setRight(buildTree(arr.slice(mid)));

  return root;
}
