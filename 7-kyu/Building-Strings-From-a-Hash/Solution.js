function solution(pairs) {
	let res = '';
	for (let key in pairs) {
		res += `${key} = ${pairs[key]},`;
	}
	return res.slice(0, -1);
}