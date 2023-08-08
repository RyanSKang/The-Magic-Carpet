const { AuthenticationError } = require('apollo-server-express');
const { User, Flights, Itinerary } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        flights: async () => {
            return await Flights.find();
        },
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate('flights');
                return user;
            };
            throw new AuthenticationError('Not logged in')
        },
        itinerary: async (parent, { _id}) => {
            return await Itinerary.findById(_id).populate();
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
        // saveFLight: async (parent, { flightInput}, context) => {
        //     console.log(context.user);
        //     console.log(flightInput);
        //     if (context.user) {
        //         const flight = await User.findByIdAndUpdate(
        //             { _id: context.user._id },
        //             { $push: { savedFlights: flightInput } },
        //             { new: true }
        //         );
        //         return flight;
        //     }
        //     throw new AuthenticationError("You need to be logged in!");

        }
    }
// };

module.exports = resolvers;
