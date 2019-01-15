const express = require('express')
const app = express()
const port = 3005

app.get('/', (req, res) => res.send('Super Simple!'))

app.listen(port, () => console.log(`Basic api is running on port ${port}`))