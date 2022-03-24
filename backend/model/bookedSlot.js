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
    distributerID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    // distributorName: {
    //     type: String,
    //     trim: true,
    //     required: true
    // },
    // distributorNo: {
    //     type: String,
    //     trim: true,
    //     required: true
    // },
    // city: {
    //     type: String,
    //     trim: true,
    //     required: true
    // },
    // state: {
    //     type: String,
    //     trim: true,
    //     required: true
    // },
    date: {
        type: String,
        trim: true,
        required: true
    },
    time: {
        hour: {
            type: Number,
            required: true
        },
        minutes: {
            type: Number,
            required: true
        },
    }
})


const Booked = mongoose.model('bookedSlot', BookedSchema)
module.exports = Booked