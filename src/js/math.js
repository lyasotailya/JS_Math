export default class MathChar {
  constructor(name) {
    this.name = name
    this.distance = 1
    this.lock = false
    this.attack = 100
  }

  getAttack() {
    if (this.distance === 0) return
    this.attack -= (this.attack * (10 / 100) * (this.distance - 1))
    if (this.lock === true) {
      this.attack = Math.round(this.attack - (Math.log2(this.distance) * 5))
    }
    if (this.attack < 0) this.attack = 0
    return this.attack
  }

  setAttack(value) {
    this.attack = value
  }

  getStoned() {
    return this.lock
  }

  setStoned(value) {
    this.lock = value
  }
}

export class Daemon extends MathChar {
  constructor(name) {
    super(name);
    this.type = 'Daemon';
  }
}

export class Magician extends MathChar {
  constructor(name) {
    super(name);
    this.type = 'Magician';
  }
}
