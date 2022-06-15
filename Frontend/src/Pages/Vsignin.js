import styled from "styled-components";

import { Form, Field, Formik } from "formik";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-double-11-exquisite-tableware-promotion-literary-wood-grain-banner-image_177813.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;



const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Vsignin= ({ errors, touched, isValid, dirty, setFieldValue }) => {
  return (


    
      <Form>
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
    
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
        <br>
        </br>
          
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
        <br></br>
      
        <button style={{ backgroundColor: 'teal', marginLeft: '70px', width: '40%', height: '50%', cursor: 'pointer' }}
        type="Register"
        className="btn btn-primary my-3"
        disabled={!isValid || !dirty}
      
      >
      Signin
      </button>
          <div  style={{marginTop: ''}}>
          <Link >DO NOT YOU REMEMBER THE PASSWORD?
          CREATE A NEW ACCOUNT</Link></div>
      
      </Wrapper>
    </Container>
    </Form>
  );
};

export default Vsignin;