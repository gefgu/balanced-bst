const { default: Tree } = require("./bst");

test("Build Tree", () => {
  const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  Tree(array);
});
