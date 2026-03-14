function rot(strng) {
	const arr = strng
		.split('\n')
		.reverse()
		.map(str => str.split('').reverse().join(''));
	return arr.join('\n');
}

function selfieAndRot(strng) {
	const arr = strng.split('\n');
	const len = arr[0].length;
	const dots = '.'.repeat(len);

	const top = arr.map(str => str + dots);
	const rotated = rot(strng)
		.split('\n')
		.map(str => dots + str);

	return [...top, ...rotated].join('\n');
}

function oper(fct, s) {
	return fct(s);
}
