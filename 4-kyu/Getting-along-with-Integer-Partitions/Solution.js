function part(n) {
    const products = generateProducts(n);
    const sorted = [...products].sort((a, b) => a - b);

    const range = sorted[sorted.length - 1] - sorted[0];
    const sum = sorted.reduce((a, b) => a + b, 0);
    const average = sum / sorted.length;
    const median = getMedian(sorted);

    return `Range: ${range} Average: ${average.toFixed(2)} Median: ${median.toFixed(2)}`;
}

function generateProducts(n) {
    const dp = new Array(n + 1).fill(null).map(() => new Set());
    dp[0].add(1);

    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= n; j++) {
            for (const product of dp[j - i]) {
                dp[j].add(product * i);
            }
        }
    }

    dp[n].delete[1];

    return dp[n];
}

function getMedian(arr) {
    const mid = Math.floor(arr.length / 2);
    return arr.length % 2 === 1 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
}
