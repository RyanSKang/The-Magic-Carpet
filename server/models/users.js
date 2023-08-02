const mongoose = require("mongoose");

const { Schema } = mongoose;

const passengerSchema = new mongoose.Schema({
  stripeId: {
    type: String,
    required: true,
  },
});

const myUserSchema = new Schema({
  name: { type: String, reguired: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  passenger: {
    type: passengerSchema,
    default: null,
  },
  homeCity: { type: Array },
  favoriteDestination: { type: Array },
});

const User = mongoose.model("User", myUserSchema);

module.exports = User;
