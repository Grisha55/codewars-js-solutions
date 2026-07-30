function encodeRailFenceCipher(string, numberRails) {
    const rails = Array.from({ length: numberRails }, () => []);
    let rail = 0;
    let dir = 1;

    for (const char of string) {
        rails[rail].push(char);
        rail += dir;
        if (rail === 0 || rail === numberRails - 1) dir *= -1;
    }

    return rails.flat().join("");
}

function decodeRailFenceCipher(string, numberRails) {
    const rails = Array.from({ length: numberRails }, () => []);
    const positions = [];
    let rail = 0;
    let dir = 1;

    for (let i = 0; i < string.length; i++) {
        positions.push(rail);
        rail += dir;
        if (rail === 0 || rail === numberRails - 1) dir *= -1;
    }

    const railSizes = Array(numberRails).fill(0);
    for (const pos of positions) railSizes[pos]++;

    let index = 0;
    for (let r = 0; r < numberRails; r++) {
        rails[r] = string.slice(index, index + railSizes[r]).split("");
        index += railSizes[r];
    }

    let result = "";
    rail = 0;
    dir = 1;

    for (let i = 0; i < string.length; i++) {
        result += rails[rail].shift();
        rail += dir;
        if (rail === 0 || rail === numberRails - 1) dir *= -1;
    }

    return result;
}
