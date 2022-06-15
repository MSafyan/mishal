import React, { useState, useEffect } from "react";
import Amazon from "./Products";
import Navbar from "./Navbar2";
import Cart from "./Cart";
import Foo from "./Foo";

const Sale = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (
    <div>
    <React.Fragment>
      
      <Navbar setShow={setShow} size={cart.length} />



      {show ? 
         
      (
{},
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </React.Fragment>
    <div style={{marginTop: '600px'}}>
     <Foo/>
     </div>
    </div>
  );
};

export default Sale;