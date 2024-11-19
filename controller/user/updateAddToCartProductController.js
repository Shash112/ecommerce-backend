const cartModel = require("../../models/cartProduct");

const updateAddToCartProductController = async (req, res) => {
    try {
        const currentUser = req.userId;
        const productId = req?.body?._id;

        const qty = req.body.quantity;

        const updateProduct = await cartModel.updateOne({_id: productId},{
            ...(qty && {quantity: qty})
        })

        res.json({
            message: "Product Updated",
            data: updateProduct,
            error: false,
            success: true
        })

    } catch (error) {
        res.json({
            message: error?.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = updateAddToCartProductController;