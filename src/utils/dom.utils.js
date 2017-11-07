const jsdom = require('jsdom')

const { JSDOM } = jsdom

const { hasSpecificLength } = require('./validations.utils')

const getTextContent = (dom = {}, selector = '') => {
  if (dom.window === undefined) {
    throw new Error('DOM must contains a window property')
  }
  if (hasSpecificLength({ target: selector, length: 0 })) {
    throw new Error('Selector is required')
  }

  return dom.window.document.querySelector(selector).textContent
}

const getDomFromURL = (url = '') => {
  if (hasSpecificLength({ target: url, length: 0 })) {
    throw new Error('URL is required')
  }
  

  return JSDOM.fromURL(url)
}

module.exports = {
  getDomFromURL,
  getTextContent,
}
