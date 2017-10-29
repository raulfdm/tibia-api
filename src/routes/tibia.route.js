const { getCharacterPage, fillAllCharacterInformations } = require('../services/character-services')
const { hasRequiredParameters } = require('../utils/validations')

module.exports = (app) => {
  app.post('/', async (req, res) => {
    const sentParams = req.body
    const hasAllParams = hasRequiredParameters(['characterName'], sentParams)

    if (!hasAllParams.success) {
      res.status(400).json({ ...hasAllParams })
    }

    const playerDom = await getCharacterPage(sentParams.characterName)
    const character = fillAllCharacterInformations(playerDom)

    res.json(character.fullInformations)
  })
}
