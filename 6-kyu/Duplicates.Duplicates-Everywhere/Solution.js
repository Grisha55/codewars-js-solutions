const removeDuplicateIds = (obj) => {
    const maxKey = {};

    Object.entries(obj).forEach(([key, chars]) => {
        const numKey = +key;
        chars.forEach((char) => {
            if (!(char in maxKey) || numKey > maxKey[char]) {
                maxKey[char] = numKey;
            }
        });
    });

    const result = {};

    Object.entries(obj).forEach(([key, chars]) => {
        const numKey = +key;
        const seen = new Set();
        result[key] = chars.filter((char) => {
            if (seen.has(char)) return false;
            seen.add(char);
            return maxKey[char] === numKey;
        });
    });

    return result;
};
