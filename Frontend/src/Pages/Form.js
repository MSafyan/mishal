import { Formik } from "formik";
import Register from "./Register";
import * as Yup from "yup";



function Form() {
   
  
  
    const regex = /^(?=.{8,12})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;
    const ErrorSchema = Yup.object().shape({
      FirstName: Yup.string()
        
        .required("*FirstName is required"),
  
      LastName: Yup.string()
        .required("*LastName is required"),
  
      UserName: Yup.string()
        .required("*UserName is required"),
      Email: Yup.string()
        .required("*Email is required"),
        Password: Yup.string()
        .matches(regex, 'This field should contain one symbol.')
        .required("*Password is required"),

    ConfirmPassword: Yup.string()
    .required("* confirmPassword is required"),
     
  
  
  
    });
  
    return (
  
      <div >
  
  
  
  
        <Formik
          initialValues={{
  
            FirstName: "",
            LastName: "",
            UserName: "",
            Email: "",
            Password: "",
            ConfirmPassword: "",
            
          }}
          onSubmit={(value, { resetForm }) => {
            console.log("Values:", value);
            resetForm();
          }}
          validationSchema={ErrorSchema}
          component={Register}
  
        />
      </div>
  
  
    );
  
  
  }
  export default Form;