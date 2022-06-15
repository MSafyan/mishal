import React, { Component } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsers } from '../Services/api';
import Navbar from '../Components/Navbar';
const Admin = () => {



    const [getformDetails, setDetails] = useState([]);

    const navigate = useNavigate();

    useEffect(()=> {
      getDetails();
    }, []);

    const getDetails = async() => {
      const details = await getUsers();
      setDetails(details.data);
  }
 

    return (  
        <div>

       <Navbar/>
      {getformDetails.map((get) => {
              return(
                  <div>
                   <div className="col-md-6 position-absolute start-50 translate-middle-x mt-5">
      <table class="table" style={{marginTop: '50px'}}>
        <thead>
          <tr>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">City</th>
            <th scope="col">Streetaddress</th>
            <th scope="col">Gender</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
          </thead>


                   {/* <h1>{get.FirstName}</h1>
                   <h1>{get.LastName}</h1>
                   <h1>{get.City}</h1>
                   <h1>{get.Streetaddress}</h1>
                  <h1>{get.gender}</h1> */}

<tbody> 

<tr>
              <td>{get.FirstName}</td>
              <td>{get.LastName}</td>
              <td>{get.City}</td>
              <td>{get.Streetaddress}</td>
              <td>{get.gender}</td>
              <td> <button style={{ backgroundColor: 'teal',  }}
        type="Register"
        className="btn btn-primary my-3"
      
      
      >
        Update
      </button></td>

      <td> <button style={{ backgroundColor: 'teal',  }}
        type="Register"
        className="btn btn-primary my-3"
      
      // onClick={() => navigate("/Submit")}
      >
        Delete
      </button></td>
              



            </tr>


    
</tbody>


</table>
    </div>

                      </div>

              )
            })}
          
        
        



        </div>
        
    );
}
  
 
export default Admin;