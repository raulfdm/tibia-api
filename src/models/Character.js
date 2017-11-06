const { getTextContent } = require('../utils/dom.utils')

class Character {
  constructor(dom) {
    this._dom = dom
  }

  playerDoesntExists() {
    const selector = '#characters > div.Border_2 > div > div > table > tbody > tr:nth-child(1) > td > b'
    const title = getTextContent(this._dom, selector)
    return /not find/gi.test(title)
  }

  get name() {
    const selector = '#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(2)'
    return getTextContent(this._dom, selector)
  }
  get sex() {
    const selector = '#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(3) > td:nth-child(2)'
    return getTextContent(this._dom, selector)
  }
  get vocation() {
    const selector = '#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(4) > td:nth-child(2)'
    return getTextContent(this._dom, selector)
  }
  get level() {
    const selector = '#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(5) > td:nth-child(2)'
    return getTextContent(this._dom, selector)
  }
  get achievementPoints() {
    const selector = '#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(6) > td:nth-child(2)'
    return getTextContent(this._dom, selector)
  }
  get world() {
    const selector = '#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(7) > td:nth-child(2)'
    return getTextContent(this._dom, selector)
  }
  get residence() {
    const selector = '#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(8) > td:nth-child(2)'
    return getTextContent(this._dom, selector)
  }
  get lastLogin() {
    const selector = '#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(9) > td:nth-child(2)'
    return getTextContent(this._dom, selector)
  }
  get accountStatus() {
    const selector = '#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(10) > td:nth-child(2)'
    return getTextContent(this._dom, selector)
  }

  get allCharacterInformation() {
    return {
      name: this.name,
      sex: this.sex,
      vocation: this.vocation,
      level: this.level,
      achievementPoints: this.achievementPoints,
      world: this.world,
      residence: this.residence,
      lastLogin: this.lastLogin,
      accountStatus: this.accountStatus,
    }
  }
}

module.exports = Character
