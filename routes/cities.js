const mongoose = require('mongoose');

const { Schema } = mongoose;

const citiesSchema = new Schema({
  cityName: { type: String, required: true },
  CityCountry: { type: String, required: true },
  cityId: { type: String, required: true },
  CityImageUrl: {type: String}
});

const City = mongoose.model('City', citiesSchema);

module.exports = City;