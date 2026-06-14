function generateName() {
	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let name = '';

	do {
		name = '';
		for (let i = 0; i < 6; i++) {
			name += chars[Math.floor(Math.random() * chars.length)];
		}
	} while (photoManager.nameExists(name));

	return name;
}
