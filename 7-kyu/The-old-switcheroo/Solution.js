function vowel2index(str) {
   const vowels = 'aeiouAEIOU';
	 let res = '';

	 for (let i = 0; i < str.length; i++) {
		if (vowels.includes(str[i])) {
			res += (i + 1).toString();
		} else {
			res += str[i];
		}
	 }

	 return res;
}
