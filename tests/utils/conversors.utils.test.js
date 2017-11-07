const { tibiaTime2Moment, replaceTimeZone } = require('../../src/utils/conversors.utils')
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
    expect(dateCEST.format()).toBe('2015-09-02T22:42:50+02:00')

    const dateCET = tibiaTime2Moment('Sep 02 2015, 23:42:50 CET')
    expect(dateCET.format()).toBe('2015-09-02T23:42:50+02:00')
  })

  test('Should throw when passed a invalide date', () => {
    expect(() => tibiaTime2Moment('NOT A VALID DATE CET')).toThrowError()
  })
})

describe('fn: replaceTimeZone', () => {
  test('Should throw when not pass a param', () => {
    expect(() => replaceTimeZone()).toThrowError()
  })

  test("Should return 'Sep 02 2015, 23:42:50 +0200' when passed 'Sep 02 2015, 23:42:50 CET' ", () => {
    expect(replaceTimeZone('Sep 02 2015, 23:42:50 CET')).toBe('Sep 02 2015, 23:42:50 +0200')
  })

  test("Should return 'Sep 02 2015, 23:42:50 +0200' when passed 'Sep 02 2015, 23:42:50 CEST' ", () => {
    expect(replaceTimeZone('Sep 02 2015, 23:42:50 CEST')).toBe('Sep 02 2015, 23:42:50 +0300')
  })
})
