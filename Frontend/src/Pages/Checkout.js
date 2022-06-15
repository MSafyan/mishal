
import Form1 from "./Form1";
import Navbar from "../Components/Navbar";
import Foo from "../Components/Foo";

import React, { Component } from 'react';
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import {addData} from '../Services/api'

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

function Checkout(props) {
  const location = useLocation();
  const { obj } = location.state;
  console.log(obj)

  

 



  return (
    <div>
      <Navbar />
      <div style={{ marginTop: '50px', marginLeft: '50px' }} class="col-md-6">
        <h2 style={{ marginLeft: '400px' }}> Billing details</h2>
        <Form1 />
      </div>
      <div style={{ marginLeft: '800px', marginTop: '-500px' }} class="col-md-4">
        <h2 style={{}}> </h2>
        <Summary>


          <SummaryTitle>ORDER SUMMARY</SummaryTitle>
          <SummaryItem>
            <SummaryItemText>Name</SummaryItemText>
            {obj.map((item) => (
              <SummaryItemPrice>{item.Des}</SummaryItemPrice>
            ))}
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Price</SummaryItemText>
            {obj.map((item) => (
              <SummaryItemPrice style={{marginRight: '50px'}}>{item.Price}</SummaryItemPrice>
            ))}
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Shipping Price</SummaryItemText>
            <SummaryItemPrice style={{marginRight: '50px'}}>$ 5.90</SummaryItemPrice>
          </SummaryItem>
          {/* <SummaryItem type="total">
           <SummaryItemText>Total</SummaryItemText>
           <SummaryItemPrice>$ 80</SummaryItemPrice>
         </SummaryItem> */}

        </Summary>
      </div>
      <div style={{ marginTop: '200px' }}>
        <Foo />
      </div>

    </div >
  );
}

export default Checkout;