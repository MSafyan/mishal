import { Formik } from "formik";
import React from 'react'
import * as Yup from "yup";
import Vsignin from "./Vsignin";
import { signIn } from "../Services/api";
import { appContect } from "../context/context";
import { useNavigate } from 'react-router-dom';

function Signin() {
  const {context,setContext}= React.useContext(appContect);
  let navigate = useNavigate();
  const regex = /^(?=.*[a-z])(?=.*[@#$%^&+=]).*$/;
  const ErrorSchema = Yup.object().shape({
      UserName: Yup.string()
      .max(10, 'Must be 10 character or less')
      .required("*UserName is required"),
      Password: Yup.string()
      .matches(regex, 'This field should contain atleast one symbol.')
      .required("*Password is required"),

   
         



  });

  return (
    <div >
      <Formik
        initialValues={{

        
          UserName: "",
          Password: "",
         
         
        }}
        
        onSubmit={async(values, { resetForm }) => {
          console.log("Values:", values);
          try {
            debugger;
            const res =await signIn(values);
            console.log(res)
            setContext({jwt:res.data.token})
            if(res.data?.token){
              navigate('/')
            }
            resetForm();
          } catch (error) {
            console.log(error)
          }
        }}
        validationSchema={ErrorSchema}
        component={Vsignin}
      />
    </div>


  );


}
export default Signin;