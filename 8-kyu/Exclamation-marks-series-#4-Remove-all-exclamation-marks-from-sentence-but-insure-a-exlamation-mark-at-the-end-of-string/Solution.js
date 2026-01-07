function remove(string){
	let res = '';
	for (const c of string) {
		if (c !== '!') {
			res += c;
		}
	}
	return res + '!';
}