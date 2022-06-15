import React, { Component } from 'react';

import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Slider from '../Components/Slider';
import Categories from '../Components/Categories';
import ShopB from '../Components/ShopBy';
import Paragraph from '../Components/Paragraph';
import { appContect } from "../context/context";
import { useNavigate } from 'react-router-dom';

import Newsletter from '../Components/Newsletter';
import Foo from '../Components/Foo';
import { Navigate } from 'react-router-dom';



const Home= ()=> {
  const {context}= React.useContext(appContect);
  let navigate = useNavigate();

  React.useEffect(()=>{
    debugger
    if(context.jwt===null){

        navigate('/Register')
    }
  },[])
        return (
         <div>
             <Announcement/>
             <Navbar/>
           <Slider/>
           <ShopB/>
           <Categories/>
        
         
           <Newsletter/>
           <Foo/>
       

         
        
          
          
         </div>
        );
}

export default Home;