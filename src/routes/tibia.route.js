const TibiaAPI = require('../api/tibia.api');

module.exports = app => {

    app.post('/', (req, res) => {
        TibiaAPI
            .validateParameter(req.body)
            .then(characterName => TibiaAPI.getCharacterName(characterName))
            .then(parameterNameForGet => TibiaAPI.consultSite(app, parameterNameForGet))
            .then(htmlResponse => TibiaAPI.createCharacterObject(htmlResponse))
            .then(character => res.json(character))
            .catch(err => res.status(400).json({error: err.message}));
    })
}