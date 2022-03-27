const mongoose = require('mongoose')

const DistributerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
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
    uid: {
        type: String
    }
})


const Distributer = mongoose.model('distributer', DistributerSchema)
module.exports = Distributer