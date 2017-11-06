const express = require('express')
const graphqlHTTP = require('express-graphql')

const schema = require('../schemas/Character')

module.exports = () => {
  const app = express()

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
  })

  app.use(
    '/player',
    graphqlHTTP({
      formatError: error => ({ message: error.message }),
      schema,
      graphiql: true,
    }),
  )

  return app
}
