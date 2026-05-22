function whoEatsWho(zoo) {
	const rules = {
		antelope: ['grass'],
		'big-fish': ['little-fish'],
		bug: ['leaves'],
		bear: ['big-fish', 'bug', 'chicken', 'cow', 'leaves', 'sheep'],
		chicken: ['bug'],
		cow: ['grass'],
		fox: ['chicken', 'sheep'],
		giraffe: ['leaves'],
		lion: ['antelope', 'cow'],
		panda: ['leaves'],
		sheep: ['grass']
	};

	const result = [zoo];
	let animals = zoo.split(',');
	let changed = true;

	while (changed) {
		changed = false;

		for (let i = 0; i < animals.length; i++) {
			const current = animals[i];
			const left = animals[i - 1];
			const right = animals[i + 1];

			// Проверяем, может ли текущее животное съесть левого соседа
			if (left && rules[current] && rules[current].includes(left)) {
				result.push(`${current} eats ${left}`);
				animals.splice(i - 1, 1);
				changed = true;
				break; // Начинаем сначала
			}
			// Проверяем, может ли текущее животное съесть правого соседа
			else if (right && rules[current] && rules[current].includes(right)) {
				result.push(`${current} eats ${right}`);
				animals.splice(i + 1, 1);
				changed = true;
				break; // Начинаем сначала
			}
		}
	}

	result.push(animals.join(','));
	return result;
}
