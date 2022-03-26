const mongoose = require('mongoose')

const slotSchema = mongoose.Schema({
    distributerId: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    startTime: {
        type: Number,
        required: true
    },
    count: {
        type: Number,
        required: true
    }
})


const Slot = mongoose.model('slot', slotSchema)
module.exports = Slot