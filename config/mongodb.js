const mongoose = require('mongoose');

async function connectDB() {
    try {
        const url = process.env.MONGO_URI;
        console.log(url)
        await mongoose.connect(url).then(()=>{console.log('MongoDB is connected')}).catch((err)=>{console.log(err)});

    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;