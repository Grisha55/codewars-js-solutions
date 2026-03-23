function solution(n) {
	// Умножаем на 2, чтобы шаг стал 1 (0.5 * 2 = 1)
	const doubled = n * 2;
	// Округляем до ближайшего целого
	const rounded = Math.round(doubled);
	// Делим обратно на 2
	return rounded / 2;
}
