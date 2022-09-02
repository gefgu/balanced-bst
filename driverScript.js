import Tree from "./bst.js";

const array = Array.from({ length: 20 }, () =>
  Math.floor(Math.random() * 1000)
);
const tree = Tree(array);

console.log(`Is balanced: ${tree.isBalanced()}\n`);

console.log(`Level Order: ${tree.levelOrder()}\n`);
console.log(`Pre Order: ${tree.preorder()}\n`);
console.log(`In Order: ${tree.inorder()}\n`);
console.log(`Post Order: ${tree.postorder()}\n`);

for (let i = 0; i < 100; i++) {
  tree.insert(Math.floor(Math.random() * 5000));
}

console.log(`Is balanced: ${tree.isBalanced()}\n`);

tree.rebalance();

console.log(`Is balanced: ${tree.isBalanced()}\n`);

console.log(`Level Order: ${tree.levelOrder()}\n`);
console.log(`Pre Order: ${tree.preorder()}\n`);
console.log(`In Order: ${tree.inorder()}\n`);
console.log(`Post Order: ${tree.postorder()}\n`);
