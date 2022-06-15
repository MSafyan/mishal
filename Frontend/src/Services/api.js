import axios from 'axios'
// const url = "http://localhost:5000"
const url = "https://mishalbe.herokuapp.com"

 export const addClient= async (values) =>{
    return await axios.post(`${url}/Register`,values);
 }

 export const signIn= async (values) =>{
    return await axios.post(`${url}/Register/signin`,values);
 }


 export const addData= async (values) =>{
   return await axios.post(`${url}/Checkout`,values);
}


export const getUsers = async () =>{
   return await axios.get(`${url}/user`);
}

export const getProducts = async () => {

   return await axios.get(`${url}/Shop`);
  
}





 
