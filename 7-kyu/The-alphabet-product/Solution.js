function alphabet(arr) {
    const target = [...arr].sort((a, b) => a - b).join(",");
    const n = arr.length;
    for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++) {
            if (j === i) continue;
            for (let k = 0; k < n; k++) {
                if (k === i || k === j) continue;
                for (let l = 0; l < n; l++) {
                    if (l === i || l === j || l === k) continue;
                    const [A, B, C, D] = [arr[i], arr[j], arr[k], arr[l]];
                    if (A < B && B < C && C < D) {
                        const s = [A, B, C, D, A * B, B * C, C * D, D * A]
                            .sort((x, y) => x - y)
                            .join(",");
                        if (s === target) return D;
                    }
                }
            }
        }
    return -1;
}
