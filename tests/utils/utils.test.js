const { fixCharacterName } = require('../../src/utils/utils')

describe('Testing fixCharacterName function', () => {
  test(`Should throw when doesn't pass a character name`, () => {
    expect(() => fixCharacterName()).toThrow()
  })

  test('Should return the same name when it containes just one', () => {
    expect(fixCharacterName('Arlindo')).toBe('arlindo')
  })

  test('Should return a new name replacing space to dash', () => {
    expect(fixCharacterName('arlindo anomalia')).toBe('arlindo+anomalia')
  })

  test('Should return all letters in lowerCase', () => {
    expect(fixCharacterName('ARLINDO ANOMALIA')).toBe('arlindo+anomalia')
  })
})
