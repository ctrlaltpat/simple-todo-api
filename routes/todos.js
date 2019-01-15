let express = require('express')
let router = express.Router()

router.get('/', (res,res) =>{
  res.send('Hello from todos routes')
})