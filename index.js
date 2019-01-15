const express = require('express')
const app = express()
const port = 3005
const bodyParser = require('body-parser')

let todoRoutes = require('./routes/todos')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => res.send('Hello form the root route'))

app.use('/api/todos', todoRoutes)



// app.get('/', (req, res) => res.send('Super Simple!'))
// app.get('/patrick', (req, res) => res.send('<h1>Patrick is an amazing dev!</h1>'))
// app.get('/data', (req, res) => res.send({message: "Want some JSON?"}))
// app.get('/explicit_data', (req, res) => res.json({message: "Have some JSON!"}))

app.listen(port, () => console.log(`Basic api is running on port ${port}`))