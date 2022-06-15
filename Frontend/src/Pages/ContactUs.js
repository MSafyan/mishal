import React, { Component } from 'react';
import Navbar from '../Components/Navbar';
import { Button, Form, Row, Col } from 'react-bootstrap';
import Foo from '../Components/Foo';

class ContactUs extends Component {
  state = { 
    img : require("../image/contact.jpg"),
   
 } 
    render() { 
        return (
            <div>
                <Navbar/>

<div style={{marginTop: '150px', marginLeft: '50px'}} class="col-md-5">
        <h2 style={{marginLeft: '400px'}}> </h2>
        <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="Text" placeholder="Enter Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="Text" placeholder="Enter Last Name" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label> Add Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Enter Your Message</Form.Label>
    <Form.Control placeholder="Enter Your Message" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Your Email</Form.Label>
      <Form.Control type="Email" placeholder="Email" />
     
    </Form.Group>

   

    <Form.Group as={Col} controlId="">
      <Form.Label>Phone number</Form.Label>
      <Form.Control type="number" placeholder="Phone number" />
     
    </Form.Group>
  </Row>

  <Form.Group className="mb-2" id="formGridCheckbox">
    <Form.Check type="checkbox" label="I agree that HOMEWARES may contact me at the email address or phone number above" />
  </Form.Group>
  
  <Button  variant="primary" type="submit" style={{ backgroundColor: 'teal' , width: '300px', borderRadius: '10px', marginLeft: '70px'}}>
    Submit
  </Button>
  
</Form>
    </div>

    <div style={{marginTop: '-450px', marginLeft: '800px'}} class="col-md-5">
        <h2 style={{paddingTop: 'px'}}> Connect with our sales team</h2>
        <br></br>
        <h2 style={{fontSize: '0.9rem',}}>Simply dummy text of the printing and typesetting industry, </h2>
        <h2 style={{fontSize: '0.9rem',}}>it has survived not only five centuries, but also the leap year</h2>
        <br>
        </br>
        <img class="card-img-top" style={{height: '250px', width: '300px',cursor: 'Pointer', marginTop: ''}} src={this.state.img} alt="Card image cap"/>
  
    </div>

 <br>
 </br>
 <br>
 </br>
 <br>
 </br>
 <br>
 </br>
 <br>
 </br>
 <br>
 </br>
     
    <div>
      <Foo/>
    </div>



            </div>
        );
    }
}
 
export default ContactUs;