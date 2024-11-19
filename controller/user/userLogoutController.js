const userModel = require("../../models/userModel");
const crypto = require('crypto')

const userLogoutController = async (req, res) => {
    try {
        // const {email} = req.body;
        // console.log(email)
        // const user = await userModel.findOne({email});
        // console.log(user)
        // if(!user){
        //     throw new Error("User not found.")
        // }

        // const resetToken = crypto.randomBytes(20).toString('hex');
        // const expireTime = Date.now() + 10 * 60 * 100;
        res.clearCookie("token")

        res.json({
            message : "Logged out successfully",
            error : false,
            success : true,
            data : []
        })
        // res.json({
        //     message: "Logged out successfully",
        //     error: false,
        //     success: true,
        //     data: []
        // });

    } catch (error) {
        res.json({
            message: error.message || error,
            error: true,
            success: false,
        })
    }
}

module.exports = userLogoutController;