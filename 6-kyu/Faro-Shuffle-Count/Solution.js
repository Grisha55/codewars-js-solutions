function faroCount(n) {
    let deck = Array.from({ length: n }, (_, i) => i);
    const original = deck.join(",");
    let count = 0;
    do {
        const half = n / 2;
        const next = [];
        for (let i = 0; i < half; i++) {
            next.push(deck[i], deck[i + half]);
        }
        deck = next;
        count++;
    } while (deck.join(",") !== original);
    return count;
}
