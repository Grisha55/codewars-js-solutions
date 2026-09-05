function brightest(colors) {
    let maxBrightness = -1;
    let result = "";

    for (const color of colors) {
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
        const brightness = Math.max(r, g, b);

        if (brightness > maxBrightness) {
            maxBrightness = brightness;
            result = color;
        }
    }

    return result;
}
