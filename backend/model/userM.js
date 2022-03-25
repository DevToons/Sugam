const mongoose = require('mongoose')

const Userschema = new mongoose.Schema({
    name: {
        type: String,
    },
    rationNo: {
        type: Number,
        unique: true,
    },
    city: {
        type: String,
    },
    state: {
        tyep: String,
    },
    image: {
        type: String,
    },
    distributerId: {
        type: mongoose.Schema.Types.ObjectId
    },
    uid: {
        type: String,
        unique: true
    }
})

const User = mongoose.model('user', Userschema)
module.exports = User