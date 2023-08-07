import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

// Importing Container
import { Container, Card } from "react-bootstrap";

// Importing BootStrap CDN
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import ButtonGroup from "react-bootstrap/ButtonGroup";

// Importing react date range
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// Importing amedius API
import { amadeiusFetch } from "../../utils/API";

const Search = () => {
  const [searchedFlights, setSearchedFlights] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate()
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(searchInput);
    
    if (!searchInput) {
      return false;
    }

    try {
      console.log(searchInput);
      const response = await amadeiusFetch(searchInput);
      if (!response.ok) {
        // throw new Error("something went wrong!");
      }

      const { data } = await response.json();
      const flightData = data.map((flight) => ({
        price: flight.price.base,
        id: flight.id,
      })); 
      navigate("/results", {state: {flightData}})
      console.log(flightData);
      setSearchedFlights(flightData);
      setSearchInput("");
    } catch (err) {
      // console.error(err);
    }
  };

  // const handleChange = (value) => {
  //   // setInput(value);
  //   amadeusFetch(value);
  // };
  return (
    <>
      <ButtonGroup
        aria-label="Basic example"
        as={Col}
        className="position-relative rounded-pill top-100 start-50 translate-middle bi bi-caret-down-fill"
      >
        <Button variant="secondary">Economy</Button>
        <Button variant="secondary">Business</Button>
        <Button variant="secondary">First Class</Button>
      </ButtonGroup>
      <Form onSubmit={handleFormSubmit}>
        <Row>
          <Form.Group as={Col} controlId="formGridState" className="searchForm">
            <Form.Label>Destination From</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter a Destination"
              name="searchInput"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Row>
          <Form.Group as={Col} controlId="formGridState" className="searchForm">
            <Form.Label>Destination To</Form.Label>
            <Form.Control type="text" placeholder="Enter a Destination" 
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}>
            </Form.Control>
          </Form.Group>
        </Row>
        <Form>
        <Row>
          <Form.Group
            className="top-25 searchForm"
            as={Col}
            controlId="formGridState"
          >
            {/* <Form.Label>Check In | Check Out</Form.Label>
            <DatePicker
              selected={startDate}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              onChange={(date) => setStartDate(date)}
            />
            <DatePicker
              selected={endDate}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              onChange={(date) => setEndDate(date)}
            /> */}
          </Form.Group>
          </Row>
          </Form>
          <Form.Group className="searchForm" as={Col} controlId="formGridState">
            <Form.Label>How many Travelers?</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
      <Container>
        <h2 className='pt-5'>
          {searchedFlights.length
            ? `Viewing ${searchedFlights.length} results:`
            : 'Search for a flight to begin'}
        </h2>
        <Row>
          {searchedFlights.map((flight) => {
            return (
              <Col md="4">
                <Card key={flight.flightId} border='dark'>
                  <Card.Body>
                      {/* <Button
                        disabled={savedFlightIds?.some((savedFlightIds) => savedFlightIds === flight.flightId)}
                        className='btn-block btn-info'
                        onClick={() => handleSaveFlight(flight.flightId)}>
                        {savedFlightIds?.some((savedFlightIds) => savedFlightIds === flight.flightId)
                          ? 'This flight has already been saved!'
                          : 'Save this flight!'}
                    </Button> */}
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
    );
};


export default Search;
