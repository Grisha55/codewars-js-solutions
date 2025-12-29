function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  const blue = blueStart - bluePulled;
  const red = redStart - redPulled;
  const res = blue / (blue + red);

  return res;
}
