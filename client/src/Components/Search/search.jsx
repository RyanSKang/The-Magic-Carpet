import React, { useState } from "react";

// Importing BootStrap CDN
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

// Importing react date range
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Search = ({ setResults }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // API Token
  const token = "hblCUGeTjn0KQQL8VygxEo1UvDZP"

  // API Fetch
  const amadeusFetch = () => {
    fetch("https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2023-11-01&adults=1&max=2", {
      method: "GET",
      headers: {
        "Content-Type": "application/vnd.amadeus+json",
        "Authorization": `Bearer ${token}`
      },
      mode: "cors",
      catch: "default"
    }).then(function (response) {
      console.log(response);
      if (response.ok) {
        return response.json();
      }
      // else{
      //     throw new Error(error);
      // }
    }).then(function (data) {
      console.log(data);
      //query data here
      setResults(data);
    }).catch(function (error) {
      console.log(error);
    });
  };

  const handleChange = (value) => {
    // setInput(value);
    amadeusFetch(value);
  }

  return (
    <>
      <ButtonGroup aria-label="Basic example" as={Col} className="position-relative rounded-pill top-100 start-50 translate-middle bi bi-caret-down-fill">
        <Button variant="secondary">Economy</Button>
        <Button variant="secondary">Business</Button>
        <Button variant="secondary">First Class</Button>
      </ButtonGroup>
      <Form>
        <Row>
          <Form.Group as={Col} controlId="formGridState" className="searchForm">
            <Form.Label>Destination From</Form.Label>
            <Form.Control type="text" placeholder="Enter an Origin" ></Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Destination To</Form.Label>
            <Form.Control type="text" placeholder="Enter a Destination" ></Form.Control>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="top-25 searchForm" as={Col} controlId="formGridState">
            <Form.Label>Check In | Check Out</Form.Label>
            <DatePicker
              selected={startDate}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              onChange={date => setStartDate(date)}
            />
            <DatePicker
              selected={endDate}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              onChange={date => setEndDate(date)}
            />
          </Form.Group>
          <Form.Group className='searchForm' as={Col} controlId="formGridState">
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
        <Button onClick={(e) => handleChange(e.target.value)} variant="primary" type="search">
          Search
        </Button>
      </Form>
    </>
  )
}

export default Search
