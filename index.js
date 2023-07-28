const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const basicAuth = require('express-basic-auth')

const app = express()
const port = 3000

// app.use(basicAuth({
//     users: { 'admin': 'admin' }
// })) 

app.use(cors())
app.use(helmet())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

