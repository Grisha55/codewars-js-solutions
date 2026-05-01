function nerdify(txt) {
	let res = '';
	for (let c of txt) {
		switch (c) {
			case 'a':
			case 'A':
				res += '4';
				break;
			case 'e':
			case 'E':
				res += '3';
				break;
			case 'l':
				res += '1';
				break;
			default:
				res += c;
		}
	}

	return res;
}
