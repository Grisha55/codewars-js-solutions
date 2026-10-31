function reverseCase(string) {
    let result = "";
    let i = 0;

    while (i < string.length) {
        let j = i;
        while (j < string.length && string[j] === string[i]) j++;
        const group = string.slice(i, j);

        if (group.length > 1) {
            for (const ch of group) {
                result +=
                    ch === ch.toUpperCase()
                        ? ch.toLowerCase()
                        : ch.toUpperCase();
            }
        } else {
            result += group;
        }

        i = j;
    }

    return result;
}
