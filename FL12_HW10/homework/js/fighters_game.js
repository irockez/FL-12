class Fighter {

    constructor({ name, damage, strength, agility, hp }) {
        this.name = name;
        this.damage = damage;
        this.strength = strength;
        this.agility = agility;
        this.hp = hp;
        this.win = 0;
        this.loss = 0;
    }

    getName() {
        return this.name;
    }

    getDamage() {
        return this.damage;
    }

    getStrength() {
        return this.strength;
    }

    getAgility() {
        return this.agility;
    }

    getHealth() {
        return this.hp;
    }

    attack(defender) {
        let magicNumber = 100;
        let probability = magicNumber - (defender.getStrength() + defender.getAgility());
        let random = Math.floor(Math.random() * (magicNumber + 1));

        if (probability >= random) {
            defender.dealDamage(this.damage);
            console.log(`${this.getName()} deals ${this.getDamage()} to ${defender.name}`);
        } else {
            console.log(`${this.getName()} attack missed`);
        }
    }

    dealDamage(damage) {
        this.hp = this.hp - damage;
        if (this.hp < 0) {
            this.hp = 0;
        }
    }

    heal(heal) {
        this.hp = this.hp + heal;
    }

    addWin() {
        this.win++;
    }

    addLoss() {
        this.loss++;
    }

    logCombatHistory() {
        console.log(`${this.name}, Wins: ${this.win}, Loss: ${this.loss}`);
    }
}

function battle(attacker, defender) {
    function isDead(fighter) {
        if (fighter.getHealth() <= 0) {
            return true;
        }
    }

    if (isDead(attacker)) {
        console.log(attacker.getName() + ' cannot fight. He is dead');
        return;
    } else if (isDead(defender)) {
        console.log(defender.getName() + ' cannot fight. He is dead');
        return;
    }

    do {
        attacker.attack(defender);
        if (isDead(defender)) {
            attacker.addWin();
            defender.addLoss();
            console.log(attacker.getName() + ' has won');
            break;
        }

        defender.attack(attacker);
        if (isDead(attacker)) {
            defender.addWin();
            attacker.addLoss();
            console.log(defender.getName() + ' has won');
            break;
        }
    } while (defender.getHealth() > 0 && attacker.getHealth() > 0);
}

const fighter1 = new Fighter({ name: 'Maximus', damage: 20, strength: 30, agility: 15, hp: 100 });
const fighter2 = new Fighter({ name: 'Commodus', damage: 25, strength: 25, agility: 20, hp: 90 });

battle(fighter1, fighter2);