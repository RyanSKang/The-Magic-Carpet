import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {useLocation} from 'react-router-dom';

const ResultsPage = ({ ...props }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const location = useLocation();
    console.log(location.state);
    return (
        <>
        <div>Results Page</div>
        {location.state.flightData.map((flight, i) => (
            <Card>
                {flight.price}
            </Card>
        ))}
        {/* <div>
            <Card body>{location.state.searchResults}</Card>
            <Button variant="primary" onClick={handleShow} className="me-2">
                Purchase Flight
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Payment Checkout</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </div> */}
        </>
    )
}

export default ResultsPage