function sum(num) {
  const dp = Array(num + 1).fill(0);
  dp[0] = 1;
  
  for (let i = 1; i <= num; i++) {
    for (let j = i; j <= num; j++) {
      dp[j] += dp[j - i];
    }
  }
  return dp[num];
}