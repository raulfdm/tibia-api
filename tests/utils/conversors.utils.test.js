const { tibiaTime2Moment } = require('../../src/utils/conversors.utils')
const moment = require('moment-timezone')

describe('fn: tibiaTime2Moment', () => {
  test('Should throw when not pass a param', () => {
    expect(() => tibiaTime2Moment()).toThrowError()
  })

  test('Should return an object instece of "moment"', () => {
    const newDate = tibiaTime2Moment('Sep 02 2015, 23:42:50 CEST')
    expect(newDate).toBeInstanceOf(moment)
  })

  test('Should return a correct simple format()', () => {
    const dateCEST = tibiaTime2Moment('Sep 02 2015, 23:42:50 CEST')
    expect(dateCEST.format()).toBe('2015-09-02T23:42:50+02:00')
  })

  test('Should throw when passed a invalide date', () => {
    expect(() => tibiaTime2Moment('NOT A VALID DATE CET')).toThrowError()
  })
})
