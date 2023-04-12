import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { Badge } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { CartContext } from '../../store/cartContext';

export default function CartModal() {
  const [show, setShow] = useState(false);
  const { cartState, removeFromCart } = useContext(CartContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const totalItems = cartState.items.reduce((total, item) => total + item.quantity, 0);

  const cartItems = cartState.items.map((item) => {
    // console.log(item.imageUrl)
  return(
    <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem'}}>
      <div style={{width:'15%', padding: '0' }}><img src={item.imageUrl} alt="something" style={{width: '100%', borderRadius:'.5rem'}} /></div>
      <p >{item.title}</p>
      <p >{item.price}</p>
      <p >{item.quantity}</p>
      <Button onClick={() => removeFromCart(item.id)}>Clear All</Button>
    </div>
  )
  }
  )

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Cart
        <Badge> {totalItems} </Badge>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart Items</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>Item</p>
            <p>Name</p>
            <p>Price</p>
            <p>Quantity</p>
          </div>
          {cartItems}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
