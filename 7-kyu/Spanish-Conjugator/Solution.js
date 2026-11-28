function conjugate(verb) {
    const suffixes = {
        ar: ["o", "as", "a", "amos", "áis", "an"],
        er: ["o", "es", "e", "emos", "éis", "en"],
        ir: ["o", "es", "e", "imos", "ís", "en"],
    };

    const ending = verb.slice(-2);
    const stem = verb.slice(0, -2);

    return { [verb]: suffixes[ending].map((s) => stem + s) };
}
