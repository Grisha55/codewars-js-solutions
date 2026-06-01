function whoseBicycle(diary1, diary2, diary3) {
	const sum = d => Object.values(d).reduce((s, v) => s + v, 0);
	const sums = [sum(diary1), sum(diary2), sum(diary3)];
	const maxSum = Math.max(...sums);

	// Получаем индексы с максимальной суммой
	const candidates = sums.reduce(
		(acc, s, i) => (s === maxSum ? [...acc, i] : acc),
		[]
	);

	// Если несколько кандидатов, выбираем младшего (ageTable с preloaded)
	const winner =
		candidates.length === 1
			? candidates[0]
			: candidates.reduce((youngest, current) =>
					ageTable[`${['first', 'second', 'third'][current]}SonAge`] <
					ageTable[`${['first', 'second', 'third'][youngest]}SonAge`]
						? current
						: youngest
				);

	return `I need to buy a bicycle for my ${['first', 'second', 'third'][winner]} son.`;
}
