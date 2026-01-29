function solution(list) {
	let result = [];
	let start = list[0];
	let end = list[0];

	for (let i = 1; i <= list.length; i++) {
		if (list[i] === end + 1) {
			end = list[i];
		} else {
			if (end - start >= 2) {
				result.push(`${start}-${end}`);
			} else {
				for (let j = start; j <= end; j++) {
					result.push(j);
				}
			}
			start = list[i];
			end = list[i];
		}
	}

	return result.join(',');
}