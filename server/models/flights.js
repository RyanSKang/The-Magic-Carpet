const mongoose = require("mongoose");

const { Schema } = mongoose;
const magicCarpetSchema = new Schema({
  departureDate: { type: Date },
  returnDate: { type: Date },
  departureLocation: { type: String },
  destinationLocation: { type: String },
  airlineDeparture: { type: Number },
  airlineArrival: { type: Number },
  airline: { type: String },
  price: { type: Number },
  departureObj: { type: Object },
  arrivalObj: { type: Object },
});

const Flights = mongoose.model("Flights", magicCarpetSchema);

module.exports = Flights;

