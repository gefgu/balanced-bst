function Node(data, left=null, right=null) {
  return {
    data,
    left,
    right,
  };
}

function Tree(array) {
  let root;

  function buildTree(arr) {
    arr = [...new Set(arr)].sort((a, b) => a - b); // Sort and remove duplicates
    if (arr.length === 0) return null;
    const midIndex = Math.floor(arr.length / 2);
    const left = arr.slice(0, midIndex);
    const right = arr.slice(midIndex + 1);
    const root = Node(arr[midIndex], buildTree(left), buildTree(right));
    return root;
  }
  root = buildTree(array);

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
      } else if (root.left !== null && root.right === null) {
        return root.left;
      } else if (root.left === null && root.right !== null) {
        return root.right;
      } else if (root.left !== null && root.right !== null) {
        let sucessor = root.right;
        while (sucessor?.left?.left) {
          sucessor = sucessor.left;
        }
        root.data = sucessor.left.data;
        sucessor.left = null;

        return root;
      }
    } else if (root.data < key) {
      root.right = deletion(key, root.right);
    } else if (root.data > key) {
      root.left = deletion(key, root.left);
    }
    return root;
  }

  function find(key, root = undefined) {
    if (root === undefined) root = this.root;
    if (root === null) return -1;
    if (root.data === key) {
      return root;
    } else if (root.data > key) {
      return find(key, root.left);
    } else if (root.data < key) {
      return find(key, root.right);
    }
  }

  function levelOrder(callback = (value) => value) {
    let root = this.root;
    let queue = [root];
    let results = [];
    while (queue.length > 0) {
      const first = queue.shift();
      if (first?.left) queue.push(first.left);
      if (first?.right) queue.push(first.right);
      results.push(first.data);
    }
    return results.map(callback);
  }

  function preorder(callback = (value) => value) {
    let root = this.root;
    let results = [];
    function transverse(root, results) {
      if (root?.data) results.push(root.data);
      if (root?.left) transverse(root.left, results);
      if (root?.right) transverse(root.right, results);
    }
    transverse(root, results);
    return results.map(callback);
  }

  function inorder(callback = (value) => value) {
    let root = this.root;
    let results = [];
    function transverse(root, results) {
      if (root?.left) transverse(root.left, results);
      if (root?.data) results.push(root.data);
      if (root?.right) transverse(root.right, results);
    }
    transverse(root, results);
    return results.map(callback);
  }

  function postorder(callback = (value) => value) {
    let root = this.root;
    let results = [];
    function transverse(root, results) {
      if (root?.left) transverse(root.left, results);
      if (root?.right) transverse(root.right, results);
      if (root?.data) results.push(root.data);
    }
    transverse(root, results);
    return results.map(callback);
  }

  function height(node) {
    if (node === null) return 0;

    let leftHeight = 0;
    let rightHeight = 0;

    if (node?.left) leftHeight += 1 + height(node?.left);
    if (node?.right) rightHeight += 1 + height(node?.right);

    if (leftHeight >= rightHeight) {
      return leftHeight;
    } else {
      return rightHeight;
    }
  }

  function depth(node) {
    let counter = 0;

    function transverse(treeNode) {
      if (treeNode === node) {
        return;
      }

      counter++;

      if (treeNode.data > node.data) {
        return transverse(treeNode.left);
      } else if (treeNode.data < node.data) {
        return transverse(treeNode.right);
      }
    }

    transverse(this.root);
    return counter;
  }

  function isBalanced() {
    let root = this.root;
    let queue = [root];
    let isBalanced = true;
    while (queue.length > 0) {
      const first = queue.shift();
      if (first?.left) queue.push(first.left);
      if (first?.right) queue.push(first.right);

      isBalanced =
        isBalanced && Math.abs(height(first.left) - height(first.right)) <= 1;
    }
    return isBalanced;
  }

  return {
    root,
    insert,
    deletion,
    find,
    levelOrder,
    preorder,
    inorder,
    postorder,
    height,
    depth,
    isBalanced,
  };
}

export default Tree;
