const arrowFunc = function(arr) {
	return arr.map(charCode => String.fromCharCode(charCode)).join(' ');
}