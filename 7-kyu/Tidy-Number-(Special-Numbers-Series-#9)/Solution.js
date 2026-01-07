function tidyNumber(n){
	let copyN = n;
	let strCopy = copyN.toString();
	const strCopyArr = strCopy.split('');

	for (let i = 1; i < strCopyArr.length; i++) {
		if (strCopyArr[i] < strCopyArr[i - 1]) {
			return false;
		}
	}

	return true;
}