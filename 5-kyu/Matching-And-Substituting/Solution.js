function change(s, prog, version) {
    const lines = s.split("\n");

    const get = (key) => {
        for (const line of lines) {
            if (line.startsWith(key + ":")) {
                return line.slice(key.length + 1).trim();
            }
        }
        return null;
    };

    const phone = get("Phone");
    const ver = get("Version");

    // валидация
    const phoneRe = /^\+1-\d{3}-\d{3}-\d{4}$/;
    const verRe = /^\d+\.\d+$/;
    if (!phone || !phoneRe.test(phone)) return "ERROR: VERSION or PHONE";
    if (!ver || !verRe.test(ver)) return "ERROR: VERSION or PHONE";

    const finalVersion = ver === "2.0" ? "2.0" : version;

    return `Program: ${prog} Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: ${finalVersion}`;
}
