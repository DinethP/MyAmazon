import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
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
            <span>Hello Dineth</span>
            <span>Sign In</span>
          </div>
        </Link>

        {/*Link 2: orders*/}
        <Link to="/" className="header__link">
          <div className="header__options">
            <span>Returns</span>
            <span>Orders</span>
          </div>
        </Link>

        {/*Link 3: prime*/}
        <Link to="/" className="header__link">
          <div className="header__options">
            <span>Your</span>
            <span>Prime</span>
          </div>
        </Link>
      </div>
      {/* basket icon with number */}
    </nav>
  );
}

export default Header;
