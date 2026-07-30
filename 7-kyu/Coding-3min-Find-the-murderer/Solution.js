function sc(said, suspects) {
    const res = [];
    const pattern = said.toLowerCase();

    for (const suspect of suspects) {
        const name = suspect.toLowerCase();
        let match = true;
        let patternIndex = 0;

        for (let i = 0; i < name.length && patternIndex < pattern.length; i++) {
            if (pattern[patternIndex] === "~") {
                patternIndex++;
            } else if (pattern[patternIndex] === name[i]) {
                patternIndex++;
            } else {
                match = false;
                break;
            }
        }

        if (match && patternIndex === pattern.length) {
            res.push(suspect);
        }
    }

    return res.join(",");
}
