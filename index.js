const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require('./config/mongodb');
const router = require('./routes');
const cookieParser = require('cookie-parser');


const app = express();
connectDB();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials : true
}));
app.use(express.json());
app.use(cookieParser())
app.get('/',(req, res)=> {
    res.send("Connected")
})
app.use('/api/v1/', router)
const PORT = 8080 || process.env.PORT;


app.listen(PORT, () => {
    console.log(`Server is started at PORT : ${PORT}`);
});
