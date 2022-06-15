import React, { useState } from "react";

import { Form, Field, Formik } from "formik";

import { useNavigate } from "react-router-dom";

function Registeration({ errors, touched, isValid, dirty, setFieldValue }) {
  console.log(errors);
  const [selectedImage, setSelectedImage] = useState(null);

  const navigate = useNavigate();
  return (
    <Form>
      <div className="form-group">
        <label className="col-form-label" >First Name </label>
        <Field
          name="FirstName"
          className={
            touched.FirstName
              ? `form-control ${errors.FirstName ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text"
        />
        {touched.FirstName && errors.FirstName && (
          <small className="text-danger">{errors.FirstName}</small>
        )}
      </div>




      <div className="form-group">
        <label className="col-form-label" >Last Name</label>
        <Field
          name="LastName"
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


      <div className="form-group">
        <label className="col-form-label" >City: </label>
        <Field as="select"
          name="City"
          className={
            touched.City
              ? `form-control ${errors.City ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text"

        >

          <option value="Invalid"></option>
          <option value='0'>Lahore</option>
          <option>Karachi</option>
          <option>Islamabad</option>
          <option>Peshawar</option>

        </Field>
        {touched.City && errors.City && (
          <small className="text-danger">{errors.City}</small>
        )}
      </div>




      <div className="form-group">
        <label className="col-form-label" >Street address</label>
        <Field
          name="Streetaddress"
          className={
            touched.FirstName
              ? `form-control ${errors.Streetaddress ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text"
        />
        {touched.Streetaddress && errors.Streetaddress && (
          <small className="text-danger">{errors.Streetaddress}</small>
        )}
      </div>

      <label className="col-form-label" >Pay with cash upon delivery.</label>
      <div role="group" aria-labelledby="my-radio-group">
        <label>
          <Field type="radio" name="gender" value="Male" />
          Cash on delivery
        </label>
        <br />
        <label>
          <Field type="radio" name="gender" value="Female" />
          Direct bank transfer
        </label>
        <br />
        {touched.gender && errors.gender && (
          <small className="text-danger">{errors.gender}</small>
        )}

      </div>





      <label className="col-form-label" >Bundles:</label>
      <div role="group" aria-labelledby="my-radio-group">
        <label>
          <Field type="checkbox" name="Checkbox" value="GiftBox" />
          Gift Box
        </label>

        <label style={{ marginLeft: '20px' }}>
          <Field type="checkbox" name="Checkbox" value="GiftCard" />
          Gift Card
        </label>
        <label style={{ marginLeft: '40px' }}>
          <Field type="checkbox" name="Checkbox" value="None" />
          None
        </label>
        <br />
        {touched.Checkbox && errors.Checkbox && (
          <small className="text-danger">{errors.Checkbox}</small>
        )}

      </div>



      <button style={{ backgroundColor: 'teal' }}
        type="Register"
        className="btn btn-primary my-3"
        disabled={!isValid || !dirty}
      // onClick={() => navigate("/Submit")}
      >
        Place Order
      </button>

     
    

    </Form>
  );
}

export default Registeration;