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
                console.log(context.user);
                try {
                    const user = await User.findById(context.user._id).populate('flights');
                    console.log(user)
                    return user;
                }
                catch (err) {
                    console.log(err)
                    throw new AuthenticationError('Not logged in')
                }
            }
        },
        itinerary: async (parent, { _id }) => {
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
        async saveFlight(parent, { flightInput }) {
            if (context.user) {
                const flights= await Flights.create({
                    
                })
            }
            try {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: flightInput.userId },
                    { $addToSet: { flights: {username: fl}} },
                    { new: true, runValidators: true }
                );
            } catch (err) {
                console.log(err);
            }
        },
        // remove a flight from `savedFlights`

        // async deleteFlight({ user, params }, res) {
        //     const updatedUser = await User.findOneAndUpdate(
        //         { _id: user._id },
        //         { $pull: { savedFlights: { _id: params._id } } },
        //         { new: true }
        //     );
        //     if (!updatedUser) {
        //         return res.status(404).json({ message: "Couldn't find user with this id!" });
        //     }
        //     return res.json(updatedUser);
        // },
    }
};


module.exports = resolvers;
