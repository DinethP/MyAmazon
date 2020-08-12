import React from "react";
import "./css/Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <p>{title}</p>
      <p className="product__price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className="product__rating">
        {
          // make an array of size 'rating', fill it with empty values
          // and map it for 'rating' number of iterations ("_" because
          // we don't care about the value)
          Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))
        }
        <img src={image} alt=""/>
        <button>Add to basket</button>
      </div>
    </div>
  );
}

export default Product;
