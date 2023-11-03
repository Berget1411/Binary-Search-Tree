import Tree from './modules/tree.js';

const randomArray = (size) => {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
};

const tree = new Tree(randomArray(30));
tree.prettyPrint();
console.log('balanced: ', tree.isBalanced());
console.log('Level order: ', tree.levelOrder());
console.log('Preorder: ', tree.levelOrder());
console.log('Postorder: ', tree.postorder());
console.log('Inorder: ', tree.inorder());

for (let i = 0; i < 5; i++) {
  tree.insert(Math.floor(Math.random() * 20));
}
console.log('Balanced: ', tree.isBalanced());
tree.prettyPrint();

tree.rebalance();
console.log('balanced: ', tree.isBalanced());
tree.prettyPrint();
console.log('Level order: ', tree.levelOrder());
console.log('Preorder: ', tree.levelOrder());
console.log('Postorder: ', tree.postorder());
console.log('Inorder: ', tree.inorder());
