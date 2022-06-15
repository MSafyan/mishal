import mongoose from 'mongoose';

const  checkoutStructure = mongoose.Schema({
    FirstName: String,
    LastName: String,
    City: String,
    Streetaddress: String,
    gender: String,
   
});


const checkoutModel = mongoose.model('checkoutModel', checkoutStructure);

export default checkoutModel;