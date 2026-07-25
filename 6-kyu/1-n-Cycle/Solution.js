function cycle(n) {
    // Если n не взаимно просто с 10, возвращаем -1
    if (n % 2 === 0 || n % 5 === 0) return -1;

    let remainder = 1;
    let position = 0;
    const seen = new Map();

    while (true) {
        // Если остаток уже встречался, значит нашли цикл
        if (seen.has(remainder)) {
            return position - seen.get(remainder);
        }

        // Запоминаем позицию для этого остатка
        seen.set(remainder, position);

        // Умножаем на 10 и делим на n
        remainder = (remainder * 10) % n;
        position++;

        // Если остаток стал 0, значит дробь конечная (но это не должно случиться,
        // так как мы уже проверили, что n не делится на 2 и 5)
        if (remainder === 0) return -1;
    }
}
