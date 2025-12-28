/**
 * @function stockList
 * @param {string[]} books
 * @param {string[]} categories
 * @returns {string}
 */

function stockList(books, categories) {
  if (books.length === 0 || categories.length === 0) return '';

  const categoryTotals = {};

  // Initialize category totals
  for (const category of categories) {
    categoryTotals[category] = 0;
  }

  // Process each book entry
  for (const book of books) {
    const [code, quantityStr] = book.split(' ');
    const category = code[0];
    const quantity = parseInt(quantityStr, 10);

    if (categoryTotals.hasOwnProperty(category)) {
      categoryTotals[category] += quantity;
    }
  }

  // Format the result
  const result = categories
    .map((category) => `(${category} : ${categoryTotals[category]})`)
    .join(' - ');

  return result;
}
