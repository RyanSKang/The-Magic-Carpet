const mongoose = require("mongoose");
const { Schema } = mongoose;
const flights = require("./flights").schema;
const users = require("./users").schema;

const travelSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: users,
    required: true,
  },
  date: { type: true },
  flights: [flightslights],
});

const Itinerary = mongoose.model("Itinerary", travelSchema);

module.exports = Itinerary;