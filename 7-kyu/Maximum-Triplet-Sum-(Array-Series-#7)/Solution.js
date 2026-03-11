function maxTriSum(numbers) {
	const uniqueNums = new Set(numbers);
	const uniqueArr = Array.of(...uniqueNums);
	const sorted = uniqueArr.sort((a, b) => a - b).reverse();
	const resArr = [...sorted].slice(0, 3);
	return resArr.reduce((acc, num) => acc + num, 0);
}
