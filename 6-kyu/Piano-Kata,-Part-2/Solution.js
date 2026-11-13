function whichNote(n) {
    const notes = [
        "A",
        "A#",
        "B",
        "C",
        "C#",
        "D",
        "D#",
        "E",
        "F",
        "F#",
        "G",
        "G#",
    ];
    const pos = ((n - 1) % 88) + 1;
    return notes[(pos - 1) % 12];
}
