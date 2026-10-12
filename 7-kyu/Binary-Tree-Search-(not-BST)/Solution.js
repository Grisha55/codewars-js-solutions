function search(n, root) {
    if (root === null) return false;
    if (root.value === n) return true;
    return search(n, root.left) || search(n, root.right);
}
