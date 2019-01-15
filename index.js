const express = require('express')
const app = express()
const port = 3005

app.get('/', (req, res) => res.send('Super Simple!'))
app.get('/patrick', (req, res) => res.send('Patrick is an amazing dev!'))

app.listen(port, () => console.log(`Basic api is running on port ${port}`))