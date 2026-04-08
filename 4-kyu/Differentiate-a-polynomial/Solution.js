function differentiate(equation, point){
  return equation.split(/(?=[+-])/).reduce((sum, term) => {
    if (!term.includes('x')) return sum;
    
    const sign = term[0] === '-' ? -1 : 1;
    const cleanTerm = term.replace(/^[+-]/, '');
    
    let coeff, exp;
    
    if (cleanTerm === 'x') {
      coeff = 1;
      exp = 1;
    } else if (cleanTerm.includes('^')) {
      const [c, e] = cleanTerm.split('x^');
      coeff = c === '' ? 1 : parseFloat(c);
      exp = parseInt(e);
    } else {
      coeff = parseFloat(cleanTerm);
      exp = 1;
    }
    
    return sum + sign * coeff * exp * Math.pow(point, exp - 1);
  }, 0);
}