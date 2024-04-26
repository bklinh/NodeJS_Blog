const express = require('express')
const app = express()
const port = 3000

// arrow function
app.get('/', (req, res) => { //try '/page'
  res.send('Hello World!')
})

// 127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})