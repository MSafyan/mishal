import React from "react";
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Navbar from "./Navbar";

const Navbar2 = ({ setShow, size }) => {
  return (
    <div>
    <Navbar/>
    <nav style={{backgroundColor: 'teal', marginTop: '60px'}}>
      <div className="nav_box" >
        <span className="my_shop" onClick={() => setShow(true)}>
          Popular Products
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
          <FontAwesomeIcon icon={faCartShopping} />
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
      
    </div>
  );
};

export default Navbar2;