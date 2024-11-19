const express = require('express');

const router = express.Router();

const userSignUpController = require('../controller/user/userSignUpController');
const userLoginController = require('../controller/user/userLoginController');
const userDetailsController = require('../controller/user/userDetailsController');
const authToken = require('../middleware/authToken');
const getProductController = require('../controller/product/getProductController');
const userLogoutController = require('../controller/user/userLogoutController');
const userUpdateController = require('../controller/user/userUpdateController');
const getAllUserController = require('../controller/user/getAllUserController');
const addToCartController = require('../controller/user/addTocartController');
const countAddToCartProductController = require('../controller/user/countAddToCartProductController');
const addToCartViewProductController = require('../controller/user/addToCartViewProductController');
const updateAddToCartProductController = require('../controller/user/updateAddToCartProductController');
const deleteAddToCartProductController = require('../controller/user/deleteAddToCartProductController');
const getProductDetailsController = require('../controller/product/getProductDetailsController');
const uploadProductController = require('../controller/product/uploadProductController');
const updateProductController = require('../controller/product/updateProductController');
const filterProductController = require('../controller/product/filterProductController');
const searchProductController = require('../controller/product/searchProductController');
const getCategoryWiseProductController = require('../controller/product/getCategoryWiseProductController');
const getCategoryProductOneController = require('../controller/product/getCategoryProductOneController');

router.get('/',(req, res)=> {
    res.send("Connected")
})
router.post('/signup', userSignUpController);
router.post('/login', userLoginController);
router.get('/user-details',authToken ,userDetailsController);
router.get('/logout', userLogoutController);
router.post('/forgot-password', userLogoutController)

// admin panel
router.get('/all-user', authToken, getAllUserController);
router.post('/update-user', authToken, userUpdateController);

router.get('/get-product', getProductController);
router.post('/product-details', getProductDetailsController);
router.post('/upload-product', uploadProductController);
router.post('/update-product', updateProductController);
router.post('/filter-product', filterProductController);
router.get('/search', searchProductController);
router.post('/category-product', getCategoryWiseProductController);
router.get('/get-categoryProduct', getCategoryProductOneController);

router.post('/add-to-cart', authToken, addToCartController);
router.get('/count-add-to-cart-product', authToken, countAddToCartProductController);
router.get('/view-cart-product', authToken, addToCartViewProductController);
router.post('/update-cart-product', authToken, updateAddToCartProductController);
router.post('/delete-cart-product', authToken, deleteAddToCartProductController);

module.exports = router;