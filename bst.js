function Node(value, left, right) {
  return {
    value,
    left,
    right,
  };
}

function Tree(array) {
  function buildTree(arr) {
    arr = [...new Set(arr)].sort((a, b) => a - b); // Sort and remove duplicates

    console.log(arr);
  }

  const root = buildTree(array);
  return { root };
}

export default Tree;
