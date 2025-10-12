/**
 * @function howMuchILoveYou
 * @param {number} nbPetals
 * @returns {string}
 */

function howMuchILoveYou(nbPetals) {
  const petals = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
  ];

  return petals[(nbPetals - 1) % petals.length];
}
