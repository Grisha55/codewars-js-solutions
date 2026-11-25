function minUmbrellas(weather) {
    let home = 0,
        work = 0,
        total = 0;

    for (let i = 0; i < weather.length; i++) {
        const isRain = weather[i] === "rainy" || weather[i] === "thunderstorms";
        if (!isRain) continue;

        if (i % 2 === 0) {
            if (home > 0) {
                home--;
                work++;
            } else {
                work++;
                total++;
            }
        } else {
            if (work > 0) {
                work--;
                home++;
            } else {
                home++;
                total++;
            }
        }
    }

    return total;
}
