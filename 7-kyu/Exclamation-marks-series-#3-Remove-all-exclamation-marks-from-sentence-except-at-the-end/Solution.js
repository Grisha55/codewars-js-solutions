function remove(string) {
	let end;
	let res = '';

	// Считаем кол-во восклицательных знаков
	for (let i = string.length - 1; i >= 0; i--) {
		if (string[i] !== '!') {
			end = string.length - i;
			break;
		}
	}

	// Фильтруем строку (без !)
	for (let i = 0; i <= string.length - end; i++) {
		if (string[i] !== '!') {
			res += string[i];
		}
	}

	for (let i = 0; i < end - 1; i++) {
		res += '!';
	}

	return res;
}
