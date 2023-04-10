import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartModal from './Cart/CartModal';
import { Button } from 'react-bootstrap';

function MainNav() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">The COLOR STORE</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/shop">Shop</Nav.Link>
              <Nav.Link href="/aboutUs">About Us</Nav.Link>
              <Nav.Link href="/contactUs">Contact Us</Nav.Link>
            </Nav>
            <CartModal />
            <Button style={{marginLeft: '1rem'}}>Logout</Button>
          </Container>
        </Navbar>
        </>
    )}
export default MainNav