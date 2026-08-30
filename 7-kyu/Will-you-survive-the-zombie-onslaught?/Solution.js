function zombieShootout(zombies, range, ammo) {
    if (zombies === 0) return `You shot all 0 zombies.`;

    let distance = range;
    let killed = 0;
    let ammoLeft = ammo;

    while (killed < zombies && ammoLeft > 0 && distance > 0) {
        ammoLeft--;
        killed++;

        if (killed === zombies) {
            return `You shot all ${zombies} zombies.`;
        }

        distance -= 0.5;
    }

    if (distance <= 0) {
        return `You shot ${killed} zombies before being eaten: overwhelmed.`;
    }

    if (ammoLeft === 0 && killed < zombies) {
        return `You shot ${killed} zombies before being eaten: ran out of ammo.`;
    }

    return `You shot ${killed} zombies before being eaten: overwhelmed.`;
}
