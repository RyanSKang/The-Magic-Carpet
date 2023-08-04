const mongoose = require('mongoose')

const {Schema} = mongoose

const citiesSchema = new Schema({
    name: {type: String, required: true},
    country: {type: String, required: true},
    cities: {type: String, required: true}
})

const City = mongoose.model('City', citiesSchema)