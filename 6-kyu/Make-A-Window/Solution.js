function makeAWindow(num) {
    const width = 2 * num + 3;
    const border = "-".repeat(width);
    const dots = "|" + ".".repeat(num) + "|" + ".".repeat(num) + "|";
    const middle = "|" + "-".repeat(num) + "+" + "-".repeat(num) + "|";

    const lines = [border];
    for (let i = 0; i < num; i++) lines.push(dots);
    lines.push(middle);
    for (let i = 0; i < num; i++) lines.push(dots);
    lines.push(border);

    return lines.join("\n");
}
