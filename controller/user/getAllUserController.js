const userModel = require('../../models/userModel');

const getAllUserController = async (req, res) => {
    try {
        console.log("user id", req.userId);

        const allUser = await userModel.find();

        res.json({
            message: "Users records",
            data: allUser,
            success: true,
            error: false
        })

    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = getAllUserController;