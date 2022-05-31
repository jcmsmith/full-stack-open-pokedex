const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/ping', (req, res) => {
  res.send('ok') // change this string to ensure a new version deployed
})

app.get('/version', (req, res) => {
  res.send('3') // change this string to ensure a new version deployed
})

app.listen(PORT, () => {
  console.log('server started on port 5000')
})
