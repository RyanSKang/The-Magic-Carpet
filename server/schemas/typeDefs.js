const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        flights: [Flights]
    }
    
    type Flights {
        _id: ID
        airline: String
        image: String
        price: Float
    }
    
    type Auth {
        token: ID
        user: User
    }
    
    type Query {
        flights: [Flights]
        user: User
    }
    
    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        updateUser(firstName: String, lastName: String, email: String, password: String): User
        login(email: String!, password: String!): Auth
    }
    `;

    module.exports = typeDefs;