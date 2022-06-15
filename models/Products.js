import mongoose from 'mongoose'

const ProductStructure = mongoose.Schema({
    img: String,
    Des: String,
    Price: Number,
    amount: Number,
   
});


const productModel = mongoose.model('popularProducts',ProductStructure);

export default productModel;