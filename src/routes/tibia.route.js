module.exports = (app) => {
  app.get('/', async (req, res) => {
    const response = {
      message: 'invalid route',
      availableRoute: {
        '/graphql/player': {
          method: 'POST',
          args: {
            query: 'GraphQL Query',
            example:
              '{ character(characterName: "mad dentist") {name sex vocation level achievmentPoint world residence lastLogin } }',
          },
          response: {
            data: 'JSON containing all required character informations',
          },
        },
      },
    }

    res.json(response)
  })
}
