function checkDigit(number, index1, index2, digit) {
    const strNum = number.toString();
    for (let i = Math.min(index1, index2); i <= Math.max(index1, index2); i++) {
        if (strNum[i] === String(digit)) {
            return true;
        }
    }
    return false;
}
