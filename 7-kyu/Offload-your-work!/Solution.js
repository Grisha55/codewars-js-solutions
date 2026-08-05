function workNeeded(projectMinutes, freelancers) {
    let sumMinutes = 0;

    for (const f of freelancers) {
        const fTime = f[0] * 60 + f[1];
        sumMinutes += fTime;
    }

    if (sumMinutes >= projectMinutes) {
        return "Easy Money!";
    } else {
        const h = (projectMinutes - sumMinutes) / 60;
        const m = (projectMinutes - sumMinutes) % 60;
        return `I need to work ${Math.floor(h)} hour(s) and ${m} minute(s)`;
    }
}
