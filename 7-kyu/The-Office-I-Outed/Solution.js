function outed(meet, boss) {
  let happinessSum = 0;
  let length = 0;

  for (key in meet) {
    if (key === boss) {
      happinessSum += meet[key] * 2;
    } else {
      happinessSum += meet[key];
    }
    length++;
  }

  const happiness = happinessSum / length;

  return happiness <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}
