import React from "react";
import ProductsData from "./ProductsData";
import ProductCard from "./ProductCard";
import Header from "../Header";
import { Row, Col } from "react-bootstrap";

export default function ShopPage() {
  const ProductsDisplayed = ProductsData.map((product) => {
    // console.log(product.imageUrl)
    return (
      <Col style={{ marginBottom: "1rem" }}>
        <div key={product.id}>
          <ProductCard
            productLink={`/shop/${product.id}`}
            id={product.id}
            imageUrl={product.imageUrl}
            title={product.title}
            price={product.price}
            description={product.description}
            // addToCart = {() => addToCart(product)}
          />
        </div>
      </Col>
    );
  });
  return (
    <div>
      <Header />
      {/* <div style={{display: 'flex', justifyContent:'space-between', padding: '1rem'}}> */}
      <Row style={{padding: '1rem'}}>{ProductsDisplayed}</Row>
      {/* </div> */}
    </div>
  );
}
