function quicksum(packet) {
    let sum = 0;

    for (let i = 0; i < packet.length; i++) {
        if (packet[i] >= "A" && packet[i] <= "Z") {
            sum += (i + 1) * (packet[i].charCodeAt(0) - 64);
        } else if (packet[i] === " ") {
            sum += 0;
        } else {
            return 0;
        }
    }

    return sum;
}
