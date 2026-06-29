function hasSubpattern(string) {
    for (let i = 1; i <= string.length / 2; i++) {
        if (string.length % i !== 0) continue;

        const subpattern = string.slice(0, i);

        if (subpattern.repeat(string.length / i) === string) {
            return true;
        }
    }

    return false;
}
