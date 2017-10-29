const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const graphqlHTTP = require('express-graphql')
const schema = require('../schema/Character.js')

module.exports = () => {
  const app = express()

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
  })

  app.use(bodyParser.json())
  app.use(
    '/graphql/player',
    graphqlHTTP({
      schema,
      graphiql: true,
    }),
  )

  consign({ cwd: 'src' })
    .include('api')
    .then('routes')
    .into(app)

  return app
}
