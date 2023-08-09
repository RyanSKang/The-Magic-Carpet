import React from "react";
import { Container, Col, Form, Button, Row } from "react-bootstrap";
import { makePayment } from "../utils/API";
import { SAVE_FLIGHT } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import auth from "../utils/auth";



const Payment = ({ flight }) => {
  const [saveFlight, { error }] = useMutation(SAVE_FLIGHT);

  const user = auth.getProfile();
  console.log(user);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await saveFlight({ variables: { flightInput: { userId: user.data._id, departureDate: flight.departureDate, returnDate: flight.returnDate, price: Number(flight.price) } } })
    makePayment();
  };


  return (
    <>
      <div className="text-light bg-dark pt-5">
        <Container>
          <h1>Test payment</h1>
          <Form onSubmit={handleFormSubmit}>
            <Row>
              <Col xs={12} md={4}>
                <Button type="submit" variant="success" size="lg">
                  Checkout (Save)
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    </>
  )
}

export default Payment
