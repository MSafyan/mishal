import Home from "./Pages/Home";
import Shopnow from "./Pages/Shopnow";
import Register from "./Pages/Register";
import Signin from "./Pages/Signin";
import { useNavigate } from 'react-router-dom';
import Cart from "./Components/Cart";
import React, { useState, useEffect } from "react";
import Products from "./Components/Products";
import Navbar from "./Components/Navbar";
import Shop from "./Components/Sale";
import ContactUs from "./Pages/ContactUs";
import { Route, Routes } from "react-router-dom";
import Checkout from "./Pages/Checkout";
import Admin from "./Pages/Admin";
import { appContect } from "./context/context";






 
function App() {
  const [context,setContext] = React.useState({jwt:null})
  return (
    <appContect.Provider value={{context,setContext}}>
      <div>
        <Routes>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Signin" element={<Signin/>}/>
        <Route path ="/" element={<Home/>}/>
        {
          context.jwt!==null &&
          <>
            <Route path="/Shopnow" element={<Shopnow/>}/>
            <Route path="/Cart" element={<Cart/>}/>
            <Route path="/Shop" element={<Shop/>}/>
            <Route path="/ContactUs" element={<ContactUs/>}/>
            <Route path="/Checkout" element={<Checkout/>}/>
            <Route path="/Admin" element={<Admin/>}/>
          </>
        }
        </Routes>
        </div>

    </appContect.Provider>
  );
}

export default App;
