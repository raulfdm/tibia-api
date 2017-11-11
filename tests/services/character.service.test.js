const { getCharacterInfos } = require('../../src/services/character.service')

describe('fn: getCharacterInfos', () => {
  test('Should throw if do not pass a nickname', () =>
    getCharacterInfos().catch(e => () => expect(e).toThrow()))

  test('Should return an object cointaining informations', () =>
    getCharacterInfos('mad dentist').then((player) => {
      expect(player).toMatchObject({
        accountStatus: 'Free Account',
        achievementPoints: '18',
        lastLogin: '2015-09-02T23:42:50+02:00',
        level: '60',
        name: 'Mad Dentist ',
        residence: 'Thais',
        sex: 'female',
        vocation: 'Knight',
        world: 'Fortera',
      })
    }))
})
