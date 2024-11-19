const userModel = require("../../models/userModel");
const bcrypt = require('bcryptjs');

const userSignUpController = async (req, res) => {
    try {
        const {email, password, name, profilePic} = req.body;

        if (!email) {
            throw new Error("Please provide email");
        }
        if (!password) {
            throw new Error("Please provide password");
        }
        if (!name) {
            throw new Error("Please provide name");
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedpassword = await bcrypt.hashSync(password, salt)

        if(!hashedpassword) {
            throw new Error("Something went wrong");
        }

        const payload = {
            name,
            email,
            password: hashedpassword,
            role: 'general',
            profilePic
        };

        const userData = new userModel(payload);
        const savedUser = await userData.save();

        res.status(201).json({
            data: savedUser,
            success: true,
            error: false,
            message: 'user created successfully'
        });

    } catch (error) {
        res.json({
            message: error.message || error,
            success: false,
            error: true
        });
    }
}
module.exports = userSignUpController;