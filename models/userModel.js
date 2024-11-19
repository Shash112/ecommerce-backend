const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    role: {type: String, required: true},
    password: {type: String, required: true},
    profilePic: String,
    resetToken: {type: String, default: null}
},
{
    timestamps: true
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;