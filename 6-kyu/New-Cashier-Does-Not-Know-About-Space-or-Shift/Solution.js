function getOrder(input) {
	const menu = [
		"Burger",
		"Fries",
		"Chicken",
		"Pizza",
		"Sandwich",
		"Onionrings",
		"Milkshake",
		"Coke",
	];

	const order = [];

	for (const item of menu) {
		const regex = new RegExp(item, "gi");
		const matches = input.match(regex);
		if (matches) {
			for (let i = 0; i < matches.length; i++) {
				order.push(item);
			}
		}
	}

	return order.join(" ");
}