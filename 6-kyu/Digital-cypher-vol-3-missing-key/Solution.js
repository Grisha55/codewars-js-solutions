function findTheKey(message, code) {
    const n = message.length;

    const diff = [];
    for (let i = 0; i < n; i++) {
        const val = message.charCodeAt(i) - 96;
        diff.push(code[i] - val);
    }

    for (let p = 1; p <= n; p++) {
        let ok = true;
        for (let i = p; i < n; i++) {
            if (diff[i] !== diff[i - p]) {
                ok = false;
                break;
            }
        }
        if (ok) {
            return Number(diff.slice(0, p).join(""));
        }
    }

    return Number(diff.join(""));
}
