const jsdom = require('jsdom')

const { JSDOM } = jsdom

const { getDomElement, getPropertyValue } = require('../utils/utils')

const Character = require('../models/Character')

const getCharacterPage = async (characterName = '') =>
  new Promise(async (resolve, reject) => {
    if (characterName.length === 0) {
      reject(new Error('Nome do personagem não pode ser vazio'))
    }
    try {
      const url = `https://secure.tibia.com/community/?subtopic=characters&name=${characterName}`
      const dom = await JSDOM.fromURL(url)
      resolve(dom)
    } catch (error) {
      reject(error)
    }
  })

const fillAllCharacterInformations = (dom) => {
  const character = new Character()
  character.name = getPropertyValue(
    getDomElement(
      dom,
      '#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(2)',
    ),
    'textContent',
  )
  character.sex = getPropertyValue(
    getDomElement(
      dom,
      '#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(3) > td:nth-child(2)',
    ),
    'textContent',
  )
  character.vocation = getPropertyValue(
    getDomElement(
      dom,
      '#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(4) > td:nth-child(2)',
    ),
    'textContent',
  )
  character.level = getPropertyValue(
    getDomElement(
      dom,
      '#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(5) > td:nth-child(2)',
    ),
    'textContent',
  )
  character.achievmentPoint = getPropertyValue(
    getDomElement(
      dom,
      '#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(6) > td:nth-child(2)',
    ),
    'textContent',
  )
  character.world = getPropertyValue(
    getDomElement(
      dom,
      '#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(7) > td:nth-child(2)',
    ),
    'textContent',
  )
  character.residence = getPropertyValue(
    getDomElement(
      dom,
      '#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(8) > td:nth-child(2)',
    ),
    'textContent',
  )
  character.lastLogin = getPropertyValue(
    getDomElement(
      dom,
      '#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(9) > td:nth-child(2)',
    ),
    'textContent',
  )
  character.accountStatus = getPropertyValue(
    getDomElement(
      dom,
      '#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(10) > td:nth-child(2)',
    ),
    'textContent',
  )

  return character
}

module.exports = {
  getCharacterPage,
  fillAllCharacterInformations,
}
