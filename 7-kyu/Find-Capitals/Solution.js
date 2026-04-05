function capital(capitals) {
	return capitals.map(item => {
		const location = item.state || item.country;
		return `The capital of ${location} is ${item.capital}`;
	});
}
