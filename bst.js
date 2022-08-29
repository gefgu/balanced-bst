function Node(data, left, right) {
  return {
    data,
    left,
    right,
  };
}

function Tree(array) {
  function buildTree(arr) {
    arr = [...new Set(arr)].sort((a, b) => a - b); // Sort and remove duplicates
    if (arr.length === 0) return null;
    const midIndex = Math.floor(arr.length / 2);
    const left = arr.slice(0, midIndex);
    const rigth = arr.slice(midIndex + 1);
    const root = Node(arr[midIndex], buildTree(left), buildTree(rigth));
    return root;
  }

  const root = buildTree(array);
  return root;
}

export default Tree;
