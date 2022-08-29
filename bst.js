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
    const right = arr.slice(midIndex + 1);
    const root = Node(arr[midIndex], buildTree(left), buildTree(right));
    return root;
  }
  const root = buildTree(array);

  function insert(key, root = undefined) {
    if (root === undefined) root = this.root;
    if (root === null) return Node(key);
    if (root.data === key) {
      return root;
    } else if (root.data < key) {
      root.right = insert(key, root.right);
    } else if (root.data > key) {
      root.left = insert(key, root.left);
    }

    return root;
  }

  function deletion(key, root = undefined) {
    if (root === undefined) root = this.root;
    if (root === null) return null;
    if (root.data === key) {
      if (root.left === null && root.right === null) {
        return null;
      }
    } else if (root.data < key) {
      root.right = deletion(key, root.right);
      
    } else if (root.data > key) {
      root.left = deletion(key, root.left);
    }
    return root
  }

  return { root, insert, deletion };
}

export default Tree;
