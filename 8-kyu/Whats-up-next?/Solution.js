function nextItem(items, item) {
	const iterator = items[Symbol.iterator] ? items[Symbol.iterator]() : items;

	for (const current of iterator) {
		if (current === item) {
			const next = iterator.next();
			return next.done ? undefined : next.value;
		}
	}

	return undefined;
}
