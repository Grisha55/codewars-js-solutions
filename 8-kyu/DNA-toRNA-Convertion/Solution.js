/**
 * @function DNAtoRNA
 * @param {string} dna
 * @returns {string}
 */

function DNAtoRNA(dna) {
  let rna = '';

  for (const char of dna) {
    if (char === 'T') {
      rna += 'U';
    } else {
      rna += char;
    }
  }

  return rna;
}
