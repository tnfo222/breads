//Dependencies
const express = require('express')

//Configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads')
})

// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

//404 Page
app.get('*', (req, res) => {
  res.send('404')
})

//Listen
app.listen(PORT, () => {
    console.log('nomming at port', PORT);
})

//Check Port
//console.log(PORT)