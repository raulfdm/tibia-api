const jsdom = require('jsdom')

const { JSDOM } = jsdom

const { getTextContent, getDomFromURL } = require('../../src/utils/dom.utils')

describe('fn: getTextContent', () => {
  test('Should throw with pass a DOM without window prop', () => {
    expect(() => getTextContent({})).toThrow()
  })
  test('Should throw with do not pass a DOM', () => {
    expect(() => getTextContent()).toThrow()
  })
  test('Should throw if do not pass a selector', () => {
    expect(() => getTextContent({ window: {} })).toThrow()
  })

  test('Should return the textContent from a element DOM', () => {
    const html = '<h1>Hello test!</h1>'

    const dom = new JSDOM(html)

    expect(getTextContent(dom, 'h1')).toEqual('Hello test!')
  })
})

describe('fn: getDomFromURL', () => {
  test('Should throw when do not pass URL param', () => {
    expect(() => getDomFromURL()).toThrow()
  })

  test('Should return a instance of JSDOM', () => {
    getDomFromURL('https://secure.tibia.com/community/?subtopic=characters&name=')
      .then(dom => expect(dom).toBeInstanceOf(JSDOM))
      .catch(err => null)
  }) 
})
