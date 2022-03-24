const express = require("express");
const validator = require("validator")
const router = new express.Router();

const Distributer = require('../model/DistributerM');
const Slot = require('../model/SlotM')

router.get('/:DistributerID/actives', async(req, res) => {
    const distributer = await Distributer.findById(req.params.DistributerID)
})

module.exports = router;