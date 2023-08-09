const { Schema, model } = require("mongoose");

const magicCarpetSchema = new Schema({
  departureDate: { type: String },
  returnDate: { type: String },
  departureLocation: { type: String },
  destinationLocation: { type: String },
  airlineDeparture: { type: Number },
  airlineArrival: { type: Number },
  airline: { type: String },
  price: { type: Number },
  // departureObj: { type: Object },
  // arrivalObj: { type: Object },
  flightId: { type: String, required: true }
});

const Flights = model("flights", magicCarpetSchema);

module.exports = Flights;

