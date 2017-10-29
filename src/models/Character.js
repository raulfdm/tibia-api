class Character {
  constructor() {
    this._name = ''
    this._sex = ''
    this._vocation = ''
    this._level = ''
    this._achievmentPoint = ''
    this._world = ''
    this._residence = ''
    this._lastLogin = ''
    this._accountStatus = ''
  }

  /* SETTERS */
  set name(name) {
    this._name = name
  }
  set sex(sex) {
    this._sex = sex
  }

  set vocation(vocation) {
    this._vocation = vocation
  }

  set level(level) {
    this._level = level
  }

  set achievmentPoint(achievmentPoint) {
    this._achievmentPoint = achievmentPoint
  }

  set world(world) {
    this._world = world
  }

  set residence(residence) {
    this._residence = residence
  }

  set lastLogin(lastLogin) {
    this._lastLogin = lastLogin
  }

  set accountStatus(accountStatus) {
    this._accountStatus = accountStatus
  }

  /* GETTERS */
  get name() {
    return this._name
  }
  get sex() {
    return this._sex
  }
  get vocation() {
    return this._vocation
  }
  get level() {
    return this._level
  }
  get world() {
    return this._world
  }
  get achievmentPoint() {
    return this._achievmentPoint
  }
  get residence() {
    return this._residence
  }
  get lastLogin() {
    return this._lastLogin
  }
  get accountStatus() {
    return this._accountStatus
  }

  get fullInformations() {
    return {
      name: this._name,
      sex: this._sex,
      vocation: this._vocation,
      level: this._level,
      achievmentPoint: this._achievmentPoint,
      world: this._world,
      residence: this._residence,
      lastLogin: this._lastLogin,
      accountStatus: this._accountStatus,
    }
  }
}

module.exports = Character
