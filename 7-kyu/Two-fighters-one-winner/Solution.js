function declareWinner(fighter1, fighter2, firstAttacker) {
  let a = fighter1.name === firstAttacker ? fighter1 : fighter2;
  let b = a === fighter1 ? fighter2 : fighter1;

  while (fighter1.health > 0 && fighter2.health > 0) {
    b.health -= a.damagePerAttack;
    if (b.health <= 0) return a.name;

    [a, b] = [b, a];
  }
}
