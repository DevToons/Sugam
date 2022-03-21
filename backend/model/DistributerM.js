const express = require('express')
const mongoose = require('mongoose')

const DistributerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    number: {
        type: Number,
        required: true,
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        tyep: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
})


const Distributer = mongoose.model('distributer', DistributerSchema)
module.exports = Distributer