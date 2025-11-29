/**
 * @function defineSuit
 * @param {string} card
 * @returns {string}
 */

function defineSuit(card) {
  switch (card.slice(-1)) {
    case '♣':
      return 'clubs';
      break;
    case '♦':
      return 'diamonds';
      break;
    case '♥':
      return 'hearts';
      break;
    case '♠':
      return 'spades';
      break;
    default:
      return 'unknown suit';
  }
}
