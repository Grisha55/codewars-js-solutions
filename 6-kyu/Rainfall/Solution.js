function mean(town, strng) {
	let data = strng.split('\n').find(line => line.startsWith(town + ':'));
	if (!data) return -1;

	let numbers = data.match(/-?\d+(\.\d+)?/g).map(Number);
	let sum = numbers.reduce((acc, val) => acc + val, 0);
	return sum / numbers.length;
}
function variance(town, strng) {
	let data = strng.split('\n').find(line => line.startsWith(town + ':'));
	if (!data) return -1;

	let numbers = data.match(/-?\d+(\.\d+)?/g).map(Number);
	let meanValue = numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
	let varianceSum = numbers.reduce((acc, val) => acc + Math.pow(val - meanValue, 2), 0);
	return varianceSum / numbers.length;
}
