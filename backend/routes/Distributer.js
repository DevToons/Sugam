const express = require("express");
const validator = require("validator")
const router = new express.Router();
const { protect } = require("../Middleware/protect")
const Distributer = require('../model/DistributerM');
const Slot = require('../model/SlotM')
const Booked = require("../model/bookedSlot")

router.get('/distributer/:distributerId/dashboard', protect, async(req, res) => {

    const distributerId = req.params.distributerId;

    try {
        const distributer = await Distributer.findOne({ uid: distributerId });

        if (!distributer) {
            res.send({
                message: "registrations is required"
            });
        }

        res.status(200).send(distributer);

    } catch (error) {
        res.status(400).send(error);
    };
});

router.post('/distributer/:distributerId/register', protect, async(req, res) => {

    const distributerId = req.params.distributerId;
    const data = req.body;
    console.log(req.body)
    try {
        const distributer = await Distributer.findOne(req.body);
        distributer.uid = distributerId;

        await distributer.save();

        res.status(200).send(distributer);

    } catch (error) {
        res.status(400).send(error);
    };
});

router.post('/:distributerId/createSlots', protect, async(req, res) => {

    const distributerId = req.params.distributerId;

    const { date, startTime, endTime } = req.body;
    let time = startTime;

    while (time < endTime) {
        const slot = new Slot({
            distributerId,
            date,
            startTime: time,
            count: 10
        });

        await slot.save();

        time = time + 3600000;
    }

    res.send({ message: "slots created" })
});

router.get('/:distributerId/activeSlots', protect, async(req, res) => {

    const distributerId = req.params.distributerId;

    try {
        const slots = await Booked.find({ distributerId });
        res.status(200).send(slots);
    } catch (error) {
        res.status(400).send(error);
    }

});

router.delete('/:distributerId/activeSlots/:slotId/markDone', protect, async(req, res) => {

    const slotId = req.params.slotId;

    try {
        await Booked.findByIdAndDelete(slotId);
        res.status(200).send({ message: 'marked done' });
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;