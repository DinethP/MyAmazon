import React from "react";
import "./css/Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
// This is the component used to access the data layer
import { useStateValue } from "./StateProvider";

function Header() {
  // Using the data layer to get data
  // useStateValue returns all the data in data layer.
  // We then use ES6 destructuring to get all the individual data 
  // FOR this case, even "cost[{basket}] = useStateValue();"" will work 
  // because we don't need dispatch to fetch data
  const[{basket}, dispatch] = useStateValue();
  console.log(basket);
  return (
    <nav className="header">
      {/* Link is better than href tag bevause it doesnt reload the page */}
      <Link to="/">
        {" "}
        {/*Link back to homepage */}
        {/*logo on the left -> img  */}
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      {/* search box */}
      <div className="header__search">
        <input className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 links (sign-in/orders/prime)*/}
      <div className="header__nav">
        {/*Link 1: sign-in */}
        <Link to="/login" className="header__link">
          <div className="header__options">
            <span className="header__optionLineOne">Hello Dineth</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>

        {/*Link 2: orders*/}
        <Link to="/" className="header__link">
          <div className="header__options">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">Orders</span>
          </div>
        </Link>

        {/*Link 3: prime*/}
        <Link to="/" className="header__link">
          <div className="header__options">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        {/*Link 3: prime*/}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/* Shopping basket icon */}
            <ShoppingBasketIcon />
            {/* Number of items in basket */}
            {/* We use a ternary operator "?" (if statement) to make sure the basket is not empty (async code) */}
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
      {/* basket icon with number */}
    </nav>
  );
}

export default Header;
