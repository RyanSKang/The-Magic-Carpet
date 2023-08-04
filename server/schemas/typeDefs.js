const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        passenger: String
        flights: [Flights]
    }
    
    type Flights {
        _id: ID
        airline: String
        departureDate: Int
        returnDate: Int
        departureLocation: String
        destinationLocation: String
        airlineDeparture: Int
        airlineArrival: Int
        price: Float
    }

    type Itinerary {
        _id: ID
        date: Int
        user: [User]
        flights: [Flights]
    }
    
    type Auth {
        token: ID
        user: User
    }
    
    type Query {
        flights: [Flights]
        user: User
        itinerary: Itinerary
    }
    
    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        updateUser(firstName: String, lastName: String, email: String, password: String): User
        login(email: String!, password: String!): Auth
    }
    `;

    module.exports = typeDefs;