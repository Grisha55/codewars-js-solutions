function encryption(message) {
    if (!message) return "";

    return message
        .split(" ")
        .map((word) =>
            word
                .split("")
                .map((char) => CHAR_TO_MORSE[char])
                .join(" "),
        )
        .join("   ");
}
