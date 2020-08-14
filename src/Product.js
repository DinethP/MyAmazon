import React from "react";
import "./css/Product.css";
// Access data layer
import { useStateValue } from "./StateProvider";


function Product({ id, title, image, price, rating }) {
  // Fetch data from data layer
  const[{basket}, dispatch] = useStateValue();
  // Function called when add to basket id clicked
  const addToBasket = () => {
    // Add item to basket
    // Dispatch is method that tells the reducer 
    // to do a certain action
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      },

    })
  }
  return (
    <div className="product">
      <div className="product__info">
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
        </div>
      </div>
      
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
