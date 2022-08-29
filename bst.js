function Node(value, left, right) {
  return {
    value,
    left,
    right,
  };
}

function Tree(array) {
  const root = buildTree(array);
  return { root };
}
