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
    distributerName: {
        type: String,
    },
    distributerNo: {
        type: String,
    },
    uid: {
        type: String,
    }
})

const User = mongoose.model('user', Userschema)
module.exports = User