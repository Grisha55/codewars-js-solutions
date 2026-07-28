function londonCityHacker(journey) {
    let total = 0;
    let i = 0;

    while (i < journey.length) {
        if (typeof journey[i] === "string") {
            total += 2.4;
            i++;
        } else {
            let busCount = 0;
            while (i < journey.length && typeof journey[i] === "number") {
                busCount++;
                i++;
            }
            total += Math.ceil(busCount / 2) * 1.5;
        }
    }

    return `£${total.toFixed(2)}`;
}
