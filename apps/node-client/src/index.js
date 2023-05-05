const express = require('express')
const app = express()
const port = 3008

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/post-test', (req, res) => {
  res.send('Got a POST request test')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
