function tArea(tStr) {
    const lines = tStr.split("\n").filter((line) => line.trim() !== "");
    const lastLine = lines[lines.length - 1].trim();
    const spaces = lastLine.replace(/\./g, "").length;
    const units = spaces;

    return (units * units) / 2;
}
