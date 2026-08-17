function proofread(str) {
    return str
        .split(".")
        .map((sentence) => {
            const trimmed = sentence.trim();
            if (!trimmed) return "";
            let fixed = trimmed.toLowerCase().replace(/ie/g, "ei");
            return fixed.charAt(0).toUpperCase() + fixed.slice(1);
        })
        .join(". ")
        .trim();
}
