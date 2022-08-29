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

    const midIndex = Math.floor(arr.length / 2);
    const root = Node(
      arr[midIndex],
      arr.slice(0, midIndex),
      arr.slice(midIndex + 1)
    );

    console.log(root);

    console.log(arr);
    console.log(midIndex);
  }

  const root = buildTree(array);
  return { root };
}

export default Tree;
