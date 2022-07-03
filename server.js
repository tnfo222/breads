const express = require('express')

//Configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
  })

//404 Page
app.get('*', (req, res) => {
  res.send('404')
})
  
// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)
  

//Listen
app.listen(PORT, () => {
    console.log('nomming at port', PORT);
})

//Check Port
//console.log(PORT)