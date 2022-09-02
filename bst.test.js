const { default: Tree } = require("./bst");

test("Build Tree", () => {
  const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  expect(Tree(array).root).toEqual({
    data: 8,
    left: {
      data: 4,
      left: {
        data: 3,
        left: { data: 1, left: null, right: null },
        right: null,
      },
      right: {
        data: 7,
        left: { data: 5, left: null, right: null },
        right: null,
      },
    },
    right: {
      data: 67,
      left: {
        data: 23,
        left: { data: 9, left: null, right: null },
        right: null,
      },
      right: {
        data: 6345,
        left: { data: 324, left: null, right: null },
        right: null,
      },
    },
  });
});

test("Insert", () => {
  const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const tree = Tree(array);
  tree.insert(27);
  expect(tree.root.right.left.right.data).toEqual(27);
});

test("Delete no children", () => {
  const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const tree = Tree(array);
  tree.deletion(324);
  expect(tree.root).toEqual({
    data: 8,
    left: {
      data: 4,
      left: {
        data: 3,
        left: { data: 1, left: null, right: null },
        right: null,
      },
      right: {
        data: 7,
        left: { data: 5, left: null, right: null },
        right: null,
      },
    },
    right: {
      data: 67,
      left: {
        data: 23,
        left: { data: 9, left: null, right: null },
        right: null,
      },
      right: {
        data: 6345,
        left: null,
        right: null,
      },
    },
  });
});

test("Delete one children", () => {
  const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const tree = Tree(array);
  tree.deletion(6345);
  expect(tree.root).toEqual({
    data: 8,
    left: {
      data: 4,
      left: {
        data: 3,
        left: { data: 1, left: null, right: null },
        right: null,
      },
      right: {
        data: 7,
        left: { data: 5, left: null, right: null },
        right: null,
      },
    },
    right: {
      data: 67,
      left: {
        data: 23,
        left: { data: 9, left: null, right: null },
        right: null,
      },
      right: {
        data: 324,
        left: null,
        right: null,
      },
    },
  });
});

test("Delete two children", () => {
  const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const tree = Tree(array);
  tree.deletion(4);
  expect(tree.root).toEqual({
    data: 8,
    left: {
      data: 5,
      left: {
        data: 3,
        left: { data: 1, left: null, right: null },
        right: null,
      },
      right: {
        data: 7,
        left: null,
        right: null,
      },
    },
    right: {
      data: 67,
      left: {
        data: 23,
        left: { data: 9, left: null, right: null },
        right: null,
      },
      right: {
        data: 6345,
        left: { data: 324, left: null, right: null },
        right: null,
      },
    },
  });
});

test("Find function with placed element", () => {
  const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const tree = Tree(array);

  expect(tree.find(1)).toEqual({ data: 1, left: null, right: null });
});

test("Find function with not placed element", () => {
  const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const tree = Tree(array);

  expect(tree.find(9999)).toEqual(-1);
});

test("Level Order without callback", () => {
  const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const tree = Tree(array);
  expect(tree.levelOrder()).toEqual([8, 4, 67, 3, 7, 23, 6345, 1, 5, 9, 324]);
});

test("Level Order with callback", () => {
  const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const tree = Tree(array);
  expect(tree.levelOrder((value) => value + 1)).toEqual([
    9, 5, 68, 4, 8, 24, 6346, 2, 6, 10, 325,
  ]);
});

test("Pre-Order without callback", () => {
  const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const tree = Tree(array);
  expect(tree.preorder()).toEqual([8, 4, 3, 1, 7, 5, 67, 23, 9, 6345, 324]);
});

test("Pre-Order with callback", () => {
  const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const tree = Tree(array);
  expect(tree.preorder((value) => value + 1)).toEqual([
    9, 5, 4, 2, 8, 6, 68, 24, 10, 6346, 325,
  ]);
});

test("In-Order", () => {
  const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const tree = Tree(array);
  expect(tree.inorder()).toEqual([1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345]);
});

test("Post-Order", () => {
  const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const tree = Tree(array);
  expect(tree.postorder()).toEqual([1, 3, 5, 7, 4, 9, 23, 324, 6345, 67, 8]);
});

test("Height 2 left", () => {
  const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const tree = Tree(array);
  const height = tree.height(tree.root.left);
  expect(height).toEqual(2);
});

test("Height 2 right", () => {
  const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const tree = Tree(array);
  expect(tree.height(tree.root.right)).toEqual(2);
});


test("Depth 3", () => {
  const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const tree = Tree(array);
  expect(tree.depth(tree.root.left.left.left)).toEqual(3);
});

test("Depth 2", () => {
  const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const tree = Tree(array);
  expect(tree.depth(tree.root.right.left)).toEqual(2);
});