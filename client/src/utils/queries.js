import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    {
        user {
            username
            savedFlights {
                flightId
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
    }
    `;

// export const QUERY_FLIGHTS = gql`
//     {
//         flights {
//             _id
//             departureDate
//             returnDate
//             departureLocation
//             destinationLocation
//             airlineDeparture
//             airlineArrival
//             airline
//             price
//         }
//     }
//     `;