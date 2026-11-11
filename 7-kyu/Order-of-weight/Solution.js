function arrange(arr) {
    const toGrams = (s) => {
        const num = parseInt(s, 10);
        if (s.endsWith("KG")) return num * 1000;
        if (s.endsWith("T")) return num * 1_000_000;
        return num;
    };

    return [...arr].sort((a, b) => toGrams(a) - toGrams(b));
}
