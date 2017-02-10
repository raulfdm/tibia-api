const TibiaAPI = require('../api/tibia.api');

module.exports = app => {

    app
        .get('/', function (req, res) {
            TibiaAPI
                .validateParameter(req.query)
                .then(characterName => TibiaAPI.getCharacterName(characterName))
                .then(parameterNameForGet => TibiaAPI.consultSite(app, parameterNameForGet))
                .then(htmlResponse => TibiaAPI.createCharacterObject(htmlResponse))
                .then(character => res.json(character))
                .catch(err => console.log(err));

        });
}