const cartModel = require('../../models/cartProduct');

const addToCartController = async (req, res) => {

    try {
        const { productId } = req?.body
        const currentUser = req.userId

        const isProductAvailable = await cartModel.findOne({ productId });

        console.log("IsProductAvailable", isProductAvailable);

        if(isProductAvailable) {
            return res.json({
                message: "Already exists in add to cart",
                success: true,
                error: false
            })
        }

        const payload = {
            productId : productId,
            quantity: 1,
            userId: currentUser,
        }

        const newAddToCart = new cartModel(payload);
        const savedProduct = await newAddToCart.save();

        return res.json({
            data: savedProduct,
            message: "Product Added in Cart",
            success: true,
            error: false
        })

    } catch (error) {
        res.json({
            message: error?.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = addToCartController;