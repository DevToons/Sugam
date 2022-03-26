const mongoose = require('mongoose')

const BookedSchema = mongoose.Schema({
    userName: {
        type: String,
    },
    rationNum: {
        type: String,
        trim: true,
        required: true
    },
    distributerId: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        trim: true,
        required: true
    },
    time: {
        type: Number,
    }
})


const Booked = mongoose.model('bookedSlot', BookedSchema)
module.exports = Booked