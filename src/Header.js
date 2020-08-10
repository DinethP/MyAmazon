import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <nav className="header">
      <Link to="/">   {/*Link back to homepage */}
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
      {/* basket icon with number */}
    </nav>
  );
}

export default Header;
