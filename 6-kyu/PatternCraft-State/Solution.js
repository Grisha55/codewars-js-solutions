class TankState {
    constructor() {
        this.canMove = true;
        this.damage = 5;
    }
}

class SiegeState {
    constructor() {
        this.canMove = false;
        this.damage = 20;
    }
}

class Tank {
    constructor() {
        this.state = new TankState();
    }

    get canMove() {
        return this.state.canMove;
    }

    get damage() {
        return this.state.damage;
    }

    siege() {
        this.state = new SiegeState();
    }

    tank() {
        this.state = new TankState();
    }
}
