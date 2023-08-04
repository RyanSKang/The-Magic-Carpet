const { Schema, model } = require("mongoose");
const Flights = require("./flights");
// const users = require("./users").schema;

const travelSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  date: { type: String },
  // flights: [Flights],
});

const Itinerary = model("Itinerary", travelSchema);

module.exports = Itinerary;