const { AuthenticationError } = require('apollo-server-express');
const { User, Flights } = require('../models');
const { signToken } = require('../utils/auth');