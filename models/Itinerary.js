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
  flight: [flights],
});

const itinerary = mongoose.model("intinerary", travelSchema);

module.exports = itinerary;
