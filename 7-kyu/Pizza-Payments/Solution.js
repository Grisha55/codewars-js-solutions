function michaelPays(costs) {
    if (costs < 5) {
        return Math.round(costs * 100) / 100;
    }

    const kateShare = Math.min(costs / 3, 10);
    const michaelShare = costs - kateShare;

    return Math.round(michaelShare * 100) / 100;
}
