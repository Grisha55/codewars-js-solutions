function containAllRots(strng, arr) {
	if (strng.length === 0) return true;

	const rotations = [];
	for (let i = 0; i < strng.length; i++) {
		rotations.push(strng.slice(i) + strng.slice(0, i));
	}

	return rotations.every((rotation) => arr.includes(rotation));
}