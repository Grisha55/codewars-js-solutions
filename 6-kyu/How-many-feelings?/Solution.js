function countFeelings(string, array) {
    const count = {};
    for (const char of string) {
        count[char] = (count[char] || 0) + 1;
    }

    let cnt = 0;
    for (const word of array) {
        let valid = true;
        const wordCount = {};
        for (const char of word) {
            wordCount[char] = (wordCount[char] || 0) + 1;
        }
        for (const char in wordCount) {
            if ((count[char] || 0) < wordCount[char]) {
                valid = false;
                break;
            }
        }
        if (valid) cnt++;
    }

    return cnt === 1 ? "1 feeling." : `${cnt} feelings.`;
}
