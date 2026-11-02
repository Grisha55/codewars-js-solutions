function esrever(str) {
    if (str.length === 0) return "";
    const sign = str[str.length - 1];
    return (
        str
            .slice(0, str.length - 1)
            .split(" ")
            .reverse()
            .map((s) => s.split("").reverse().join(""))
            .join(" ") + sign
    );
}
