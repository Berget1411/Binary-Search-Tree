import Tree from './modules/tree.js';

const tree = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9]);
tree.insert(10);
tree.delete(9);
tree.prettyPrint();
console.log(tree.find(10));
console.log(tree.levelOrder());

function cb(node) {
  console.log(node.value + 1);
}
tree.levelOrder(cb);

console.log(tree.preorder(cb));
console.log(tree.inorder());
