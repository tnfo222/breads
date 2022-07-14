// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

//schema
const bakerSchema = new Schema ({
    name: {
        type: String,
        required: true,
        enum: ('Rachel' , 'Monica' , 'Joey' , 'Chandler' , 'Rose' , 'Phoebe')
    },
    startDate: {
        type: Date,
        required: true
    },
    bio: String
})

//Model and Export
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker