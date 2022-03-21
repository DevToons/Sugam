const express = require('express')
const mongoose = require('mongoose')


const slotSchema = mongoose.Schema({
    distributorName: {
        type: String,
        required: true,
    },
    distributorNo: {
        type: Number,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    startHour: {
        type: Number,
        required: true,
    },
    startMinutes: {
        type: Number,
        required: true,
    },
    endHour: {
        type: Number,
        required: true,
    },
    endMinutes: {
        type: Number,
        required: true,
    },
    Count: {
        type: Number,
        required: true,
    }
})


const Slot = mongoose.model('slot', slotSchema)
module.exports = Slot