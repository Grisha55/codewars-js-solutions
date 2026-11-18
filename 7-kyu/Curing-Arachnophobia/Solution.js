function drawSpider(legSize, bodySize, mouth, eye) {
    const legs = {
        1: ["^", "^"],
        2: ["/\\", "/\\"],
        3: ["/╲", "╱\\"],
        4: ["╱╲", "╱╲"],
    };
    const [leftLeg, rightLeg] = legs[legSize];

    const eyesPerSide = 2 ** (bodySize - 1);
    const eyes = eye.repeat(eyesPerSide);

    const body =
        "(".repeat(bodySize) + eyes + mouth + eyes + ")".repeat(bodySize);

    return leftLeg + body + rightLeg;
}
