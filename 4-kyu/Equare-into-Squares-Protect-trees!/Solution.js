function decompose(n) {
	const result = [];

	function dfs(remaining, max) {
		if (remaining === 0) return true;

		for (
			let i = Math.min(max - 1, Math.floor(Math.sqrt(remaining)));
			i > 0;
			i--
		) {
			if (dfs(remaining - i * i, i)) {
				result.push(i);
				return true;
			}
		}
		return false;
	}

	return dfs(n * n, n) ? result : null;
}
