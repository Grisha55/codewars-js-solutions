function goto(level, button) {
    const validLevels = [0, 1, 2, 3];
    const validButtons = ["0", "1", "2", "3"];

    if (
        typeof level !== "number" ||
        !Number.isInteger(level) ||
        !validLevels.includes(level)
    ) {
        return 0;
    }
    if (typeof button !== "string" || !validButtons.includes(button)) {
        return 0;
    }

    return Number(button) - level;
}
