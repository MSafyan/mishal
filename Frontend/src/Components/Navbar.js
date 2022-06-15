import React, { Component } from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import img from '../image/Logo.jpeg';
import { Dropdown } from 'react-bootstrap';
import {Link, useNavigate} from "react-router-dom"





const Container = styled.div`
  height: 60px;

  `;
  
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;

 `;


 

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
 
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;

`;

const Center = styled.div`
  
  
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-weight: bold;
 
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

`;
const link={fontFamily:"sans-serif",color: "Black",
textDecoration: "none",transition: "0.5s"}



  

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <div>
            <Container style={{ marginTop: '-20px'}}>
      <Wrapper>
       <Left >
       <img style={{width: '200px',marginTop: '10px', height: '100px' }}
    
    src={img}
    alt="First "></img>
         
        </Left> 
        <Center >
        <div class="links-wrapper" style={{display:"flex", justifyContent:"space-between"}}>
                                 <div class="nav-link" style={{marginLeft: '-100px'}}>
                                 <Link style={link} to="/">Home</Link>
                                 </div>
         
                                 {/* <div class="nav-link">
                                 <Dropdown  >
  <Dropdown.Toggle   bsPrefix="p-0"  style={{border:"white"}} >
   <span style={{ display:"flex" , alignItems:'center', justifyContent:'space-between' , backgroundColor:"white", color:"black", fontFamily:"sans-serif", }}>  From   
   </span> </Dropdown.Toggle> 
  <Dropdown.Menu>
  <Dropdown.Item href="#/action-1"> Abottabad</Dropdown.Item>
    <Dropdown.Item href="#/action-2"> Rawalpindi</Dropdown.Item>
    <Dropdown.Item href="#/action-3"> Lahore</Dropdown.Item>
    <Dropdown.Item href="#/action-1"> Peshawar</Dropdown.Item>
    <Dropdown.Item href="#/action-2"> Karachi</Dropdown.Item>
    <Dropdown.Item href="#/action-3"> Islamabad</Dropdown.Item>
  </Dropdown.Menu>
 
</Dropdown> 
                                 </div> */}
         
                                 <div class="nav-link">
                                 <Link style={link} to="/Shop">Shop</Link>
                                 </div>
         
                                 <div class="nav-link">
                                 <Link style={link} to="/ContactUs">Contact Us</Link>
                                 </div>
                          </div>
         
        
        </Center>
        <Right>
        <Language>EN</Language>
        <SearchContainer>
        
            <Input placeholder="Search" />
            <FontAwesomeIcon icon={faSearch} />
          
          </SearchContainer>
          <Link  style={link} to="/Register"> <MenuItem> REGISTER   </MenuItem> </Link> 
          <Link  style={link} to="/Signin"><MenuItem>SIGN IN</MenuItem></Link>
          {/* <Link  style={link} to="/Cart"> <FontAwesomeIcon style={{marginLeft: '5px'}} icon={faCartShopping} /> </Link>  */}

          <MenuItem>
          
           
            
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
            </div>
        );
    }
}
 
export default Navbar;