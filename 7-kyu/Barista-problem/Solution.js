function barista(coffees) {
    if (!coffees || coffees.length === 0) return 0;

    const sorted = [...coffees].sort((a, b) => a - b);
    let totalWait = 0;
    let currentTime = 0;

    for (const time of sorted) {
        currentTime += time; // Сначала варим кофе
        totalWait += currentTime; // Клиент ждет до этого момента
        currentTime += 2; // Затем чистим машину
    }

    return totalWait;
}
