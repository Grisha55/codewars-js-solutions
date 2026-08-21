function getTheVowels(word) {
    const vowels = ["a", "e", "i", "o", "u"];
    const dp = [0, 0, 0, 0, 0]; // dp[0] – для 'a', dp[1] – для 'e', ...

    for (const ch of word) {
        const idx = vowels.indexOf(ch);
        if (idx === -1) continue;

        if (idx === 0) {
            dp[0] = Math.max(dp[0], dp[4] + 1, 1);
        } else {
            if (dp[idx - 1] > 0) {
                dp[idx] = Math.max(dp[idx], dp[idx - 1] + 1);
            }
        }
    }

    return Math.max(...dp);
}
