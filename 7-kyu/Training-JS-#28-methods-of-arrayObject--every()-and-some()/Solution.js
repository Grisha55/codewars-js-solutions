function mirrorImage(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        const a = String(arr[i]);
        const b = String(arr[i + 1]);
        const reversed = b.split("").reverse().join("");
        if (a === reversed) {
            return [arr[i], arr[i + 1]];
        }
    }
    return [-1, -1];
}
