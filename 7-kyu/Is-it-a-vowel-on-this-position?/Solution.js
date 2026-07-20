function checkVowel(string, position) {
    const lower = string.toLowerCase();
    return "aeiou".includes(lower[position]);
}
