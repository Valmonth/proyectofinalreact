import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch } from "react-redux";
import Cart from "./Cart";

const NavBar = () => {
  const handleShow = () => {setShow(true)};
  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    
  }, []);

  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#/">Products</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#/">Home</Nav.Link>
            <Nav.Link href="/#/purchases">Purchases</Nav.Link>
            <Nav.Link href="/#/login">Login</Nav.Link>
          </Nav>
          <Nav.Link as={Button} onClick={handleShow}>
               Cart
              </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Cart show={show} handleClose={handleClose}/> 
    
    </>

  );
};

export default NavBar;