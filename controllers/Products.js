
export const getProducts = async (req, res) => {
    try {
        const Products = await productModel.find();
        res.json(Products);
    } catch (error) {
        console.log("Not found any data.");
    }
};





