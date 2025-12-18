/**
 * @function stat
 * @param {string} strg
 * @returns {string}
 */

function stat(strg) {
  if (!strg) return '';

  const times = strg.split(', ');
  const seconds = times.map((time) => {
    const [h, m, s] = time.split('|').map(Number);
    return h * 3600 + m * 60 + s;
  });

  const n = seconds.length;
  const sorted = [...seconds].sort((a, b) => a - b);
  const range = sorted[n - 1] - sorted[0];
  const average = Math.floor(seconds.reduce((a, b) => a + b, 0) / n);
  const median =
    n % 2 === 0
      ? Math.floor((sorted[n / 2 - 1] + sorted[n / 2]) / 2)
      : sorted[Math.floor(n / 2)];

  const formatTime = (totalSeconds) => {
    const h = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const s = String(totalSeconds % 60).padStart(2, '0');
    return `${h}|${m}|${s}`;
  };

  return `Range: ${formatTime(range)} Average: ${formatTime(
    average
  )} Median: ${formatTime(median)}`;
}
