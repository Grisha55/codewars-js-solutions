function movingShift(s, shift) {
    let encoded = "";
    let currentShift = shift;
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c >= "a" && c <= "z") {
            const code = c.charCodeAt(0);
            const base = "a".charCodeAt(0);
            const shifted = (((code - base + currentShift) % 26) + 26) % 26;
            encoded += String.fromCharCode(base + shifted);
        } else if (c >= "A" && c <= "Z") {
            const code = c.charCodeAt(0);
            const base = "A".charCodeAt(0);
            const shifted = (((code - base + currentShift) % 26) + 26) % 26;
            encoded += String.fromCharCode(base + shifted);
        } else {
            encoded += c;
        }
        currentShift++;
    }

    const L = encoded.length;
    const partLen = Math.ceil(L / 5);
    const parts = [];
    let start = 0;
    for (let i = 0; i < 5; i++) {
        const end = Math.min(start + partLen, L);
        parts.push(encoded.slice(start, end));
        start = end;
    }
    return parts;
}

function demovingShift(arr, shift) {
    const encoded = arr.join("");
    let decoded = "";
    let currentShift = shift;
    for (let i = 0; i < encoded.length; i++) {
        const c = encoded[i];
        if (c >= "a" && c <= "z") {
            const code = c.charCodeAt(0);
            const base = "a".charCodeAt(0);
            const shifted = (((code - base - currentShift) % 26) + 26) % 26;
            decoded += String.fromCharCode(base + shifted);
        } else if (c >= "A" && c <= "Z") {
            const code = c.charCodeAt(0);
            const base = "A".charCodeAt(0);
            const shifted = (((code - base - currentShift) % 26) + 26) % 26;
            decoded += String.fromCharCode(base + shifted);
        } else {
            decoded += c;
        }
        currentShift++;
    }
    return decoded;
}
