function frame(text, char) {
    const maxLen = Math.max(...text.map((s) => s.length));
    const border = char.repeat(maxLen + 4);

    const lines = text.map((s) => {
        const padded = s.padEnd(maxLen, " ");
        return `${char} ${padded} ${char}`;
    });

    return [border, ...lines, border].join("\n");
}
