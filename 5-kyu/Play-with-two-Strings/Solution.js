function workOnStrings(a, b) {
    // Функция для подсчета частоты символов в строке (без учета регистра)
    function countChars(str) {
        const count = {};
        for (const char of str) {
            const lower = char.toLowerCase();
            count[lower] = (count[lower] || 0) + 1;
        }
        return count;
    }

    // Функция для смены регистра символов в строке
    // на основе частоты символов в другой строке
    function swapCase(str, otherCount) {
        let result = "";
        for (const char of str) {
            const lower = char.toLowerCase();
            if (otherCount[lower] && otherCount[lower] % 2 === 1) {
                // Меняем регистр, если частота нечетная
                result +=
                    char === char.toLowerCase()
                        ? char.toUpperCase()
                        : char.toLowerCase();
            } else {
                result += char;
            }
        }
        return result;
    }

    // Считаем частоту символов в строках
    const countA = countChars(a);
    const countB = countChars(b);

    // Меняем регистр в строке b на основе частоты в a
    const bChanged = swapCase(b, countA);

    // Меняем регистр в строке a на основе частоты в b
    const aChanged = swapCase(a, countB);

    return aChanged + bChanged;
}
