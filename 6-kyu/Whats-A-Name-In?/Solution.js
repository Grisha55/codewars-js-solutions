function nameInStr(str, name) {
	let i = 0;
	for (let c of name.toLowerCase()) {
		i = str.toLowerCase().indexOf(c, i);
		if (i === -1) return false;
		i++;
	}
	return true;
}
