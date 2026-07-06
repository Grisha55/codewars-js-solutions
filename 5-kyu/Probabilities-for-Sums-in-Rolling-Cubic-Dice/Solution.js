function rolldiceSumProb(sum, dice) {
    if (sum < dice || sum > dice * 6) return 0;

    const memo = {};

    function countWays(remainingDice, targetSum) {
        if (remainingDice === 0) {
            return targetSum === 0 ? 1 : 0;
        }

        const key = `${remainingDice},${targetSum}`;
        if (memo[key] !== undefined) return memo[key];

        let ways = 0;
        for (let face = 1; face <= 6; face++) {
            if (targetSum - face >= 0) {
                ways += countWays(remainingDice - 1, targetSum - face);
            }
        }

        memo[key] = ways;
        return ways;
    }

    const combinations = countWays(dice, sum);
    return combinations / Math.pow(6, dice);
}
