const express = require("express");
const validator = require("validator")
const router = new express.Router();
const { protect } = require('../Middleware/protect');
const Booked = require("../model/bookedSlot");
const Slot = require("../model/SlotM")
const User = require('../model/userM');

//login route
router.post('/login', async(req, res) => {
    try {
        const user = new User(req.body);
        await user.save()
        res.status(201).send(user);
    } catch (e) {
        res.status(400).send(e);
    }
})

//dashboard
router.get('/user/:userId/dashboard', protect, async(req, res) => {
    const userId = req.params.userId;

    try {
        const user = await User.findOne({ uid: userId });

        if (!user) {
            res.send({
                message: "registrations is required"
            });
        }

        res.status(200).send(user);

    } catch (error) {
        res.status(400).send(error);
    };
})

router.post('/user/:userId/register', protect, async(req, res) => {
    const userId = req.params.userId;
    const data = req.body;

    try {
        const user = await User.findOne(data);
        user.uid = userId;

        await user.save();

        res.status(200).send(user);

    } catch (error) {
        res.status(400).send(error);
    };
})

router.get('user/:userId/getSlots', protect, async(req, res) => {

    const userId = req.params.userId;
    try {
        const user = await User.findOne({ uid: userId });
        const distributerId = user.distributerId;

        const slots = await Slot.find({ distributerId });

        res.status(200).send(slots);
    } catch (e) {
        req.status(400).send(e)
    }
});

router.post('user/:userId/bookSlot', protect, async(req, res) => {

    const userId = req.params.userId;

    const { distributerId, date, startTime } = req.body;
    try {
        const slot = await Slot.find({ distributerId, date, startTime });
        slot.count--;
        await slot.save();


        const user = await User.find({ userId });

        const Booked = new Booked({
            userName: user.name,
            rationNum: user.rationNo,
            distributerId,
            date,
            time: startTime,
        })

        await Booked.save()

    } catch (e) {

    }
});

module.exports = router;