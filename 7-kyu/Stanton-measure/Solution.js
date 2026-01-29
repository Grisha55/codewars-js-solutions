function stantonMeasure(a){
  const countOnes = a.filter(x => x === 1).length;
	return a.filter(x => x === countOnes).length;
}