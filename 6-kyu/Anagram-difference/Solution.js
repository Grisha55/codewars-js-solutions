function anagramDifference(w1, w2) {
    const count = {};

    // Увеличиваем счетчик для букв из первого слова
    for (const char of w1) {
        count[char] = (count[char] || 0) + 1;
    }

    // Уменьшаем счетчик для букв из второго слова
    for (const char of w2) {
        count[char] = (count[char] || 0) - 1;
    }

    // Суммируем абсолютные значения
    return Object.values(count).reduce((sum, val) => sum + Math.abs(val), 0);
}
