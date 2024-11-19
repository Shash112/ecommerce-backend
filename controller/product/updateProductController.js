const uploadProductPermission = require('../../helpers/permission');
const productModel = require('../../models/productModel');

const updateProductController = async (req, res) => {
    try {
        if(!uploadProductPermission) {
            throw new Error("Permission denied");
        }

        const { _id, ...resBody } = req.body;

        const updateProduct = await productModel.findByIdAndUpdate(_id, resBody);

        res.json({
            message: "Product updated successfully",
            data: updateProduct,
            success: true,
            error: false
        })

    } catch (error) {
        res.status(400).json({
            message: error?.message || error,
            success: false,
            error: true
        })
    }
}

module.exports = updateProductController;