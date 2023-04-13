import React, {useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartModal from './Cart/CartModal';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../store/cartContext';

function MainNav() {
  const history = useHistory()
  const authCtx = useContext(CartContext);
  const { logout } = authCtx.contextValue;
  const { isLoggedIn } = authCtx.contextValue;

  const logoutHandler = () => {
    logout();
    history.replace('/login')
    
  };
    return (
      <>
        <Navbar bg="dark" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand href="/">The COLOR STORE</Navbar.Brand>
            {isLoggedIn && <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/shop">Shop</Nav.Link>
              <Nav.Link href="/aboutUs">About Us</Nav.Link>
              <Nav.Link href="/contactUs">Contact Us</Nav.Link>
            </Nav>}
            {isLoggedIn && <CartModal />}
            {isLoggedIn && <Button style={{marginLeft: '1rem'}} onClick={logoutHandler}>Logout</Button>}
          </Container>
        </Navbar>
        </>
    )}
export default MainNav