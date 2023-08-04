import React from "react";

// Importing BootStrap CDN
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Search = () => {
  return (
    <>
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary">Economy</Button>
        <Button variant="secondary">Business</Button>
        <Button variant="secondary">First Class</Button>
      </ButtonGroup>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>
        <Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Check In</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Check Out</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
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
    </>
  )
}

export default Search
