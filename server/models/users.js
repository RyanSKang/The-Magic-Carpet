const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');

// const passengerSchema = new Schema({
//   stripeId: {
//     type: String,
//     required: true,
//   },
// });

const myUserSchema = new Schema({
  username: { type: String, reguired: true },
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

// set up pre-save middleware to create password
myUserSchema.pre('save', async function(next) {
  if( this.isnew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// compare the incoming password with the hashed password
myUserSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", myUserSchema);

module.exports = User;
