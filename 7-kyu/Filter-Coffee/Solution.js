function search(budget, prices) {
	// return array of prices that are within budget
	return [...prices]
		.filter(price => price <= budget)
		.sort((a, b) => a - b)
		.join(',');
}
