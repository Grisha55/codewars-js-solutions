function HQ9(code) {
	switch (code) {
		case 'H':
			return 'Hello World!';
		case 'Q':
			return 'Q';
		case '9': {
			let result = [];

			for (let i = 99; i > 0; i--) {
				const bottle = i === 1 ? 'bottle' : 'bottles';
				const nextBottle = i - 1 === 1 ? 'bottle' : 'bottles';
				const nextCount =
					i - 1 === 0 ? 'no more bottles' : `${i - 1} ${nextBottle}`;

				result.push(
					`${i} ${bottle} of beer on the wall, ${i} ${bottle} of beer.`,
					`Take one down and pass it around, ${nextCount} of beer on the wall.`
				);
			}

			result.push(
				`No more bottles of beer on the wall, no more bottles of beer.`,
				`Go to the store and buy some more, 99 bottles of beer on the wall.`
			);

			return result.join('\n');
		}
		default:
			return undefined;
	}
}
