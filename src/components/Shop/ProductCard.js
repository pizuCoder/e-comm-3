import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../../store/cartContext';
// import { useHistory } from 'react-router-dom';

function ProductCard(props) {
  const { addToCart, cartState } = useContext(CartContext);
  const authCtx = useContext(CartContext);
  const {email} = authCtx.contextValue

  const { items } = cartState;
  const currentItem = items.find((item) => item.id === props.id);

  const [quantity, setQuantity] = useState(currentItem ? currentItem.quantity : 0);

  const handleIncrement = () => {
    // Update the display value
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    // Update the display value
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    // Add items to cart
    addToCart({
      id: props.id,
      title: props.title,
      price: props.price,
      imageUrl: props.imageUrl,
      quantity: quantity,
      
    }, email);
    // Reset the display value
    setQuantity(0);
  };
  return (
    <Card style={{ width: '18rem', padding: '.5rem'}}>
      <Card.Img variant="top" src={props.imageUrl} style={{objectFit: 'cover'}}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          <div>Rs{props.price}</div>
          {props.description}
        </Card.Text>
        <div style={{ marginBottom: '1rem' }}>
          <Button variant="secondary" onClick={handleDecrement}>
            -
          </Button>
          <span style={{ margin: '0 10px' }}>{quantity}</span>
          <Button variant="secondary" onClick={handleIncrement}>
            +
          </Button>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Button variant="primary" onClick={handleAddToCart} >
          Add to Cart
        </Button>
        <a href={props.productLink}><Button>See Product</Button></a>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
