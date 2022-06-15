import { Formik } from "formik";
import React from 'react';
import * as Yup from "yup";
import Vform from "./Vform";
import {addClient} from "../Services/api"
import { appContect } from "../context/context";
import { useNavigate } from 'react-router-dom';


function Register() {
  const {context,setContext}= React.useContext(appContect);
  let navigate = useNavigate();
  const regex = /^(?=.*[a-z])(?=.*[@#$%^&+=]).*$/;
  const ErrorSchema = Yup.object().shape({
    Name: Yup.string()

      .max(10, 'Must be 10 character or less')
      .required("*Name is required"),

    LastName: Yup.string()
    .max(10, 'Must be 10 character or less')
      .required("*LastName is required"),


      UserName: Yup.string()
      .max(10, 'Must be 10 character or less')
      .required("*UserName is required"),


      Email: Yup.string()
      .email('Email is invalid')
      .required("*Email is required"),

      Password: Yup.string()
      .matches(regex, 'This field should contain atleast one symbol.')
      .required("*Password is required"),

       ConfirmPassword: Yup.string().required("*ConfirmPassword is required").when("Password", {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("Password")],
          "Both password need to be the same"
         

        )
      })
  });

  return (

    <div >
      {context.jwt}
      <Formik
        initialValues={{

          Name: "",
          LastName: "",
          UserName: "",
          Email: "",
          Password: "",
          ConfirmPassword: "",
         
        }}
        
        // onSubmit={(value, { resetForm }) => {
        //   console.log("Values:", value);
        //   resetForm();
        // }}
        
        onSubmit={async(values, { resetForm }) => {
          console.log(values);
          const res =await addClient(values);
          console.log(res)
          debugger;
          setContext({jwt:res.data.token})
          if(res.data?.token){
            navigate('/')
          }
          resetForm();

         
        }}
        validationSchema={ErrorSchema}
        component={Vform}

      />
    </div>


  );


}
export default Register;
