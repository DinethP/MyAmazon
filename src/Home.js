import React from "react";
import Product from "./Product";
import "./css/Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      {/* List of products */}
      <div className="home__row">
        <Product
          id="10001"
          title="ROG Zephyrus M Thin and Portable Gaming Laptop, 15.6” 144Hz Full HD IPS, NVIDIA GeForce GTX 1660 Ti, Intel Core i7-9750H, 16GB DDR4 RAM, 512B PCIe SSD, Per-Key RGB, Windows 10 Pro, GU502GU-XB74"
          price={1569.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71t%2Bj90ObGL._AC_SL1500_.jpg"
        />
        <Product
          id="10002"
          title="Sony WH-1000XM4 Wireless Industry Leading Noise Canceling Overhead Headphones with Mic for Phone-Call and Alexa Voice Control, Black"
          price={349.9}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg"
        />
        <Product
          id="10003"
          title='Honor MagicWatch 2 Smart Watch, 1.39" AMOLED 5ATM Waterproof 14 Days Standby Smart Bracelet with GPS Bluetooth 46mm Fitness Tracker Activity Tracker (Brown, 46mm)'
          price={469.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71MPKy6A%2BqL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="10004"
          title="OnePlus 8 Interstellar Glow, 5G Unlocked Android Smartphone U.S Version, 12GB RAM+256GB Storage, 90Hz Fluid Display,Triple Camera, with Alexa Built-in"
          price={799.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51jRkmWWIFL._AC_SL1040_.jpg"
        />
        <Product
          id="10005"
          title="Newest Sony Playstation 4 PS4 1TB HDD Gaming Console Bundle with Three Games: The Last of Us, God of War, Horizon Zero Dawn, Included Dualshock 4 Wireless Controller"
          price={370.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/814Cwlg1JaL._SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
