const { Schema, model } = require("mongoose");

const passengerSchema = new Schema({
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
    type: Schema.Types.ObjectId,
    ref: 'passengerSchema',
    default: null,
  },
  homeCity: { type: Array },
  favoriteDestination: { type: Array },
});

const User = model("User", myUserSchema);

module.exports = User;
