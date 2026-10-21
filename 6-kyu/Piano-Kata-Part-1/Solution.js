function blackOrWhiteKey(n) {
    const pos = ((n - 1) % 88) % 12;
    return [1, 4, 6, 9, 11].includes(pos) ? "black" : "white";
}
