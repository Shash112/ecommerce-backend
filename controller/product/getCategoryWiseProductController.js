const productModel = require('../../models/productModel');

const getCategoryWiseProductController = async (req, res) => {
    try {
        const { category } = req?.body || req?.query
        const product = await productModel.find({category});

        res.json({
            data: product,
            error: false,
            success: true,
            message: "Product"
        })

    } catch (error) {
        res.status(400).json({
            message: error?.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = getCategoryWiseProductController;