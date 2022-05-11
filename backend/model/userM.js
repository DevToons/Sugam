const mongoose = require('mongoose')

const Userschema = new mongoose.Schema({
    name: {
        type: String,
    },
    rationNo: {
        type: String,
        unique: true,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    image: {
        type: String,
    },
    distributorId: {
        type: String
    },
    uid: {
        type: String,
        unique: true
    }
})

const User = mongoose.model('user', Userschema)
module.exports = User