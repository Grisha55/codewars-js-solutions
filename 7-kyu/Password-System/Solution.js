function helpZoom(key) {
    const f = key.slice(0, key.length / 2);
    const s = key.slice(key.length / 2);

    for (let i = 0; i < f.length; i++) {
        if (f[i] !== s[s.length - 1 - i]) {
            return "No";
        }
    }

    return "Yes";
}
