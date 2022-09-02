import Tree from "./bst.js";

const array = Array.from({ length: 20 }, () =>
  Math.floor(Math.random() * 1000)
);
const tree = Tree(array);

console.log(`Is balanced: ${tree.isBalanced()}`);

console.log(`Level Order: ${tree.levelOrder()}`);
console.log(`Pre Order: ${tree.preorder()}`);
console.log(`In Order: ${tree.inorder()}`);
console.log(`Post Order: ${tree.postorder()}`);

for (let i = 0; i < 100; i++) {
  tree.insert(Math.floor(Math.random() * 5000));
}

console.log(`Is balanced: ${tree.isBalanced()}`);

tree.rebalance();

console.log(`Is balanced: ${tree.isBalanced()}`);

console.log(`Level Order: ${tree.levelOrder()}`);
console.log(`Pre Order: ${tree.preorder()}`);
console.log(`In Order: ${tree.inorder()}`);
console.log(`Post Order: ${tree.postorder()}`);
