const express = require('express')
var cors = require('cors')
var app = express()
app.use(cors())
const port = 8080
app.get('/', cors(), function (req, res) {
  res.send('Hello World!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
