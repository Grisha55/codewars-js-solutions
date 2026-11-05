class Robot {
    constructor() {
        this.words = new Set([
            "thank",
            "you",
            "for",
            "teaching",
            "me",
            "i",
            "already",
            "know",
            "the",
            "word",
            "do",
            "not",
            "understand",
            "input",
        ]);
    }

    learnWord(word) {
        if (!/^[a-zA-Z]+$/.test(word)) {
            return "I do not understand the input";
        }

        const lower = word.toLowerCase();
        if (this.words.has(lower)) {
            return `I already know the word ${word}`;
        }

        this.words.add(lower);
        return `Thank you for teaching me ${word}`;
    }
}
