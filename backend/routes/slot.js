//get route for fetching the slots using {distributer name , number,state city}

const express = require("express");
const validator = require("validator")
const router = new express.Router();

const Slot = require('../model/SlotM')

router.get('/')


module.exports = router;