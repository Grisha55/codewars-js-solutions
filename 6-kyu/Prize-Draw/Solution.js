function rank(st, we, n) {
	if (st.length === 0) return 'No participants';

	const names = st.split(',');
	if (n > names.length) return 'Not enough participants';

	const scores = names.map((name, i) => ({
		name,
		score: nameScore(name, we[i])
	}));

	scores.sort((a, b) => {
		if (b.score === a.score) {
			return a.name.localeCompare(b.name);
		}
		return b.score - a.score;
	});

	return scores[n - 1].name;
}

function nameScore(name, weight) {
	let sum = name.length;

	for (const ch of name.toLowerCase()) {
		sum += ch.charCodeAt(0) - 96;
	}

	return sum * weight;
}
