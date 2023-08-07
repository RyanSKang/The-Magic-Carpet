import React, { useState } from 'react';
import auth from '../../utils/auth';
import { Link } from 'react-router-dom'
// Importing React Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



// import logo image
import Logo from '../../Assets/logo.png'

const NavbarMain = () => {

  // Adding background color to the header
  const [transparent, setTransparent] = useState('mainNavBar1')
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent('mainNavBar1 activeHeader')
    } else {
      setTransparent('mainNavBar1')
    }
  }
  window.addEventListener('scroll', addBg)

  if (auth.loggedIn()) {

    return (
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" data-bs-theme="light">
        <Container>
          <Navbar.Brand className={transparent} img={Logo}>The Magic Carpet</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='#'>Flights</Nav.Link>
              <Nav.Link href='#'>Hotels</Nav.Link>
              <Nav.Link href='#'>My Trips</Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link href="#" onClick={() => auth.logout}>Log Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  } else {

    return (
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" data-bs-theme="light">
      <Container>
        <Navbar.Brand className={transparent} img={Logo}>The Magic Carpet</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav>
            <Link to="/login">Log In</Link>
            <Link to="signup">
              Sign Up
            </Link>
          </Nav>
      </Container>
    </Navbar>
    )

  }
}


export default NavbarMain