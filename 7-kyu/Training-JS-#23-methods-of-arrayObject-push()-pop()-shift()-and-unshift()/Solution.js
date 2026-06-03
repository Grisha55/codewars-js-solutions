function infiniteLoop(arr, d, n) {
	// Объединяем все элементы в один массив
	const flat = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			flat.push(arr[i][j]);
		}
	}

	// Выполняем сдвиг n раз
	for (let step = 0; step < n; step++) {
		if (d === 'left') {
			const first = flat.shift();
			flat.push(first);
		} else if (d === 'right') {
			const last = flat.pop();
			flat.unshift(last);
		}
	}

	// Восстанавливаем исходные размеры подмассивов
	let idx = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			arr[i][j] = flat[idx++];
		}
	}

	return arr;
}
