/**
 * @function dnaStrand
 * @param {string} dna 
 * @returns {string}
 */

function dnaStrand(dna){
  const instructions = {
    'A': 'T', 'T': 'A',
    'C': 'G', 'G': 'C',
    'a': 't', 't': 'a',
    'c': 'g', 'g': 'c'
  };
  
  return dna.split('').map(char =>
    instructions[char] || char
  ).join('');
}