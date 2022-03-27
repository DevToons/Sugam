const mongoose = require('mongoose')

const BookedSchema = mongoose.Schema({
    userName: {
        type: String,
    },
    rationNum: {
        type: String,
        required: true
    },
    distributerId: {
        type: String,
        required: true,
    },
    date: {
        type: Number
    },
    month: {
        type: Number
    },
    year: {
        type: Number
    },
    time: {
        type: Number,
    }
})


const Booked = mongoose.model('bookedSlot', BookedSchema)
module.exports = Booked