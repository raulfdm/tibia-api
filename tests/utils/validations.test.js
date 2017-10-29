const { hasEspecialCharacters, hasRequiredParameters } = require('../../src/utils/validations')

describe('hasEspecialCharacters: fn', () => {
  test('Should return true if contains especial chars and numbers', () => {
    expect(hasEspecialCharacters('raul-')).toBeTruthy()
    expect(hasEspecialCharacters('[raul')).toBeTruthy()
    expect(hasEspecialCharacters('raul1')).toBeTruthy()
  })
  test('Should return false if does not contains especial chars and numbers', () => {
    expect(hasEspecialCharacters('raul')).toBeFalsy()
    expect(hasEspecialCharacters('raul felipe')).toBeFalsy()
  })
})

describe('hasRequiredParameters: fn', () => {
  test('Should throw if list of params is empty', () => {
    expect(() => hasRequiredParameters([], { name: '' })).toThrow()
  })

  test('Should return a list of args not sent in requestBody', () => {
    expect(hasRequiredParameters(['name', 'age'], { name: '' })).toEqual({
      success: false,
      missingArgs: ['age'],
    })

    expect(hasRequiredParameters(['name', 'age'], {})).toEqual({
      success: false,
      missingArgs: ['name', 'age'],
    })
  })

  test('Should return success when all params was sent', () => {
    expect(hasRequiredParameters(['name', 'age'], { name: 'raul', age: 33 })).toEqual({
      success: true,
      missingArgs: [],
    })
  })
})
