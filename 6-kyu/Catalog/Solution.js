function catalog(s, article) {
    const regex = /<prod>([\s\S]*?)<\/prod>/g;
    let match;
    const result = [];

    while ((match = regex.exec(s)) !== null) {
        const record = match[1];
        const nameMatch = record.match(/<name>(.*?)<\/name>/);
        const prxMatch = record.match(/<prx>(.*?)<\/prx>/);
        const qtyMatch = record.match(/<qty>(.*?)<\/qty>/);

        if (nameMatch && prxMatch && qtyMatch) {
            const name = nameMatch[1];
            const prx = prxMatch[1];
            const qty = qtyMatch[1];

            if (name.includes(article)) {
                result.push(`${name} > prx: $${prx} qty: ${qty}`);
            }
        }
    }

    return result.length ? result.join("\r\n") : "Nothing";
}
