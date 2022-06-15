import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";



const Container = styled.div`

  flex: 1;
  margin: 5px;
  min-width: 100px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
 
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  position: relative;
  &:hover {
    opacity:   0.8;
    transition: all 0.5s ease;
    cursor: pointer;
  }
`;

//Cards

const Product = ({ item, handleClick }) => {
  const { Des, Price, img } = item;
  return (
    <div>

      <Container>

        <div className="cards" >

          <div  className="image_box">
            <img  style={{width: '200px'}} src={img} alt="" />

          </div>


          <div className="details">
            <p>{Des}</p>

            <p style={{fontSize: '1.0rem'}}>Price - {Price}Rs</p>
            <button onClick={() => handleClick(item)}>Add to Cart</button>
            <Link to="/Checkout" state={{ obj: item }} className=""></Link>


          </div>


        </div>

      </Container>
    </div>

  );
};


export default Product;