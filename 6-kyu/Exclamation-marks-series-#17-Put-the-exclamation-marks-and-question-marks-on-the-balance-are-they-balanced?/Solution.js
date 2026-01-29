function balance(left, right) {
  const leftScore = countScore(left);
  const rightScore = countScore(right);
  return leftScore === rightScore ? 'Balance' : leftScore > rightScore ? 'Left' : 'Right';
}

function countScore(str) {
  let score = 0;
  for (let char of str) {
    if (char === '!') {
      score += 2;   
    } else {
      score += 3
    }
  }
  return score;
}