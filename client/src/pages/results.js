import React, { useState, useEffect } from "react";
import { Container, Col, Form, Button, Card, Row } from "react-bootstrap";
import API from "../utils/API";
import Auth from "../utils/auth";
// import { saveFlight, searchFlights } from "../utils/API";
import { getSavedFlights, saveFlightsId } from "../utils/localStorage";

API = () => {
  // create state for returned flights data
  const [searchFlights, getSearchedFlights] = useState([]);
  // create state for return searched flights
  const [searchInput, getSearchInput] = useState("");
  // create state to hold saved flightId values
  const [savedFlightsIds, getSavedFlightIds] = useState(getSavedFlights);
  // set up useEffect hook to save 'savedFlightIds' list to localStorage on component unmount
  useEffect(() => {
    return () => saveFlightsId(savedFlightsIds);
  });

  // create method to search for flights and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await searchFlights(searchInput);

      if (!response.ok) {
        throw new Error("Search error!");
      }
      const { items } = await response.json();

      const flightData = items.map((flight) => ({
        flightId: flight.id,
      }));

      getSearchedFlights(flightData);
      getSearchInput("");
    } catch (err) {
      console.error(err);
    }
  };

  // create function to handle saving a flight to our database
  const saveFlight = async (flightId) => {
    const flightToSave = searchFlights.find(
      (flight) => flight.flightId === flightId
    );

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }
    try {
      const response = await saveFlight(flightToSave, token);

      if (!response.ok) {
        throw new Error("Error!");
      }
      // if flight saves to user's acct, save flight id to state
      getSavedFlightIds([...savedFlightsIds, flightToSave.flightId]);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="text-light bg-dark pt-5">
        <Container>
          <h1>Search for a Flight!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name="searchInput"
                  value={searchInput}
                  onChange={(e) => getSearchInput(e.target.value)}
                  type="text"
                  size="lg"
                  placeholder="Search for a flight"
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type="submit" variant="success" size="lg">
                  Submit Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
      <Container>
        <h2 className="pt-5">
          {API.length
            ? `Viewing ${searchFlights.length} results:`
            : "Search for a flight to get started"}
        </h2>
        <Row>
          {searchFlights.map((flight) => {
            return (
              <Col md="4">
                <Card key={flight.flightId} border="dark">
                  {flight.image ? (
                    <Card.Img src={flight.image} variant="top" />
                  ) : null}
                  <Card.Body>
                    {Auth.loggedIn() && (
                      <Button
                        disabled={savedFlightsIds?.some(
                          (savedFlightIds) => savedFlightIds === flight.flightId
                        )}
                        className="btn-block btn-info"
                        onClick={() => saveFlight(flight.flightId)}
                      >
                        {savedFlightsIds?.some(
                          (savedFlightIds) => savedFlightIds === flight.flightId
                        )
                          ? "This flight has been saved previously!!"
                          : "Save this Flight for the future!"}
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default API;
