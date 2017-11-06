const app = require('./config/express.config.js')()
const logger = require('winston')

const port = process.env.PORT || 8080

app.listen(port, () => {
  logger.log('info', `Server is running on port ${port}`)
})
