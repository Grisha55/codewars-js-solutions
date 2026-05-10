function recycle(array) {
	const paperBox = [];
	const glassBox = [];
	const organicBox = [];
	const plasticBox = [];

	for (const box of array) {
		if (box.material === 'paper' || box.secondMaterial === 'paper') {
			paperBox.push(box.type);
		}
		if (box.material === 'glass' || box.secondMaterial === 'glass') {
			glassBox.push(box.type);
		}
		if (box.material === 'organic' || box.secondMaterial === 'organic') {
			organicBox.push(box.type);
		}
		if (box.material === 'plastic' || box.secondMaterial === 'plastic') {
			plasticBox.push(box.type);
		}
	}

	return [paperBox, glassBox, organicBox, plasticBox];
}
