let mongoose = require('mongoose')
mongoose.set('debug', true) // debug mode 
mongoose.connect('mongodb://localhost/simple-todo-api') // connect to db 

mongoose.Promise = Promise // allows us to use promise syntax

module.exports.Todo = require("./todo")