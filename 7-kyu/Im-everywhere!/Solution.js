function i(word) {
    const numOfVows = (s) => {
        let cnt = 0;
        const vowels = "aeiou";

        for (const c of s) {
            if (vowels.includes(c.toLowerCase())) {
                cnt++;
            }
        }
        return cnt;
    };

    if (
        word[0] !== "I" &&
        numOfVows(word) < word.length - numOfVows(word) &&
        word[0] !== word[0].toLowerCase()
    ) {
        return "i" + word;
    } else {
        return "Invalid word";
    }
}
