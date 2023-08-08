import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Importing Container & Card
import { Container, Card } from "react-bootstrap";

// Importing BootStrap CDN
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import ButtonGroup from "react-bootstrap/ButtonGroup";

// Importing react date range
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Importing amedius API
import { amadeiusFetch } from "../../utils/API";

const Search = () => {
    const [searchedFlights, setSearchedFlights] = useState([]);
    const [destinationLocation, setDestinationLocation] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [originLocation, setOriginLocation] = useState();
    const [travelers, setTravelers] = useState();
    // const [travelers] = useState();
    console.log(startDate, endDate);
    const navigate = useNavigate()
    const formatDate = (date) => {
        return date.toISOString().split('T')[0]
    };
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (!destinationLocation) {
            return false;
        }

        try {
            console.log(destinationLocation);
            const response = await amadeiusFetch(destinationLocation, originLocation, formatDate(startDate), formatDate(endDate), travelers);
            if (!response.ok) {
                // throw new Error("something went wrong!");
            }

            const { data } = await response.json();
            console.log(data);
            const flightData = data.map((data) => ({
                price: data.price.base,
                id: data.id,
                travelers: data.travelers,
                originLocation: data.originLocation,
                iataCode: data.iataCode,
                destinationLocation: data.destinationLocation,
                // searchInput instead of arrival
                duration: data.duration
            }));
            navigate("/results", { state: { flightData } })
            console.log(flightData);
            setSearchedFlights(data);
            setDestinationLocation("");
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
            <Form onSubmit={handleFormSubmit} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'auto', textAlign: 'center' }}>
                <Row>
                    <Form.Group as={Col} controlId="formGridState" className="searchForm">
                        <Form.Label>Destination From</Form.Label>
                        <Form.Control
                            value={originLocation}
                            type="text"
                            placeholder="Leaving from"
                            name="searchInput"
                            // value={searchInput}
                            onChange={(e) => setOriginLocation(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState" className="searchForm">
                        <Form.Label>Destination To</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter a Destination"
                            value={destinationLocation}
                            onChange={(e) => setDestinationLocation(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="searchForm" as={Col} controlId="formGridState">
                        <Form.Label>How many Travelers?</Form.Label>
                        <Form.Select
                            value={travelers}
                            defaultValue="Choose..."
                            onChange={(event) => { setTravelers(event.target.value) }}
                        >
                            <option>Choose...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="searchForm" as={Col} controlId="formGridState">
                        <Form.Label>Check In | Check Out</Form.Label>
                        <Form style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 'auto' }}>
                            <DatePicker
                                className="p-1 l-1"
                                selected={startDate}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                onChange={(date) => setStartDate(date)}
                            />
                            <DatePicker
                                className="p-1 r-1"
                                selected={endDate}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                                onChange={(date) => setEndDate(date)}
                            />
                        </Form>
                    </Form.Group>
                </Row>
            </Form>
            <Form.Group style={{ display: 'flex', marginTop: '2rem' }}>
                <Button
                    variant="primary"
                    type="submit"
                    className="btn-block my-auto mx-auto">
                    Search
                </Button>
            </Form.Group>
            <Container>
                {/* <h2 className='pt-5'>
          {searchedFlights.length
            ? `Viewing ${searchedFlights.length} results:`
            : 'Search for a flight to begin'}
        </h2> */}
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
