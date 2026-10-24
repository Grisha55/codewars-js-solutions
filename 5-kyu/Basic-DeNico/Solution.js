function deNico(key, message) {
    const sorted = [...key].sort();
    const numKey = [...key].map((ch) => sorted.indexOf(ch) + 1);

    const k = key.length;
    const padded = message.padEnd(Math.ceil(message.length / k) * k, " ");

    let result = "";
    for (let i = 0; i < padded.length; i += k) {
        const row = padded.slice(i, i + k);
        let decoded = "";
        for (let j = 0; j < k; j++) {
            decoded += row[numKey[j] - 1];
        }
        result += decoded;
    }

    return result.trimEnd();
}
