const app = require('./config/express.config.js')()

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
