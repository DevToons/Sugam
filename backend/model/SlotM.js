const mongoose = require('mongoose')

const slotSchema = mongoose.Schema({
    // distributorName: {
    //     type: String,
    //     
    // },
    // distributorNo: {
    //     type: Number,
    //     
    // },
    // city: {
    //     type: String,
    //     
    // },
    // state: {
    //     type: String,
    //     
    // },
    distributerID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    startHour: {
        type: Number,
        required: true
    },
    startMinutes: {
        type: Number,
        required: true
    },
    endHour: {
        type: Number,
        required: true
    },
    endMinutes: {
        type: Number,
        required: true
    },
    Count: {
        type: Number,
        required: true
    }
})


const Slot = mongoose.model('slot', slotSchema)
module.exports = Slot