
import checkoutModel from "../models/Checkout.js";

export const addData = async (req , res) => {
    const FirstName = req.body.FirstName.toString();
    const LastName = req.body.LastName.toString();
    const City = req.body.City.toString();
    const Streetaddress = req.body.Streetaddress.toString();
    const gender = req.body.gender.toString();
   
    
    const newData = new checkoutModel({
        FirstName: FirstName,
        LastName: LastName,
        City: City,
        Streetaddress: Streetaddress, 
        gender: gender
    });

    try {
        console.log('Saved Successfully!');
        await newData.save();
        res.json(newData);
    } catch (error) {
        console.log(error);
    }
}

export const GetUsers = async (req , res) => {
    try {
        const allBookings = await checkoutModel.find();
        res.json(allBookings);
    } catch (error) {
        console.log("No Record Found...")
    }
}

// export const GetUsers = async (req , res) => {
//     try {
//         const allBookings = await visitorDetailsModel.find();
//         res.json(allBookings);
//     } catch (error) {
//         console.log("No Record Found...")
//     }
// }

// export const DeleteUser = async(req,res) => {
//         try {
//             const deleteBookings = await visitorDetailsModel.findByIdAndDelete(req.params.id);
//             res.json(deleteBookings);
//             console.log(`Successfully Deleted : ${req.params.id}`);
//         } catch (error) {
//             console.log("Error!!!");
//         }           
// }