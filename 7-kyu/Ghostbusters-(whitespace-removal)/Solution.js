function ghostBusters(building) {
	const arr = building.split(' ');
	if (arr.length === 1) return "You just wanted my autograph didn't you?";
	return arr.join('');
}
