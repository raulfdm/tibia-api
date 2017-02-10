const TibiaAPI = require('../api/tibia.api');

module.exports = app => {

    /*Passos
    1. Validar o parametro;
    2. pegar o nome do player;
    3. Consultar o site;
    4. montar as informações;
    5. retornar o dado;
    */

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