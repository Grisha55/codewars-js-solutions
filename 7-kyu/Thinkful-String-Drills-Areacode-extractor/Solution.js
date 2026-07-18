function areaCode(text) {
    const code = text.split(" ").filter((s) => s.includes("("))[0];

    return code.slice(1, -1);
}
