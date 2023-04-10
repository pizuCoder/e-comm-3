import React from "react";
import ProductsData from "./ProductsData";
import ProductCard from "./ProductCard";
import Header from "../Header";

export default function ShopPage() {
    const ProductsDisplayed = ProductsData.map((product) => {
        // console.log(product.imageUrl)
        return(
            <div key={product.id}>
            <ProductCard 
                id = {product.id}
                imageUrl = {product.imageUrl}
                title = {product.title}
                price = {product.price}
                description = {product.description}
                // addToCart = {() => addToCart(product)}
            />
            </div>
        )
    })
    return(
        <div>
            <Header />
        <div style={{display: 'flex', justifyContent:'space-between', padding: '1rem'}}>
            {ProductsDisplayed}
        </div>
        </div>
    )
}