function shortForm(str) {
    const vowels = "aeiou";
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (
            !vowels.includes(str[i].toLowerCase()) ||
            i === 0 ||
            i === str.length - 1
        ) {
            res += str[i];
        }
    }
    return res;
}
