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
    mutation saveFlight($input: FlightInput) {
        saveFlight(input: $input) {
            _id
            username
            savedFlights {
                flightID
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