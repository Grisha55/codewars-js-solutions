function rounders(value) {
    let multiplier = 1;

    while (value >= 10) {
        const last = value % 10;
        value = Math.floor(value / 10);

        if (last >= 5) value += 1;

        multiplier *= 10;
    }

    return value * multiplier;
}
