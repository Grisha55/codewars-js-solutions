function grabDoll(dolls){
	var bag = [];
	for (const doll of dolls) {
		if (bag.length > 2) break;
		if (doll === 'Hello Kitty' || doll === 'Barbie doll') {
			bag.push(doll);
		} else {
			continue;
		}
	}
	return bag;
}