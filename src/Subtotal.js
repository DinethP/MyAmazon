import React from "react";
import CurrencyFormat from "react-currency-format";
import "./css/Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer"

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div>
      <div className="subtotal">
        {/* Price */}
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains gifts
              </small>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
        <button>Proceed to checkout</button>
      </div>
    </div>
  );
}

export default Subtotal;
