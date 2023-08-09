import React, { useState, useEffect } from 'react';
import {
  Container,
  Card,
  Button,
  Row,
} from 'react-bootstrap';

import { getMe, deleteFlight } from '../utils/API';
import Auth from '../utils/auth';
import { removeFlightId } from '../utils/localStorage';
import { QUERY_USER } from '../utils/queries';
import { useQuery } from '@apollo/client';

const SavedFlights = () => {
  const [userData, setUserData] = useState({});

  // use this to determine if `useEffect()` hook needs to run again
  // const userDataLength = Object.keys(userData).length;

  const { data, error, loading } = useQuery(QUERY_USER)
  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
          return false;
        }

        // const response = await getMe(token);

        // if (!response.ok) {
        //   throw new Error('something went wrong!');
        // }

        // const user = await response.json();

        console.log(data);

        setUserData(data.user);
      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  }, [data]);

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteFlight = async (flightId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await deleteFlight(flightId, token);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const updatedUser = await response.json();
      setUserData(updatedUser);
      // upon success, remove book's id from localStorage
      removeFlightId(flightId);
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <div fluid className='text-light bg-dark p-5'>
        <Container>
          <h1>Viewing saved Flights!</h1>
        </Container>
      </div>
      <Container>
        <h2 className='pt-5'>
          {userData.flights && userData.flights.length
            ? `Viewing ${userData.flights.length} saved ${userData.flights.length === 1 ? 'flight' : 'flights'}:`
            : 'You have no saved flights!'}
        </h2>
        <Row>
          {userData.flights && userData.flights.length ? (userData.flights.map((flight) => {
            return (
              <Card>
                <p>{flight.originLocation}</p>
                <p>{flight.destinationLocation}</p>
                <p>{flight.price}</p>
                <p>{flight.travelers}</p>
                <p>{flight.iataCode}</p>
                <p>{flight.id}</p>
                <p>{flight.duration}</p>
                <Button variant="primary" onClick={() => handleDeleteFlight(flight.flightId)} className="me-2">
                  Delete Flight
                </Button>
              </Card>
            );
          })) : (<h2>You have no flights</h2>)}
        </Row>
      </Container>
    </>
  );
};

export default SavedFlights;
