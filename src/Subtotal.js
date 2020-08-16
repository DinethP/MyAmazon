import React from "react";
import CurrencyFormat from "react-currency-format";
import "./css/Subtotal.css";
import { useStateValue } from "./StateProvider";


function Subtotal() {
  const[{basket}, dispatch] = useStateValue();
  return (
    <div>
      return(
      <div className="subtotal">
        {/* Price */}
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({basket.length} items): <strong>{"$"}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox"/> This order contains gifts
              </small>
            </>
          )}
          decimalScale={2}
          // value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefic={"$"}
        />
        <button>Proceed to checkout</button>
      </div>
      )
    </div>
  );
}

export default Subtotal;
