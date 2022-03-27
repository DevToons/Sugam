const mongoose = require('mongoose')
const validator = require("validator")
require("dotenv").config()
const url = process.env.MONGODB_URL;
mongoose.connect(url, {
    useNewUrlParser: true,
})