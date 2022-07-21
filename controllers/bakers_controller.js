// Dependencies
const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker.js')
const bakerSeedData = require('../models/baker_seed.js')

// Seed route
baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
        .then(res.redirect('/breads'))
})

// Index 
baker.get('/', (req, res) => {
    Baker.find()
        .populate('Breads')
        .then(foundBakers => {
            res.send(foundBakers)
        })
})                    

// delete
baker.delete('/:id', (req, res) => {
    Baker.findByIdAndDelete(req.params.id) 
      .then(deletedBaker => { 
        res.status(303).redirect('/breads')
      })
})

// export
module.exports = baker                    
