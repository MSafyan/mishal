import React, { useState, useEffect } from "react";
import "./cart.css";
import { Link, useNavigate } from "react-router-dom"

const Cart = ({ cart, setCart, handleChange }) => {
  const [Price, setPrice] = useState();

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.Price * item.amount));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.Price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span style={{ color: 'teal' }}>Total Price </span>
        <span>Rs - {Price}</span>
        <Link to="/Checkout" state={{ obj: cart }}>  <button   disabled={cart.length < 1} style={{ width: '150px', height: '50px', backgroundColor: 'teal', border: 'none', color: 'white', fontWeight: 'bold', marginTop: '10px', borderRadius: '10px',  }}>Proceed to Pay</button></Link>

      </div>
    </article>
  );
};

export default Cart;