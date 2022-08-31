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
