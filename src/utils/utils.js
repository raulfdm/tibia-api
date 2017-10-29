const fixCharacterName = (characterName = '') => {
  if (characterName.length === 0) {
    throw new Error('Nome do personagem é necessário')
  }

  const arrayOfCharacterName = characterName.split(' ')

  return arrayOfCharacterName.length === 1
    ? characterName.toLowerCase()
    : arrayOfCharacterName.join('+').toLowerCase()
}

const getDomElement = (dom, selector) => dom.window.document.querySelector(selector)

const getPropertyValue = (HTMLElement, attr) => HTMLElement[attr]

const firstLetterUpperCase = (text) => {}

module.exports = {
  fixCharacterName,
  getDomElement,
  getPropertyValue,
}
