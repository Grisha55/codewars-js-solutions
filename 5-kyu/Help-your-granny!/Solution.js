function tour(friends, friendTowns, distTable) {
	// Преобразуем плоский массив в объект расстояний
	const dist = {};
	for (let i = 0; i < distTable.length; i += 2) {
		dist[distTable[i]] = distTable[i + 1];
	}

	// Создаем объект соответствия друг → город
	const townOf = {};
	for (let i = 0; i < friendTowns.length; i++) {
		townOf[friendTowns[i][0]] = friendTowns[i][1];
	}

	// Собираем расстояния в порядке посещения
	const visited = [];
	for (let i = 0; i < friends.length; i++) {
		const f = friends[i];
		const t = townOf[f];
		if (t && dist[t] !== undefined) {
			visited.push(dist[t]);
		}
	}

	if (visited.length === 0) return 0;

	// Вычисляем общее расстояние
	let total = visited[0]; // X0 → первый город

	for (let i = 1; i < visited.length; i++) {
		total += Math.sqrt(
			visited[i] * visited[i] - visited[i - 1] * visited[i - 1]
		);
	}

	total += visited[visited.length - 1]; // последний город → X0

	return Math.floor(total);
}
