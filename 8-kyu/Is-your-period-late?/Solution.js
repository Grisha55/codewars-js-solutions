function periodIsLate(last, today, cycleLength) {
  const days = (today - last) / (1000 * 60 * 60 * 24);
  return days > cycleLength;
}
