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
    try {
        const distributer = await Distributer.findOne(req.body);
        distributer.uid = distributerId;

        await distributer.save();

        res.status(200).send(distributer);

    } catch (error) {
        res.status(400).send(error);
    };
});

router.post('/distributer/:distributerId/createSlots', protect, async(req, res) => {
    const distributerId = req.params.distributerId;
    const { date, month, year, startTime, endTime } = req.body;
    if (startTime >= endTime) {
        res.status(400).send(e)
    }
    let time = startTime;
    try {
        while (time < endTime) {
            const slot = new Slot({
                distributerId,
                date,
                month,
                year,
                startTime: time,
                count: 10
            });

            await slot.save();

            time = time + 3600000;
        }

        res.status(201).send({ message: "slots created" })
    } catch (e) {
        res.status(400).send(e)
    }
});

router.get('/distributer/:distributerId/activeBookedSlots', protect, async(req, res) => {

    const distributerId = req.params.distributerId;
    try {
        const slots = await Booked.find({ distributerId });
        res.status(200).send(slots);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete('/distributer/:distributerId/activeBookedSlots/:slotId/markDone', protect, async(req, res) => {

    const slotId = req.params.slotId;
    try {
        await Booked.findByIdAndDelete(slotId);
        res.status(200).send({ message: 'marked done' });
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/distributer/:distributerId/activeSlots', protect, async(req, res) => {

    const distributerId = req.params.distributerId;

    try {
        const slots = await Slot.find({ distributerId });
        res.status(200).send(slots);
    } catch (e) {
        res.status(400).send(e)
    }
});

module.exports = router;