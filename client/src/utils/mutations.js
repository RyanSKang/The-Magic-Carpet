import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
    `;

export const ADD_USER = gql`
        mutation addUser($username: String!, $email: String!, $password: String!) {
            addUser(username: $username, email: $email, password: $password) {
                token
                user {
                    _id
                    username
                    email
                }
            }
        }
        `;

export const SAVE_FLIGHT = gql`
    mutation saveFlight($flightInput: FlightInput) {
        saveFlight(flightInput: $flightInput) {
            _id
            username
            flights {
                _id
                departureDate
                returnDate
                departureLocation
                destinationLocation
                airlineDeparture
                airlineArrival
                airline
                price
            }
        }
    }`