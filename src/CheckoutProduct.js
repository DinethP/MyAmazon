import React from 'react'

function CheckoutProduct({id, title, image, price, rating}) {
  return (
    <div className="checkoutProduct">
      <img src={image} alt=""/>
      <div className="checoutProduct__Info">
        <p className="checkoutItem__title">{title}</p>

         <p className="checkoutProduct__price">
           <small>$</small>
           <strong>{price}</strong>
         </p>
         <div className="checkoutProduct__rating">
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
        <button >Remove from basket</button>
      </div>
      
    </div>
  )
}

export default CheckoutProduct
