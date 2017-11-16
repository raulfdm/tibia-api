const { tibiaTime2Moment } = require('../utils/conversors.utils')

class Character {
  constructor (table) {
    this._table = table
  }

  playerDoesntExists () {
    if (this._table.name === undefined) {
      return "Player doesn't exists"
    }
  }

  get allCharacterInformation () {
    return {
      name: this._table.name,
      formerNames: this._table.formernames,
      sex: this._table.sex,
      vocation: this._table.vocation,
      level: this._table.level,
      achievementPoints: this._table.achievementpoints,
      world: this._table.world,
      formerWorld: this._table.formerworld,
      residence: this._table.residence,
      house: this._table.house,
      guildMembership: this._table.guildmembership,
      lastLogin: tibiaTime2Moment(this._table.lastlogin).format(),
      comment: this._table.comment,
      accountStatus: this._table.accountstatus
    }
  }
}

module.exports = Character
