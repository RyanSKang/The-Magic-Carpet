import React from "react";
import { Container, Col, Form, Button, Row } from "react-bootstrap";
import { makePayment } from "../utils/API";


const handleFormSubmit = async (event) => {
    event.preventDefault();

    makePayment();
  };

const Payment = () => {
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
