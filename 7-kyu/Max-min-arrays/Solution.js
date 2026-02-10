function solve(arr) {
	let res = [];
	let kind = 'max';
  let min = 0;
	let max = arr.length - 1;
	const sortedArr = [...arr].sort((a, b) => b - a);

	while (min <= max) {
    if (kind === 'max') {
      res.push(sortedArr[min]);
      min++;
      kind = 'min';
    } else {
      res.push(sortedArr[max]);
      max--;
      kind = 'max';
    }
  }

	return res;
}
