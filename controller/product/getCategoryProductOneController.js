const productModel = require('../../models/productModel');

const getCategoryProductOneController = async (req, res) => {
    try {
        const productCategory = await productModel.distinct("category")


        const productbyCategory = [];
        
        for(const category of productCategory) {

            const product = await productModel.findOne({category});

            if(product) {
                productbyCategory.push(product)
            }
        }
        console.log(productbyCategory)

        res.json({
            message: "category product",
            data: productbyCategory,
            success: true,
            error: false
        })

    } catch (error) {
        res.status(400).json({
            message: error?.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = getCategoryProductOneController;