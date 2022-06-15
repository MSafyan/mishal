import { Formik } from "formik";
import Registeration from "./Registeration";
import * as Yup from "yup";
import {addData} from '../Services/api'


function Form1() {
  const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];


 
  const ErrorSchema = Yup.object().shape({
    FirstName: Yup.string()
     
      .required("*FirstName is required"),

    LastName: Yup.string()
      .required("*LastName is required"),

    City: Yup.string()
      .required("*City name is required"),
    Streetaddress: Yup.string()
      .required("*Streetaddress is required"),

    gender: Yup.string()
      .required("*Payement information Required"),


    Checkbox: Yup.array()
      .min(1).of(Yup.string().required()).required(),

    serviceImage: Yup.mixed()
      .test("FILE_SIZE", "Uploaded file is too big.",
        value => !value || (value && value.size <= 1000000))


  });

  return (

    <div >




      <Formik
        initialValues={{

          FirstName: "",
          LastName: "",
          City: "",
          Streetaddress: "",
          gender: "",
          Checkbox: [],
          serviceImage: "",
        }}
        // onSubmit={(value, { resetForm }) => {
        //   console.log("Values:", value);
        //   resetForm();
        // }}


        onSubmit={(values, { resetForm }) => {
          console.log(values);
          addData(values);
          resetForm();
         
        }}

        validationSchema={ErrorSchema}
        component={Registeration}

      />
    </div>


  );


}
export default Form1;
