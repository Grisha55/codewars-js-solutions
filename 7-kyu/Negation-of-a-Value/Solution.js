function negationValue(string, value) {
    const val = Boolean(value);
    return string.length % 2 === 0 ? val : !val;
}
