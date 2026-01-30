function travel(r, zipcode) {
	if (!r) return `${zipcode}:/`;

	const streets = [];
	const numbers = [];

	const addresses = r.split(',');

	for (const address of addresses) {
		const zip = address.slice(-8);

		if (zip === zipcode) {
			const parts = address.slice(0, -9).split(' ');

			numbers.push(parts[0]);
			streets.push(parts.slice(1).join(' '));
		}
	}

	return streets.length
		? `${zipcode}:${streets.join(',')}/${numbers.join(',')}`
		: `${zipcode}:/`;
}
