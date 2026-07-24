function ipToNum(ip) {
    return (
        ip
            .split(".")
            .map((octet) => ("00000000" + Number(octet).toString(2)).slice(-8))
            .join("")
            .split("")
            .reduce((acc, bit) => (acc << 1) | Number(bit), 0) >>> 0
    );
}

function numToIp(num) {
    const binary = ("00000000000000000000000000000000" + num.toString(2)).slice(
        -32,
    );
    const octets = [];
    for (let i = 0; i < 32; i += 8) {
        octets.push(parseInt(binary.slice(i, i + 8), 2));
    }
    return octets.join(".");
}
