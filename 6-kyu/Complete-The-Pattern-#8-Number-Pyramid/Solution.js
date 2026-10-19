function pattern(n) {
    if (n <= 0) return "";

    const lines = [];

    for (let i = 1; i <= n; i++) {
        let ascending = "";
        for (let j = 1; j <= i; j++) {
            ascending += j % 10;
        }

        let descending = "";
        for (let j = i - 1; j >= 1; j--) {
            descending += j % 10;
        }

        const row = ascending + descending;

        const padding = " ".repeat(n - i);

        const trailing = " ".repeat(n - i);

        lines.push(padding + row + trailing);
    }

    return lines.join("\n");
}
