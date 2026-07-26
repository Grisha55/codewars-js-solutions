function fight(robot1, robot2, tactics) {
    const r1 = {
        name: robot1.name,
        health: robot1.health,
        speed: robot1.speed,
        tactics: [...robot1.tactics],
    };
    const r2 = {
        name: robot2.name,
        health: robot2.health,
        speed: robot2.speed,
        tactics: [...robot2.tactics],
    };

    let first, second;
    if (r1.speed > r2.speed) {
        first = r1;
        second = r2;
    } else if (r2.speed > r1.speed) {
        first = r2;
        second = r1;
    } else {
        first = r1;
        second = r2;
    }

    let turn = 0;

    while (true) {
        const attacker = turn === 0 ? first : second;
        const defender = turn === 0 ? second : first;

        if (attacker.tactics.length === 0) {
            if (first.tactics.length === 0 && second.tactics.length === 0) {
                break;
            }
            turn = 1 - turn;
            continue;
        }

        // Атака
        const tactic = attacker.tactics.shift();
        const damage = tactics[tactic];
        defender.health -= damage;

        if (defender.health <= 0) {
            return `${attacker.name} has won the fight.`;
        }

        turn = 1 - turn;
    }

    if (r1.health > r2.health) {
        return `${r1.name} has won the fight.`;
    } else if (r2.health > r1.health) {
        return `${r2.name} has won the fight.`;
    } else {
        return "The fight was a draw.";
    }
}
