const { hasSpecificLength } = require('../../src/utils/validations.utils')

describe('fn: hasSpecificLength', () => {
  test('Should throw if do not pass "target" param', () => {
    expect(() => hasSpecificLength({ length: 1 })).toThrow()
  })

  test('Should throw if pass "target" param as a non string', () => {
    expect(() => hasSpecificLength({ target: 1 })).toThrow()
    expect(() => hasSpecificLength({ target: false })).toThrow()
    expect(() => hasSpecificLength({ target: undefined })).toThrow()
    expect(() => hasSpecificLength({ target: {} })).toThrow()
  })

  test('Should throw if do not pass "length" param', () => {
    expect(() => hasSpecificLength({ target: 'Alou' })).toThrow()
  })

  test('Should throw if pass "length" param as a non number', () => {
    expect(() => hasSpecificLength({ target: '1' })).toThrow()
    expect(() => hasSpecificLength({ target: false })).toThrow()
    expect(() => hasSpecificLength({ target: undefined })).toThrow()
    expect(() => hasSpecificLength({ target: {} })).toThrow()
  })

  test('Should return true if target.length is not different from length', () => {
    expect(hasSpecificLength({ target: 'hello', length: 5 })).toBeTruthy()
  })

  test('Should return false if target.length is diferent from length', () => {
    expect(hasSpecificLength({ target: 'hello', length: 6 })).toBeFalsy()
  })
})
