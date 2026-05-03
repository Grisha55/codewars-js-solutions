function sortEmotions(arr, order) {
	const weight = {
		T_T: 1,
		':(': 2,
		':|': 3,
		':)': 4,
		':D': 5
	};

	if (!order) {
		return [...arr].sort((f, s) => weight[f] - weight[s]);
	} else {
		return [...arr].sort((f, s) => weight[s] - weight[f]);
	}
}
