function closest(strng) {
	if (!strng) return [];

	const items = strng
		.split(' ')
		.map((n, i) => [[...n].reduce((s, d) => s + +d, 0), i, +n]);

	let best = null;
	let bestDiff = Infinity;

	for (let i = 0; i < items.length; i++) {
		for (let j = i + 1; j < items.length; j++) {
			const diff = Math.abs(items[i][0] - items[j][0]);
			const pair = [items[i], items[j]].sort((a, b) =>
				a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]
			);

			if (
				diff < bestDiff ||
				(diff === bestDiff && pair[0][0] < best[0][0]) ||
				(diff === bestDiff &&
					pair[0][0] === best[0][0] &&
					pair[0][1] + pair[1][1] < best[0][1] + best[1][1])
			) {
				bestDiff = diff;
				best = pair;
			}
		}
	}

	return best;
}
