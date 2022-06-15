import styled from "styled-components";
import { Form, Field, Formik } from "formik";
import { useState } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://media.istockphoto.com/photos/plates-variation-picture-id910468040?b=1&k=20&m=910468040&s=170667a&w=0&h=OH1M42brAMtOOdEJXDas0DlO6JhMtNCG3LFdV_yDozA=")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;



const Div = styled.div`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;


const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Vform= ({ errors, touched, isValid, dirty, setFieldValue }) => (
    <Form>
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
              
                <div class="row">
    <div class="col-sm">
     

    <Field
          name="Name"
          
          placeholder="Name"
          className={
            touched.Name
              ? `form-control ${errors.Name ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text"
        />
        {touched.Name && errors.Name && (
          <small className="text-danger">{errors.Name}</small>
          
        )}
        






    </div>



    <div class="col-sm">
     

    <Field
          name="LastName"
          placeholder="LastName"
          className={
            touched.LastName
              ? `form-control ${errors.LastName ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text"
        />
        {touched.LastName && errors.LastName && (
          <small className="text-danger">{errors.LastName}</small>
        )}


     
    </div>  
    </div>
               

          

        <br></br>



        <div class="row">
    <div class="col-sm">
     
     
    <Field
          name="UserName"
          placeholder="UserName"
          className={
            touched.LastName
              ? `form-control ${errors.UserName ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text"
        />
        {touched.UserName && errors.UserName && (
          <small className="text-danger">{errors.UserName}</small>
        )}




    </div>
    <div class="col-sm">
    <Field
          name="Email"
          placeholder="Email"
          className={
            touched.Email
              ? `form-control ${errors.Email ? "invalid" : "valid"}`
              : `form-control`
          }
          type="email"
        />
        {touched.Email && errors.Email && (
          <small className="text-danger">{errors.Email}</small>
        )}
    </div>
    </div>





         <br></br>



       

         <div class="row">
    <div class="col-sm">
    <Field
          name="Password"
          placeholder="Password"
          className={
            touched.Password
              ? `form-control ${errors.Password ? "invalid" : "valid"}`
              : `form-control`
          }
          type="password"
        />
        {touched.Password && errors.Password && (
          <small className="text-danger">{errors.Password}</small>
        )}
    </div>
    <div class="col-sm">
    <Field
          name="ConfirmPassword"
          placeholder="ConfirmPassword"
          className={
            touched.ConfirmPassword
              ? `form-control ${errors.ConfirmPassword ? "invalid" : "valid"}`
              : `form-control`
          }
          type="password"
        />
        {touched.ConfirmPassword&& errors.ConfirmPassword && (
          <small className="text-danger">{errors.ConfirmPassword}</small>
        )}
    </div>
    </div>


                <Agreement>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <br></br>
                <button style={{ backgroundColor: 'teal', marginLeft: '150px', width: '40%', height: '50%', cursor: 'pointer' }}
        type="Register"
        className="btn btn-primary my-3"
        disabled={!isValid || !dirty}
       
      
      >
      Create
      </button>

            </Wrapper>
        </Container>
    </Form>
);

export default Vform;