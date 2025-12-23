/**
 * @function movie
 * @param {number} card
 * @param {number} ticket
 * @param {number} perc
 * @returns {number}
 */

function movie(card, ticket, perc) {
  let costA = card;
  let costB = 0;
  let ticketsBought = 0;

  while (Math.ceil(costA) >= Math.ceil(costB)) {
    ticketsBought += 1;
    costA += ticket * Math.pow(perc, ticketsBought);
    costB += ticket;
  }

  return ticketsBought;
}
