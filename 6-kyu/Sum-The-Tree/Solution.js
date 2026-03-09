// return the sum of all values in the tree, including the root
function sumTheTreeValues(root) {
	if (!root) return 0;

	let sum = 0;
	const stack = [root];

	while (stack.length) {
		const cur = stack.pop();
		sum += cur.value;

		if (cur.left) {
			stack.push(cur.left);
		}
		if (cur.right) {
			stack.push(cur.right);
		}
	}

	return sum;
}

/*
function sumTree(root) {
  if (root === null) return 0;
  
  return root.value + sumTree(root.left) + sumTree(root.right);
}
*/
